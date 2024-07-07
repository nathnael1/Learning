//script.js i combine both hellospeaker and bye speaker with one script folder
(function(){

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	
	var hellospeaker= {};
	hellospeaker.speak=	function(name) {
  console.log( "Hello " + name);
}
	
	
	var byespeaker={};
	byespeaker.speak= 	function(name) {
  console.log( "Good Bye " + name);
}
	for (var i = 0; i < names.length; i++) {


		var firstLetter = names[i].charAt(0).toLowerCase();
				  if (firstLetter === 'j'){
				  	byespeaker.speak(names[i]);
   
  } else {
    hellospeaker.speak(names[i]);
  }

  
}


	
})();

