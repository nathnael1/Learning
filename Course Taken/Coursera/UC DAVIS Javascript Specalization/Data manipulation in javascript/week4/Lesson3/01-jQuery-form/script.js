// add script here
let formDataUrl="https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php"
$("#formdata").load(formDataUrl)
$("#myForm").validate()
$("#myForm").submit((event)=>{
	event.preventDefault()
	if($("#myForm").valid()==true){
		let dataString=$("#myForm").serialize();
		console.log(dataString)
	//alling serialize() on that form will convert the form data into a string like "name=John&email=john@example.com&age=25".
	$.ajax({
		type:"POST",
		url:formDataUrl,
		data:dataString,
		success:function(data){
			$("#formdata").html(data)
			$("#myForm").clearForm()
		}
	})
}
})
$.fn.clearForm = function () {
	return this.each(function () {

		var type = this.type;
		var tag = this.tagName.toLowerCase();

		if (tag == 'form') {
			return $(':input', this).clearForm();
		}
		if (type == 'text' || type == 'password' || type == 'email' || type == 'url' || tag == 'textarea') {
			this.value = '';
		}
		else if (type == 'checkbox' || type == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};