(function(){
    "use strict";
let reservedSeats={
    record1:{
        owner:{
            fname:"Joe",
            lname:"Smith"
        },
        seat:"b19"
    },
    record2:{
        owner:{
            fname:"Joe",
            lname:"Smith"
        },
        seat:"b20"
    },
    record3:{
        owner:{
            fname:"Joe",
            lname:"Smith"
        },
        seat:"b21"
    },
    record4:{
        owner:{
            fname:"Joe",
            lname:"Smith"
        },
        seat:"b22"
    }
} //seats already reserved


function makeRows(sectionLength,rowLength,placment){
    
let counter=1;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
let html="";
alphabet.forEach(rows=>{
    switch(placment){
        case "left": html+=`<div class="label">${rows}</div>`;break;//make a label counter not changed
        case "right":counter+=rowLength-sectionLength;break;// add 12  to counter;
        default:counter+=(rowLength-sectionLength)/2;break;//add 3 to the counter
    }
    //loop in here
    for(let i=0;i<sectionLength;i++){
      
        html+=`<div class="a" id="${rows+counter}">${counter}</div>`//the class a is used for to determine wheather or not  the class are available and will change on r when reserved.
        counter++;
    }
    switch(placment){
        case "left":counter+=rowLength-sectionLength;break;//add 12  counter changed
        case "right":html+=`<div class="label">${rows}</div>`;break;// counter not changed making a label
        default:counter+=(rowLength-sectionLength)/2;break;//add 3 to the counter
    }
});
document.getElementById(placment).innerHTML=html
}

makeRows(3,15,"left");
makeRows(9,15,"middle");
makeRows(3,15,"right");

for(const key in reservedSeats){
    const obj=reservedSeats[key]
    if(reservedSeats.hasOwnProperty(key)){
        console.log(obj.seat)
        document.getElementById(obj.seat).className="r"
        document.getElementById(obj.seat).innerHTML="R"
    }

}
let selectedSeats=[]
let seats=document.querySelectorAll(".a");
seats.forEach(elements=>{
    elements.addEventListener("click",function(){
        seatSelectionProcess(elements.id)
        //get the id of the sit
        // seatSelectionProcess to add on the sit
    })
})
function seatSelectionProcess(thisSeat){
    // selectedSeats.push(thisSeat)
    let index=selectedSeats.indexOf(thisSeat)
    if(index>-1){
        //take the seat out of the array
        // change the class back to a
        selectedSeats.splice(index,1);
        document.getElementById(thisSeat).className="a";
    }else{
          // take the seat inside the array
        //change the class to s
        selectedSeats.push(thisSeat)
        document.getElementById(thisSeat).className="s";
      
    }
    console.log(selectedSeats)
  
}

}());
// let reservedArray=[];

// for(keys in reservedSeats){
//     for(keyss in reservedSeats[keys]){
//         if(keyss=="seat"){
         
//             reservedSeats[keys][keyss]=reservedSeats[keys][keyss].toUpperCase()
//             reservedArray.push(reservedSeats[keys][keyss]);
//         }
//     }
// }
// for(let i of reservedArray){
 
//     let x=document.getElementById(i)
//     if(x){
//         x.className="r";
//         x.innerHTML="R"
//     }
    
// }//my code

// let arrayStored=[]
// $("section *").not("section .label").click(function(){
//     if($(this).attr("class")!="r"){
//         if($(this).hasClass("a")){
//             $(this).removeClass("a").addClass("s")
//             arrayStored.push($(this).attr("id"))
//         }else{
//             $(this).removeClass("s").addClass("a") 
//            let index= arrayStored.indexOf($(this).attr("id"))
//            if (index!==-1){
//             arrayStored.splice(index,1)
//            }
//         }
//     }
//     console.log(arrayStored)
// })
// //my code

// alphabet.forEach(rows=>{
//     html+=`<div class="label">${rows}</div>`    
//     for(let i=0;i<3;i++){
//         html+=`<div id="${rows+counter}">${counter}</div>`
//         counter++;
//     }
//     counter+=12;    
// })
// $("#left").html(html)
// html=""; 
// counter=1;
// alphabet.forEach(rows=>{
//     counter+=12
//     for(let i=0;i<3;i++){
//         html+=`<div id="${rows+counter}">${counter}</div>`
//         counter++;
//     }
//     html+=`<div class="label">${rows}</div>`
    
// })
// $("#right").html(html)
// html="";
// counter=1;
// alphabet.forEach(rows=>{
//     counter+=3;
//     for(let i=0;i<9;i++){
//         html+=`<div id="${rows+counter}">${counter}</div>`
//         counter++;
//     }
//     counter+=3;
// })
// not organized code