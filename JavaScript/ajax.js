// 35
for (let i = 0; i < 100; i++) {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/data.txt', false); // asycrounus -> false (default is true)
    request.send()
    if (request.status === 200) {
        console.log(request);
        document.write(request.responseText);
    } else {
        console.log('error');
    }
}
// =========================
// 36
var request = new XMLHttpRequest();
request.open('GET', 'data/data.txt'); // === request.open('GET', 'data/data.txt', true);
request.onreadystatechange = function () {
    if ((request.readyState === 4) && (request.status === 200)) { // readyState is good for progress bar
        // request.readyState === 4 -> client side check. | request.status === 200 server side check.
        console.log(request);
        document.writeln(request.responseText);
    }
}

request.send();
// =========================
// 37 & 38 & 39 & 40
var request;

if (window.XMLHttpRequest) { // if browser doesn't support.
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data/data.txt')
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        // console.log(request);
        // var modify = document.getElementById('update');
        // modify.innerHTML = request.responseText;

        // var modify = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
        // for (let i = 0; i < modify.length; i++) {
        //     modify[i].innerHTML = request.responseText;
        // }


        // Create ul and li with js too.
        // Working with XML data.
        // var items = request.responseXML.getElementsByTagName('name');
        // var output = '<ul>';
        // for (let i = 0; i < items.length; i++) {
        //     output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        // }
        // output += '</ul>';
        // document.getElementById('update').innerHTML = output;


        // Working with JSON data.
        var items = JSON.parse(request.responseText);
        var output = '<ul>';
        for (var key in items) {
            console.log(items[key]);
            output += '<li>' + items[key].name + ' | ' + items[key].bio + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send()
// =========================
// 41
var btn = document.getElementById('btnLoad');
btn.onclick = function () {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }

    // request.open('GET', 'data/data.json')
    request.open('GET', 'http://localhost:20301/api/values')
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.responseText)
            console.log(items);

            var output = '<ul>'
            for (var key in items) {
                console.log(items[key])
                output += '<li>' + items[key].Name + ' | ' + items[key].Family + '</li>'
            }
            output += '</ul>'
            document.getElementById('update').innerHTML = output
        }
    }
    request.send()
}