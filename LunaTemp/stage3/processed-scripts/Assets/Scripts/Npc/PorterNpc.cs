using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// 搬运工人 - 从触发器区域拾取病人，搬运到空病床上
/// </summary>
public class PorterNpc : Npc
{
    [Header("路径设置")]
    [Tooltip("场景中LoaderNpcPath的引用，子物体0=休息点，子物体1=病人位置")]
    public Transform loaderNpcPath;

    [Header("病床管理")]
    [Tooltip("病床上的BedProcess列表")]
    public List<BedProcess> bedProcessList;

    [Header("搬运设置")]
    public ItemStackManager itemStackManager;
    public float loadUnloadDelay = 0.2f;

    private int maxBedIndex;
    private Dictionary<int, bool> bedDic = new Dictionary<int, bool>();
    private GroundItemStackManager targetGroundStackManager = null;  //目标地面物品堆管理器
    public float itemDropOffTimer = -1;
    public float itemDropOffCooldown = 0.1f;  //移除和堆放物品的冷却时间
    private bool isDroppingOffItem = false;  //正在移除物品
    private bool isCollectingItem = false;  //正在堆放物品

    ItemStack npcStack;
    ItemStack farmerStack;
    int enemyBedNum;
    void Start()
    {
        npcStack = itemStackManager.stackList[0];
        farmerStack = itemStackManager.stackList[1];
        StartCoroutine(WorkCycle());
    }
    void FixedUpdate()
    {
        if (isDroppingOffItem)
        {
            DropItemToGroundStack();
        }
    }
    /// <summary>
    /// 获取所有病床的剩余空位总数
    /// </summary>
    private int GetAvailableBedCount()
    {
        int available = 0;
        foreach (var bed in bedProcessList)
        {
            var groundManager = bed.GetComponentInChildren<GroundItemStackManager>();
            if (groundManager == null) continue;

            foreach (var stack in groundManager.stackList)
            {
                if (stack.stackAmount <= 0)
                {
                    available++;
                }
            }
        }
        return available;
    }

    /// <summary>
    /// 获取剩余泡汤池位置
    /// </summary>
    /// <returns></returns>
    private int GetRemainFamerCount()
    {
        if (!SoakManager.instance.gameObject.activeInHierarchy) return 0;

        return SoakManager.instance.poolStack.totalMaxAmount - SoakManager.instance.poolStack.totalStackedItemsAmount;
    }


    /// <summary>
    /// 获取空床位
    /// </summary>
    private void GetEmptyBed()
    {
        bedDic.Clear();
        int index = 0;
        maxBedIndex = 0;
        foreach (var bed in bedProcessList)
        {
            var groundManager = bed.groundItemStack;
            if (groundManager == null) continue;
            foreach (var stack in groundManager.stackList)
            {
                if (stack.stackAmount <= 0)
                {
                    maxBedIndex = index + 1;
                    bedDic.Add(index, true);
                    break;
                }
            }
            if (!bedDic.ContainsKey(index))
                bedDic.Add(index, false);
            index++;
        }
    }

    private List<PatientItem> patients=new List<PatientItem>();
    private PatientItem GetPatient(ItemType itemType)
    {
        var lst = NpcManager.instance.GetPatients(itemType);
        float minSqr = float.MaxValue;
        PatientItem target = null;
        //从NpcManager获取所有战士病人
        foreach (var item in lst)
        {
            if (!patients.Contains(item) && (transform.position - item.transform.position).sqrMagnitude < minSqr)
            {
                target = item;
                minSqr = (transform.position - item.transform.position).sqrMagnitude;
            }
        }
        if (patients != null)
            patients.Add(target);       
        return target;
    }

