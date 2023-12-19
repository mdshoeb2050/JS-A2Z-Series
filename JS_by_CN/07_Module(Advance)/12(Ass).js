/**********************\
 *  Assignment Questions
\**********************/

//Q1
var a=10;
function foo(){
    var a=20;
    console.log(a);
    console.log(window.a);
}
console.log(a);
window.foo();



//Q2
function foo(a) {
    a =20;
    console.log(a);
}
foo(10);
console.log(a);



//Q3
var a =10;
var b;
function outer() {
    var b=30;
    function inner(a) {
        var a =30;
        console.log(a++,b++);        
    }
    console.log(a,++b);
    inner(a);
}
outer();
console.log(a++,b++);


//Q4
var a =10;
function outer() {
    var b=20;
    var b=30;
    function inner(a) {
        var a = 30;
        console.log(a++,b++);        
    }
    console.log(a,++b);
    inner(a);
}
outer();
console.log(a++);



//Q5

<html>
     <body>
        <script src="script1.js" ></script>
        <script src="script2.js" ></script>
    </body>
</html>

` This is Stript1

var a =10;
setTimeout(function(){
    console.log(a);
},1000);
`

`
This is Stript1
var a =20;
console.log(a);
`


//Q6
// What will the following statements print in the console ?

var a = (function(){
     return typeof arguments;
})();
console.log(a);


//Q7
// What kind of scoping does Javascript use ?
// Lexical


//Q8
//what will be the following code snippet print?

function Adder(x) {
    return function (y) {
        return x+y;
    };
}
var add5 = Adder(5);
var add10 = Adder(10);
console.log(add5(2));
console.log(add10(2));



//Q9 - Closure in JS
// What is the expected output?

var add = (function(){
    var counter =0;
    return  function () { counter += 1; return counter }
})();
console.log(add());
console.log(add());
console.log(add());


// Q10 - var in Loop

for(var a=1; a<5; a++){
    setTimeout(function(){
       console.log(a)},1000);
}


//Q11 - let in Loop

for(let a=1; a<5; a++){
    setTimeout(function(){
      console.log(a)},1000)
}

//Q12  - Arrow function Declaration
// Is the following function  declaration allowed in JS ?

var func =(
   a,
   b,
   c
)=> (
    1
);

//Q13 - Arrow Function
// what will the expected output when we run the following code in the console?

console.log((function(x, f=() => x) {
     var x;
     var y=x;
     x = 2;
      return [ x, y, f()];
})(1));


//Q14 
// What will the following code print in the console ?

// let user ={
//     firstname : 'John',
//     lastname : 'Doe',
//     getFullName : function(){
//         return function(){
//             console.log(`The full name of the user is ${this.firstname} ${this.lastname}`);
//         }
//     }
// }
// user.getFullName()();

// Q15
// What will the following code print in the console ?
let user ={
    firstname : 'John',
    lastname : 'Doe',
    getFullName : function(){
        return() =>{
            console.log(`The full name of the user is ${this.firstname} ${this.lastname}`);
        }
    }
}
user.getFullName()();


//Q16

//Q17

//Q18

//Q19

//Q20

//Q21