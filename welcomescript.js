$(document).ready(function() {
	var greetingsArray = [ "Hello", "Hi There", "Howdy" ];
	var item = greetingsArray[Math.floor(Math.random()*greetingsArray.length)];
    $("#header_greeting").html(item);
});