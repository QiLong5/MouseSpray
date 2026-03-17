using UnityEngine;

/// <summary>
/// 多语言物体标记组件
/// 挂在需要根据语言显示/隐藏的物体上
/// </summary>
public class LanguageItem : MonoBehaviour
{
    [Header("当前物体对应的语言")]
    public LanguageType language = LanguageType.English;

    public enum LanguageType
    {
        ChineseSimplified,      // zh-CN 简体中文
        ChineseTraditional,     // zh-TW 繁体中文（台湾/香港/澳门通用）
        English,                // en-US 英文
        Japanese,               // ja-JP 日文
        Korean,                 // ko-KR 韩文
        French,                 // fr-FR 法文
        Russian,                // ru-RU 俄文
        Arabic,                 // ar-SA 阿拉伯文
        Thai,                   // th-TH 泰文
        German                  // de-DE 德文
    }

    /// <summary>
    /// 获取语言代码
    /// </summary>
    public string GetLanguageCode()
    {
        switch (language)
        {
            case LanguageType.ChineseSimplified: return "zh-CN";
            case LanguageType.ChineseTraditional: return "zh-TW";
            case LanguageType.English: return "en-US";
            case LanguageType.Japanese: return "ja-JP";
            case LanguageType.Korean: return "ko-KR";
            case LanguageType.French: return "fr-FR";
            case LanguageType.Russian: return "ru-RU";
            case LanguageType.Arabic: return "ar-SA";
            case LanguageType.Thai: return "th-TH";
            case LanguageType.German: return "de-DE";
            default: return "en-US";
        }
    }
}
