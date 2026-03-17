using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BedProcess : MonoBehaviour
{
    [HideInInspector]
    public Transform moneyPos;//金币放置点
    [HideInInspector]
    public Transform path;//治疗后移动路径
    [HideInInspector]
    public Transform doorPos;//门口位置
    [HideInInspector]
    public GroundItemStackManager groundItemStack;
    void Awake()
    {
        path = transform.Find("Path");
        doorPos = GameObject.Find("DoorPos").transform;
        moneyPos = GameObject.Find("MoneyManager").transform;
        groundItemStack = transform.Find("RawMaterialManager").GetComponent<GroundItemStackManager>();
    }
}
