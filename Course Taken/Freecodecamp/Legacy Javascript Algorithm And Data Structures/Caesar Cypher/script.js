function rot13(str){
    let allAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    let result="";
    
    for(let i=0;i<str.length;i++){
        let char=str[i];
    if(/^[A-Z]$/.test(char)){
        let alphabetEach=allAlphabet.indexOf(str[i]);
        let shiftedIndex=(alphabetEach+13)%26;
        result+=allAlphabet[shiftedIndex]
        
    }else{
        result+=char;
    }
    
    }
    return result;
}
 
console.log(rot13("SERR PBQR PNZC"));