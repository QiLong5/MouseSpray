using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : Npc
{
    public SphereCollider attackCollider;//攻击触发器
    public SphereCollider alertCollider;//警戒触发器
    public EnemyState currentState;
    public bool isDie;
    public float mHp;
    public float mHpMax;
    public bool isSelect;

    float attackInterval=-1;

    int playerLayerMask;

    UIHealthBar uIHealthBar;
    void Start()
    {
        playerLayerMask = 1 << LayerMask.NameToLayer("Player");
    }
    private void OnEnable() {
        Init();
    }
    private void FixedUpdate() {
        
        if (attackInterval>0)
        {
            attackInterval-=Time.fixedDeltaTime;
        }
    }
    public void Init()
    {
        mHp = GameDataEditor.instance.enemyMaxHp;
        mHpMax = GameDataEditor.instance.enemyMaxHp;
        mMoveSpeed = GameDataEditor.instance.enemySpeed;
        attackCollider.radius = GameDataEditor.instance.enemyAttackRadius;
        alertCollider.radius = GameDataEditor.instance.enemyAlertRadius;
        mCollider.enabled=true;
        isDie = false;
        isSelect = false;
        shouldDropLoot = true;
        onDeathCallback = null;
        isStationary = false;
        StateSwitch(EnemyState.Patrol);
        uIHealthBar = PoolManager.instance.GetEnemyHp();
        uIHealthBar.Init(transform);
    }
    // 受击处理
    public void SetHp(int damage = 1)
    {
        SetHp(damage, true);
    }

    /// <summary>
    /// 受击处理（可控制是否掉落战利品）
    /// </summary>
    public void SetHp(int damage, bool dropLoot)
    {
        if (isDie) return;

        mHp -= damage;
        uIHealthBar.SetHpFill(mHp/mHpMax);
        if (mHp <= 0)
        {
            // 只有当前允许掉落且调用方也允许时才掉落
            shouldDropLoot = shouldDropLoot && dropLoot;
            StateSwitch(EnemyState.Die);
        }
        else
        {
            StateSwitch(EnemyState.Hit);
        }
    }

    /// <summary>
    /// 是否应该掉落战利品（被战士击杀时不掉落）
    /// </summary>
    [HideInInspector] public bool shouldDropLoot = true;

    /// <summary>
    /// 死亡时的回调（用于从外部列表中移除）
    /// </summary>
    [HideInInspector] public System.Action<Enemy> onDeathCallback;

    /// <summary>
    /// 是否为固定老鼠（路径老鼠），不做寻路逻辑，停留原地
    /// </summary>
    [HideInInspector] public bool isStationary;

    void OnTriggerEnter(Collider other)
    {
        if (isStationary) return;
        if (other.tag.Equals("Player"))
        {
            if (!Player.instance.IsAtHome && !Player.instance.isDie)
            {
                if (currentState == EnemyState.Chase)
                {
                    StateSwitch(EnemyState.Attack);
                }
                else
                {
                    StateSwitch(EnemyState.Chase);

                }
            }
        }
    }
    void OnTriggerStay(Collider other)
    {
        if (isStationary) return;
        if (currentState==EnemyState.Patrol)
        {
            if (other.tag.Equals("Player"))
            {
                if (!Player.instance.IsAtHome&&!Player.instance.isDie)
                {
                    StateSwitch(EnemyState.Chase);
             
                }
            }
        }
        if (currentState == EnemyState.Attack)
        {
            if (other.tag.Equals("Player")&&attackInterval<0)
            {
                StateSwitch(EnemyState.Attack);
            }
        }
    }
    void OnTriggerExit(Collider other)
    {
        if (isStationary) return;
        if (other.tag.Equals("Player"))
        {
            if (currentState == EnemyState.Chase)
            {
                StateSwitch(EnemyState.Patrol);
            }
            else if (currentState != EnemyState.Hit && !Player.instance.isDie&& !Player.instance.IsAtHome)//不是击退状态下离开范围的，继续追击
            {
                StateSwitch(EnemyState.Chase);
            }

        }
    }

    public override void StopMovement()
    {
        if (patrolIE != null)
        {
            StopCoroutine(patrolIE);
        }
        base.StopMovement();
    }
    public void StateSwitch(EnemyState state)
    {
        if (mAnimator == null||isDie)
        {
            return;
        }
        // 固定老鼠：巡逻和追击状态都转为Idle
        if (isStationary && (state == EnemyState.Patrol || state == EnemyState.Chase))
        {
            state = EnemyState.Idle;
        }
        mStateInfo = mAnimator.GetCurrentAnimatorStateInfo(0);
        currentState = state;
        switch (state)
        {
            case EnemyState.Idle:
                StopMovement();
                if (!mStateInfo.IsName("Idle"))
                {
                    mAnimator.Play("Idle");
                }
                break;
            case EnemyState.Patrol:
                if (patrolIE != null)
                {
                    StopCoroutine(patrolIE);
                }
                patrolIE = PatrolIE();
                StartCoroutine(patrolIE);
                break;
            case EnemyState.Chase:
                if (patrolIE != null)
                {
                    StopCoroutine(patrolIE);
                }
                MoveToTarget(Player.instance.transform, true, () =>
                 {
                     StateSwitch(EnemyState.Patrol);
                 });
                if (!mStateInfo.IsName("Run"))
                {
                    mAnimator.Play("RUn");
                }
                break;
            case EnemyState.Attack:
                 StopMovement();
                 if (Player.instance.isDie||Player.instance.IsAtHome)
                 {
                    StateSwitch(EnemyState.Patrol);
                 }
                 else
                 {
                    mAnimator.Play("Attack");
                    attackInterval = GameDataEditor.instance.enemyAttackInterval;
                }
            
                break;
            case EnemyState.Hit:
                Knockback(Player.instance.transform.position);
                if (!mStateInfo.IsName("Hit"))
                {
                    mAnimator.Play("Hit");
                }
                break;
            case EnemyState.Die:
                isDie = true;
                isSelect = false;
                if (!mStateInfo.IsName("Die"))
                {
                    mAnimator.Play("Die");
                }
                Knockback(Player.instance.transform.position);
                uIHealthBar.Hide();
                PoolManager.instance.ReturnEnemyHp(uIHealthBar);
                onDeathCallback?.Invoke(this);
                PoolManager.instance.ReturnEnemy(this,1f);
            
                break;
        }
    }

    /// <summary>
    /// 根据玩家的位置击退敌人
    /// </summary>
    /// <param name="playerPosition">玩家的位置</param>
    public void Knockback(Vector3 playerPosition)
    {
        StopMovement();
        if (knockbackIE!=null)
        {
            StopCoroutine(knockbackIE);
        }
        knockbackIE=KnockbackIE(playerPosition);
        StartCoroutine(knockbackIE);
    }

    IEnumerator knockbackIE;
   /// <summary>
   /// 受击协程
   /// </summary>
   /// <param name="playerPosition"></param>
   /// <returns></returns>
    IEnumerator KnockbackIE(Vector3 playerPosition)
    {
        Vector3 direction = transform.position - playerPosition;
        // 忽略 Y 轴，只在水平面上
        direction.y = 0;
        direction = direction.normalized;
        var enemyOriMat=mAnimator.GetComponent<MeshRenderer>().materials;
        mAnimator.GetComponent<MeshRenderer>().material=GameDataEditor.instance.enemyHurtMat;
        GetComponent<Rigidbody>().AddForce(direction * GameDataEditor.instance.enemyKnockbackForc, ForceMode.Impulse);
        mCollider.enabled=false;
        yield return new WaitForSeconds(0.3f);
        mAnimator.GetComponent<MeshRenderer>().materials= enemyOriMat;
        if (!isDie)
        {
            mCollider.enabled = true;
        }
        else
        {
            if (shouldDropLoot)
            {
                int num = GameDataEditor.instance.GetMouseData.enemyDropMoney / GameDataEditor.instance.GetOtherData.moneyValue;
                GetDropRawMaterial(num);
            }
        }
        yield return new WaitForSeconds(0.7f);//受击结束
        if (!isDie)
        {
            Collider[] hits = Physics.OverlapSphere(transform.position, GameDataEditor.instance.enemyAlertRadius, playerLayerMask);
            Collider[] hits1 = Physics.OverlapSphere(transform.position, GameDataEditor.instance.enemyAttackRadius, playerLayerMask);
            if (hits.Length > 0 && hits1.Length == 0)//还在追击范围内，继续追击
            {
                StateSwitch(EnemyState.Chase);
            }
            else if (hits1.Length > 0)//在攻击范围内，攻击
            {
                StateSwitch(EnemyState.Attack);
            }
            else if (hits.Length == 0 && hits1.Length == 0)//不在范围内，漫游
            {
                StateSwitch(EnemyState.Patrol);
            }
        }
       
    }

    IEnumerator patrolIE;

    /// <summary>
    /// 漫游协程
    /// </summary>
    /// <returns></returns>
    IEnumerator PatrolIE()
    {
        while (!LunaManager.instance.isGameOver&&!isDie)
        {
            if (!mStateInfo.IsName("Idle"))
            {
                mAnimator.Play("Idle");
            }
            if (moveToTargerIE != null)
            {
                StopCoroutine(moveToTargerIE);
                moveToTargerIE = null;
            }
            mRigidbody.velocity = Vector3.zero;
            yield return new WaitForSeconds(Random.Range(1f, 2f));
            if (!mStateInfo.IsName("Run"))
            {
                mAnimator.Play("Run");
            }
            MoveToTarget(GetRamdomPos(),()=>
            {
                if (moveToTargerIE != null)
                {
                    StopCoroutine(moveToTargerIE);
                    moveToTargerIE = null;
                }
                mRigidbody.velocity = Vector3.zero;
                if (!mStateInfo.IsName("Idle"))
                {
                    mAnimator.Play("Idle");
                }
            });
            yield return new WaitForSeconds(Random.Range(1f,2f));
        }
       
    }

    /// <summary>
    /// 获取漫游的随机目标点
    /// </summary>
    /// <returns>随机目标位置</returns>
    public Vector3 GetRamdomPos()
    {
        // 生成随机距离（1-3单位）和随机角度
        float randomDistance = Random.Range(1f, 3f);
        float randomAngle = Random.Range(0f, 360f) * Mathf.Deg2Rad;

        // 计算偏移量（在水平面上）
        float offsetX = randomDistance * Mathf.Cos(randomAngle);
        float offsetZ = randomDistance * Mathf.Sin(randomAngle);

        // 计算新位置
        Vector3 newPos = transform.position + new Vector3(offsetX, 0, offsetZ);

        // 限制在矩形区域内
        newPos.x = Mathf.Clamp(newPos.x, GameDataEditor.instance.patrolAreaMin.position.x, GameDataEditor.instance.patrolAreaMax.position.x);
        newPos.y = transform.position.y; // 保持Y轴不变
        newPos.z = Mathf.Clamp(newPos.z, GameDataEditor.instance.patrolAreaMin.position.z, GameDataEditor.instance.patrolAreaMax.position.z);

        return newPos;
    }


    /// <summary>
    /// 获取掉落物
    /// </summary>
    /// <param name="count">掉落数量</param>
    public void GetDropRawMaterial(int count = 1)
    {
        for (int j = 0; j < count; j++)
        {
            var meet = PoolManager.instance.GetItem(ItemType.Money);
            meet.transform.position = transform.position;
            meet.cd.enabled = false;
            meet.canDoFurtherMove = true;
            meet.gameObject.SetActive(true);
            // 抛物线掉落，添加延迟使掉落更自然
            StartCoroutine(ParabolicDrop(meet, j * 0.05f));
        }
    }

    /// <summary>
    /// 抛物线掉落协程
    /// </summary>
    /// <param name="meet">掉落物</param>
    /// <param name="delay">初始延迟</param>
    private IEnumerator ParabolicDrop(Item meet, float delay = 0f)
    {
        // 初始延迟（多个物体时错开掉落）
        if (delay > 0)
        {
            yield return new WaitForSeconds(delay);
        }

        // 可调整参数
        float throwDistance = 3f;      // 抛物线距离
        float throwHeight = 3.5f;      // 抛物线高度
        float dropDuration = 0.2f;     // 掉落时长
        float pickupDelay = 0.2f;      // 落地后延迟收取时间

        // 随机一个抛出方向（向四周）
        Vector3 randomDirection = new Vector3(
            UnityEngine.Random.Range(-1f, 1f),
            0,
            UnityEngine.Random.Range(-1f, 1f)
        ).normalized;

        Vector3 startPos = meet.transform.position;
        Vector3 targetPos = startPos + randomDirection * throwDistance;

        float elapsed = 0f;

        // 抛物线运动
        while (elapsed < dropDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / dropDuration;

            // 水平位置插值
            Vector3 currentPos = Vector3.Lerp(startPos, targetPos, t);

            // 抛物线高度计算（使用二次函数）
            float height = throwHeight * 4f * t * (1f - t);
            currentPos.y = startPos.y + height;

            meet.transform.position = currentPos;

            yield return null;
        }

        // 确保最终位置准确
        meet.transform.position = targetPos;

        // 落地后延迟收取
        yield return new WaitForSeconds(pickupDelay);

        meet.cd.enabled = true;
        // 玩家收取
        //meet.PickUpToPlayer();
    }


    public void AttackPlayer()
    {
        if (!Player.instance.IsAtHome)
        {
            Player.instance.SetHp();
        }
    }
}


