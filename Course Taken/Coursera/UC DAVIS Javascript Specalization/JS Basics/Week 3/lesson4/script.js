//Advanced slideshow
let imageList=["slides/image1.jpg","slides/image2.jpg","slides/image3.jpg","slides/image4.jpg","slides/image5.jpg"]
const prev=document.getElementById("previous");
const next=document.getElementById("next");
const image=document.getElementById("myimage");
const container=document.getElementById("content");
let num=0;
prev.addEventListener('click',(event)=>{
    event.preventDefault();
    if(num>0){
        num--
    }else{
        num=imageList.length-1
    }

removeElement();
})
next.addEventListener('click',(event)=>{
    event.preventDefault();
    if(num<imageList.length-1){
        num++
    }else{
        num=0
    }
removeElement()
})
function removeElement(){
    image.setAttribute("src",imageList[num]);
    const newSlide=document.createElement("img")
    newSlide.setAttribute("src",imageList[num])
    newSlide.className="fadeinimg";
    container.appendChild(newSlide);
    if(container.childElementCount>2){
        container.removeChild(container.children[0])
    }
}