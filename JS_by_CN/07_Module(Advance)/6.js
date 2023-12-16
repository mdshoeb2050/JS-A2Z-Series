/**********************\
 * Closures
\**********************/

// What ?
`
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function.

`
`Closure is the combination of functions and lexical enviornment  in which the function  was created`
//eg -
// var i=10;
// function outer() {
//     var j=20;      
//     console.log(i,j);  // here for  'i' - reference to outer context
//     //inner fun
//     function inner(){
//         var k=30;
//         console.log(j,k); // here for 'j' - reference to outer context
//     }
//     inner();
// }
// // outer();

/*
10 20
20 30
*/

var i=10;
function outer() {
    var j=20;      
    console.log(i,j);  // here for  'i' - reference to outer context
    //you can use fun exp and return it 
    var inner = function (){
        var k=30;
        console.log(j,k); // here for 'j' - reference to outer context
    }
    return inner;
}
var inner = outer();

//calling inner
// inner();   
/*
10 20
20 30
*/

`
|      |
|      |
|      |
|outer |
|Global|
`

//===> Explanation
// calling in Global context , it is created within the  outer function
// when Call to outer fun is completed , Variables associated with outer fun NOT be there anymore but still do exist ( bcoz of the concept of Closure )
// we are talking about the concept of Closure with respect of inner function 
// Ideally inner fun should not have variable 'j' anymore,  but Bcoz of the concept of closure it still exist in memory.
// Still when outer fun get executed yet "inner fun" still have reference to this outer fun varibles. (bcoz of the concept of Closure )
// Outer fun varibles will get destroyed completely if there is no "inner" fun inside it.

// Closure in Real life
// If a mother has two sons then after eating of 1 son , mother will save rest food for 2nd son.
// If there is only one son then mother won't worry about saving  food.


// Important note - 
/*
In C++, Java - if a fun get executed then varibles associated with that fun , no more there in the memory. you can say it will get destroyed. 

But in JS -  It is preserved in the memory,  Not get deleted actually. ( Bcoz of the concept of Closure )
*/




/**********************\
   H.W time
\**********************/

//Read -  https://cristina-radulescu.medium.com/a-graphical-representation-of-javascript-closure-e5bfe3f20ee 







// Why ?