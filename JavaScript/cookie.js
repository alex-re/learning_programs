function SetCookie(name, value, exday) {
    var d = new Date();
    d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var decodeCookie = decodeURIComponent(document.cookie);
    var cook = decodeCookie.split(';');
    for (var i = 0; i < cook.length; i++) {
        var c = cook[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }

    }
    return "";
}

function CheckCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert('Welcome again ' + user);
    }
    else {
        user = prompt("Please Enter Your Name", "");
        if (user != "" && user != null) {
            SetCookie('username', user, 3);
        }
    }
}