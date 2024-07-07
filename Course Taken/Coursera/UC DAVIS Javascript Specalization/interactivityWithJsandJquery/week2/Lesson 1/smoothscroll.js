// Smoothscroll Script...
$("nav ul li a").click(function(){
    let thisSection=$(this).attr("href");
    let thisLink=$(this);
    // alert(window.scrollTop())
    $("html,body").stop().animate({scrollTop: $(thisSection).offset().top -200}, 800,"easeOutCirc",function(){
        $("nav ul li a").removeClass("selected")
        $(thisLink).addClass("selected")
    });

})