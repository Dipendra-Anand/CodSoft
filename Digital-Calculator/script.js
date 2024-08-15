const display=document.getElementById("text");

function append(input){
    display.value+=input;
}
function clearscreen(){
    console.log(23);
    display.value="  ";
}
function total(){
    display.value=eval(display.value);
}


