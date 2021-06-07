function red(){
    document.body.style.backgroundColor="#18caf2";
}
function blue(){
    document.body.style.backgroundColor="#98ff98";
}
function test(a,b,id,mess){
    var c = ++a;
    document.getElementById(id).innerHTML=(mess+c);
}