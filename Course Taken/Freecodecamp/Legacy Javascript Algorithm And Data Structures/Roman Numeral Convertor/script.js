function convertToRoman(num) {
 const romanNumerals=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
 const arabicNumerals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
 let result="";
for(let i=0;i<romanNumerals.length;i++){
 while(num>=arabicNumerals[i]){
result+=romanNumerals[i]
num-=arabicNumerals[i]
 }
}
return result
}

console.log(convertToRoman(3));