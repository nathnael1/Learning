let counter=0;
let index=2;
let number=1;
let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]
console.log(alphabet.length)
for(let i=0;i<alphabet.length-1;i++){
    // cloning the left middle ana right sections  19 times using the alphabet index
    const leftCloned=$("#left").clone(true);
    const middleCloned=$("#middle").clone(true);
    const rightCloned=$("#right").clone(true);
    // appending the cloned element below the last right ided section
    $("#seating").append(leftCloned)
    $("#seating").append(middleCloned)
    $("#seating").append(rightCloned)
    // changing the row of the label using the alphabet array
    $(".label").eq(index).html(alphabet[counter+1])
    $(".label").eq(index+1).html(alphabet[counter+1])
    counter++; // increasing the counter in order to  use the new element of alphabet array i
    index+=2; // incrementing it two times  in order to get both the rows
}
$("section").children().each(function(){
    if($(this).hasClass("label")){

    }else{
        // changing the html content by increasing the number of all section element.
        $(this).not(".label").html(number);
        // giving all of them unique id.
        $(this).attr("id", `i${number}`);
        number++;
    }  
})


