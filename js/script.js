$(function() {
    generateWelcomeMessage();
});


function generateWelcomeMessage() {
	var greetingsArray = ["Welkom","স্বাগতম","欢迎","歡迎","Welcome","Velkommen","Bienvenue","Willkommen","પધારો","Aloha",
                          "ברוך הבא","स्वागत","Üdvözlet","Benvenuti","ようこそ","환영합니다","Laipni lūdzam","Sveiki atvykę",
                          "സ്വാഗതം","Velkommen","Witajcie","Bem-vindos","Добро пожаловать",
                          "Добродошли","Vitajte","Bienvenidos","Välkomna","வாங்க","సుస్వాగతం","ยินดีต้อนรับ",
                          "Hoş geldiniz","Ẹ ku abọ"];
	var item = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    $("#header-greeting").html(item);
}

var welcomeMessageLoop = setInterval(function() {
	$("#header-greeting").fadeOut(500, function() {
        generateWelcomeMessage();
        $("#header-greeting").fadeIn(500);
    });
}, 5000);

$(function() {
    var pages = [
        {
            'name' : 'Home',
            'icon' : 'fa-home',
            'url' : 'home.html'
        },
        {
            'name' : 'Selector',
            'icon' : 'fa-spinner',
            'url' : 'selector.html'    
        },
        {
            'name' : 'Ciphers',
            'icon' : 'fa-user-secret',
            'url' : 'ciphers.html'
        }
    ]; 
    var html = '';
    for (var i = 0; i < pages.length; i++) {
        html += '<li><a class="clickable" href="#" id="' + pages[i]['url'] + '">';
        html += '<i class="header fa ' + pages[i]['icon'] + ' fa-3x"></i>';
        html += '<span class="description">' + pages[i]['name'] + '</span></a></li>'
    }
    $('#nav-list').html(html);

    $("a.clickable").bind('click', function() {
        $('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
        var title = $(this).children('span').html();
        document.title = title;
        $('#content').load('/' + $(this).attr('id'));
    });
    $('.fa-home').parent().addClass('clicked');
});
