
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


