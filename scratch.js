function declareWinner(fighter1, fighter2, firstAttacker) {
 let hitC1 = 0;
  
   function whoWon(){
    if(fighter1.health > 0){
      console.log('1' , fighter1.health , fighter2.health)
      console.log(fighter1);
      console.log(fighter2);
      return fighter1.name;
    }
    else {
      /*console.log('2' , fighter2.health , fighter1.health)*/
      console.log(fighter1);
      console.log(fighter2);
      return fighter2.name;
    }
  }
 
  function secondRound(){
    
    if(fighter1.health > 0 && fighter2.health > 0){
    
    do {
      if(hitC1 > 0){
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        
      }       
      else {
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
      }
    }
    while (fighter1.health > 0 && fighter2.health > 0)
  }
  else{
    whoWon();
  }
  }
  /*below decides first attack*/
  function fightOn(){
    do {
      if (firstAttacker === fighter1.name){
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        hitC1++;
        secondRound();
        break;        
    }
      else if(firstAttacker === fighter2.name){
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        secondRound();
        break;
      }      
    }
    
    while(fighter1.health > 0 && fighter2.health > 0)
  
  }  
  
  /*below returns outcome of fight*/
 
  fightOn();
  return whoWon();
}