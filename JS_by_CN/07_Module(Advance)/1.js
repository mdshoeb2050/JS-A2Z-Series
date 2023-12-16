
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



/**********************\
*  Revisiting old concept - Scopes
\**********************/ 


var a =10;  // Global scope

function outer() {
    var b=40;    // created in Fun scope of Outer
    // console.log(a,b); //10 40    // here due to reference to outer context we can easily access varibles declared in Global context
}


function outer2() {
    var z=40; 
}
// console.log(z);//ReferenceError: z is not defined  // variables declared in fun scope can't be accesed outside scope



// Execution context - All the code written in JS is associated with Execution context
// All the E.C are handled via Execution Stack
// Global has no reference ot outer context, It has only access to properties which is defined in global context and 'this'
// Global => Lexical => all things (prop, this , etc)
//JS is single threded - it means one E.C will be executed at that time.
