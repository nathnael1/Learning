const Denomnation=[
  
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000]

];
function checkCashRegister(price, cash, cid) {
let amountToReturn=Math.round(cash*100)-Math.round(price*100);
let cashOnhand={};
let cashTogive={};
cid.forEach((denomnation)=>{
  cashOnhand[denomnation[0]]=Math.round(denomnation[1]*100);
 
});

let index=Denomnation.length-1;
while(index>=0){
  let moneyName=Denomnation[index][0]
  let moneyValue=Denomnation[index][1]
  if(amountToReturn-moneyValue>0){

cashTogive[moneyName]=0;


while(cashOnhand[moneyName]>0&&amountToReturn-moneyValue>=0){


cashTogive[moneyName]+=moneyValue

cashOnhand[moneyName]-=moneyValue
amountToReturn-=moneyValue
}
  }
  index--
}

if(amountToReturn==0){
  let isRegisterEmpty=true;
  Object.keys(cashOnhand).forEach((moneyType)=>{
    if(cashOnhand[moneyType]>0){
      isRegisterEmpty=false;
    }
  });
  if(isRegisterEmpty){
    return{status:"CLOSED",change:cid}
  }else{
    let changeArray=[]
  Object.keys(cashTogive).map((moneytogive)=>{
  changeArray.push([moneytogive,cashTogive[moneytogive]/100])
  })
 return {status:"OPEN",change:changeArray}
  }
  
}return {status:"INSUFFICIENT_FUNDS",change:[]}
} 
 
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));