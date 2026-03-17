using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 泡汤池管理器
/// 持续检测wheatDeliveryStack中已堆叠完成的小麦数量和poolStack中的病人，
/// 当小麦足够时，等待小麦堆叠动画结束后取出飞向病人，飞行结束即治愈完成，
/// 一个病人治愈结束后才治愈下一个病人
/// </summary>
public class SoakManager : MonoSingleton<SoakManager>
{
    [Header("泡汤池设置")]
    public GroundItemStackManager poolStack;
    [Tooltip("治愈1个病人所需的小麦数量")]
    [SerializeField] private int wheatPerPatient = 2;
    [Tooltip("小麦从堆叠器取出后等待多久再飞向病人")]
    [SerializeField] private float wheatFlyDelay = 1f;

    [Header("金币掉落")]
    [SerializeField] private Transform moneyDropPoint;

    [Header("农夫交付")]
    [Tooltip("农夫/玩家交付小麦的堆叠点")]
    public GroundItemStackManager wheatDeliveryStack;

    private bool isHealing = false;
    private Elevator elevator;
    protected override void Start()
    {
        base.Start();
        wheatPerPatient = GameDataEditor.instance.GetOtherData.wheatPerPatient;
        elevator = FindObjectOfType<Elevator>();
    }


    private void Update()
    {
        if (poolStack == null) return;
        if (wheatDeliveryStack == null) return;
        if (isHealing) return;

        // 检查小麦堆叠器中是否有足够的小麦来治愈病人
        if (wheatDeliveryStack.totalStackedItemsAmount < wheatPerPatient) return;

        // 查找可治愈的病人
        FarmerPatientItem targetPatient = FindHealablePatient();
        if (targetPatient == null) return;

        // 开始治愈流程（串行，一个结束才治愈下一个）
        StartCoroutine(HealPatientIE(targetPatient));
    }

    /// <summary>
    /// 在病人堆叠器中查找一个可治愈的FarmerPatientItem
    /// 遍历所有stackList中的所有病人，而不只是每个stack的第一个
    /// </summary>
    private FarmerPatientItem FindHealablePatient()
    {
        bool elevatorQueueFull = elevator != null && elevator.IsQueueFull;

        for (int i = 0; i < poolStack.stackList.Count; i++)
        {
            var stack = poolStack.stackList[i];
            for (int j = 0; j < stack.stackedItemList.Count; j++)
            {
                var item = stack.stackedItemList[j];
                if (item.itemType != ItemType.FigherPatient && item.itemType != ItemType.FarmerPatient)
                    continue;

                var farmer = item as FarmerPatientItem;
                if (farmer == null) continue;
                if (farmer.currentState != PatienState.Wait) continue;

                // 电梯排队已满时，不治愈农夫类病人，等待空位
                if (elevatorQueueFull && item.itemType == ItemType.FarmerPatient)
                    continue;

                return farmer;
            }
        }
        return null;
    }

