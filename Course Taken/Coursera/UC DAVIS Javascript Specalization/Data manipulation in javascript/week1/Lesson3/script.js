jQuery.validator.addMethod("phoneRegex", function(value, element) {

    return this.optional( element ) || /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/ig.test(value);
  }, 'Please enter Us Phone Number');
$("#myform").validate({
    rules:{
        name:"required",
        email:{required:true,email:true },
        "cheese[]":{
            required:true,minlength:3,maxlength:3},
        phone:{required:true,phoneRegex:true},
        cheesetype:"required"
    },
    messages:{
        name:"Enter your full name",
        email:{required:"Enter your Email",email:"The Email mus be in correct order"},
        "cheese[]":"It must be 3",
        phone:{required:"Enter a phone number",phoneRegex:"It must be a us phone Number"},
        cheesetype:"please select cheese type"
    },
    errorContainer:"#messagebox",
    errorLabelContainer:"#messagebox ul",
    wrapper:"li"
})