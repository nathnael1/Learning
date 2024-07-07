const submit=document.getElementById("convert");
let paragraph=document.getElementsByTagName("p")[0];
let header=document.getElementsByTagName("h1")[0];
const answer=document.getElementsByClassName("invisible")[0];

mtk();
document.addEventListener("keydown",(event)=>{
   let valueOfKey=event.key.toLocaleLowerCase();
   if(valueOfKey=="k"){
    paragraph.innerHTML="Type in a number of kilometers and click the button to convert the distance to miles";
    header.innerHTML="Kilometers to Miles Converter"
    ktm()
   }else if(valueOfKey=="m"){
    paragraph.innerHTML="Type in a number of miles and click the button to convert the distance to kilometers";
    header.innerHTML="Miles to Kilometers Converter"
    mtk()
   }
})
function mtk(){
    submit.addEventListener("submit",(event)=>{
        event.preventDefault();
        let  prompt=parseFloat(document.getElementById("distance").value);
        let calculation=(prompt/1.6).toFixed(3);
        answer.className="visible";
    
        if(prompt){
            answer.innerHTML=`${prompt} miles converted to ${calculation}  Kilometers`
        }else{
            answer.innerHTML="please input only number";
        }
        
    });
}
function ktm(){
    submit.addEventListener("submit",(event)=>{
        event.preventDefault();
        let  prompt=parseFloat(document.getElementById("distance").value);
        let calculation=(prompt*1.6).toFixed(3);
        answer.className="visible";
    
        if(prompt){
            answer.innerHTML=`${prompt} miles converted to ${calculation}  Kilometers`
        }else{
            answer.innerHTML="please input only number";
        }
        
    });
    
}