    /// <summary>
    /// 完整的治愈流程：逐个等待小麦堆叠完成 → 逐个取出飞向病人 → 全部到达后治愈 → 移出 → 掉金币 → 切换农夫
    /// 参考Processor的消耗逻辑，使用标准RemoveItem逐个取出，保持targetStackListIndex正确
    /// </summary>
    private IEnumerator HealPatientIE(FarmerPatientItem patient)
    {
        isHealing = true;

        int remaining = 0;

        for (int k = 0; k < wheatPerPatient; k++)
        {
            // 等待堆叠器中有小麦且栈顶小麦堆叠动画完成
            while (wheatDeliveryStack.totalStackedItemsAmount <= 0)
                yield return null;

            // 等待即将被取出的小麦完成堆叠动画（栈顶的canDoFurtherMove==true）
            yield return StartCoroutine(WaitForTopWheatReady());

            // 使用标准RemoveItem逐个取出，保持targetStackListIndex正确
            Item wheatItem = wheatDeliveryStack.RemoveItem();
            if (wheatItem == null) continue;

            remaining++;

            // 参考Processor：设parent后用localPosition飞向目标
            wheatItem.gameObject.SetActive(true);
            wheatItem.transform.parent = transform;
            Vector3 targetPos = transform.InverseTransformPoint(patient.transform.position);
            wheatItem.MoveAlongCurve(wheatItem.transform.localPosition, targetPos,
                () =>
                {
                    wheatItem.gameObject.SetActive(false);
                    PoolManager.instance.ReturnItem(wheatItem);
                    remaining--;
                });
        }

        // 等待所有小麦飞行完毕 = 治愈完成
        while (remaining > 0) yield return null;

        // 4. 治愈完成 - 从堆叠器中移出该病人（直接从stackedItemList中移除指定病人）
        RemovePatientFromPool(patient);
        patient.mRigidbody.isKinematic = false;

        // 5. 移动到金币掉落点
        if (moneyDropPoint != null)
        {
            bool arrived = false;
            Vector3 pos = new Vector3(moneyDropPoint.position.x, patient.transform.position.y, moneyDropPoint.position.z);
            patient.MoveToTarget(pos, () => { arrived = true; });
            while (!arrived) yield return null;
        }

        // 6. 掉落金币
        bool moneyDone = false;
        DropMoneyToManager(patient, () => { moneyDone = true; });
        while (!moneyDone) yield return null;

        // 7. 切换为农夫状态
        patient.StateSwitch(PatienState.Farmer);

        // 治愈流程结束，允许治愈下一个病人
        isHealing = false;
    }

    /// <summary>
    /// 等待wheatDeliveryStack中即将被RemoveItem取出的栈顶小麦完成堆叠动画
    /// 遍历所有stack找到有物品的栈，检查栈顶的canDoFurtherMove
    /// </summary>
    private IEnumerator WaitForTopWheatReady()
    {
        while (true)
        {
            bool found = false;
            for (int i = 0; i < wheatDeliveryStack.stackList.Count; i++)
            {
                var stack = wheatDeliveryStack.stackList[i];
                if (stack.stackAmount <= 0) continue;
                var topItem = stack.stackedItemList[stack.stackedItemList.Count - 1];
                if (topItem.canDoFurtherMove)
                {
                    found = true;
                    break;
                }
            }
            if (found) break;
            yield return null;
        }
    }

    /// <summary>
    /// 从poolStack中精确移除指定病人，而不是依赖targetStackListIndex
    /// </summary>
    private void RemovePatientFromPool(FarmerPatientItem patient)
    {
        for (int i = 0; i < poolStack.stackList.Count; i++)
        {
            var stack = poolStack.stackList[i];
            if (stack.stackedItemList.Contains(patient))
            {
                stack.stackedItemList.Remove(patient);
                stack.stackAmount--;
                // 重新计算nextStackPosition
                if (stack.stackAmount >= stack.maxHeight)
                {
                    stack.nextStackPosition = new Vector3(0, patient.stackHeight * stack.maxHeight, 0);
                }
                else
                {
                    stack.nextStackPosition = new Vector3(0, patient.stackHeight * stack.stackAmount, 0);
                }
                poolStack.totalStackedItemsAmount--;
                patient.transform.parent = null;
                patient.gameObject.SetActive(true);
                break;
            }
        }
    }

    /// <summary>
    /// 掉落金币到MoneyManager位置
    /// </summary>
    private void DropMoneyToManager(PatientItem patient, System.Action onComplete)
    {
        int num = GameDataEditor.instance.GetOtherData.farmerPatienMoney/GameDataEditor.instance.GetOtherData.moneyValue;
        var groundStack = moneyDropPoint.GetComponent<GroundItemStackManager>();
        for (int i = 0; i < num; i++)
        {
            var money = PoolManager.instance.GetItem(ItemType.Money);
            money.transform.position = patient.transform.position + Vector3.up * 0.5f;
            money.cd.enabled = false;
            money.canDoFurtherMove = true;
            money.gameObject.SetActive(true);
            groundStack.StackItem(money);
        }
        
        onComplete?.Invoke();
    }
}
