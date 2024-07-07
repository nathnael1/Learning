(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak=function(name){
    console.log("Bye " + name);
  }
  window.byeSpeaker=byeSpeaker;
})(window);
