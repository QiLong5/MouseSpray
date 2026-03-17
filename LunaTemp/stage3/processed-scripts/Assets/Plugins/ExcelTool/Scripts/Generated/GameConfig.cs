using System.Collections.Generic;
using UnityEngine;

namespace ExcelTool
{
    /// <summary>
    /// GameConfig 配置数据
    /// 自动生成，请勿手动修改
    /// </summary>
    [CreateAssetMenu(fileName = "GameConfig", menuName = "ExcelTool/GameConfig")]
    public class GameConfig : ScriptableObject
    {
        [Header("=== 工具元数据（请勿手动修改） ===")]
        /// <summary>
        /// 元数据：Excel文件路径
        /// </summary>
        [Tooltip("此文件由工具自动管理，请勿手动修改")]
        public string _excelFilePath = "";

        /// <summary>
        /// 元数据：使用的工作表索引（逗号分隔）
        /// </summary>
        [Tooltip("此文件由工具自动管理，请勿手动修改")]
        public string _sheetIndices = "";

        [Space(20)]
        /// <summary>
        /// 玩家数据
        /// </summary>
        public 玩家数据Data 玩家数据 = new 玩家数据Data();

        /// <summary>
        /// 老鼠数据
        /// </summary>
        public 老鼠数据Data 老鼠数据 = new 老鼠数据Data();

        /// <summary>
        /// 其他配置
        /// </summary>
        public 其他配置Data 其他配置 = new 其他配置Data();

        /// <summary>
        /// 图标配置 - ClerkInfo
        /// </summary>
        public List<ClerkInfoItem> clerkInfo = new List<ClerkInfoItem>();

        /// <summary>
        /// 引导配置 - GuildInfo
        /// </summary>
        public List<GuildInfoItem> guildInfo = new List<GuildInfoItem>();

        /// <summary>
        /// 玩家数据 数据
        /// </summary>
        [System.Serializable]
        public class 玩家数据Data
        {
            /// <summary>
            /// 玩家移动速度
            /// </summary>
            public float playerSpeed = 6.0f;

            /// <summary>
            /// 玩家旋转平滑系数
            /// </summary>
            public float playerTurnSmoothTime = 0.1f;

            /// <summary>
            /// 玩家最大血量
            /// </summary>
            public int playerMaxHp = 100;

        }

        /// <summary>
        /// 老鼠数据 数据
        /// </summary>
        [System.Serializable]
        public class 老鼠数据Data
        {
            /// <summary>
            /// 老鼠数量上限
            /// </summary>
            public int enemyCount = 30;

            /// <summary>
            /// 老鼠移动速度
            /// </summary>
            public float enemySpeed = 4.0f;

            /// <summary>
            /// 老鼠击退距离
            /// </summary>
            public float enemyKnockbackForc = 20.0f;

            /// <summary>
            /// 老鼠掉落金币值
            /// </summary>
            public int enemyDropMoney = 10;

            /// <summary>
            /// 初始老鼠数量
            /// </summary>
            public int enemyInitNum = 5;

        }

        /// <summary>
        /// 其他配置 数据
        /// </summary>
        [System.Serializable]
        public class 其他配置Data
        {
            /// <summary>
            /// 小麦生长时间
            /// </summary>
            public float wheatTime = 3.0f;

            /// <summary>
            /// 门口普通病人上限
            /// </summary>
            public int patientNum = 6;

            /// <summary>
            /// 门口泡汤类病人上限
            /// </summary>
            public int farmerPatientNum = 3;

            /// <summary>
            /// 电梯升/降时间
            /// </summary>
            public float elevatorTime = 0.5f;

            /// <summary>
            /// 病人打针后掉落金币值
            /// </summary>
            public int patienMoney = 10;

            /// <summary>
            /// 病人泡汤后掉落金币值
            /// </summary>
            public int farmerPatienMoney = 50;

            /// <summary>
            /// 病人泡汤消耗小麦数量
            /// </summary>
            public int wheatPerPatient = 1;

            /// <summary>
            /// 打针给金币的金币储存上限
            /// </summary>
            public int maxPatient1 = 10;

            /// <summary>
            /// 泡汤给金币的金币储存上限
            /// </summary>
            public int maxPatient2 = 10;

            /// <summary>
            /// 战士金币存储最大高度
            /// </summary>
            public int maxPatient3 = 10;

            /// <summary>
            /// 一颗金币价值
            /// </summary>
            public int moneyValue = 10;

            /// <summary>
            /// 每个npc采集麦子的效率_间隔(秒)
            /// </summary>
            public float collectTime = 2.0f;

            /// <summary>
            /// 每个npc采集麦子的效率_数量
            /// </summary>
            public int collectNum = 1;

            /// <summary>
            /// 战士的掉血效率_间隔(秒)
            /// </summary>
            public float HpTime = 2.0f;

            /// <summary>
            /// 战士的掉血效率_百分比
            /// </summary>
            public float HpPecent = 5.0f;

            /// <summary>
            /// 主角一次运送普通病人的数量上限
            /// </summary>
            public int maxPatienNum = 6;

            /// <summary>
            /// 主角一次运送泡汤病人的数量上限
            /// </summary>
            public int maxfarmerPatienNum = 3;

            /// <summary>
            /// 泡汤区一次最多容纳的病人数量上限
            /// </summary>
            public int maxSoakNum = 3;

            /// <summary>
            /// 电梯最大容纳农夫数量
            /// </summary>
            public int maxElevatorNum = 6;

        }

        /// <summary>
        /// 图标配置 - ClerkInfo 数据项
        /// </summary>
        [System.Serializable]
        public class ClerkInfoItem
        {
            /// <summary>
            /// 图标id
            /// </summary>
            public int id;

            /// <summary>
            /// 累计获得金币数后
            /// </summary>
            public int getTotalCoin;

            /// <summary>
            /// 需解锁id前提
            /// </summary>
            public List<int> unlockIds;

            /// <summary>
            /// 需投入金币数
            /// </summary>
            public int price;

            /// <summary>
            /// 触发事件
            /// </summary>
            public string eventStr;

        }

        /// <summary>
        /// 引导配置 - GuildInfo 数据项
        /// </summary>
        [System.Serializable]
        public class GuildInfoItem
        {
            /// <summary>
            /// 引导id
            /// </summary>
            public int id;

            /// <summary>
            /// 优先级
            /// </summary>
            public int priority;

            /// <summary>
            /// 触发的引导类型
            /// </summary>
            public int triggerType;

            /// <summary>
            /// 数量条件
            /// </summary>
            public int triggerNum;

            /// <summary>
            /// 触发对象
            /// </summary>
            public string triggerName;

            /// <summary>
            /// 移除引导的触发类型
            /// </summary>
            public float hideType;

            /// <summary>
            /// 数量条件
            /// </summary>
            public int hideNum;

            /// <summary>
            /// 触发对象
            /// </summary>
            public string hideName;

        }

    }
}
