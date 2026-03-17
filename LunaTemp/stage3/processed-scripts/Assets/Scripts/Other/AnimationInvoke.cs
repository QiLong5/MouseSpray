using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationInvoke : MonoBehaviour
{
    public Enemy enemy;

    public void PlayerAttack()
    {
        if (transform.parent.GetComponent<Player>() != null)
        {
            Player.instance.IsAttacking=true;
            Player.instance.Attack();
        }
        if (transform.parent.GetComponent<FighterPatientItem>() != null)
        {
            var patien = transform.parent.GetComponent<FighterPatientItem>();
            patien.IsAttacking=true;
            patien.Attack();
        }
    }
    public void PlayerAttackFinsh()
    {
        if (transform.parent.GetComponent<Player>() != null)
        {
            Player.instance.IsAttacking =false;
            Player.instance.IsAttack=false;
        }
        if (transform.parent.GetComponent<FighterPatientItem>() != null)
        {
            var patien = transform.parent.GetComponent<FighterPatientItem>();
            patien.IsAttacking=false;
            patien.IsAttack=false;
        }
    }

    public void EnemyAttack()
    {
        if (enemy!=null)
        {
            enemy.AttackPlayer();
        }
    }
}
