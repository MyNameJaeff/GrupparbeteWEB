function output(){
    console.log("Working!")
    //FUNGERAR INTE
}

//FUNGERAR INTE
var namn = document.getElementById("user-name");
var number = document.getElementById("user-number");
var howmany = document.getElementById("user-howmany");
var time = document.getElementById("user-time");
var date = document.getElementById("user-date");

var buttonPress = document.getElementById("buttonPress");
buttonPress.addEventListener("click", output, true);