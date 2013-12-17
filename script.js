$(document).ready(function() {
	var greetingsArray = [ "Hello", "Hi There", "Howdy" ];
	var item = greetingsArray[Math.floor(Math.random()*greetingsArray.length)];
    $("#header_greeting").html(item);
    
    $("a.clickable").bind('click', function() {
    	navigateLink($(this).children("span").html());
    });
    
});

function navigateLink(link) {
	switch (link) {
		case "Github": window.location.href = "http://www.github.com/michaelzheng"; break;
		case "Twitter": window.location.href = "http://www.twitter.com/EXC_BAD_ACCESS"; break;
		case "Linkedin": window.location.href = "http://www.linkedin.com/profile/view?id=156606696"; break;
		case "Instagram": window.location.href = "http://www.instagram.com/EXC_BAD_ACCESS"; break;
		case "Youtube": window.location.href = "http://www.youtube.com"; break;
	}
}

