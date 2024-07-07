(function(window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var hellospeaker= {};
	hellospeaker.speakk=function(namee){
  console.log( "Hello" + namee);
}
	window.hellospeaker = hellospeaker;
})(window);
