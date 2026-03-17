using System.Collections.Generic;
using UnityEngine;

public class GroundItemStack : ItemStack
{
    protected override void Start()
    {
        stackedItemList = new List<Item>();

        nextStackPosition = Vector3.zero;
    }

    protected override void Update()
    {
    }
    public PatientItem GetPatient()
    {
        for (int i = 0; i < stackedItemList.Count; i++)
        {
            if (stackedItemList[i].itemType == ItemType.FigherPatient||stackedItemList[i].itemType == ItemType.FarmerPatient)
                return stackedItemList[i] as PatientItem;
        }
        return null;
    }

    //堆叠物品
    public override void StackItem(Item _item)
    {
        _item.transform.parent = transform;
        _item.gameObject.SetActive(true);
        if (stackAmount >= maxHeight)
        {
            _item.MoveAlongCurve(_item.transform.localPosition, nextStackPosition,()=> { _item.gameObject.SetActive(false);},offsetRotation);
        }
        else
        {
            _item.MoveAlongCurve(_item.transform.localPosition, nextStackPosition,offsetRotation:offsetRotation);
        }
    
        stackAmount++;
        if (stackAmount >= maxHeight)
        {
            nextStackPosition = new Vector3(0, _item.stackHeight * maxHeight, 0);
        }
        else
        {
            nextStackPosition = new Vector3(0, _item.stackHeight * stackAmount, 0);
        }
      
        stackedItemList.Add(_item);
    }


    //移除最上面的物品
    public override Item RemoveTopItem()
    {
        if (stackAmount <= 0)
        {
            return null;
        }

        Item itemToRemove = stackedItemList[stackedItemList.Count - 1];
        if(!itemToRemove.canDoFurtherMove)
        {
            itemToRemove.StopAllCoroutines();
            itemToRemove.canDoFurtherMove=true;
          // return null;
        }
        stackAmount--;
        if (stackAmount >= maxHeight)
        {
            nextStackPosition =new Vector3(0, itemToRemove.stackHeight * maxHeight, 0);
        }
        else
        {
            nextStackPosition =new Vector3(0, itemToRemove.stackHeight * stackAmount, 0);
        }

        stackedItemList.Remove(itemToRemove);
        itemToRemove.transform.parent = null;
        itemToRemove.gameObject.SetActive(true);
        return itemToRemove;
    }

}
