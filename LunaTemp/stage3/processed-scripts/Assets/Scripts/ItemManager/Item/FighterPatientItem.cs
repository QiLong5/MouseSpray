using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class FighterPatientItem : PatientItem
{
    #region 战士逻辑
    [Header("战斗相关")]
    public SphereCollider mAttackCollider;//敌人检测碰撞体
    public AttackRangeIndicator attackRangeIndicator; // 攻击范围指示器
    private int enemyLayerMask;
    private float attackInterval = 0;
    private bool _isAttacking;

    //扇形攻击区域参数
    private float attackRadius;
    private float attackStartAngle;
    private float attackEndAngle;

    private bool _isAttack;
    public bool IsAttack
    {
        get => _isAttack;
        set
        {
            if (_isAttack != value)
            {
                _isAttack = value;
                mAnimator.SetBool("isAttack", _isAttack);
            }
        }
    }
    public bool IsAttacking
    {
        get => _isAttacking;
        set
        {
            if (_isAttacking != value)
            {
                _isAttacking = value;
                mAnimator?.SetBool("isAttacking", _isAttacking);
            }
        }
    }

    [Header("战士站位")]
    [Tooltip("站位扇形半径范围（最小，最大）")]
    [SerializeField] private float standMinRadius = 2f;
    [SerializeField] private float standMaxRadius = 5f;
    [Tooltip("站位扇形角度范围（相对于门口朝外方向，左右各多少度）")]
    [SerializeField] private float standAngleRange = 60f;

    [Header("战士产金")]
    [Tooltip("产金间隔（秒）")]
    [SerializeField] private float coinInterval = 3f;
    [Tooltip("每次产金数量")]
    [SerializeField] private int coinsPerDrop = 2;

    [Header("战士血量")]
    [Tooltip("最大血量")]
    [SerializeField] private float fighterMaxHp = 100f;
    [Tooltip("掉血间隔（秒）")]
    [SerializeField] private float hpLossInterval = 2f;
    [Tooltip("每次掉血比例（占最大血量）")]
    [SerializeField] private float hpLossPercent = 0.05f;

    [Header("战士转向")]
    [Tooltip("转向敌人的时间（秒）")]
    [SerializeField] private float turnDuration = 0.5f;

    private UIHealthBar fighterHealthBar;
    private float fighterHp;
    private bool fighterIsDead = false;
    private Coroutine coinCoroutine;
    private Coroutine hpLossCoroutine;
    private Coroutine combatCoroutine;
    private Vector3 defaultLookDir; // 门口扇形外侧默认朝向
    private Transform occupiedStation; // 当前占用的站位点（null表示随机站位）

    protected override void Fighter()//战士逻辑
    {
        //初始化战斗相关
        if (mAttackCollider == null)
        {
            mAttackCollider = gameObject.AddComponent<SphereCollider>();
            mAttackCollider.isTrigger = true;
            mAttackCollider.radius = GameDataEditor.instance.playerAttackRadius;
        }
        enemyLayerMask = 1 << LayerMask.NameToLayer("Enemy");

        //初始化扇形攻击参数
        attackRadius = GameDataEditor.instance.playerAttackRadius;
        attackStartAngle = GameDataEditor.instance.startAngle;
        attackEndAngle = GameDataEditor.instance.endAngle;

        //初始化攻击范围指示器
        if (attackRangeIndicator != null)
        {
            attackRangeIndicator.UpdateRange(attackRadius, attackStartAngle, attackEndAngle);
        }

        //初始化血量
        fighterHp = fighterMaxHp;
        fighterIsDead = false;
    }

    /// <summary>
    /// 开始战斗（到达门口后调用）
    /// 在门口扇形区域随机站位，朝向扇形外侧
    /// </summary>
    public void StartFighting()
    {
        StartCoroutine(FighterStationIE());
    }

    /// <summary>
    /// 战士站位协程 - 优先使用NpcManagerOv中的站位点，超出时在门口半圆区域随机站位
    /// </summary>
    private IEnumerator FighterStationIE()
    {
        // 获取门口位置
        Transform doorPos = GameObject.Find("DoorPos")?.transform;
        if (doorPos == null) yield break;

        var npcMgr = NpcManager.instance as NpcManagerOv;
        Vector3 standPos;

        // 优先从NpcManagerOv获取站位点
        if (npcMgr != null)
        {
            occupiedStation = npcMgr.OccupyFighterStation();
        }

        if (occupiedStation != null)
        {
            // 使用固定站位点
            standPos = occupiedStation.position;
            standPos.y = transform.position.y;
        }
        else
        {
            // 站位点已满，在门口外半圆区域随机站位
            float randomAngle = Random.Range(-standAngleRange, standAngleRange);
            float randomRadius = Random.Range(standMinRadius, standMaxRadius);
            Vector3 dir = Quaternion.Euler(0, randomAngle, 0) * doorPos.forward;
            standPos = doorPos.position + dir * randomRadius;
            standPos.y = transform.position.y;
        }

        // 移动到站位点
        bool arrived = false;
        MoveToTarget(standPos, () => { arrived = true; });
        while (!arrived) yield return null;

        // 朝向扇形外侧（从门口向外看）
        Vector3 lookDir = (standPos - doorPos.position).normalized;
        lookDir.y = 0;
        if (lookDir.sqrMagnitude > 0.01f)
        {
            transform.rotation = Quaternion.LookRotation(lookDir);
        }
        defaultLookDir = lookDir; // 保存默认朝向

        StopMovement();

        // 显示攻击范围
        if (attackRangeIndicator != null)
            attackRangeIndicator.Show();

        // 通过PoolManager获取战士血条
        fighterHealthBar = PoolManager.instance.GetFighterHp();
        if (fighterHealthBar != null)
        {
            fighterHealthBar.Init(transform);
            fighterHealthBar.SetHpFill(1f, false, false);
        }

        // 开始产金协程
        coinCoroutine = StartCoroutine(CoinGenerateIE());

        // 开始持续掉血协程
        hpLossCoroutine = StartCoroutine(HpLossIE());

        // 开始战斗循环（视角跟随敌人 + 攻击检测）
        combatCoroutine = StartCoroutine(CombatLoopIE());
    }

    /// <summary>
    /// 战斗循环协程 - 锁定最近敌人，DOTween转向，等待目标被击杀后再寻找下一个
    /// 转向过程中不重新检测敌人
    /// </summary>
    private IEnumerator CombatLoopIE()
    {
        while (!fighterIsDead && currentState == PatienState.Fighter)
        {
            if (attackInterval > 0)
                attackInterval -= Time.deltaTime;

            // 检测攻击范围内最近的敌人
            Enemy targetEnemy = FindNearestEnemyInRange();

            if (targetEnemy != null)
            {
                // DOTween转向敌人
                Vector3 dirToEnemy = targetEnemy.transform.position - transform.position;
                dirToEnemy.y = 0;
                if (dirToEnemy.sqrMagnitude > 0.01f)
                {
                    Quaternion targetRot = Quaternion.LookRotation(dirToEnemy);
                    bool turnDone = false;
                    transform.DORotateQuaternion(targetRot, turnDuration)
                        .SetEase(Ease.OutQuad)
                        .OnComplete(() => { turnDone = true; });

                    // 等待转向完成（期间不重新检测敌人）
                    while (!turnDone) yield return null;
                }

                // 转向结束后，等待该敌人被击杀或离开范围
                while (!fighterIsDead && currentState == PatienState.Fighter
                    && targetEnemy != null && !targetEnemy.isDie)
                {
                    if (attackInterval > 0)
                        attackInterval -= Time.deltaTime;

                    // 持续面向该敌人（实时微调朝向）
                    Vector3 dir = targetEnemy.transform.position - transform.position;
                    dir.y = 0;
                    if (dir.sqrMagnitude > 0.01f)
                    {
                        transform.rotation = Quaternion.LookRotation(dir);
                    }

                    yield return null;
                }

                // 目标被击杀，下一帧重新检测
            }
            else
            {
                // 无敌人时DOTween恢复默认朝向
                if (defaultLookDir.sqrMagnitude > 0.01f)
                {
                    Quaternion defaultRot = Quaternion.LookRotation(defaultLookDir);
                    // 只在朝向差异较大时才做转向动画
                    if (Quaternion.Angle(transform.rotation, defaultRot) > 5f)
                    {
                        bool turnDone = false;
                        transform.DORotateQuaternion(defaultRot, turnDuration)
                            .SetEase(Ease.OutQuad)
                            .OnComplete(() => { turnDone = true; });
                        while (!turnDone) yield return null;
                    }
                }
            }

            yield return null;
        }
    }

    /// <summary>
    /// 查找攻击范围内最近的存活敌人
    /// </summary>
    private Enemy FindNearestEnemyInRange()
    {
        Collider[] hits = Physics.OverlapSphere(transform.position, radius, enemyLayerMask);
        Enemy nearest = null;
        float minSqr = float.MaxValue;
        foreach (var hit in hits)
        {
            Enemy enemy = hit.GetComponent<Enemy>();
            if (enemy == null || enemy.isDie) continue;

            float sqrDist = (enemy.transform.position - transform.position).sqrMagnitude;
            if (sqrDist < minSqr)
            {
                minSqr = sqrDist;
                nearest = enemy;
            }
        }
        return nearest;
    }

    /// <summary>
    /// 持续产金协程
    /// </summary>
    private IEnumerator CoinGenerateIE()
    {
        while (!fighterIsDead && currentState == PatienState.Fighter)
        {
            yield return new WaitForSeconds(coinInterval);
            if (fighterIsDead) break;

            // 获取NpcManagerOv上挂载的金币堆叠器
            var npcMgr = NpcManager.instance as NpcManagerOv;
            if (npcMgr == null || npcMgr.fighterCoinStack == null) continue;

            for (int i = 0; i < coinsPerDrop; i++)
            {
                var money = PoolManager.instance.GetItem(ItemType.Money);
                money.transform.position = transform.position + Vector3.up * 0.5f;
                money.cd.enabled = false;
                money.canDoFurtherMove = true;
                money.gameObject.SetActive(true);
                npcMgr.fighterCoinStack.StackItem(money);
            }
        }
    }

    /// <summary>
    /// 持续掉血协程
    /// </summary>
    private IEnumerator HpLossIE()
    {
        while (!fighterIsDead && currentState == PatienState.Fighter)
        {
            yield return new WaitForSeconds(hpLossInterval);
            if (fighterIsDead) break;

            float damage = fighterMaxHp * hpLossPercent;
            fighterHp -= damage;

            if (fighterHealthBar != null)
                fighterHealthBar.SetHpFill(fighterHp / fighterMaxHp);

            if (fighterHp <= 0)
            {
                fighterHp = 0;
                FighterDie();
            }
        }
    }

    /// <summary>
    /// 战士死亡
    /// </summary>
    private void FighterDie()
    {
        fighterIsDead = true;

        // 释放站位点
        if (occupiedStation != null)
        {
            var npcMgr = NpcManager.instance as NpcManagerOv;
            if (npcMgr != null)
                npcMgr.ReleaseFighterStation(occupiedStation);
            occupiedStation = null;
        }

        // 停止产金、掉血和战斗协程
        if (coinCoroutine != null) StopCoroutine(coinCoroutine);
        if (hpLossCoroutine != null) StopCoroutine(hpLossCoroutine);
        if (combatCoroutine != null) StopCoroutine(combatCoroutine);

        // 回收血条到PoolManager
        if (fighterHealthBar != null)
        {
            fighterHealthBar.Hide();
            PoolManager.instance.ReturnFighterHp(fighterHealthBar);
            fighterHealthBar = null;
        }

        // 隐藏攻击范围
        if (attackRangeIndicator != null)
            attackRangeIndicator.Hide();

        // 播放死亡动画（如果有）
        if (mAnimator != null)
            mAnimator.Play("Die");

        // 从NpcManager中移除并延迟回收
        NpcManager.instance.RemovePatient(this);
        StartCoroutine(DelayReturnItem(1f));
    }

    private IEnumerator DelayReturnItem(float delay)
    {
        yield return new WaitForSeconds(delay);
        PoolManager.instance.ReturnItem(this);
    }

    float radius => GameDataEditor.instance.playerAttackRadius;          // 半径
    float startAngle => GameDataEditor.instance.startAngle;      // 起始角度（度）
    float endAngle => GameDataEditor.instance.endAngle;       // 结束角度（度）

    /// <summary>
    /// 攻击 - 被战士击杀的敌人不掉落金币
    /// </summary>
    public void Attack()
    {
        Vector3 center = transform.position - transform.forward;
        Collider[] hits = Physics.OverlapSphere(center, radius, enemyLayerMask);

        foreach (var hit in hits)
        {
            Vector3 dir = hit.transform.position - center;
            dir.y = 0; // 忽略高度差

            // 转换到玩家的本地坐标系
            Vector3 localDir = transform.InverseTransformDirection(dir);

            // 计算角度（相对于玩家前方）
            float angle = Mathf.Atan2(localDir.z, localDir.x) * Mathf.Rad2Deg;

            if (angle >= startAngle && angle <= endAngle)
            {
                Enemy _enemy = hit.GetComponent<Enemy>();
                if (_enemy != null)
                {
                    _enemy.SetHp(GameDataEditor.instance.playerAamage, false);
                }

            }
        }
    }

    /// <summary>
    /// 碰撞体碰到敌人时，检测前方是否有敌人，只攻击前方，不自动转身时使用
    /// </summary>
    public bool CheckIsAttack()
    {
        Vector3 center = transform.position - transform.forward;
        Collider[] hits = Physics.OverlapSphere(center, radius, enemyLayerMask);
        foreach (var hit in hits)
        {
            Vector3 dir = hit.transform.position - center;
            dir.y = 0; // 忽略高度差

            // 转换到玩家的本地坐标系
            Vector3 localDir = transform.InverseTransformDirection(dir);
            // 计算角度（相对于玩家前方）
            float angle = Mathf.Atan2(localDir.z, localDir.x) * Mathf.Rad2Deg;

            if (angle >= startAngle && angle <= endAngle)
            {
                return true;
            }
        }
        return false;
    }

    #endregion


    protected override void OnTriggerEnter(Collider other)
    {
        base.OnTriggerEnter(other);

        if (currentState == PatienState.Fighter)
        {
            if (other.transform.CompareTag("Enemy"))
            {
                if (attackInterval <= 0 && !IsAttacking)
                {
                    if (CheckIsAttack())
                    {
                        IsAttack = true;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                }
            }
        }
    }

    protected override void OnTriggerStay(Collider other)
    {
        if (currentState == PatienState.Fighter)
        {
            if (other.tag.Equals("Enemy"))
            {
                if (attackInterval <= 0 && !IsAttacking)
                {
                    if (CheckIsAttack())
                    {
                        IsAttack = true;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                    else
                    {
                        IsAttack = false;
                        attackInterval = GameDataEditor.instance.playerAttackInterval;
                    }
                }

            }
        }
    }
}
