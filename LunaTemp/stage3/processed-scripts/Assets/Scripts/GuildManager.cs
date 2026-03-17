using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static ExcelTool.GameConfig;

// public class GuildeInfo//引导信息（后续改为配表）
// {
//     public int id;
//     public int priority;//优先级
//     public int triggerNum;//触发引导数量
//     public int hideNum;//隐藏触发数量
//     public string triggerName;//触发对象
//     public string hideName;//移除引导对象
//     public GuildTriggerType triggerType;//显示引导的触发类型
//     public GuildTriggerType hideType;//隐藏引导的触发类型
//     public GuildeInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum, string triggerName, string hideName)
//     {
//         SetInfo(id, priority, triggerType, triggerNum, hideType, hideNum);
//         this.triggerName = triggerName;
//         this.hideName = hideName;
//     }
//     public GuildeInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum, ItemType triggerName, ItemType hideName)
//     {
//         SetInfo(id, priority, triggerType, triggerNum, hideType, hideNum);
//         this.triggerName = GuildManager.itemDic[triggerName];
//         this.hideName = GuildManager.itemDic[hideName];
//     }
//     private void SetInfo(int id, int priority, GuildTriggerType triggerType, int triggerNum, GuildTriggerType hideType, int hideNum)
//     {
//         this.id = id;
//         this.priority = priority;
//         this.triggerNum = triggerNum;
//         this.triggerType = triggerType;
//         this.hideType = hideType;
//         this.hideNum = hideNum;
//     }
// }
public enum GuildTriggerType : int//引导触发类型
{
    None,
    First = 1,//首次引导结束后
    Mouse = 2,//消灭老鼠
    Transport = 3,//搬运病人
    UnlockIcon = 4,//解锁图标
    UnlockFinish = 5,//解锁完成
    Treatment = 6,//治疗病人
    PatienMoney=7,//病人留下金币
}

/// <summary>
/// 引导管理
/// </summary>
public class GuildManager : MonoSingleton<GuildManager>
{
    private GuildInfoItem guild;//正在进行中的引导id 
    private List<int> guildLst = new List<int>();//已完成的引导
    private List<GuildInfoItem> infos;
    public static Dictionary<ItemType, string> itemDic = new Dictionary<ItemType, string>(){//创建枚举对应的字符，以减少参数传递时枚举转字符的性能消耗
        {ItemType.FarmerPatient,"FarmerPatient"},
        {ItemType.FigherPatient,"FigherPatient"},
        {ItemType.Wheat,"Wheat"},
        {ItemType.WheatItem,"WheatItem"},
        {ItemType.Money,"Money"}};

    public override void Awake()
    {
        base.Awake();
        infos = GameDataEditor.instance.gameConfig.guildInfo;
    }

    /// <summary>
    /// 设置引导线
    /// </summary>
    /// <param name="isEnd">是否结束引导</param>
    public void SetGuildLine(bool isEnd, GuildInfoItem info = null)
    {
        if (isEnd)//结束引导线
        {
            guildLst.Add(guild.id);
            ArrowsManager.instance.CloseArrows();
            guild = null;
        }
        else//设置引导追踪目标
        {
            guild = info;
            ArrowsManager.instance.UpdateOffsetPos(Vector3.zero);
            if (info.triggerType == (int)GuildTriggerType.First)//指向路径内老鼠
            {
                StartCoroutine(GetMousePos());
            }
            else if (info.triggerType == (int)GuildTriggerType.Mouse)//指向最近的病人
            {
                var patients = NpcManagerOv.instance.GetPatients(ItemType.FigherPatient);
                float minSqr = float.MaxValue;
                PatientItem target = null;
                Vector3 pos = new Vector3(-2.73f, 0, -8.94f);
                for (int i = 0; i < patients.Count; i++)
                {
                    float sqr = (patients[i].transform.position - pos).sqrMagnitude;
                    if (sqr < minSqr)
                    {
                        minSqr = sqr;
                        target = patients[i];
                    }
                }
                ArrowsManager.instance.SetArrows(target.transform);
            }
            else if (info.triggerType == (int)GuildTriggerType.Transport)//指向最近的床位
            {
                var bed = GameObject.Find("Bed1");
                ArrowsManager.instance.SetArrows(bed.transform);
            }
            else
                ArrowsManager.instance.SetArrows(info.id - 1);//设置引导目标
        }
        
        IEnumerator GetMousePos()
        {
            var enemys = NpcManagerOv.instance.GetEnemies2();
            while (enemys.Count > 0)
            {
                yield return null;
                Enemy target = null;
                float minSqr = float.MaxValue;
                for (int i = 0; i < enemys.Count; i++)
                {
                    float sqr = (enemys[i].transform.position - Player.instance.transform.position).sqrMagnitude;
                    if(sqr<minSqr)
                    {
                        minSqr = sqr;
                        target = enemys[i];
                    }
                }
                while (!target.isDie)
                {
                    ArrowsManager.instance.SetArrows(target.transform);
                    yield return null;
                }
            }
        }
    }
    /// <summary>
    /// 更新箭头高度
    /// </summary>
    public void UpdateArrowHeight(ItemType itemType,bool isProduce,float offsetY)
    {
        if(guild==null) return;//没有正在进行中的引导

        // if(guild.triggerName==itemDic[itemType]&&
        // (guild.triggerType== (int)GuildTriggerType.ItemProduce&&isProduce
        // ||guild.triggerType== (int)GuildTriggerType.Item&&!isProduce))

            ArrowsManager.instance.UpdateOffsetPos(Vector3.up*offsetY);
    }

    /// <summary>
    /// 引导检测
    /// </summary>
    /// <param name="triggerType"></param>
    /// <param name="num"></param>
    /// <param name="itemType"></param>
    public void CheckGuild(GuildTriggerType triggerType, int num, ItemType itemType)
    {
        CheckGuild(triggerType, num, itemDic[itemType]);
    }

    /// <summary>
    /// 引导检测
    /// </summary>
    /// <param name="triggerType"></param>
    /// <param name="num"></param>
    /// <param name="objName"></param>
    public void CheckGuild(GuildTriggerType triggerType, int num, string objName = "")
    {
        if (infos.Exists(t => !guildLst.Contains(t.id) && (t.triggerType == (int)triggerType || t.hideType == (int)triggerType)))//存在该类型未完成的引导
        {
            switch (triggerType)
            {
                case GuildTriggerType.UnlockIcon:
                case GuildTriggerType.UnlockFinish:
                    {
                        if (guild != null && guild.hideName == objName)//判断引导是否结束
                            SetGuildLine(true);

                        var info = infos.Find(t => !guildLst.Contains(t.id) && t.triggerName == objName);
                        if (info == guild || guild != null && info.priority < guild.priority) return;//当前进行中的引导优先级大于触发的引导
                        SetGuildLine(false, info);
                    }
                    break;
                default:
                    {
                        //先判断该触发条件下的引导是否满足条件
                        if (guild != null && guild.hideType == (int)triggerType && guild.hideName == objName)
                        {
                            if (guild.hideNum <= num)
                                SetGuildLine(true);
                        }

                        //检测新的引导是否满足条件
                        var info = infos.Find(t => !guildLst.Contains(t.id) && t.triggerType == (int)triggerType && t.triggerName == objName);//触发式
                        if (info != null && info.triggerNum <= num)
                        {
                            if (info == guild || guild != null && info.priority < guild.priority) return;//当前进行中的引导优先级大于触发的引导
                            SetGuildLine(false, info);
                        }
                    }
                    break;
            }
        }

    }

}
