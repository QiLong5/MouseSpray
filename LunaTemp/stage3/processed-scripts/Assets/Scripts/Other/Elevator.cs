using UnityEngine;
using DG.Tweening;
using UnityEngine.Rendering;
using System.Collections;
using System.Collections.Generic;

/// <summary>
/// 电梯控制脚本
/// Player进入触发器后，先移动到电梯中心，然后电梯和Player一起移动
/// 支持农夫搭乘：农夫在电梯外排队等待，玩家进入电梯后农夫依次从第一个排队点走入电梯站位
/// 站位点数量决定电梯最多容纳农夫数
/// </summary>
public class Elevator : MonoBehaviour
{
    [Header("电梯设置")]
    [SerializeField] private Transform elevatorPlatform;  // 电梯平台（编辑器拖入）
    [SerializeField] private Transform elevatorCenter;    // 电梯中心点（编辑器拖入）
    [SerializeField] private float moveDistance = 9f;      // 向下移动的距离
    [SerializeField] private float moveToCenterDuration = 0.5f; // 移动到中心的时间
    [SerializeField] private float duration = 2f;          // 电梯运行时间
    [SerializeField] private Ease easeType = Ease.InOutQuad;
    [SerializeField] private List<Collider>  colliders = new List<Collider>();

    [Header("农夫搭乘设置")]
    [Tooltip("电梯内站位点（数量决定最大容纳农夫数）")]
    [SerializeField] private List<Transform> farmerStandingPositions = new List<Transform>();
    [Tooltip("上方排队路径（子物体为排队站位点，第0个最靠近电梯）")]
    [SerializeField] private Transform topQueuePath;
    [Tooltip("农夫进入电梯站位的移动速度")]
    [SerializeField] private float farmerBoardSpeed = 0.3f;

    private float topHeight;
    private bool isAtTop = true;
    private bool isRunning = false;

    private List<FarmerPatientItem> waitingFarmersTop = new List<FarmerPatientItem>();
    private List<FarmerPatientItem> farmersOnElevator = new List<FarmerPatientItem>();

    public bool IsAtTop => isAtTop;

    /// <summary>
    /// 电梯最大容纳农夫数（由站位点数量决定）
    /// </summary>
    public int MaxFarmerCapacity => farmerStandingPositions.Count;

    /// <summary>
    /// 排队路径是否已满（排队农夫数 >= 排队站位点数量）
    /// </summary>
    public bool IsQueueFull
    {
        get
        {
            if (topQueuePath == null) return false;
            return waitingFarmersTop.Count >= topQueuePath.childCount;
        }
    }

    void Start()
    {
        if (elevatorPlatform == null)
        {
            Debug.LogError("Elevator: elevatorPlatform 未赋值！", this);
            enabled = false;
            return;
        }
        topHeight = elevatorPlatform.position.y;
        moveToCenterDuration = GameDataEditor.instance.GetOtherData.elevatorTime;
    }

    void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player") || isRunning||!SoakManager.instance.gameObject.activeInHierarchy) return;
        StartElevator(Player.instance);
    }

    /// <summary>
    /// 农夫注册等待电梯（只在上方排队）
    /// </summary>
    public void RegisterWaitingFarmer(FarmerPatientItem farmer, bool atTop)
    {
        if (!atTop) return; // 农夫不再从下方搭电梯
        if (waitingFarmersTop.Contains(farmer)) return;

        waitingFarmersTop.Add(farmer);
        MoveFarmerToQueuePosition(farmer, waitingFarmersTop.Count - 1);
    }

    /// <summary>
    /// 移动农夫到上方排队路径的指定位置
    /// </summary>
    private void MoveFarmerToQueuePosition(FarmerPatientItem farmer, int queueIndex)
    {
        if (topQueuePath == null || queueIndex >= topQueuePath.childCount) return;

        Vector3 targetPos = topQueuePath.GetChild(queueIndex).position;
        targetPos = new Vector3(targetPos.x, farmer.transform.position.y, targetPos.z);
        farmer.MoveToTarget(targetPos, () => { farmer.StopMovement(); });
    }

    /// <summary>
    /// 剩余排队农夫向前移动填补空位
    /// </summary>
    private void ShiftQueueForward()
    {
        for (int i = 0; i < waitingFarmersTop.Count; i++)
        {
            MoveFarmerToQueuePosition(waitingFarmersTop[i], i);
        }
    }

    private void StartElevator(Player player)
    {
        isRunning = true;
        bool goingDown = isAtTop;
        player.EnterElevator();

        Vector3 centerPos = elevatorCenter != null ? elevatorCenter.position : elevatorPlatform.position;
        Vector3 moveToCenterTarget = new Vector3(centerPos.x, player.transform.position.y, centerPos.z);

        player.transform.DOMove(moveToCenterTarget, moveToCenterDuration)
            .SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                // 农夫依次上电梯，完成后再启动电梯移动
                StartCoroutine(BoardFarmersAndMove(player, goingDown));
            });
    }

    /// <summary>
    /// 电梯下行时农夫依次从排队点进入电梯站位，全部上完后电梯开始移动
    /// 上行时不搭载农夫
    /// </summary>
    private IEnumerator BoardFarmersAndMove(Player player, bool goingDown)
    {
        // 只有下行时才搭载农夫
        if (goingDown)
        {
            int count = Mathf.Min(waitingFarmersTop.Count, farmerStandingPositions.Count);

            for (int i = 0; i < count; i++)
            {
                // 取出队首农夫
                var farmer = waitingFarmersTop[0];
                waitingFarmersTop.RemoveAt(0);

                // 剩余农夫向前移动到前一个排队位置
                ShiftQueueForward();

                // 农夫进入电梯
                farmer.StopMovement();
                farmer.mRigidbody.isKinematic = true;
                farmer.farmerState = FarmerState.RidingElevator;

                // 移动到电梯站位
                Vector3 standPos = farmerStandingPositions[i].position;
                farmer.transform.SetParent(elevatorPlatform);
                farmersOnElevator.Add(farmer);

                // 使用DOTween平滑移动到站位
                bool arrived = false;
                farmer.transform.DOMove(standPos, farmerBoardSpeed)
                    .SetEase(Ease.OutQuad)
                    .OnComplete(() => { arrived = true; });
                while (!arrived) yield return null;
            }
        }

        // 所有农夫上完，启动电梯移动
        float platformTargetY = isAtTop ? topHeight - moveDistance : topHeight;
        float playerTargetY = player.transform.position.y + (isAtTop ? -moveDistance : moveDistance);

        Sequence seq = DOTween.Sequence();
        seq.Join(elevatorPlatform.DOMoveY(platformTargetY, duration).SetEase(easeType));
        seq.Join(player.transform.DOMoveY(playerTargetY, duration).SetEase(easeType));
        seq.InsertCallback(duration, () =>
        {
            isAtTop = !isAtTop;
            player.ExitElevator();
            SetCollider(isAtTop);
            UnboardFarmers(goingDown);
        });
        seq.InsertCallback(duration + 0.1f, () =>
        {
            isRunning = false;
        });
    }

    /// <summary>
    /// 农夫下电梯
    /// </summary>
    private void UnboardFarmers(bool wasGoingDown)
    {
        foreach (var farmer in farmersOnElevator)
        {
            farmer.transform.SetParent(null);
            farmer.ExitElevatorAsFarmer(wasGoingDown);
        }
        farmersOnElevator.Clear();
    }

    private void SetCollider(bool enabled)
    {
        for (int i = 0; i < colliders.Count; i++)
        {
            colliders[i].enabled = enabled;
        }
    }
}
