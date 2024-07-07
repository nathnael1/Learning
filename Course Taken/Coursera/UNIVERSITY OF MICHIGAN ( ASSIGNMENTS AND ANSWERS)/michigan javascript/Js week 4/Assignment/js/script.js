function billingFunction(){
   var same= document.getElementById("same");
   var shippingName=document.getElementById('shippingName').value;
   var shippingZip=document.getElementById('shippingZip').value;
   if(same.checked){
document.getElementById("billingName").value=shippingName;
document.getElementById("billingZip").value=shippingZip;
   }else{
    document.getElementById("billingName").value="";
document.getElementById("billingZip").value="";
   }
}