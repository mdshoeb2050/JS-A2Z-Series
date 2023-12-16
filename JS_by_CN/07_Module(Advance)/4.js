/**********************\
 *  IIFE - Immediately invoked function Expression
\**********************/
// resource - https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/
// Syntax
 (function () {  // IIFE in normal fun
    // …
  })();
  
  (() => {   // IIFE in Arrow fun
    // …
  })();
  
  (async () => {   // IIFE in async 
    // …
  })();

// Problem - if there are multiple fun with same name and prop present in multiple files then there will be problem.
// Those fun will be in global context of Global object that'why there will be problem.


// eg - Suppose there are 2 JS files named - script1.js  & script2.js  which are linked with a HTML file

// script1.js 
function print() {
    var name = "File1";

    setTimeout(function () {
        console.log(name);
    },1000);
}
// print(); 

// script2.js 
function print2() {
    var name = "File2";
}
// print2();


 // when you Reload the inde.html file output will be -

 /*
 File2
 File1
  */






/**********************\
 Let's talk about Solution 
\**********************/

// Solution1 : Use different fun name 

// Solution2 : IIFE   ( "function description without name" )();


// eg- 

// script1.js 
(
    function () {
    var name = "File1";

    setTimeout(function () {
        console.log(name);
    },1000);
})();


// script2.js 
(
 function() {
    var name = "File2";
 }) ();


 // when you Reload the index.html file output will be -

 /*
 File2
 File1
  */


// Example of IIFE

// Regular Function. 
function Greet() { 
    console.log("Welcome to Javascript!"); 
}; 
// Greet();  // Execution of Regular Function. 

// IIFE creation and execution. 
(function() { 
    console.log("Welcome to Javascript!"); 
})(); 


/*
1.IIFEs have their own scope i.e. the variables you declare in the Function Expression will not be available outside the function.

2.Similarly to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.

3.IIFEs can also have parameters.  For example, 
*/

// Declaring the parameter required. 
(function(dt) { 
		console.log(dt.toLocaleTimeString()); 
		// Passing the Parameter. 
})(new Date()); 

// Use Cases Of IIFE

// Avoid polluting the global namespace 
// To create closures
// Avoid conflict of variable names between libraries and programs.
// IIFE is used to create private and  public variables and methods
// It is used to execute the async and await function
// It is used in JQuery Library
// It is used to work with require function




/**********************\
   H.W time
\**********************/

// Explore all use cases of IIFE
    // 1.Avoid polluting the global namespace
    // 2.Execute an async function
    // 3.The module pattern
    // 4.For loop with var before ES6

//MDN -  https://developer.mozilla.org/en-US/docs/Glossary/IIFE 
//GFG -  https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/