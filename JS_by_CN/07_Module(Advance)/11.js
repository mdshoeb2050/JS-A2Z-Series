/******************************\
 * Bindings in Arrow Functions
\******************************/


// A Normal fun has it's own bindings to this.


// Arrow fun don't have it's own binidng to "this". They actually lookup  in "outer scope" for the value of "this".



// eg - Run this code in browser console 

//Constructor function
function Person(name){
    this.name =name;  // here 'this' has it's own binding & it refers to "Person class." 
    console.log(this); // Person { name : "Md. Shoeb"}

    setTimeout(function () {
        console.log(this); // here 'this' has its own binding & it refers to  "window object"
    },1000);
}

// creating an object 'p' using "Person" class.

var p = new Person("Md. Shoeb");


// writing above code using Arrow fun (Run in browser console )

setTimeout(() => console.log(this),1000);  // Person { name : "Md. Shoeb"}
// Arrow fun doesn't have their own bindings.
// it refers to "Person class", They actually lookup  in "outer scope" for the value of "this". (that's why it is reffering to "Person class")






/******************************\
 * H.W.
\******************************/


// write more function(10-15) using Arrow funciton method.

// Explore "Arrow function" on MDN web docs.

