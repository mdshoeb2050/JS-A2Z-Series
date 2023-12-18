/**********************\
 * More on Closures
\**********************/

// definition- closure is a concept where inner fun preserves scope chains  of outer fun.

// var i=10;
// function outer() {
//     var j=20;      
//     console.log(i,j);  // here for  'i' - reference to outer context

//     //you can use fun exp and return it 
//     var inner = function (){
//         var k=30;
//         console.log(j,k); // here for 'j' - reference to outer context
//     }
//     return inner;
// }
// var inner = outer();
// inner();

// `Jab jab aapko aisa code structure dekhne ko mile samajh lena closure concept is working behind the scene`
// `
// Agar sahi me dekha jaye to varible 'j' delete ho jana chahiye jaise hi outer fun ka call finish hota h, 
// Lekin due to Closure concept ab bhi 'j' exist karega memory so that outer fun ke andar jitne bhi inner fun h usko use kar paye kyuki unke pass outer fun ke scope ka  Reference hai.
// Isiliye jab inner fun call karte h to global context me outer fun call finish hone par uske varible exist karenge so that inner fun usko access kar paye . 
// `


//Q=>
// var i=10;
// function outer() {
//     var j=20;      
//     //inner fun
//     var inner = function (){
//         var k=30;
//         console.log(j,k); 
//         k++; //incrementing
//     }
//     return inner;
// }
// var inner = outer();
// inner();
// inner();
// or 
// inner(inner());  
 
/*
20 30 
20 30
*/ 

// here both inner fun will create different Execution contexts ,
// That'why  variable 'k' incrementes value will remain same E.C , it doesn't affect other's E.C.


//Q=>

// var i=10;
// function outer() {
//     var j=20;      
//     //inner fun
//     var inner = function (){
//         var k=30;
//         console.log(j,k); 
//         j++; //incrementing j in outer Scope 
//         k++;
//     }
//     return inner;
// }
// var inner = outer();
// inner();
// inner();

/*
 yaha jitni bar inner call hoga j ki value increment hogi outer context me which doesn't affect inner fun E.C.
 Yaha outer fun me inner fun ke karan jo bhi changes honge us change ko outer fun Preserve karke rakh lega for inner fun.
*/

/*
20 30 
21 30
*/


//Q=>

// var i=10;
// function outer() {
//     var j=20;      
//     //inner fun
//     var inner = function (){
//         var k=30;
//         console.log(i,j,k); 
//         i++; //incrementing i in outer(Global) Scope 
//         j++; //incrementing j in outer Scope 
//         k++;
//     }
//     return inner;
// }
// var inner = outer();
// inner();
// inner();
/*
10 20 30
11 21 30
*/


//Q=>
var i=10;
function outer() {
    var j=20;      
    //inner fun
    var inner = function (){
        var k=30;
        console.log(i,j,k); 
        i++; //incrementing i in outer(Global) Scope 
        j++; //incrementing j in outer Scope 
        k++;
    }
    return inner;
}
var inner = outer();
inner();
inner = outer();  // In Every call , outer is creating a new enviornment for execution of code. 
inner();

/*
i value change hogi 
Each time 'j' & 'K' ki value increment to hogi but in a diffrent E. enviornment.
*/
/*
10 20 30
11 20 30
*/

