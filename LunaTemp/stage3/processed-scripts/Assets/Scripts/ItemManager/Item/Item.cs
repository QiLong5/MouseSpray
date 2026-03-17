using System;
using System.Collections;
using UnityEngine;
using DG.Tweening;
public enum ItemType
{
    RawMaterial,  //原材料
    Product,     //产品
    Money,      //钱
    FigherPatient,//战士病人
    FarmerPatient,//农夫病人
    Wheat,//小麦
    WheatItem,//小麦道具
}

public class Item : MonoBehaviour
{
    public Collider cd { get; private set; }

    [Header("基础信息")]
    public ItemType itemType;

    [Header("贝塞尔曲线信息")]
    public AnimationCurve movementEase = AnimationCurve.EaseInOut(0, 0, 1, 1);

    [Header("物品堆叠信息")]
    [Tooltip("物品在物品堆里面的堆叠高度")]
    public float stackHeight = 0.2f;

    [Tooltip("物品的宽度，用于调整堆栈间距")]
    public float itemWidth = 0.25f;

    // //决定本物品分配哪个物品堆去
    // public int targetStackListIndex { get; private set; } = 0;

    [Header("交易信息")]
    [Tooltip("物品价值")]
    public int value;


    //protected ItemStackManager playerStackManager;

    public bool hasBeenAddedToPlayer { get; set; } = false;

    //决定物品是否可以移动  
    public bool canDoFurtherMove { get; set; } = true;


    protected virtual void Awake()
    {
        cd = GetComponent<Collider>();
    }

    private void OnEnable()
    {
        hasBeenAddedToPlayer=false;
        transform.localScale=Vector3.one;
    }

    protected virtual void Start()
    {
        //if (Player.instance==null) return;
        //playerStackManager = Player.instance.itemStackManager;

        // 在 Start 中根据物品类型自动分配堆栈索引
        //targetStackListIndex = playerStackManager.GetStackIndexByItemType(itemType);
    }

    private void Update()
    {
    }



    //不碰到调用直接捡起
    public void PickUpToPlayer()
    {
        var playerStackManager = Player.instance.itemStackManager;
        var targetStackListIndex = playerStackManager.GetStackIndexByItemType(itemType);
        if (playerStackManager.stackList[targetStackListIndex].stackAmount >= playerStackManager.stackList[targetStackListIndex].maxStackAmount)
        {
            ReturnSelf();
            Player.instance.maxImg.gameObject.SetActive(true);
        }
        else
        {
            playerStackManager.stackList[targetStackListIndex].StackItem(this);
        }
    }
    //飞向堆叠器
    public void PickUpToPlayer(ItemStack item,bool isPlayer)
    {
        if (item.stackAmount >= item.maxStackAmount)
        {
            ReturnSelf();
            if (isPlayer)
                Player.instance.maxImg.gameObject.SetActive(true);
        }
        else
            item.StackItem(this);
    }
    

    //物品碰到玩家时会被玩家捡起来
    protected virtual void OnTriggerEnter(Collider other)
    {
        if (other.transform.CompareTag("Player") && !hasBeenAddedToPlayer)
        {
            var playerStackManager = Player.instance.itemStackManager;
            var targetStackListIndex = playerStackManager.GetStackIndexByItemType(itemType);
            playerStackManager.stackList[targetStackListIndex].StackItem(this);
        }
    }

    //控制物品移动的函数，默认是本地空间，下面重载了多个版本，还另外写了一个世界空间的版本
    public void MoveAlongCurve([Bridge.Ref] Vector3 _startPosition, [Bridge.Ref] Vector3 _endPosition, Action action=null,[Bridge.Ref] Vector3 offsetRotation=default(UnityEngine.Vector3))
    {
        StopAllCoroutines();
        StartCoroutine(MoveAlongCurve_Coroutine(_startPosition, _endPosition, action,offsetRotation));
    }
    private IEnumerator MoveAlongCurve_Coroutine([Bridge.Ref] Vector3 _startPosition, [Bridge.Ref] Vector3 _endPosition, Action action=null,[Bridge.Ref] Vector3 offsetRotate=default(UnityEngine.Vector3))
    {
        canDoFurtherMove = false;

        float movementDuration = 0.5f;
        float curveHeight = _startPosition.y + GameDataEditor.instance.itemHeightY;
        if (_endPosition.y > _startPosition.y)
        {
            curveHeight = _endPosition.y + GameDataEditor.instance.itemHeightY;
        }


        Quaternion startRotation = transform.localRotation;
        Quaternion endRotation = Quaternion.Euler(offsetRotate);

        Vector3 startScale = transform.localScale;
        Vector3 endScale = Vector3.one;

        Vector3 midPoint = (_startPosition + _endPosition) * 0.5f;
        Vector3 controlPoint = midPoint + Vector3.up * curveHeight;

        float elapsedTime = 0f;

        while (elapsedTime < movementDuration)
        {
            // 应用缓动曲线计算插值比例
            float t = movementEase.Evaluate(elapsedTime / movementDuration);

            // 计算贝塞尔曲线上的位置
            transform.localPosition = CalculateBezierPoint(t, _startPosition, controlPoint, _endPosition);
            transform.localRotation = Quaternion.Lerp(startRotation, endRotation, t);
            transform.localScale = Vector3.Lerp(startScale, endScale, t);

            elapsedTime += Time.deltaTime;
            yield return null;
        }

        // 确保最终位置准确
        transform.localPosition = _endPosition;
        transform.localRotation = endRotation;
        transform.localScale = endScale;

        ScaleFX();
        action?.Invoke();
        yield return null;
        canDoFurtherMove = true;

    }
    
    // 二次贝塞尔曲线计算公式
    private Vector3 CalculateBezierPoint(float t,  [Bridge.Ref] Vector3 p0,  [Bridge.Ref] Vector3 p1,  [Bridge.Ref] Vector3 p2)
    {
        float u = 1 - t;
        float tt = t * t;
        float uu = u * u;

        return uu * p0 + 2 * u * t * p1 + tt * p2;
    }

    //物品移动完成后变大再变小的效果
    private void ScaleFX()
    {
        StartCoroutine(ScaleFX_Coroutine());
    }
    private IEnumerator ScaleFX_Coroutine()
    {
        Vector3 startScale = 1.25f * Vector3.one;
        Vector3 endScale = Vector3.one;
        transform.localScale = startScale;

        float timer = 0;
        float duration = 0.2f;
        float progress = 0;

        while (timer < duration)
        {
            progress = timer / duration;
            transform.localScale = Vector3.Lerp(startScale, endScale, progress);

            timer += Time.deltaTime;
            yield return null;
        }

        transform.localScale = endScale;
    }


    public void ReturnSelf()
    {
        returnSelfIE=ReturnSelfIE();
        StartCoroutine(returnSelfIE);
    }
    IEnumerator returnSelfIE;
    IEnumerator ReturnSelfIE()
    {
        yield return new WaitForSeconds(2f);
        transform.DOScale(0,0.5f);
        yield return new WaitForSeconds(0.5f);
        PoolManager.instance.ReturnItem(this);
    }
}
