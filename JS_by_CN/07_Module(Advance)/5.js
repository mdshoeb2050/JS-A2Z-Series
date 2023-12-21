/**********************\
 * Let vs IIFE
\**********************/

// let - create Block Scope 


// IIFE - it also create Block Scope - commonly used in a lot of codebases (just get familiar with it)

//Previous code using IIFE method

// script1.js 
// (
//     function () {
//     var name = "File1";

//     setTimeout(function () {
//         console.log(name);
//     },1000);
// })();


// script2.js 
// (
//  function() {
//     var name = "File2";
//  }) ();

 // when you Reload the index.html file output will be -

 /*
 File2
 File1
  */



// =>> Now let's replace above code with 'let'
// ==> 'let' will solve that problem which IIFE do.

// Here i have changed name var with another name "fileName" to avoid confusion

// script1.js 
{
    let fileName = "File1";

    setTimeout(function () {
        console.log(fileName);
    },1000);
}


// script2.js 
{
   
    let fileName = "File2";
    console.log(fileName);
}

 //output will be -

 /*
 File2
 File1
  */