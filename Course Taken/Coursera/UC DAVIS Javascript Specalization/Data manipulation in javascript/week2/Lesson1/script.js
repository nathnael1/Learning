function iphone(){}

iphone.prototype.faceId=function(){
    console.log("face is registered")
    
}
iphone.prototype.video=function(){
    console.log("this is the video of iphone")
}
iphone.prototype.stocksApp=function(){
    console.log("stock app will increase/decrease ")
}

const Iphone=new iphone()

Iphone.app="hello this is the new app"
Iphone.stocksApp=function(){
    console.log("this is the updated version")
}

console.log(Iphone)
Iphone.stocksApp()
delete Iphone.stocksApp
//or Iphone.stocksApp=undefined
Iphone.stocksApp()
const manufacturer={
    name:"honda",
    year:1998,
    brand:"New",
    buy: function(){
        console.log("you can buy this car")
    }
}
const dealership=Object.create(manufacturer)
dealership.mycar="honda"

for(const key in dealership){
    if(dealership.hasOwnProperty(key)){
    const val=dealership[key]
    console.log(`this is ${key} and this is ${val}`)}
}

