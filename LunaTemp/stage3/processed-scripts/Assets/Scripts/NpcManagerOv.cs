using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using Random = UnityEngine.Random;

/// <summary>
/// npc管理
/// </summary>
public class NpcManagerOv : NpcManager
{
    public int maxPatienNum=6;//病人最大数量
    public int maxFarmerPatienNum=3;//农夫病人最大数量
    public List<Transform> areaLst;
    [SerializeField]
    private bool isUnlockFarmer;
    [Header("战士产金堆叠器")]
    public GroundItemStackManager fighterCoinStack;
    [Header("战士站位点")]
    [Tooltip("站位路径物体，其子物体即为各个站位点")]
    public Transform fighterStationRoot;
    [Header("路径老鼠")]
    [Tooltip("路径物体，其子物体数量决定生成老鼠数量，老鼠生成在各子物体位置上")]
    public Transform enemyPathRoot;
    private List<Transform> fighterStationPoints = new List<Transform>();
    private HashSet<Transform> occupiedStations = new HashSet<Transform>();
    private List<PatientItem> mPatients=new List<PatientItem>();
    private List<PatientItem> mFarmerPatients=new List<PatientItem>();
    private List<Enemy> enemyLst2 = new List<Enemy>();

    protected override void Start()
    {
        base.Start();
        maxPatienNum = GameDataEditor.instance.GetOtherData.patientNum;
        maxFarmerPatienNum = GameDataEditor.instance.GetOtherData.farmerPatientNum;

        // 初始化战士站位点
        if (fighterStationRoot != null)
        {
            foreach (Transform child in fighterStationRoot)
            {
                fighterStationPoints.Add(child);
            }
        }

        // 初始化路径老鼠
        InitPathEnemies();
    }
    void Update()
    {
        EnemyCreate();
        PatientCreate();
        FammerPatientCreate();
    }
    public void UnlockFarmerPatien()
    {
        isUnlockFarmer = true;
    }

    /// <summary>
    /// 初始化路径老鼠：在路径点上生成与子物体数量相同的老鼠，不掉落金币，死亡时从enemyLst2移除
    /// </summary>
    private void InitPathEnemies()
    {
        if (enemyPathRoot == null) return;

        foreach (Transform point in enemyPathRoot)
        {
            var enemy = PoolManager.instance.GetNpc(NpcType.Enemy) as Enemy;
            enemy.transform.position = point.position;
            enemyLst2.Add(enemy);
            mEnemies.Add(enemy);
            enemy.gameObject.SetActive(true);
            // SetActive后设置，因为OnEnable->Init会重置这些字段
            enemy.isStationary = true;
            enemy.shouldDropLoot = false;
            enemy.onDeathCallback = RemovePathEnemy;
            enemy.StateSwitch(EnemyState.Idle);
        }
    }
    public override List<Enemy> GetEnemies2()
    {
        return enemyLst2;
    }

    /// <summary>
    /// 路径老鼠是否全部清除
    /// </summary>
    public bool IsPathEnemiesCleared => enemyLst2.Count == 0;

    /// <summary>
    /// 获取路径老鼠列表
    /// </summary>
    public List<Enemy> GetPathEnemies => enemyLst2;

    /// <summary>
    /// 路径老鼠死亡时从enemyLst2中移除
    /// </summary>
    public void RemovePathEnemy(Enemy enemy)
    {
        enemyLst2.Remove(enemy);
        // 路径老鼠全部清除后，隐藏攻击指示器
        if (enemyLst2.Count == 0)
        {
            // if (Player.instance.attackRangeIndicator != null)
            //     Player.instance.attackRangeIndicator.Hide();
            GuildManager.instance.CheckGuild(GuildTriggerType.Mouse,1);
        }
    }

    private void PatientCreate()
    {
        if (mPatients.Count < maxPatienNum)
        {
            PatientItem e = PoolManager.instance.GetItem(ItemType.FigherPatient) as PatientItem;
            e.mRigidbody.isKinematic = false;
            e.transform.position = new Vector3(
                Random.Range(areaLst[0].position.x, areaLst[1].position.x),
                 e.transform.position.y,
                 Random.Range(areaLst[0].position.z, areaLst[1].position.z)
                );
            mPatients.Add(e);
            e.gameObject.SetActive(true);
        }
    }
    private void FammerPatientCreate()
    {
        if (!isUnlockFarmer) return;
        
        if (mFarmerPatients.Count < maxFarmerPatienNum)
        {
            PatientItem e = PoolManager.instance.GetItem(ItemType.FarmerPatient) as PatientItem;
            e.mRigidbody.isKinematic = false;
            e.transform.position = new Vector3(
                Random.Range(areaLst[0].position.x, areaLst[1].position.x),
                 e.transform.position.y,
                 Random.Range(areaLst[0].position.z, areaLst[1].position.z)
                );
            mFarmerPatients.Add(e);
            e.gameObject.SetActive(true);
        }
    }


    public override void InitCustomer()
    {

    }
    public override void RemovePatient(PatientItem item)
    {
        if (item is FarmerPatientItem farmerPatient)
            mFarmerPatients.Remove(farmerPatient);
        else
            mPatients.Remove(item);
    }

    /// <summary>
    /// 尝试占用一个空闲的战士站位点，返回站位Transform；无空闲则返回null
    /// </summary>
    public Transform OccupyFighterStation()
    {
        foreach (var point in fighterStationPoints)
        {
            if (!occupiedStations.Contains(point))
            {
                occupiedStations.Add(point);
                return point;
            }
        }
        return null;
    }

    /// <summary>
    /// 释放一个战士站位点
    /// </summary>
    public void ReleaseFighterStation(Transform point)
    {
        if (point != null)
            occupiedStations.Remove(point);
    }
    public override List<PatientItem> GetPatients(ItemType itemType)
    {
        if (itemType == ItemType.FigherPatient)
            return mPatients;
        else
            return mFarmerPatients;
    }

    //病人接入病床并刷新
    public override void DequeueCustomer()
    {
        
    }


    protected IEnumerator CustomerExit(PatientItem _customer, ItemStack stack, bool isPlayer)
    {
        yield return null;
    }

    public Transform levelUpTf;
    /// <summary>
    /// 解锁最终区域
    /// </summary>
    public override void UnlockLevel()
    {
        levelUpTf.GetComponent<ObjectFX>().Hide();
        Camera.main.transform.DOMove(CameraManager.instance.Offset + levelUpTf.transform.position,0.5f);
        StartCoroutine(Delay(2, () =>
        {
            var ui=GameObject.Find("UIManager");
            ui.transform.Find("Win").gameObject.SetActive(true);//显示胜利界面
        }));
    }
    IEnumerator Delay(float time,Action action)
    {
        yield return new WaitForSeconds(time);
        action?.Invoke();
    }
}
