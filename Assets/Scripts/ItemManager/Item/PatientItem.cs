using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 病人状态
/// </summary>
public enum PatienState : int
{
    Wait,//等待治疗
    Injection,//治疗中
    Fighter,//战士
    Farmer,//农夫
    Attack,//攻击老鼠
}

/// <summary>
/// 病人[可搬运]
/// </summary>
public class PatientItem : Item
{
    [Header("组件引用")]
    public Animator mAnimator;
    public NpcType npcType;
    public AnimatorStateInfo mStateInfo;
    public Collider mCollider;
    public Rigidbody mRigidbody;

    public float mMoveSpeed;
    public float mTurnSmoothTime = 0.1f;
    float mTurnSmoothVelocity;

    public PatienState currentState;

    protected override void Start()
    {
        base.Start();
        StateSwitch(PatienState.Wait);
    }

    // 停止移动
    public virtual void StopMovement()
    {
        if (moveToTargerIE != null)
        {
            StopCoroutine(moveToTargerIE);
            moveToTargerIE = null;
        }
        mRigidbody.velocity = Vector3.zero;

    }

    #region NPC逻辑
    /// <summary>
    /// 动态跟随目标，如果是目标玩家的话，玩家在家就跳出移动，并调用跳出事件；
    /// </summary>
    /// <param name="target">目标</param>
    /// <param name="isplayer">玩家在家判断</param>
    /// <param name="breakAcion">跳出事件</param>
    public void MoveToTarget(Transform target, bool isplayer = false, Action breakAcion = null)
    {
        if (moveToTargerIE != null)
        {
            StopCoroutine(moveToTargerIE);
            moveToTargerIE = null;
        }
        moveToTargerIE = MoveToTargetIE(target, isplayer, breakAcion);
        StartCoroutine(moveToTargerIE);
    }
    public void MoveToTarget(Transform target, Action targetAcion = null)
    {
        if (moveToTargerIE != null)
        {
            StopCoroutine(moveToTargerIE);
            moveToTargerIE = null;
        }
        moveToTargerIE = MoveToTargetIE(target, targetAcion);
        StartCoroutine(moveToTargerIE);
    }
    public void MoveToTarget(Vector3 target, Action targetAcion = null)
    {
        if (moveToTargerIE != null)
        {
            StopCoroutine(moveToTargerIE);
            moveToTargerIE = null;
        }
        moveToTargerIE = MoveToTargetIE(target, targetAcion);
        StartCoroutine(moveToTargerIE);
    }

    public IEnumerator moveToTargerIE;
    IEnumerator MoveToTargetIE(Transform target, bool isplayer, Action breakAcion)
    {

        while (Vector3.Distance(target.position, transform.position) > 0.3f)
        {
            if (isplayer)
            {
                if (Player.instance.IsAtHome || Player.instance.isDie)
                {
                    breakAcion?.Invoke();
                    yield break;
                }

            }
            // 计算目标方向
            Vector3 dir = (target.position - transform.position).normalized;

            // 计算目标角度（绕 Y 轴）
            float targetAngle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            // 平滑旋转到目标角度
            float angle = Mathf.SmoothDampAngle(
                transform.eulerAngles.y,
                targetAngle,
                ref mTurnSmoothVelocity,
                mTurnSmoothTime
            );

            // 设置旋转
            transform.rotation = Quaternion.Euler(0f, angle, 0f);

            // 设置移动速度（保持 Y 方向速度不变）
            mRigidbody.velocity = new Vector3(
                (transform.forward * mMoveSpeed).x,
                mRigidbody.velocity.y,
                (transform.forward * mMoveSpeed).z
            );
            yield return null;
        }

    }
    /// <summary>
    /// 移动到指定位置，并移动完成后执行事件
    /// </summary>
    /// <param name="target"></param>
    /// <param name="targetAciton">执行的事件</param>
    /// <returns></returns>
    IEnumerator MoveToTargetIE(Vector3 target, Action targetAciton = null,float range=1)
    {

        while (Vector3.Distance(target, transform.position) > range)
        {
            // 计算目标方向
            Vector3 dir = (target - transform.position).normalized;

            // 计算目标角度（绕 Y 轴）
            float targetAngle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            // 平滑旋转到目标角度
            float angle = Mathf.SmoothDampAngle(
                transform.eulerAngles.y,
                targetAngle,
                ref mTurnSmoothVelocity,
                mTurnSmoothTime
            );

            // 设置旋转
            transform.rotation = Quaternion.Euler(0f, angle, 0f);

            // 设置移动速度（保持 Y 方向速度不变）
            mRigidbody.velocity = new Vector3(
                (transform.forward * mMoveSpeed).x,
                mRigidbody.velocity.y,
                (transform.forward * mMoveSpeed).z
            );
            yield return null;
        }
        targetAciton?.Invoke();

    }
    IEnumerator MoveToTargetIE(Transform target, Action targetAciton = null)
    {

        while (Vector3.Distance(target.position, transform.position) > 0.3f)
        {
            // 计算目标方向
            Vector3 dir = (target.position - transform.position).normalized;

            // 计算目标角度（绕 Y 轴）
            float targetAngle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            // 平滑旋转到目标角度
            float angle = Mathf.SmoothDampAngle(
                transform.eulerAngles.y,
                targetAngle,
                ref mTurnSmoothVelocity,
                mTurnSmoothTime
            );

            // 设置旋转
            transform.rotation = Quaternion.Euler(0f, angle, 0f);

            // 设置移动速度（保持 Y 方向速度不变）
            mRigidbody.velocity = new Vector3(
                (transform.forward * mMoveSpeed).x,
                mRigidbody.velocity.y,
                (transform.forward * mMoveSpeed).z
            );
            yield return null;
        }
        targetAciton?.Invoke();
    }
    #endregion

    public void StateSwitch(PatienState state)
    {
        if (mAnimator == null)
        {
            return;
        }
        mStateInfo = mAnimator.GetCurrentAnimatorStateInfo(0);
        currentState = state;
        switch (state)
        {
            case PatienState.Injection:
                break;
            case PatienState.Fighter:
                Fighter();
                break;
            case PatienState.Farmer:
                Farmer();
                break;
        }
    }
    protected virtual void Fighter()
    {

    }

    protected override void OnTriggerEnter(Collider other)
    {
        if (currentState == PatienState.Wait && (other.transform.CompareTag("Player") || other.transform.CompareTag("PorterNpc")) && !hasBeenAddedToPlayer)
        {
            mRigidbody.isKinematic = true;
            if (other.transform.CompareTag("Player"))
            {
                var playerStackManager = Player.instance.itemStackManager;
                var targetStackListIndex = playerStackManager.GetStackIndexByItemType(itemType);
                playerStackManager.stackList[targetStackListIndex].StackItem(this);
            }
            else
            {
                var itemStackManager = other.GetComponent<PorterNpc>().itemStackManager;
                var targetStackListIndex = itemStackManager.GetStackIndexByItemType(itemType);
                itemStackManager.stackList[targetStackListIndex].StackItem(this);
            }
            NpcManager.instance.RemovePatient(this);
        }
    }

    protected virtual void OnTriggerStay(Collider other)
    {
        
    }

    protected virtual void Farmer()//农夫逻辑
    {

    }
}
