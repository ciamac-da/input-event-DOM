/**
var x = document.getElementById("demo");
var y = document.getElementById("test");
function myFunction(){
      y.innerText = x.value;
}*/

/** 
var x = document.getElementById("demo");
var y = document.getElementById("test");
function myFunction(event){
      y.innerText = event.data;
} */
var x = document.getElementById("demo");
var y = document.getElementById("test");
function myFunction(event){
      y.innerText = event.data.toUpperCase();
} 