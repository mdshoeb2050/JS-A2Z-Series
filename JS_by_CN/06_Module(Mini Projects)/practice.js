/**********************\
* Understanding Const *
\**********************/ 
//  console.log(a); // undefined  //-> due to hoisting concept
 var a;
//  console.log(a);
 a =50; // redeclaring possible
//  console.log(a);


// declare karte time hi initialize karna hoga
//const k;   // SyntaxError: Missing initializer in const declaration
 k=60;
 k=70; // can't redeclare in const (Read only )


 // in case of const hoisting concept won't work , here is different case - you can't use until & unless you have defined and declared it  at Run time .
//  console.log(z);  //ReferenceError: Cannot access 'z' before initialization
 const z=10;




/**********************\
* Understanding Let *
\**********************/ 

// var a =10;

// if(a<=10){
//     var b = 40;
// }
// else {
//     var c = 50;
// }


// console.log(a, b, c);  //10 40 undefined
// due to hosting, variables are accessed globally but in case of varibale 'c' we can get only declaration due to hoisting but not get initialized value until condition is TRUE


// ES6 introduced 'let' to create  "block scope variable"



var a =10;

// if(a<=10){
//     let b = 40;  //block scope
// }
// else {
//     let c = 50; //block scope 
// }


// console.log (a, b, c);  //ReferenceError: b is not defined   


if(a<=10){
    // due to hoisting we can fetch declaration but can't fetch and use actual initialized value at Run time 
    // we  can't use that variable before it reached its definition 
    // console.log(b);   //ReferenceError: Cannot access 'b' before initialization
    let b = 40;  
}

// let b;
// -----
// -----  dead Area 
// ----- 
// b=10;






/**********************\
*  Let vs Var          *
\**********************/ 

//  for(var i =1; i<=5; i++)  // here i have Global scope 
//  {
//     setTimeout(function(){
//       console.log(i);
//     },1000);
//  }

// for loop will run 5 times and  each time 'setTimeout' methods will wait for 1000ms then after  when value of i will be 6 (loop Stops)  then,  5 times 6 will be printed.

/*
    6
    6
    6
    6
    6
*/




//  for(let i =1; i<=5; i++)  // here i have Block scope 
//  {
//     setTimeout(function(){
//       console.log(i);
//     },1000);
//  }
 // every time we are calling SetTimeout , then  setInterval is bound to access block scope value and , it wait 1000ms then after it will print i value which is block scope hence 1,2,3,4,5 will be printed
 // i will be accesible only once in each iteration
 // i variable is bound to 1 round of  for loop only
/*
1
2
3
4
5
*/









/**********************\
*  For of loop *
\**********************/ 


`The for of statement creates a loop iterating over "Iterable objects"
including built-in String, Array, Array like objects (eg - arguments or Nodelist), TypedArray, Map, Set and user defined iterables.

=> It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
` 

var arr =[1,2,3,4,5];

//1st way 
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//2nd way
for(let i of arr){
   console.log(i);
}
// Here Both will print same Results
// for of is more  efficient method to work on iterable objects.

// check comaptibility issue on MDN doc,  when you use any new methods 