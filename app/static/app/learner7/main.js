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
    document.getElementById('box').style.display='block';
    start = Date.now();
}
/* document.getElementById("result").innerHTML=(disappear()); */