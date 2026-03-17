using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 农夫子状态
/// </summary>
public enum FarmerState
{
    Idle,
    WaitingForElevatorTop,
    RidingElevator,
    MovingToWheat,
    Harvesting,
}

/// <summary>
/// 农夫病人 - 继承PatientItem
/// 泡汤池治愈后切换为农夫状态，排队等电梯跟随玩家下去，
/// 到达后永远在下面循环收割小麦，小麦直接飞向wheatDeliveryStack
/// </summary>
public class FarmerPatientItem : PatientItem
{
    [Header("农夫相关")]
    [Tooltip("每次收割间隔（秒）")]
    [SerializeField] private float harvestInterval = 2f;
    public ItemStackManager farmerItemStackManager;

    [HideInInspector] public FarmerState farmerState = FarmerState.Idle;
    private Coroutine farmerWorkflowCoroutine;
    protected override void Start()
    {
        base.Start();
        harvestInterval = GameDataEditor.instance.GetOtherData.collectTime;
    }
    protected override void Farmer()
    {
        farmerState = FarmerState.Idle;
        farmerWorkflowCoroutine = StartCoroutine(FarmerWorkflowIE());
    }

    /// <summary>
    /// 农夫工作流协程
    /// 1. 排队等电梯（上方），跟玩家一起下去
    /// 2. 到达下方后循环收割最近小麦，每次收割间隔harvestInterval秒
    /// 3. 小麦直接飞向wheatDeliveryStack，农夫不再上电梯
    /// </summary>
    private IEnumerator FarmerWorkflowIE()
    {
        // 1. 注册等待电梯（上方）
        farmerState = FarmerState.WaitingForElevatorTop;
        Elevator elevator = FindObjectOfType<Elevator>();
        if (elevator != null)
            elevator.RegisterWaitingFarmer(this, true);

        // 等待被电梯接走
        while (farmerState == FarmerState.WaitingForElevatorTop)
            yield return null;

        // 等待电梯运行结束
        while (farmerState == FarmerState.RidingElevator)
            yield return null;

        // 2. 到达下方后，无限循环收割小麦
        while (currentState == PatienState.Farmer)
        {
            // 获取最近的可用小麦（未收割且未被其他农夫锁定）
            Wheat targetWheat = WheatManager.instance.GetNearestAvailableWheat(this);

            if (targetWheat == null)
            {
                // 没有可用小麦，等待后重试
                yield return new WaitForSeconds(0.5f);
                continue;
            }

            // 锁定该小麦，防止其他农夫选中
            targetWheat.ReserveForFarmer(this);

            // 移动到小麦位置
            farmerState = FarmerState.MovingToWheat;
            bool arrivedWheat = false;
            Vector3 wheatPos = new Vector3(targetWheat.transform.position.x, transform.position.y, targetWheat.transform.position.z);
            MoveToTarget(wheatPos, () => { arrivedWheat = true; });
            while (!arrivedWheat) yield return null;

            // 到达后等待收割间隔
            farmerState = FarmerState.Harvesting;
            yield return new WaitForSeconds(harvestInterval);

            // 收割（小麦内部会直接将WheatItem飞向wheatDeliveryStack）
            if (!targetWheat.IsHarvested)
            {
                targetWheat.FarmerHarvest(this);
            }
            else
            {
                // 小麦已被其他方式收割（如玩家触发器），释放锁定
                targetWheat.ReleaseReservation();
            }
        }
    }

    /// <summary>
    /// 农夫进入电梯
    /// </summary>
    public void EnterElevatorAsFarmer()
    {
        StopMovement();
        mRigidbody.isKinematic = true;
        farmerState = FarmerState.RidingElevator;
    }

    /// <summary>
    /// 农夫离开电梯（下去后开始收割）
    /// </summary>
    public void ExitElevatorAsFarmer(bool wasGoingDown)
    {
        mRigidbody.isKinematic = false;
        farmerState = FarmerState.MovingToWheat;
    }
}
