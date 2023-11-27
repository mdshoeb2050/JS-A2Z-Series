function sum(a, b){
    return a+b;
}
// let res=sum(65,35);  //100
// let res=sum(65);    // NaN
// let res=sum(65,35,78);  //100 - just ignore extra arguments
// console.log(res);


//  function hoisting - fun & var declaration moved to the Top of the Program 
apkaNam();
function apkaNam(){
    // console.log("shoeb Ansari");
    // console.log(age);   // undefined - Bcoz declaration moved the Top , But initilization remains bottom 
    var age = 23;
}
//Tip - Aap definition (initilization ) par dhyan dijiye , Declaration to JS dekh lega 



// Function & Scope  - A particular area of the code  where element have Access.

var myName = "shoeb";
function speak(){
    console.log(myName);  //shoeb  - reference to outer context 
}

// speak();
// console.log(myName);  // shoeb   - Accessing global variable context


// Note - Every code in Javascript has a execution context .
// Explanation - ( It is just like a virtual Enviornment where your code will execute)
 
// Note - Execution context will be created only if  your code executes.
// Note - A function contains - Execution context of variable , this keyword  and Reference to outer context .





// Call stack or Execution stack  -  It maintains the order of execution of E.C.

// If your local fun E.C  will get popped out from Execution stack then Global execution context will go on the TOP.

function c(){
    console.log("Inside C");
}

function b(){
    c();
    console.log("Inside B");
}

function a(){
    b();
    console.log("Inside A");
}

// a();
// console.log("Global Context");

/*
Inside C
Inside B
Inside A
Global Context
*/


//>>>>>>> function within function
//when you don't get value at current scope then go to outer scope for value .
// Every fun or var has a diffrent scope in their E. context.

var name = "global";
function outer(){
    var name = "Shoeb"
    var outvar = 10;
    function inner(){
        var inerVar =100;
        console.log(name);  // reference to outer context  i'e - Shoeb
    }
    inner();
    console.log(name);  // Shoeb
}
// outer();
// console.log(name); // global

/*
Shoeb
Shoeb
global
 */


// >>>>>>>>>> Function Declaration /  Expression 

//  fun decalaration 

function fact(n){
    var ans=1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}

//calling fun
// console.log(fact(5));  /* 120 */



//>>>>>>>>> Function Expression

var factorial = function fact2(n){
    var ans=1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
};  // don't forget to terminate the statement

// calling fun via fun expression name 
console.log(factorial(5));  // 120
console.log(factorial);  // fun definition 

//Avoid using it 
console.log(fact2(5));   
// Error - you have no access to inner elements 
// Note - " you can't use fun name dirtectly via outside that fun scope "


// Named fun expression
var factorial = function fact3(n){
    var ans=1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}; 

// Anonymous fun expression

var factorial = function (n){  // no name for fun 
    var ans=1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}; 


/* Tip : if you use fun name then you can easily trace out fun calls in Call stack 3 */