(function(){
const detailForm=document.getElementById("destination_details_form");



detailForm.addEventListener("submit",handle);
function handle(event){
    let destname=event.target.elements["name"].value;
    let destlocation=event.target.elements["location"].value;
    let destphoto=event.target.elements["photo"].value;
    let destdescription=event.target.elements["description"].value;
    event.preventDefault();
  for(let i=0;i<detailForm.length;i++){
    detailForm.elements[i].value=""
  }
  let destCard=createCard(destname,destlocation,destphoto,destdescription);
  let wishContainer=document.getElementById("destinations_container");
  if(wishContainer.children.length==0){
    document.getElementById("title").innerHTML="My wishList"
  }
wishContainer.appendChild(destCard);

  
}
function  createCard(name,location,photo,description){
    let card= document.createElement("div");
    card.className="card"
    let img=document.createElement("img");
    img.setAttribute("alt",name);
    let constPhoto="images/signpost.jpg";
    if(photo.length==0){
        img.setAttribute("src",constPhoto)
    }else{
        img.setAttribute("src",photo)
    }
    let cardBody=document.createElement("div");
    cardBody.className="card-body"
    let cardTitle=document.createElement("h3");
    cardTitle.innerHTML=name;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(img)
    let cardSub=document.createElement("h4");
    cardSub.innerHTML=location
    cardBody.appendChild(cardSub);
    if(description.length!=0){
        let descript=document.createElement("p");
        descript.className="card-text";
        descript.innerHTML="description"
        cardBody.appendChild(descript)
    }
    let cardDelete=document.createElement("button");
    cardDelete.innerHTML="Remove";
    cardDelete.addEventListener("click",removeDestination);
    cardBody.appendChild(cardDelete);
    card.appendChild(cardBody);
    return card;
}
function removeDestination(event){
let card=event.target.parentElement.parentElement;
if(document.getElementById("destinations_container").children.length==1){
    document.getElementById("title").innerHTML="Enter  destination details";
  }
card.remove();
}
})()