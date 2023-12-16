
/**********************\
*  Revisiting old concept - Window Object
\**********************/ 


// window object - top most object of the DOM model

// All the fun / varibles (Anything) which are defined in Global context - are the property of "Window object"
// "Window object" - Aham Brahasmi...!


// Just write this code snippet in Browser and do some experiment

var a =10;

function outer() {
    var b=40;
    // console.log(b);
}
// console.log(a);  //10
//another way 
// console.log(window.a);  //10

//Accessing fun written in Global context via window object
// window.outer();  //40


