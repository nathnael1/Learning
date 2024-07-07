let tabs=document.querySelectorAll("#tabs ul li a");
let divs=document.querySelectorAll("#tabs div")
for(let items of tabs){
    
    items.addEventListener("click",function(event){
        event.preventDefault()
        let attribute=this.getAttribute("href");
       let theBlock= document.querySelector(attribute)
       for(let div of divs){
        div.style.display="none"
       }
        for(let items of tabs){
            items.style.background="#a2a2a2";
            items.style.color="#eaeaea"
            
        }
        items.style.background="white";
        items.style.color="black";
        theBlock.style.display="block"
        theBlock.classList.add("anm")

        
    })

}