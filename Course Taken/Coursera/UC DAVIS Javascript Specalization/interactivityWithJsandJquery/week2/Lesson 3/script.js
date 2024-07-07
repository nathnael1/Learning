// JavaScript goes here
let alllinks=document.querySelectorAll("ul li a");
alllinks.forEach(function(eachLink){
    eachLink.addEventListener("click",smoothScroller)
});
function smoothScroller(event){
    event.preventDefault()
    let targetId=event.target.getAttribute("href")
    let targetSection=document.querySelector(targetId)
 
    let originalTop=Math.floor(targetSection.getBoundingClientRect().top-210);
    window.scrollBy({top:originalTop,left:0,behavior:"smooth"})
    console.log(originalTop)
}
window.addEventListener("load",function  (){
    let posts=document.querySelectorAll("section");
    let post=[];
    let counter=1;
    let previousCounter=1;
    let doneResizing;
    let pageTop;

    posts.forEach(function(item){
        post.push(Math.floor(item.getBoundingClientRect().top+window.pageYOffset));
    })
    window.addEventListener("scroll",function(){
        pageTop=window.pageYOffset+215;
        if(pageTop>post[counter]){
            counter++;
            console.log(`scrolling down ${counter}`)
        }else if(counter>1 && post[counter-1]>pageTop){
            counter--
            console.log(`scrolling down ${counter}`)
        }
        if(counter!=previousCounter){
            alllinks.forEach(function(eachLink){
                eachLink.removeAttribute("class")
            });
            const thisLink=document.querySelector(`nav ul li:nth-child(${counter}) a`);
            thisLink.className="selected";
            previousCounter=counter;
        }
    });
    window.addEventListener("resize",function(){
        clearTimeout(doneResizing)
        doneResizing=setTimeout(function(){
            post=[];
            posts.forEach(function(item){
                post.push(Math.floor(item.getBoundingClientRect().top+window.pageYOffset));
            })
        },5)
    })
let newPosition=window.pageYOffset+215;
counter=0;
    for(let i=0;i<post.length;i++){
 
        if(newPosition>post[i]){
            counter++
        }
    }
    document.querySelectorAll("nav ul li a").removeAttribute("class");
    const thisLink=document.querySelector(`nav ul li:nth-child(${counter}) a`);
    thisLink.className="selected";
})

