using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 对象池管理器
/// </summary>
public class PoolManager :MonoSingleton<PoolManager>
{
    public Queue<UIHealthBar> mEnemyhps = new Queue<UIHealthBar>();
    public Queue<UIHealthBar> mFighterhps = new Queue<UIHealthBar>();
    public List<Item> itemPrefabs;
    public List<Npc> npcPrefabs;
    public UIHealthBar mEnemyHpPrefab;
    public UIHealthBar mFighterHpPrefab;
    private Dictionary<ItemType, Queue<Item>> items = new Dictionary<ItemType, Queue<Item>>();
    private Dictionary<NpcType, Queue<Npc>> npcs = new Dictionary<NpcType, Queue<Npc>>();
    public override void Awake()
    {
        base.Awake();
        //初始化池子队列
        for (int i = 0; i < itemPrefabs.Count; i++)
            items.Add(itemPrefabs[i].itemType, new Queue<Item>());
        for (int i = 0; i < npcPrefabs.Count; i++)
            npcs.Add(npcPrefabs[i].npcType, new Queue<Npc>());
    }

    public UIHealthBar GetEnemyHp()
    {
        UIHealthBar hp = null;
        if (mEnemyhps.Count > 0)
        {
            hp = mEnemyhps.Dequeue();
        }
        else
        {
            hp = Instantiate(mEnemyHpPrefab, UIManager.instance.mEnemyHps);
        }

        return hp;
    }
    public UIHealthBar GetFighterHp()
    {
        UIHealthBar hp =null;
        if (mFighterhps.Count > 0)
        {
            hp= mFighterhps.Dequeue();
        }
        else
        {
            hp = Instantiate(mFighterHpPrefab, UIManager.instance.mEnemyHps);
        }

        return hp;
    }

    public Npc GetNpc(NpcType npcType)
    {
        Npc _npc = null;
        var queue = npcs[npcType];
        if (queue.Count > 0)
        {
            _npc = queue.Dequeue();
        }
        else
        {
             var prefab= npcPrefabs.Find(t=>t.npcType==npcType);
            _npc = Instantiate(prefab, transform);
        }
        
        return _npc;
    }
    public Item GetItem(ItemType itemType)
    {
        Item obj = null;
        var queue = items[itemType];
        if(queue.Count>0)
            obj = queue.Dequeue();
        else
        {
            var itemPrefab= itemPrefabs.Find(t=>t.itemType==itemType);
            obj = Instantiate(itemPrefab, this.transform);
        }
        if (itemType == ItemType.Product)
            obj.gameObject.SetActive(true);
        else if (itemType == ItemType.Money)
            obj.value = GameDataEditor.instance.gameConfig.其他配置.moneyValue;
        return obj;
    }

    public void ReturnItem(Item item)
    {
        var queue = items[item.itemType];
        queue.Enqueue(item);
        item.gameObject.SetActive(false);
    }

    public void ReturnEnemyHp(UIHealthBar _enemyhp)
    {
        StartCoroutine(WaitDoIE(0.5f, () =>
        {
            mEnemyhps.Enqueue(_enemyhp);
            _enemyhp.gameObject.SetActive(false);
        }));
    }
    public void ReturnFighterHp(UIHealthBar _fighterhp)
    {
        StartCoroutine(WaitDoIE(0.5f,()=>
        {
            mFighterhps.Enqueue(_fighterhp);
            _fighterhp.gameObject.SetActive(false);
        }));
    }

    public void ReturnEnemy(Enemy _enemy,float waittimes=1f)
    {
        StartCoroutine(WaitDoIE(waittimes, () =>
        {
            NpcManager.instance.mEnemies.Remove(_enemy);
            var queue = npcs[NpcType.Enemy];
            queue.Enqueue(_enemy);
            _enemy.gameObject.SetActive(false);
        }));
       
    }
    public void ReturnCustomer(Customer _Customer)
    {
        var queue = npcs[NpcType.Customer];
        queue.Enqueue(_Customer);
        _Customer.gameObject.SetActive(false);

    }
    IEnumerator WaitDoIE(float waittimes,Action action)
    {
        yield return new WaitForSeconds(waittimes);
        action?.Invoke();
    }
}
