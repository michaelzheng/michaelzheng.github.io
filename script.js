$(document).ready(function() {
    generateWelcomeMessage();
    
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


function generateWelcomeMessage() {
	var greetingsArray = ["Welkom","স্বাগতম","欢迎","歡迎","Welcome","Velkommen","Bienvenue","Willkommen","પધારો","Aloha","ברוך הבא","स्वागत","Üdvözlet","Benvenuti","ようこそ","환영합니다","Laipni lūdzam","Sveiki atvykę","സ്വാഗതം","Velkommen","Witajcie","Bem-vindos","Добро пожаловать","Добродошли","Vitajte","Bienvenidos","Välkomna","வாங்க","సుస్వాగతం","ยินดีต้อนรับ","Hoş geldiniz","Ẹ ku abọ"];
	var item = greetingsArray[Math.floor(Math.random()*greetingsArray.length)];
    $("#header_greeting").html(item);

    //document.title = item;
}
setInterval(function(){
	$("#header_greeting").fadeOut(500, function() {
        generateWelcomeMessage();
        $("#header_greeting").fadeIn(500);
    });
}, 5000);
