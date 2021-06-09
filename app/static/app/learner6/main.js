
function col(){
    var randomCol = Math.floor(Math.random() * 9);
    return randomCol
}
function figure(){
    var figures = ["square","triangle","circle"];
    var randomFigure = Math.floor(Math.random() * 3);
    var figure = figures[randomFigure];
    return figure;
}

function colors(){
    var colors = ["black","yellow","grey"];
    var randomColor = Math.floor(Math.random() * 3);
    var color = colors[randomColor];
    return color;
}
document.getElementById(col()).classList.add(figure());

var figures2 = ["square","triangle","circle"];
var x = document.getElementsByClassName(figures2);
var i;
for (i = 0; i < x.length; i++) {
    if (x[i] == "triangle") {
        x[i].style.borderBottomColor = colors();
    }
    else {
        x[i].style.background = colors();
    }
}


/* function red(){
    document.body.style.backgroundColor="#18caf2";
}
function blue(){
    document.body.style.backgroundColor="#98ff98";
}
function test(a,b,id,mess){
    var c = ++a;
    document.getElementById('id').innerHTML=(mess+c);
}

var x = 0;
var color = ["white","yellow","orange","red","brown","black"]
function test2(){
    x += 1;
    document.getElementById('value').innerHTML=(x);
    document.body.style.backgroundColor=color[x];
}
function test3(){
    x -= 1;
    document.getElementById('value').innerHTML=(x);
    document.body.style.backgroundColor=color[x];
}

function testDict(){
    var dict = {car:1, speed:2, lol:3};
    var dict2 = dict.speed;
    document.getElementById('dict2').innerHTML=dict2;
    var hour = new Date().getHours();
    alert(hour);
}
var hour = new Date().getHours();
function day(){
    if (hour >= 12 && hour < 18){
        document.getElementById('day').innerHTML=("day");
        document.getElementById('image').style.backgroundImage = "url('static/app/learner5/day.png')";
        document.body.style.backgroundColor="orange";
    }
    else if (hour >= 18 && hour <= 24){
        document.getElementById('day').innerHTML=("evening");
        document.getElementById('image').style.backgroundImage = "url('static/app/learner5/evening.jpg')";
        document.body.style.backgroundColor="brown";
    }
    else if (hour > 00 && hour <= 6){
        document.getElementById('day').innerHTML=("night");
        document.getElementById('image').style.backgroundImage = "url('static/app/learner5/night.jpg')";
        document.body.style.backgroundColor="grey";
    }
    else {
        document.getElementById('day').innerHTML=("morning");
        document.getElementById('image').style.backgroundImage = "url('static/app/learner5/morning.jpg')";
        document.body.style.backgroundColor="yellow";
    }
}
function textaction(){
    var user = "maga";
    var pass = "admin";
    var textValue = document.getElementById('texthere').value;
    var passValue = document.getElementById('passhere').value;
    if (user == textValue && pass == passValue) {
        alert("Login correct!");
    }
    else {
        alert("Login INCORRECT!")
    }
}

function bank(){
    var bankName = "maga";
    var bankPass = "admin";
    var bankMoney = 50;
    var bankNameC = document.getElementById("bankName").value;
    var bankPassC = document.getElementById("bankPass").value;
    var bankMoneyC = document.getElementById("bankMoney").value;
    if (bankName == bankNameC && bankPass == bankPassC) {
        if (bankMoneyC <= 50) {
            document.getElementById("bankBalance").innerHTML=(bankMoney - bankMoneyC)
        }
        else {
            document.getElementById("bankBalance").innerHTML=("Not enough money dog")
        }
    }
    else {
        document.getElementById("bankBalance").innerHTML=("Not correct login man")
    }
}
var arrFruit = ['apple', 'banana', 'coconot']
for (i=0; i<arrFruit.length;i++){
    document.write(arrFruit[i], "<br>");
}

function tip() {
    var tipMoney = document.getElementById("tipMoney").value;
    var tipService = document.getElementById("tipService").value;
    var tipPeople = document.getElementById("tipPeople").value;
    var result = ((tipMoney/100)*tipService)/tipPeople;
    document.getElementById("tipAmount").innerHTML=(result);
}
*/