    /// <summary>
    /// 主工作循环
    /// </summary>
    private IEnumerator WorkCycle()
    {
        bool isfinsh = false;
        bool isWorking = true;
        while (true)
        {
            yield return null;
            GetEmptyBed();//获取空床位
            if (maxBedIndex == 0)
            {
                if (isWorking)//由工作状态切换为非工作状态 则前往休息点
                {
                    var pos = loaderNpcPath.GetChild(0);//休息点
                    isfinsh = false;
                    MoveToTarget(pos, () =>
                    {
                        isfinsh = true;
                        isWorking = false;
                    });
                    while (!isfinsh)
                        yield return null;
                }
                continue;
            }
            //前往排队点
            isWorking = true;
            isfinsh = false;
            MoveToTarget(loaderNpcPath.GetChild(1), () =>
            {
                isfinsh = true;
            });
            while (!isfinsh)
                yield return null;
           
            enemyBedNum = GetAvailableBedCount();
            while (npcStack.stackAmount < enemyBedNum)//等待获取病人
            {
                var target = GetPatient(ItemType.FigherPatient);//获取最近的病人
                if (target == null)
                {
                    // 没有可用的病人时，退出循环等待
                    break;
                }
                isfinsh = false;
                MoveToTarget(target.transform.position, () => isfinsh = true);
                while (!isfinsh)
                    yield return null;
            }

            // while (npcStack.stackAmount < GetAvailableBedCount())//等待获取病人
            //     yield return null;

            while (farmerStack.stackAmount < GetRemainFamerCount()) //等待获取农夫病人
            {
                var target = GetPatient(ItemType.FarmerPatient);//获取最近的病人
                if (target == null)
                {
                    // 没有可用的病人时，退出循环等待
                    break;
                }
                isfinsh = false;
                MoveToTarget(target.transform.position, () => isfinsh = true);
                while (!isfinsh)
                    yield return null;
            }
            //前往排队点
            isWorking = true;
            isfinsh = false;
            MoveToTarget(loaderNpcPath.GetChild(1), () =>
            {
                isfinsh = true;
            });
            while (!isfinsh)
                yield return null;

            //前往泡汤池
            var soakPos = SoakManager.instance.poolStack.transform.position;
            MoveToTarget(new Vector3(soakPos.x, transform.position.y, soakPos.z));
            while (GetRemainFamerCount()>0&&farmerStack.stackAmount!=0)//等待填满泡汤池
                yield return null;


            //前往空床位
            for (int i = 0; i < maxBedIndex; i++)
            {
                int bedIndex = i;
                isfinsh = false;
                var pos = loaderNpcPath.GetChild(i + 2);//床位置点
                if (bedDic[i])//属于空床
                {
                    var bedPos = bedProcessList[bedIndex].groundItemStack.transform.position;
                    MoveToTarget(new Vector3(bedPos.x, transform.position.y, bedPos.z), () =>
                    {
                        MoveToTarget(pos, () =>
                        {
                            isfinsh = true;
                        });
                    });
                }
                else
                {
                    MoveToTarget(pos, () =>
                    {
                        isfinsh = true;
                    });
                }
                while (!isfinsh)
                    yield return null;
            }
            //回到距离排队点最近的床位
            if (maxBedIndex <= 3)//原路径返回
            {
                for (int i = maxBedIndex; i >= 0; i--)
                {
                    var pos = loaderNpcPath.GetChild(i + 2);//床位置点
                    isfinsh = false;
                    MoveToTarget(pos, () => isfinsh = true);
                    while (!isfinsh)
                        yield return null;
                }
            }
            else
            {
                for (int i = maxBedIndex; i < 6; i++)
                {
                    var pos = loaderNpcPath.GetChild(i + 2);//床位置点
                    isfinsh = false;
                    MoveToTarget(pos, () => isfinsh = true);
                    while (!isfinsh)
                        yield return null;
                }
            }
        }
    }


    /// <summary>
    /// 触发器拾取病人（参考Item.PickUpToPlayer）
    /// </summary>
    /// <param name="other"></param>
    void OnTriggerStay(Collider other)
    {
        if (other.transform.CompareTag("GroundStack_DropItem"))
        {
            if (targetGroundStackManager == null || targetGroundStackManager.gameObject != other.gameObject)
            {
                var stackManager = other.GetComponent<GroundItemStackManager>();
                if (stackManager != null)
                {
                    targetGroundStackManager = stackManager;
                    isDroppingOffItem = true;
                    isCollectingItem = false;
                }
            }

        }

        if (other.transform.CompareTag("GroundStack_CollectItem"))
        {
            if (targetGroundStackManager == null || targetGroundStackManager.gameObject != other.gameObject)
            {
                var stackManager = other.GetComponent<GroundItemStackManager>();
                if (stackManager != null)
                {
                    targetGroundStackManager = stackManager;
                    isCollectingItem = true;
                    isDroppingOffItem = false;
                }
            }

        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.tag.Equals("GroundStack_DropItem"))
        {
            itemDropOffTimer = -1;
            isDroppingOffItem = false;
            isCollectingItem = false;
            targetGroundStackManager = null;
        }

        if (other.tag.Equals("GroundStack_CollectItem"))
        {
            itemDropOffTimer = -1;
            isCollectingItem = false;
            isDroppingOffItem = false;
            targetGroundStackManager = null;
        }
    }

    /// <summary>
    /// 丢物品到资源框
    /// </summary>
    private void DropItemToGroundStack()
    {
        if (itemStackManager.amountOfStackInUse <= 0)//丢完了
        {
            return;
        }
        if (itemDropOffTimer >= 0)
        {
            itemDropOffTimer -= Time.deltaTime;
        }
        else
        {

            if (targetGroundStackManager.totalMaxAmount > 0 && targetGroundStackManager.totalStackedItemsAmount >= targetGroundStackManager.totalMaxAmount)
            {
                return;//资源框有上限并达到上限时不能丢
            }
            int stackIndex = itemStackManager.GetStackIndexByItemType(targetGroundStackManager.stackedItemType);
            int _count = 1;//简单的动态调整丢物品物品速度
            if (itemStackManager.stackList[stackIndex].stackAmount > 30)
            {
                _count = 2;
            }
            if (itemStackManager.stackList[stackIndex].stackAmount > 50)
            {
                _count = 3;
            }
            for (int i = 0; i < _count; i++)
            {
                if (targetGroundStackManager.totalMaxAmount > 0 && targetGroundStackManager.totalStackedItemsAmount >= targetGroundStackManager.totalMaxAmount)
                {
                    break;//资源框有上限并达到上限时不能丢
                }
                var targetItem = itemStackManager.stackList[stackIndex].RemoveTopItem();
                if (targetItem != null)
                {
                    targetGroundStackManager.StackItem(targetItem);
                }
            }

            //   itemDropOffTimer = itemDropOffCooldown;
        }
    }
}
