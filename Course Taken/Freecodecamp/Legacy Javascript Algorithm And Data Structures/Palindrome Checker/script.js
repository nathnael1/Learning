function palindrome(str) {
    let first=str.toLowerCase()
  let second=  first.replace(/\W/g,"");
  let third=second.replace("_","");
  let correctWord=[...third]
  let singleCorrect=correctWord.slice("");
  let lastCorrect=[];
  for(let i=0;i<singleCorrect.length;i++){
   lastCorrect.unshift(singleCorrect[i]);
  }
  let finalLast=lastCorrect.join("");
  let finalFirst=singleCorrect.join("");
  if(finalFirst===finalLast){
    return true
  }else{
    return false
  }
  
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));