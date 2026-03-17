using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 麦田管理器
/// 挂载左上和右下区域点位，在范围内按间隔生成小麦
/// </summary>
public class WheatManager : MonoSingleton<WheatManager>
{
    [Header("区域设置")]
    [Tooltip("左上角点位")]
    public Transform topLeftPoint;
    [Tooltip("右下角点位")]
    public Transform bottomRightPoint;

    [Header("间隔设置")]
    [Tooltip("横坐标间隔")]
    public float xSpacing = 1f;
    [Tooltip("纵坐标间隔")]
    public float zSpacing = 1f;

    private void Start()
    {
        SpawnWheatField();
    }

    private void SpawnWheatField()
    {
        float minX = Mathf.Min(topLeftPoint.position.x, bottomRightPoint.position.x);
        float maxX = Mathf.Max(topLeftPoint.position.x, bottomRightPoint.position.x);
        float minZ = Mathf.Min(topLeftPoint.position.z, bottomRightPoint.position.z);
        float maxZ = Mathf.Max(topLeftPoint.position.z, bottomRightPoint.position.z);
        float y = topLeftPoint.position.y;

        for (float x = minX; x <= maxX; x += xSpacing)
        {
            for (float z = minZ; z <= maxZ; z += zSpacing)
            {
                Item wheat = PoolManager.instance.GetItem(ItemType.Wheat);
                wheat.gameObject.SetActive(true);
                wheat.transform.position = new Vector3(x, y, z);
                wheat.transform.parent = transform;
            }
        }
    }

    /// <summary>
    /// 随机获取一个未收割的小麦
    /// </summary>
    public Wheat GetRandomAvailableWheat()
    {
        List<Wheat> available = new List<Wheat>();
        foreach (Transform child in transform)
        {
            var wheat = child.GetComponent<Wheat>();
            if (wheat != null && !wheat.IsHarvested)
                available.Add(wheat);
        }
        if (available.Count == 0) return null;
        return available[Random.Range(0, available.Count)];
    }

    /// <summary>
    /// 获取距离农夫最近的可用小麦（未收割且未被其他农夫锁定）
    /// </summary>
    public Wheat GetNearestAvailableWheat(FarmerPatientItem farmer)
    {
        Wheat nearest = null;
        float minDist = float.MaxValue;
        foreach (Transform child in transform)
        {
            var wheat = child.GetComponent<Wheat>();
            if (wheat == null) continue;
            if (!wheat.IsAvailableForFarmer(farmer)) continue;

            float dist = Vector3.Distance(farmer.transform.position, wheat.transform.position);
            if (dist < minDist)
            {
                minDist = dist;
                nearest = wheat;
            }
        }
        return nearest;
    }
}
