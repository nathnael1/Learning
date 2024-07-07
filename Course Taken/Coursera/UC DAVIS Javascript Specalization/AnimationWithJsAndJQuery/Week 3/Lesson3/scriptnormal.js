window.addEventListener("load",function(){
    const slideCount=document.querySelectorAll ("#slider-wrapper ul li").length;
    const imageWidth=document.querySelector("#slider-wrapper").offsetWidth;
    const allWidth=`${slideCount*imageWidth}px`;
    const next=document.querySelector("#next");
    const previous=document.querySelector("#prev");
    const slider=document.querySelector("#slider-wrapper ul");
    const parentElement=document.getElementById("slider-wrapper");
    let counter=0;
    let leftPosition=0;
    slider.style.width=allWidth 
    next.addEventListener("click",function(event){
        event.preventDefault();
        counter++;
       
        if(counter==slideCount){
            counter=0;
        }
        leftPosition=`-${counter*imageWidth}px`;
        slider.style.left=leftPosition;
        
    })
    previous.addEventListener("click",function(event){
        event.preventDefault();
        counter--
        
        if(counter<0){
            counter=slideCount-1
        }
        leftPosition=`-${counter*imageWidth}px`;
        slider.style.left=leftPosition;
        
    })
})