// Fucntion
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
};  // don't forget to terminate the statement (semicolon ; )

// calling fun via fun expression name 
// console.log(factorial(5));  // 120
// console.log(factorial);  // fun definition will be printed 

//Avoid using it 
// console.log(fact2(5));   
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


/* Tip : if you use fun name then you can easily trace out fun calls in Call stack (in case of Recursion) */




//>>>>>>>>>>>>>>>>>>>> Passing function as Arguments

// explaining this concept using example - combination  formula

//To calculate a combination, you will need to calculate a factorial.
var factorial = function (n){ 
    var ans=1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}; 

// creating a fun named ncr
function ncr(n,r, factorial){
    return factorial(n)/(factorial(r) * factorial(n-r));
}

//printing result 
// console.log(ncr(5,2,factorial));



//>>>>>>>>>>>>>>>>>>>>  Arrays 
// An array in JavaScript is a type of global object that is used to store data.
// Arrays consist of an ordered collection or list containing zero or more data types,
// use numbered indices starting from 0 to access specific items.

var arr = [1,2,3,4];
// var arr2 = new Array(1,2,3,4,5);
// console.log(arr[6]);  // undefined 


arr[2]= 90;   // updation 

arr[7]=100;
// console.log(arr); //[ 1, 2, 90, 4, <3 empty items>, 100 ]   
// if you assign value at next index skipping some indexe JS automatically declare those skipped indexes as a empty space 
// length will be counted 
// console.log(arr.length)   //8


//creating empty array using new keyword
// var arr = new Array(); 
// var arr = new Array(2); // empty Array of 2 length 

// var arr3 = new Array(2,3); // elements of array 

/*
  Note -
       single value  => size of Array 
       multiple value => elements of Array
*/


// Array in JS can be Heterogeneous (Dissimilar elements )

var arr5 = ["abc",10, true, 20];

/*
“Contiguous” refers to things that are adjacent or touching each other along a common boundary,
 in terms of definition. Additionally, “continual” refers to something that happens repeatedly or at regular intervals,
 while “continuous” implies something that is uninterrupted, with no breaks or pauses.
*/






// Function on Arrays 

var arr6 = [4,5,6,7];
// console.log(arr6.length);  //4

arr6.push(10);  // [4,5,6,7,10]  

// console.log(arr6);
arr6.pop();  // last element deleted (10)
// console.log(arr6);

// console.log(arr6.shift());  // 4 - jo bhi element shift (aage se delete hoga wo print ho jayega screen par )
// console.log(arr6);

arr6.unshift(8);   // starting index (0) par jakar 8 set ho jayega sabko 1 shift karke 
// console.log(arr6);

/*
[ 4, 5, 6, 7, 10 ]
[ 4, 5, 6, 7 ]
4               - jo bhi element shift (aage se delte hoga wo print ho jayega screen par )
[ 5, 6, 7 ]   
[ 8, 5, 6, 7 ]]
 */


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Splice function
let myArr = [0,1,2,3,4,5];
// console.log("A ", myArr);   //// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(0, 3)     //Returns a copy of a section of an array.
// console.log(myn1);             //[ 0, 1, 2 ]

// console.log("B ", myArr);      //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)  
// console.log(myn2);         // [ 1, 2, 3 ]

// console.log("C ", myArr);  //C  [ 0, 4, 5 ]  - Original Array got manupulated due to splice()  - * interview Q {slice vs splice}


var arr7 =[2,3,4,5,6];
// console.log(arr7.splice(2,0,10)); // []   // 2nd index par jakar no delete element & 10 insert that index , rest elements got shifted rightward.
// console.log(arr7); // [ 2, 3, 10, 4, 5, 6 ] 

//Perform Multiple insertion & deletion

arr7.splice(2,0,10,20,40);
// console.log(arr7); 
/*
 [
   2, 3, 10, 20,
   40, 4,  5,  6 
]
*/

arr7.splice(2,2,40,50);  // 2nd index par jakar , 2 element delete & 40,50 inserted from that index
// console.log(arr7); 
/*
  [
   2, 3, 40, 50,
  40, 4,  5,  6
]
*/

var fruits =['Apple', 'Orange','Kiwi','Strawberry'];
fruits.splice(4,1,'Banana'); 
// console.log(fruits); // [ 'Apple', 'Orange', 'Kiwi', 'Strawberry', 'Banana' ]



//>>>>>>>>>>>>>>>>>>>>>>> Iterating over Arrays 

// There are multiple ways to iterate over Arrays but here i am discusssing 3 types
// while , for loop
// for ... in  // we'll study in object topic
// forEach

// Example -
var fruits2 = [ 'Apple', 'Orange', 'Kiwi', 'Strawberry', 'Banana' ];

// iterating using for loop
for(var i=0; i<fruits.length; i++){
    // calling a fun to print it 
    // print(fruits2[i]);
}
// function print (element){
//     console.log(element);
// }
/*
Apple
Orange
Kiwi
Strawberry
Banana
*/

// 2nd way - forEach method
// console.log("Printing elements using forEach method :");
function print (element){
    console.log(element);
}

// fruits2.forEach(print);  // just give fun name on which you want to iterate frequently 
/*
Printing elements using forEach method :
Apple
Orange
Kiwi
Strawberry
Banana
*/