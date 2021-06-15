window.onload = appear();
var start;
var clicked;
var reactionTime;
var numbers = [1000,2000,3000,4000];
var randomNumber = Math.floor(Math.random() * 3);
var number = numbers[randomNumber];
function disappear(){
    document.getElementById("box").style.display='none';
    clicked = Date.now();
    reactionTime = (clicked-start)/1000;
    setTimeout(appear,number);
    alert('your reaction time is'+ reactionTime);
} 
function appear(){
    var randomTop = Math.random()*400;
    var randomLeft = Math.random()*1000;
    var randomHeight = (Math.random()*200)+50;
    var randomWidth = (Math.random()*200)+50;
    var randomCurve = Math.random();
    if (randomCurve < 0.5) {
        document.getElementById('box').style.borderRadius=('500px');
    }
    document.getElementById('box').style.height=(randomHeight+'px');
    document.getElementById('box').style.width=(randomWidth+'px');
    document.getElementById('box').style.top=(randomTop+'px');
    document.getElementById('box').style.left=(randomLeft+'px');
    document.getElementById('box').style.display='block';
    start = Date.now();
}
/* document.getElementById("result").innerHTML=(disappear()); */