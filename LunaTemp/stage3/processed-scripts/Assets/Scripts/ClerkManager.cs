using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static ExcelTool.GameConfig;

/// <summary>
/// 待解锁图标控制
/// </summary>
public class ClerkManager : MonoSingleton<ClerkManager>
{
    private int totalMoney;//玩家累计获得的金币数
    private List<ClerkInfoItem> infos;
    private List<int> displayIds=new List<int>();//已显示图标id
    public List<PurchaseZone_Clerk> clerks = new List<PurchaseZone_Clerk>();
    public List<GameObject> hideObjs = new List<GameObject>();//初始化隐藏的物体

    protected override void Start()
    {
        infos = GameDataEditor.instance.gameConfig.clerkInfo;
        //初始化配置
        for (int i = 0; i < clerks.Count; i++)
        {
            clerks[i].id = infos[i].id;
            clerks[i].InitPrice(infos[i].price);
            clerks[i].gameObject.SetActive(false);
        }
        for (int i = 0; i < hideObjs.Count; i++)
            hideObjs[i].SetActive(false);

        Check();
    }

    public void AddTotalMoney(int num)//玩家累积金币增加
    {
        if(num<=0) return;//仅计算增加的金币

        totalMoney+=num;
        Check();
    }

    public void Check()//显示条件检测   
    {
        if (clerks.Count == 0) return;
        for (int i = 0; i < infos.Count; i++)
        {
            var info=infos[i];
            if (!displayIds.Contains(info.id)&&info.getTotalCoin <= totalMoney)
            {
                bool isFull=true;
                foreach (var item in info.unlockIds)
                {
                    if(clerks.Exists(t=>t.id==item&&!t.hasCompletedPurchase))//存在没满足条件的id
                    {
                        isFull=false;
                        break;
                    }
                }

                if (isFull)
                {
                    displayIds.Add(info.id);
                    var clerk=clerks.Find(t=>t.id==info.id);
                    clerk.gameObject.SetActive(true);

                    GuildManager.instance.CheckGuild(GuildTriggerType.UnlockIcon,0,clerk.name);
                }
            }
        }
        
    }
}
