using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NpcManager :MonoSingleton<NpcManager>
{
    public List<Enemy> mEnemies;
    public Queue<Customer> mCustomers =new Queue<Customer>();
    public List<Transform> mCustomerPath;
    public List<Transform> mCustomerExitPath;
    protected override void Start()
    {
        base.Start();
        InitCustomer();
    }
    private void Update()
    {
        EnemyCreate();
    }

    public virtual void EnemyCreate()
    {
        if (mEnemies.Count < GameDataEditor.instance.enemyCount)
        {
            var e = PoolManager.instance.GetNpc(NpcType.Enemy) as Enemy;
            e.transform.position = new Vector3(
                Random.Range(GameDataEditor.instance.patrolAreaMin.position.x, GameDataEditor.instance.patrolAreaMax.position.x),
                 e.transform.position.y,
                 Random.Range(GameDataEditor.instance.patrolAreaMin.position.z, GameDataEditor.instance.patrolAreaMax.position.z)
                );
            mEnemies.Add(e);
            e.gameObject.SetActive(true);
        }
    }

    public virtual void InitCustomer()
    {
        for (int i = 0; i < mCustomerPath.Count; i++)
        {
            Customer _Customer = PoolManager.instance.GetNpc(NpcType.Customer) as Customer;
            _Customer.transform.position = mCustomerPath[i].transform.position;
            _Customer.transform.forward = mCustomerPath[i].transform.forward;
            _Customer.gameObject.SetActive(true);
            mCustomers.Enqueue(_Customer);
        }
    }

    public virtual void DequeueCustomer()
    {
        StartCoroutine(CustomerExit(mCustomers.Dequeue()));
        Customer _Customer = PoolManager.instance.GetNpc(NpcType.Customer) as Customer;
        _Customer.transform.position = mCustomerPath[mCustomerPath.Count-1].transform.position;
        _Customer.transform.forward = mCustomerPath[mCustomerPath.Count - 1].transform.forward;
        _Customer.transform.position -= _Customer.transform.forward*2.5f;
        _Customer.gameObject.SetActive(true);
        mCustomers.Enqueue(_Customer);
        int i=0;
        foreach (var item in mCustomers)
        {
            item.MoveToTarget(mCustomerPath[i].position,()=>{ item.StopMovement();});
            i++;
        }
    }


    protected IEnumerator CustomerExit(Customer _customer)
    { 
       foreach (var item in mCustomerExitPath)
       {
            bool isfinsh=false;
            _customer.MoveToTarget(item.position,()=>{isfinsh=true;});
            while (!isfinsh)
            {
                yield return null;
            }
        }
       PoolManager.instance.ReturnCustomer(_customer);
    }

    public virtual void RemovePatient(PatientItem item)
    {

    }
    public virtual List<PatientItem> GetPatients(ItemType itemType)
    {
        return null;
    }
    public virtual void UnlockLevel()
    {

    }
    
    public virtual List<Enemy> GetEnemies2()
    {
        return null;
    }
}