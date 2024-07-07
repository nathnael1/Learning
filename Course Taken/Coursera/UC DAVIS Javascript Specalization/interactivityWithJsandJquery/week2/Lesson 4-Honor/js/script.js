// Smooth Scroll


// Flexslider

$(window).on("load",function(){
    $(".flexslider").flexslider({
        slideshow: true,       
        animationLoop: true,  
        animation: "slide",    
        pauseOnHover: true, 
        controlNav: false,      
        directionNav: false,   
        before: function(){ $(".cta").css("bottom", "-20%"); },
        start: function(){ $(".cta").animate({ bottom: "0%" }, 5000, "easeOutElastic"); },
        after: function(){ $(".cta").animate({ bottom: "0%" }, 5000, "easeOutElastic"); }
    });
    //Tabs
    $("#tabs ul li a").click(function(event){
        event.preventDefault();
        let theLink=$(this).attr("href");
    
        $("#tabs>div:visible").fadeOut(200,function(){
            $(theLink).fadeIn(200)
        })
        $("#tabs ul li a").css({background:" var(--tea-green)"})
        $(this).css({background:"var(--tea-green-light)"})
        
    })
    // Content Rotator
    let counter=1;
    function rotator(){
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(1000,function(){
        if($(this).is(`:last-child`)){
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter=1;
                    rotator();

                })
            },2000)
          
        }else{
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter++;
                    rotator();

                })
            },2000)
        }
    })
}
rotator()
// Features Rotator 
// slide down using flex slider and increaseing  size and color.

$("nav ul li a").click(function(){
    let thisSection=$(this).attr("href");
    let thisLink=$(this);
    $("html,body").stop().animate({scrollTop:$(thisSection).offset().top-200},800)
})
$("header div").click(function(){
    let thisLink=$(this);
    $("html,body").stop().animate({scrollTop:0},800)
})
})










