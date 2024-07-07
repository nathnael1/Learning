// using plain js
// (function(){let  subLink=document.querySelectorAll("ul li ul");
//     "use stirct"
// let mainLink=document.querySelectorAll(".menulink")
// function hideSubMenus(){
//     for(let items of subLink){
//         items.className="hide-menu"
//     }
    
// }
// hideSubMenus()
// for(let items of mainLink){
//     items.addEventListener("click",function(event){
//         event.preventDefault();

//        let subSubLink= this.parentNode.children[1];
       
//        if(subSubLink.classList.contains("hide-menu")){
//         hideSubMenus()
//         subSubLink.className="show-menu"
//        }else{
//         subSubLink.className="hide-menu"
//        }
       

//     })
// }
// })();
(function(){
$("ul li ul").hide()
$(".menulink").click(function(){
    let thisMenu=$(this).next("ul");
    $("ul li ul").not(thisMenu).hide()
    thisMenu.toggle()
})})()