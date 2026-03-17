using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// 病人打针
/// </summary>
public class PatientInjection : MonoBehaviour
{
    public GroundItemStackManager itemGround;
    [SerializeField] protected GameObject nomalSR;
    [SerializeField] protected GameObject heighLightSR;
    [SerializeField] protected NurseNpc nurseNpc;
    private BedProcess bedProcess;
    private bool isInjection;
    void Awake()
    {
        bedProcess = GetComponentInParent<BedProcess>();
    }
    void Update()
    {
        if (!isInjection&&nurseNpc.gameObject.activeInHierarchy && itemGround.stackList[0].GetPatient() != null)
        {
            Injection(nurseNpc.transform);
        }
    }
    void OnTriggerEnter(Collider other)
    {
        if (!nurseNpc.gameObject.activeInHierarchy&&other.transform.CompareTag("Player"))
        {
            if (isInjection) return;
            ShowBlueSprite();
            Injection(other.transform);
        }
    }

    protected virtual void OnTriggerExit(Collider other)
    {
        if (!nurseNpc.gameObject.activeInHierarchy && other.transform.CompareTag("Player"))
        {
            ShowWhiteSprite();
            // 如果治疗尚未完成（DOTween回调未触发），确保恢复玩家物理状态
            if (isInjection && Player.instance.mRigidbody.isKinematic)
            {
                Player.instance.mRigidbody.isKinematic = false;
            }
        }
    }
    public void ShowBlueSprite()
    {
        if (nomalSR == null || heighLightSR == null)
        {
            return;
        }
        nomalSR.SetActive(false);
        heighLightSR.SetActive(true);
    }

    public void ShowWhiteSprite()
    {
        if (nomalSR == null || heighLightSR == null)
        {
            return;
        }
        nomalSR.SetActive(true);
        heighLightSR.SetActive(false);
    }

    /// <summary>
    /// 玩家给病人打针
    /// </summary>
    public void Injection(Transform tf)
    {
        var patien = itemGround.stackList[0].GetPatient() as FighterPatientItem;//获取病人
        if (patien == null) return;
        if (isInjection) return;

        //玩家指向病人并播放动画
        var player = tf.GetComponent<Player>();
        if (player!= null)
        {
            Player.instance.isStop = true;
            Player.instance.mRigidbody.velocity = Vector3.zero;
            Player.instance.transform.DOMove(new Vector3(transform.position.x,Player.instance.transform.position.y,transform.position.z),0.2f);
        }

        isInjection = true;
        patien.StateSwitch(PatienState.Injection);
        DOTween.Sequence()
        .Insert(0, tf.DOLookAt(patien.transform.position, 0.2f))
        .InsertCallback(1, () =>
        {
            if (player != null)
                Player.instance.isStop= false;
            //病人状态更改
            isInjection = false;
            var pathTF = bedProcess.path;
            itemGround.RemoveItem();
            StartCoroutine(InjectionEnd(pathTF, patien));
            GuildManager.instance.CheckGuild(GuildTriggerType.Treatment,0);
        });
    }
    IEnumerator InjectionEnd(Transform pathTF, FighterPatientItem patien)
    {
        for (int i = 0; i < pathTF.childCount; i++)
        {
            bool isfinsh = false;
            var pos = pathTF.GetChild(i).position;
            pos = new Vector3(pos.x, patien.transform.position.y, pos.z);
            patien.mRigidbody.isKinematic = false;
            patien.MoveToTarget(pos, () => { isfinsh = true; });
            while (!isfinsh)
            {
                yield return null;
            }
        }

        //移动到指定点后 - 掉落金币到MoneyManager位置
        bool isMoneyDropFinished = false;
        DropMoneyToManager(patien, () => { isMoneyDropFinished = true; });

        //等待金币掉落结束
        while (!isMoneyDropFinished)
        {
            yield return null;
        }

        //切换到Fighter状态
        patien.StateSwitch(PatienState.Fighter);
        //移动到门口
        patien.MoveToTarget(bedProcess.doorPos, () =>
            {
                //到达门口后开始战斗
                patien.StartFighting();
            });
    }


    /// <summary>
    /// 掉落金币到MoneyManager位置
    /// </summary>
    private void DropMoneyToManager(PatientItem patien, System.Action onComplete)
    {
        int num = GameDataEditor.instance.GetOtherData.patienMoney/GameDataEditor.instance.GetOtherData.moneyValue;
        var manager = bedProcess.moneyPos.GetComponent<GroundItemStackManager>();
        for (int i = 0; i < num; i++)
        {
            var money = PoolManager.instance.GetItem(ItemType.Money);//生成金币
            //设置金币初始位置（从病人位置抛出）
            money.transform.position = patien.transform.position + Vector3.up * 0.5f;
            money.cd.enabled = false;
            money.canDoFurtherMove = true;
            money.gameObject.SetActive(true);
            manager.StackItem(money);
        }
        onComplete?.Invoke();
        GuildManager.instance.CheckGuild(GuildTriggerType.PatienMoney,0);
        return;
    }
}
