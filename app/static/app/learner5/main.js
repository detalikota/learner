function red(){
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
var hour = 19;
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


