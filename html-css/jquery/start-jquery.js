$("div").hide();

$("#div-id").hide();

$(".div-class").hide();

$("*").hide();

// ________________________________________________________________________

$(document).ready(function (){
    $("#loading").hide(1000); // mili seconds
    $("#loading").fadeOut(1000); // mili seconds
    $("#loading").fadeTo(1000, 0.2); // mili seconds // alpha (1000 miliseconds to be 0.2 opacity)
    $("#loading").fadeTo(1000, 0.0).delay(1000).fadeTo(2000, 1.0);
    $("#loading").fadeOut(1000, repeat());
});

// ________________________________________________________________________

$("div").css({
    "color": "red"
});

// ________________________________________________________________________

$("div").click(function(){
    $(this).css({"color":"#fff"});
    alert("You clicked on div!");
})

$("div").dblclick(function(){
    console.log(":)")
})

$("div").mouseenter(function(){
    console.log(":)")
})

$("div").mouseleave(function(){
    console.log(":)")
})

// ________________________________________________________________________

$.getJSON("https://api.ipify.org/?format=json", function(e) {
    alert(e.ip)

});

// ________________________________________________________________________

$("div").click(function(){
    $("#about").toggle() // if its hide show it else hide it.
})

// ____________________ANIMATION___________________________________________

$("li").slideUp("slow"); // slow can changed by miliseconds.
$("li").slideDown(2000);

$("#jump_down").click(function () { 
    $("#wraper").slideDown("slow");
});

$("#jump_down").click(function () { 
    $("#wraper").slideToggle("slow"); // if its open close it else open it.
});

// ________________________________________________________________________

$("a").on('click', function (event) {
    if (this.hash !== ""){ // if <a> is target in our page it has hash else it doesnt has hash.
        event.preventDefault(); // disable browser default
        var hash = this.hash;
        $('html', 'body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){         // 800 -> miliseconds
            window.location.hash = hash;  // insert # address to end of url (http://a.com#div-id)
        }
        )
    }
});
