let context=document.getElementsByClassName("card-text");
let old=[];

for(let i=0;i<context.length;i++){
    old[i]=context[i].innerHTML;
}
function ca(index,ma){
    
    context[index].innerHTML="click to download the pdf on mobile view or to view it on desktop";
 
}
function caa(index){
context[index].innerHTML=old[index]
}
function general(elem,SRC){
    for(let i=0;i<elem.length;i++){
        if(elem.length>0){
            elem[0].setAttribute("src",SRC)
        }
    }
}
let image= document.getElementsByClassName("pd");
let imagee= document.getElementsByClassName("image1");
function changeImage(){
   
 
   general(image,"Image for scratch website/RP.jpg");
}
function backImage(){
   general(image,"Image for scratch website/pd.jpg")
}
function changeImage1(){
    general(imagee,"Image for scratch website/LN.jpg");
 }
 function backImage1(){
     general(imagee,"Image for scratch website/ad.jpg")
 }
 function openCustomAlert() {
    document.getElementById("overlayone").style.display = "block";
    document.getElementById("customAlertone").style.display = "block";
}
function closeCustomAlert(){
    document.getElementById("overlayone").style.display = "none";
    document.getElementById("customAlertone").style.display = "none";
}
function openCustomAlerttwo() {
    document.getElementById("overlaytwo").style.display = "block";
    document.getElementById("customAlerttwo").style.display = "block";
}
function closeCustomAlerttwo(){
    document.getElementById("overlaytwo").style.display = "none";
    document.getElementById("customAlerttwo").style.display = "none";
}
 function openCustomAlertthree() {
    document.getElementById("overlaythree").style.display = "block";
    document.getElementById("customAlertthree").style.display = "block";
}
function closeCustomAlertthree(){
    document.getElementById("overlaythree").style.display = "none";
    document.getElementById("customAlertthree").style.display = "none";
}
function openCustomAlertlast() {
    document.getElementById("overlaylast").style.display = "block";
    document.getElementById("customAlertlast").style.display = "block";
}
function closeCustomAlertlast(){
    document.getElementById("overlaylast").style.display = "none";
    document.getElementById("customAlertlast").style.display = "none";
}