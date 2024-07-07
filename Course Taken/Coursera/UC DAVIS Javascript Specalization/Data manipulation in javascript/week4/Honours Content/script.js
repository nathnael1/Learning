const mainElement=document.querySelector("main");
const navLinks=document.querySelectorAll("nav ul li a")
let filmData;
let dataSet="films";
let url="https://ghibliapi.dev/films"
navLinks.forEach(eachLink=>{
    eachLink.addEventListener("click",event=>{
        event.preventDefault()
        let thisLink=event.target.getAttribute("href").substring(1);
        dataSet=thisLink;
        url=`https://ghibliapi.dev/`+thisLink;
        getData(url)
    })
})
async function getData(url){
    const dataPromise= await fetch(url);
    const data= await dataPromise.json()
    
    if(dataSet=="films"){
        mainElement.innerHTML="";
        filmData=data
        setSort(filmData);
        addCards(filmData)
        
        document.getElementById("order").removeAttribute("disabled")
        document.querySelector("nav form").style.visibility="visible"
    }else{
        mainElement.innerHTML="";
        document.querySelector("nav form").style.visibility="hidden"
        addCards(data)
    }
}

document.getElementById("order").addEventListener("change",function(){
    
   setSort(filmData);
   addCards(filmData)
})
getData(url)
function setSort(x){
   mainElement.innerHTML=""
    const sortOrder=document.getElementById("order").value;
    switch(sortOrder){
        case "title":x.sort((a,b)=>(a.title>b.title)?1:-1); break;
        case "release_date":x.sort((a,b)=>(a.release_date>b.release_date)?1:-1); break;
        case "rt_score":x.sort((a,b)=>(b.rt_score-a.rt_score)); break;
    }
 
    
}
function addCards(x){
    x.forEach(each=>{
        createCard(each)
    })
}
async function createCard(data){

    const card=document.createElement("article");
    // card.innerHTML=fileCardcontent(data)
    switch(dataSet){
        case "people":card.innerHTML=await peopleCardContent(data);break;
     // since it is  asynchornous function we have to use await
        case "films":card.innerHTML=fileCardcontent(data);break;
        case "locations":card.innerHTML=await locationCardContents(data);break;
        case "species":card.innerHTML=await speciesCardContent(data);break;
        case "vehicles":card.innerHTML=await vehiclesCardCreator(data);break;
  
    }
    mainElement.appendChild(card)
}
function fileCardcontent(data){
    let html=`<h2>${data.title}</h2>`;
    html+=`<p><strong>Director:</strong> ${data.director}</p>`
    html+=`<p><strong>Released:</strong> ${data.release_date}</p>`
    html+=`<p> ${data.description}</p>`
    html+=`<p><strong>Rotten Tomatoes:</strong> ${data.rt_score}</p>`
    return html;
}

async function peopleCardContent(data){
    const theFilms=data.films;
    let filmTitles=[]
    for (eachFilms of theFilms){
        const filmTitle=await individualItem(eachFilms,"title");
        filmTitles.push(filmTitle)
    }
    const species=await individualItem(data.species,"name")
    let html=`<h2>${data.name}</h2>`;
    html+=`<p><strong>Details:</strong> Gender ${data.gender}, age ${data.age}, eye color ${data.eye_color},
    hair color ${data.hair_color} </p>`
    html+=`<p><strong>Species:</strong> ${species}</p>`
    html+=`<p><strong>film Title:</strong> ${filmTitles.join(",")}</p>`
    return html;

}
async function locationCardContents(data){
    const regex="https:?:\/\/";
    const theResidents=data.residents;
    let residentantNames=[];
    for(eachResident of theResidents){
        if(eachResident.match(regex)){
            const resName=await individualItem(eachResident,"name");
            residentantNames.push(resName)
        }else{
            residentantNames[0]="no data available"
        }
    }
    const theFilms=data.films;
    let filmTitles=[]
    for (eachFilms of theFilms){
        const filmTitle=await individualItem(eachFilms,"title");
        filmTitles.push(filmTitle)
    }
    
    let html=`<h2>${data.name}</h2>`;
    html+=`<p><strong>Details:</strong> Climate ${data.climate}, Terrain ${data.terrain}, Surface Water ${data.surface_water},</p>`
    html+=`<p><strong>Residents:</strong> ${residentantNames.join(",")}</p>`
    html+=`<p><strong>film Title:</strong> ${filmTitles.join(",")}</p>`
    return html;

}
async function speciesCardContent(data){
    
    const theurl=data.people;
    let theUrls=[]
    for (eachurl of theurl){
        const urlName=await individualItem(eachurl,"name");
        theUrls.push(urlName)
    }
    const theFilms=data.films;
    let filmTitles=[]
    for (eachFilms of theFilms){
        const filmTitle=await individualItem(eachFilms,"title");
        filmTitles.push(filmTitle)
    }
    
    let html=`<h2>${data.name}</h2>`;
    html+=`<p><strong>Details:</strong> Classification ${data.classification}, eye Colors ${data.eye_colors}, Hair Colors ${data.hair_colors}, </p>`
    html+=`<p><strong> Name:</strong> ${theUrls.join(",")}</p>`
    html+=`<p><strong>film Title:</strong> ${filmTitles.join(",")}</p>`
    return html;

}
async function vehiclesCardCreator(data){
    

    
        const urlName=await individualItem(data.url,"name");

    const theFilms=data.films;
    let filmTitles=[]
    for (eachFilms of theFilms){
        const filmTitle=await individualItem(eachFilms,"title");
        filmTitles.push(filmTitle)
    }
    
    let html=`<h2>${data.name}</h2>`;
    html+=`<p><strong>Details:</strong> name ${data.name}, description ${data.description}, vehicle class ${data.vehicle_class},Length ${data.length}</p>`
    html+=`<p><strong> Name:</strong> ${urlName}</p>`
    html+=`<p><strong>film Title:</strong> ${filmTitles.join(",")}</p>`
    return html;

}
async function individualItem(url,item){
    let thisItem
    try{
    const itemPromise= await fetch(url);
    const data= await itemPromise.json();
    thisItem =data[item]}
    catch(err){
        thisItem="no data available"
    }finally{
        return thisItem
    }
}