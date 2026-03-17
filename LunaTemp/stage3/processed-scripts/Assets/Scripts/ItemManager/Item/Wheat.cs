using System.Collections;
using UnityEngine;

/// <summary>
/// 小麦，存在正常状态和已收割状态
/// 玩家进入触发器时切换为已收割状态，生成WheatItem飞向玩家
/// 收割后等待一段时间恢复正常状态
/// </summary>
public class Wheat : Item
{
    [Header("小麦设置")]
    [Tooltip("正常状态显示的子物体")]
    public GameObject normalState;
    [Tooltip("已收割状态显示的子物体")]
    public GameObject harvestedState;
    [Tooltip("收割后恢复时间（秒）")]
    public float regrowTime = 10f;

    private bool isHarvested = false;
    public bool IsHarvested => isHarvested;

    /// <summary>
    /// 当前锁定该小麦的农夫（防止多个农夫同时前往同一小麦）
    /// </summary>
    private FarmerPatientItem reservedByFarmer = null;

    /// <summary>
    /// 该小麦是否可被农夫选为目标（未收割且未被其他农夫锁定）
    /// </summary>
    public bool IsAvailableForFarmer(FarmerPatientItem farmer)
    {
        if (isHarvested) return false;
        if (reservedByFarmer != null && reservedByFarmer != farmer) return false;
        return true;
    }

    /// <summary>
    /// 农夫锁定该小麦为目标
    /// </summary>
    public void ReserveForFarmer(FarmerPatientItem farmer)
    {
        reservedByFarmer = farmer;
    }

    /// <summary>
    /// 释放农夫锁定
    /// </summary>
    public void ReleaseReservation()
    {
        reservedByFarmer = null;
    }

    protected override void Awake()
    {
        base.Awake();
        regrowTime = GameDataEditor.instance.gameConfig.其他配置.wheatTime;
    }

    protected override void Start()
    {
        base.Start();
        // 防止基类OnTriggerEnter将小麦本身捡起
        hasBeenAddedToPlayer = true;
        SetState(false);
    }

    private void OnEnable()
    {
        isHarvested = false;
        // 防止基类OnTriggerEnter将小麦本身捡起
        hasBeenAddedToPlayer = true;
        SetState(false);
    }

    /// <summary>
    /// 设置小麦状态
    /// </summary>
    /// <param name="harvested">是否已收割</param>
    private void SetState(bool harvested)
    {
        isHarvested = harvested;
        if (normalState != null) normalState.SetActive(!harvested);
        if (harvestedState != null) harvestedState.SetActive(harvested);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player")) return;
        if (isHarvested) return;

        Harvest();
    }

    private void Harvest()
    {
        ReleaseReservation(); // 玩家收割时释放农夫锁定
        SetState(true);
        SpawnWheatItem();
        StartCoroutine(RegrowCoroutine());
    }

    private void SpawnWheatItem()
    {
        Item wheatItem = PoolManager.instance.GetItem(ItemType.WheatItem);
        wheatItem.gameObject.SetActive(true);
        wheatItem.transform.position = transform.position;
        wheatItem.transform.parent = PoolManager.instance.transform;
        wheatItem.cd.enabled = false;
        wheatItem.PickUpToPlayer();
    }

    private IEnumerator RegrowCoroutine()
    {
        yield return new WaitForSeconds(regrowTime);
        reservedByFarmer = null;
        SetState(false);
    }

    /// <summary>
    /// 农夫收割小麦 - 收割后小麦直接飞向泡汤池的wheatDeliveryStack
    /// </summary>
    public bool FarmerHarvest(FarmerPatientItem farmer)
    {
        if (isHarvested) return false;
        SetState(true);
        ReleaseReservation();
        SpawnWheatItemToDelivery();
        StartCoroutine(RegrowCoroutine());
        return true;
    }

    /// <summary>
    /// 生成WheatItem并直接堆叠到泡汤池的wheatDeliveryStack
    /// </summary>
    private void SpawnWheatItemToDelivery()
    {
        var deliveryStack = SoakManager.instance.wheatDeliveryStack;
        if (deliveryStack == null) return;

        Item wheatItem = PoolManager.instance.GetItem(ItemType.WheatItem);
        wheatItem.gameObject.SetActive(true);
        wheatItem.transform.position = transform.position;
        wheatItem.transform.parent = PoolManager.instance.transform;
        wheatItem.cd.enabled = false;
        deliveryStack.StackItem(wheatItem);
    }
}
