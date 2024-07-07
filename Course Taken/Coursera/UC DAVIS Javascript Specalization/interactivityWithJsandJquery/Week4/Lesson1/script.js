let startgame=document.getElementById("startgame");
let gameControl=document.getElementById("gamecontrol");
let game=document.getElementById("game");
let actionArea=document.getElementById("actions");
let score=document.getElementById("score");
let gameData={
    dice:["1die.jpg","2die.jpg","3die.jpg","4die.jpg","5die.jpg","6die.jpg"],
    index:0,
    players:["player 1","player 2"],
    scores:[0,0],
    roll1:0,
    roll2:0,
    rollSum:0,
    turnSum:0,
    turnSumValue:0,
    gameEnd:49
}
startgame.addEventListener("click",function(){
    //change Index
     gameData.index=Math.round(Math.random());
    gameControl.innerHTML="<h2>The game has started</h2>"
    gameControl.innerHTML+='<button id="quit">Do you want to quit</button>'
    
    document.getElementById("quit").addEventListener("click",function(){
        location.reload()
    })
    setUpTurn();
  
})
function setUpTurn(){
    game.innerHTML=`Roll the dice for ${gameData.players[gameData.index]}`;
    actionArea.innerHTML="<button id='roll'>Roll the Dice</button>";
    gameData.turnSumValue=0;
    document.getElementById("roll").addEventListener("click",function(){
        throwDice();
    })
}
function throwDice(){
    actionArea.innerHTML="";
    gameData.roll1=Math.floor((Math.random()*6))+1;
    gameData.roll2=Math.floor((Math.random()*6))+1
    game.innerHTML=`<p>Roll the dice  ${gameData.players[gameData.index]}</p>`;
    game.innerHTML+=`<img src="${gameData.dice[gameData.roll1-1]}"/>`
    game.innerHTML+=`<img src="${gameData.dice[gameData.roll2-1]}"/>`
    gameData.rollSum=gameData.roll1+gameData.roll2;
    gameData.turnSum=gameData.roll1+gameData.roll2;
    conditionChecker();


}
function checkWiningCondition(){
    if(gameData.scores[gameData.index]>gameData.gameEnd){
        actionArea.innerHTML="";
        score.innerHTML=` <h2>congratulation ${gameData.players[gameData.index]}  you have won Pig Dice by  ${gameData.scores[gameData.index]} points</h2>`
        document.getElementById("quit").innerHTML="Start a New game";
    }else{
      showCurrentScore();
    }

}
function showCurrentScore(){
    score.innerHTML=`The score of <strong>${gameData.players[0]}</strong> is ${gameData.scores[0]} and the score of <strong>${gameData.players[1]}</strong> is ${gameData.scores[1]}`
}
function conditionChecker(){
   
    if(gameData.rollSum==2){
        game.innerHTML+=`<p>oops snake eye</p>`
        gameData.scores[gameData.index]=0;
        gameData.index ? (gameData.index=0):(gameData.index=1);
       showCurrentScore();
        setTimeout(setUpTurn,4000);
 
     }
     else if(gameData.roll1==1||gameData.roll2==1){
        gameData.scores[gameData.index]=gameData.scores[gameData.index]-gameData.turnSumValue;
         gameData.index ? (gameData.index=0):(gameData.index=1);
         
         game.innerHTML+=`<p>one of the two dice has one. so we have to give the chance to ${gameData.players[gameData.index]} and ${gameData.turnSumValue} is dedudcted from your point</p>`
         showCurrentScore();
         setTimeout(setUpTurn,4000);
     }else{
         gameData.scores[gameData.index]+=gameData.rollSum;
         gameData.turnSumValue+=gameData.turnSum;
         actionArea.innerHTML=`<button id="rollagain"> Roll again</button><button id="pass">Pass</button>`
         document.getElementById("rollagain").addEventListener("click",function(){
            throwDice()
         })
         document.getElementById("pass").addEventListener("click",function(){
             gameData.index ? (gameData.index=0): (gameData.index=1);
             setUpTurn()
         })
         checkWiningCondition()
         
     }
}