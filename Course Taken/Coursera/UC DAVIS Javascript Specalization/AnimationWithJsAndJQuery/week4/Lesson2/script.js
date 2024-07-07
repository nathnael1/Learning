// Add your JS here
$(window).on("load",function(){
    const  imageCount=$("#slider ul li").length;
    const imageWidth=$("#slider ul li img").first().width();
    //the width is 400 px
    const totalWidth=imageCount*imageWidth+"px";
    const position=document.querySelector("#slider");
    let leftPosition=0;
    let counter=0
    $("#slider ul").css("width",totalWidth);
    let interval=function(){
        counter++;
       
       
        if(counter==imageCount){
            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left",imageWidth+"px");
            leftPosition=`-${totalWidth}`;
            $("#slider ul").last().animate({"left":0},700,"easeInQuad");
            $("#slider ul").first().animate({"left":leftPosition},700,"easeInQuad",function(){
                $("#slider ul").first().remove()
            });
            counter=0;
            
        }else{
        leftPosition=`-${counter*imageWidth}px`;
        $("#slider ul").animate({"left":leftPosition},700,"easeInQuad");
        
        }
  
        
    }
    let returning=setInterval(interval,2000)
$("#slider").mouseover(function(){
        clearInterval(returning)
      })
$("#slider").mouseout(function(){
    returning=setInterval(interval,2000);
})


})

