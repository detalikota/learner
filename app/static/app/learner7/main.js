var start;
var clicked;
function disappear(){
    document.getElementById("box").style.display='none';
    clicked = Date.now();
    var reactionTime = clicked-start;
    setTimeout(appear,1000);
}
function appear(){
    document.getElementById('box').style.display='block';
    start = Date.now();
}
document.getElementById("result").innerHTML=("Your resul is: "+(appear()-disappear()));