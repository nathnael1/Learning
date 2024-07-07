(function(){//simple slideShow
    "use strict"
let imageList=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"]
const image= document.getElementById("slideShowImage");
const firstLink=document.getElementById("prev");
const secondLink=document.getElementById("next");
let number=0;

firstLink.addEventListener("click",(event)=>{
    
    event.preventDefault();
    
     if(number>0){
     
     number--;
    }
    else{
        number=imageList.length-1
    }
    
    image.setAttribute("src",imageList[number]);
 });
secondLink.addEventListener("click",(event)=>{
    
   event.preventDefault();
   
    if(number<imageList.length-1){
  
    number++;
    }
    else{
        number=0;
    
}
image.setAttribute("src",imageList[number]);
    
   
});

})()