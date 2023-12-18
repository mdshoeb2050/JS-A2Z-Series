/**********************\
 * Closures & let
\**********************/

//Q=> 

// for(var i=1; i<=5; i++){
//     setTimeout(function(){ // this fun has binding to outer enviornment
//       console.log(i);  // there is a binding to Outer Scope (global variable i )
//     },1000);
// }
// console.log("After for loop ", i);

// or 
// this below modified code also  give same result
// function test() {
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){ // this fun has binding to outer enviornment
//         console.log(i);  
//         },1000);
//     }
// console.log("After for loop ", i);
// }
// test();  // binding to the  varible i

/*
After for loop 6
6
6
6
6
6
*/



//Q=>

function test() {
    for(let i=1; i<=5; i++){
        setTimeout(function(){ 
        console.log(i);  
        },1000);
    }
}
// test();
// In this case Each of the fun call has a `Seperate binding` to 'i' that'why it is printing - 1,2,3,4,5
// Here in this case each of the for loop iteration has seperate set of i value



/*
1
2
3
4
5
*/