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


// 10 10 10
// 10 20 20
// 10 20 10  <
// 20 20 20
// None of the Above 


//Q2
function foo(a) {
    a =20;
    console.log(a);
}
foo(10);
console.log(a);

// 10 20
// 20
// 10 undefined
// 20 Error: a is not defined   <<==

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
`
i. 20 31
   30 31
   10

ii. 20 30
    30 30
    10

iii. 30 20
     30 30
     10

iv. 10
    20 31
    30 31

v.  10 31    <<==
    30 31
    10 NaN

vi. None of the Above
`

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

`
i. 20 31    <<==
   30 31
   10

ii. 20 30
    30 30
    10

iii. 30 20
     30 30
     10

iv. 10
    20 31
    30 31

v.  10 31   
    30 31
    10 NaN

vi. None of the Above
`


//Q5- Global scope

// <html>
//      <body>
//         <script src="script1.js" ></script>
//         <script src="script2.js" ></script>
//     </body>
// </html>

// This is script1.js
`
var a =10;
setTimeout(function(){
    console.log(a);
},1000);
`

// This is script2.js
`
var a =20;
console.log(a);
`

// 10 20
// 10 10
// 20 20 <<==
// 20 10


//Q6
// What will the following statements print in the console ?

var a = (function(){
     return typeof arguments;
})();
console.log(a);


// object <<==
// array 
// arguments
// undefined


//Q7
// What kind of scoping does Javascript use ?

// Literal
// Lexical   <<==
// Segmental 
// Syntactical


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

// 7 12   <<==
// 5 15
// 5 10
// 7 15


//Q9 - Closure in JS
// What is the expected output?

var add = (function(){
    var counter =0;
    return  function () { 
        counter += 1; 
         return counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());

// 0 0 0
// 0 1 1
// 0 1 2
// 1 2 3  <<==


// Q10 - var in Loop

for(var a=1; a<5; a++){
    setTimeout(function(){
       console.log(a)},1000);
}

// 1 2 3 4 5
// 1 2 3 4
// 1 1 1 1 
// 5 5 5 5    <<==
// None of the Above 




//Q11 - let in Loop

for(let a=1; a<5; a++){
    setTimeout(function(){
      console.log(a)},1000);
}


// 1 2 3 4 <<==
// 1 1 1 1 
// 5 5 5 5    
// None of the Above 

//Q12  - Arrow function Declaration
// Is the following function  declaration allowed in JS ?

var func =(
   a,
   b,
   c
)=> (
    1
);

// Yes  <<==
// No


//Q13 - Arrow Function
// what will the expected output when we run the following code in the console?

console.log((function(x, f=() => x) {
     var x;
     var y=x;
     x = 2;
      return [ x, y, f()];
})(1));

// 2 1 1  <<==
// 1 1 2
// 2 1 
// 1 1




//Q14 
// What will the following code print in the console ?

// let user ={
//     firstname : 'John',
//     lastname : 'Doe',
//     getFullName : function(){
//         return function(){
//             console.log(`The full name of the user is :
//                      ${this.firstname} ${this.lastname}`);
//         }
//     }
// }
// user.getFullName()();

// The full name of the user is ${this.firstname} ${this.lastname}

// The full name of the use is undefined undefined    <<==

// The full name of the user is John Doe  

// None of the Above 




// Q15
// What will the following code print in the console ?
let user ={
    firstname : 'John',
    lastname : 'Doe',
    getFullName : function(){
        return() =>{
            console.log(`The full name of the user is 
                         ${this.firstname} ${this.lastname}`);
        }
    }
}
user.getFullName()();



// The full name of the user is ${this.firstname} ${this.lastname}

// The full name of the use is undefined undefined    

// The full name of the user is John Doe    <<==

// None of the Above 






//>>>>>>Assignment Section

//Q16 - Block Scope 
// what is expected output ?

{
    let msg = "Hello";
    console.log(msg);
}
console.log(msg);

// Hello Hello
// Hello undefined
// Hello Error: msg is not defined   <<==
// None of the Above 



//Q17 -let 
// what is the expected output if we run the following code in console?

function makeCounter() {
    let count=0;
    return function() {
        return count++;
    };
}
let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());

// 0 1 0  <<==
// 1 2 1
// 0 1 2
// 1 2 3




//Q18
// what is expected output ?

// function makeArmy() {
//     let shooters = [];
//     let i=0;
//     while(i<10){
//         let shooter = function(){
//             console.log(i);
//         }
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[5]();


// 0 5
// 0 0
// 5 5
// 10 10  <<==
// None of the Above 




//Q19
// what is expected output ?

function makeArmy() {
    let shooters = [];
    for(let i=0; i<10; i++){
        let shooter = function(){
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();

// 0 5  <<==
// 0 0
// 5 5
// 10 10  
// None of the Above 



//Q20 - IIFE
// what will the following code snippet print in console?

var Sequence = (function sequenceIIFE() {
    var current =0;
    return {
        getCurrentValue : function(){
           return current;
        },
        getNextValue : function () {
            current = current +1;
            return current;
        }
    };
}());
console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getCurrentValue());

// 0 0 0
// 0 1 1
// 1 2 2  <<==
// 1 1 2
// None of the Above



//Q21
// What will the followig code print in the console ?

let People = function (person, age) {
    this.person =person;
    this.age =age;
    this.info = function() {
        console.log(this);
        setTimeout(() =>{
            console.log(this.person + "is" + this.age + " years old");
        },3000);
    }
}
let person1 = new People('John',21);
person1.info();

// window {postMessage: f, blur: f, focus: f, close: f, parent: Window,...} person is undefined
// window {postMessage: f, blur: f, focus: f, close: f, parent: Window,...} John is 21 years old
// Person {person : "john", age:21, info:f} john is 21 years old     <<===
// None of the Above




//Q22 -Arrow function
// what will the following function return ?

var arguments = [1,2,3];
var arr = () => arguments[2];
arr();
function foo(n) {
    var f = () => arguments[0] + n;
    return f();
}
foo(3);

// 4 
// 5
// 6  <<==
// 7
// None of the Above 