const Submit=document.getElementById("convert");
const answer=document.getElementsByClassName("invisible")[0];
Submit.addEventListener("submit",(event)=>{
    event.preventDefault()
    let prompt=parseFloat(document.getElementById("distance").value);
    const calculation=(prompt*1.6).toFixed(3)
    const strings= `${prompt} miles converts to ${calculation} Kilometers`
    answer.className="visible"
    if(prompt){
        answer.innerHTML=strings;
    }else{
        answer.innerHTML="please Input a number"
    }
  
   

})