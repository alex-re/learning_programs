// Data Types
// Boolean Array Number null String
var myBool = new Boolean();
var person = ['gholi', 'gholizade', 25]
// =========================

// function if statment Date
function myFunc() {
    var name = document.getElementById('inp').value;
    if (name === "gholi") {
        alert(name + " 3 equals checks both type and value");
    } else if (name == "ali") {
        this.innerHTML = name + "2 equals Just checks value";
    } else {
        console.log("Hi " + name + " " + new Date().getDay());
    }
}
// =========================

// Swich statment 
var age = 17;
switch (age) {
    case 15:
        console.log('You are 15 now!');
        break;
    case 10:
    case 11:
        console.log('You are 10 OR 11');
        break;
    default:
        console.log('You are ' + age) + 'now!';
        break;
}
// =========================

// Loop statment
var names = ['ali', 'reza', 'gholi', 'ghasem']
// var text = new String();
var text = "";

// for (var i = 0; i < names.length; i++) {
for (let i = 0; i < names.length; i++) {
    // var name = names[i];
    let name = names[i];
    document.write(name + "<br/>")
}

names.forEach(name => {
    document.write(name + "<br/>")
});

for (i in names) {
    console.log(names[i]);
}

// for (var i = 0; i < names.length; i++) {
for (let i = 0; i < names.length; i++) {
    text += names[i] + '<br/>'
}
document.write(text)
// =========================

// Try Catch
var x = document.getElementById('inp').value;

try {
    if (x == '') throw 'emty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too hight';

} catch (error) {
    document.write('Your input is ' + error)
}

finally {
    document.getElementById('inp').value = '';
}
// =========================

// this, var, let, const
// THIS: this always refers to the object that cause the event (in functions) and out of blocks it refers to current document.
// VAR: old version to use variables because its accessible from uncommon block too!
// LET: newer version to use variables because its NOT accessible from uncommon block.
// CONST: newer version to use variables that we don't need to change them ever never BUT we can push (append) to theme (like server name and ...)
// NOTES: this is our reason for using let in for loop and ussually everywhere
// =========================

// debug 
// we have also `debugger;` command like `breakpoint()` in python
// =========================

// Function With Forms
function inpTestFunc() {
    var x, text;
    x = document.getElementById('fname').value;
    // var x = document.forms["myForm"]["fname"].value;
    if (isNaN(x) && x < 1 || x > 10) {
        text = "Input Not Valid";
        document.getElementById('demo').innerHTML = text;
        document.getElementById('demo').style.color = "red";
    } else {
        text = "Input Ok ."
        document.getElementById('demo').innerHTML = text;
        document.getElementById('demo').style.color = "green";
    }
}
// =========================

// contractors
function Person(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.fullName = function () {
        return this.name + ' ' + this.family;
    }
    // this.fullName = () => {
    // return this.name + ' ' + this.family;
    //   }
}

var people = []
var ali = new Person('ali', 'alizade', 15)
people.push(ali);
// =========================

// functions tricks
var add1 = function (a, b) {
    return a + b;
};

var add2 = (a, b) => {
    return a + b
}

var c1 = x(4, 5);

var myCustomFunc = new Function('a', 'b', 'return a * b');
var c2 = myCustomFunc(4, 5);
//--------
function sum(x = 0, y = 0) { // default values
    return x + y;
}

function unlimitedArgs() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
unlimitedArgs(1, 'gholi', true, 1.4);

function add() {
    var count = 0;
    function plus() {
        count += 1
    }
    plus();
    plus();
    return count;
}
// =========================

// create element
var para = document.createElement('p');
var node = document.createTextNode('This is new !');
para.appendChild(node);
var element = document.getElementById('mydiv');
// element.appendChild(para);
var child = document.getElementById('p2');
element.insertBefore(para, child);
element.removeChild(child);
element.removeChild(para, child);
// =========================

// html collections
var myCollection = document.getElementsByTagName('p');
console.log(myCollection[0].innerHTML);
// console.log(myCollection[0].length);
for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = 'red';
}
// =========================

// width & height
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
console.log('Browser inner window width: ' + width + ', height: ' + height);
alert(screen.availWidth);
alert(screen.availHeight);
alert(window.location.href);
alert(window.location.hostname);
alert(window.location.pathname);
alert(window.location.protocol);
function myFunction() {
    window.location.assign('https://github.com');
}
// =========================

// Browser history
function goBack(params) {
    window.history.back();
}

function goForward(params) {
    window.history.forward();
}
// =========================

// Browser popups
function popups() {
    alert('Alert!');
    var answer;
    if (confirm('Are you happy?')) {
        answer = 'You pressed OK';
    } else {
        answer = 'You pressed Cancel';
    }
    document.getElementById('demo').innerHTML = answer;
}

function popups() {
    var name = prompt('Please enter your name:  ', 'Default Name');
    if (name == null || name == '') {
        alert('oh')
    } else {
        alert('Hello ' + name)
    }
}
// =========================

// Timeout
function sayHi() {
    alert('Hello');
}

// var myTimeout = setTimeout(sayHi, 3000); // miliseconds
// clearTimeout(myTimeout);
// =========================

// Timer
var myTimer = setInterval(myTimerFunc, 1000); // Run it every 1000 miliseconds 

function myTimerFunc() {
    var d = new Date();
    document.getElementById('result').innerHTML = d.toLocaleTimeString();
}
// =========================

// events
function upperCase() {
    element = document.getElementById('check-btn');
    element.value = element.value.toUpperCase();
}

function changeInner(obj) {
    obj.innerHTML = 'text changed!';
}

function mOver(obj) {
    obj.innerHTML = 'Thanks!';
}

function mOut(obj) {
    obj.innerHTML = 'Please hover agian!';
}

function mDown(obj) {
    obj.style.backgroundColor = 'red';
}

function mUp(obj) {
    obj.style.backgroundColor = 'green';
}

document.getElementById('myBtn').addEventListener('click', function () { // In this method we can execute many functions in one event.
    console.log('clicked!');
})

// =========================

// cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    var name = cname + '=';
    var decodeCookie = decodeURIComponent(document.cookie);
    var ca = decodeCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(name.length, c.length);
        }
    }
    return '';
}

function chackCookie() {
    var user = getCookie('username');
    if (user != '') {
        alert('welcom agian ' + user);
    } else {
        user = prompt('Please enter your name:  ', '');
        if (user != '' && user != null) {
            setCookie('username', user, 10);
        }
    }
}