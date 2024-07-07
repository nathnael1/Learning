// Smoothscroll Script...
$("nav ul li a").click(function(){
    let thisSection=$(this).attr("href");
    let thisLink=$(this);
    // alert(window.scrollTop())
    $("html,body").stop().animate({scrollTop: $(thisSection).offset().top -200}, 800,"easeOutCirc");
    return false;

});

$(window).on("load",function(){
  let posts=$("section");
  let allLinks=$("nav ul li a");
  let pageTop;
 
  let previousCounter=0;
  let counter=0
  let posTops=[];
  let doneResizing;
  posts.each(function(){
    posTops.push(Math.floor($(this).offset().top))
  })
  console.log(posTops)


    $(window).scroll(function(){
        // postPos=$(posts[0]).offset().top;
        pageTop=$(window).scrollTop()+210;
      
        // console.log(`${pageTop} and ${postPos}` )
        if(pageTop>posTops[counter+1]){
            
            counter++;
            console.log(`counter is now ${counter}`)
        }
        else if(pageTop<posTops[counter]&&counter>0){
            counter--
            console.log(`counter is now ${counter}`)

        }
        if(counter!=previousCounter){
            $(allLinks).removeClass("selected")
            $(allLinks).eq(counter).addClass("selected");
            previousCounter=counter
        }
    });
        $(window).on("resize",function(){
        clearTimeout(doneResizing)
        doneResizing=setTimeout(function(){
             posTops=[];
            posts.each(function(){
              posTops.push(Math.floor($(this).offset().top))
            })
      
       
       
       
        },5)
    })
    let pagePosition =$(window).scrollTop()+210;
    counter=0;
    for(let i=0;i<posTops.length;i++){
        if(pagePosition>posTops[i]){counter++}
    }
    counter--
    $(allLinks).removeClass("selected");
    $(allLinks).eq(counter).addClass("selected")
})