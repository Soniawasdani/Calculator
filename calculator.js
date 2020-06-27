// Clears calculator input screen
function getNumber(num){

    
var result = document.getElementById("result");


result.value +=num;

}


function clearScreen(){


    var result = document.getElementById("result");
    result.value =" ";
}

function calculate(){

    var result = document.getElementById("result");
result.value = eval(result.value)

}