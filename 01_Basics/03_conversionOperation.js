let score = "ShoebAnsari"

// console.log(typeof score);  // string


//console.log(typeof(score));  //second method using small brackets

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  /*  number */
// console.log(valueInNumber);  /* NaN */


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ShoebAnsari"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ShoebAnsari" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);  /* string */




// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " ShoebAnsari"

let str3 = str1 + str2
// console.log("After string concatenation result is : ", str3 ); /*hello ShoebAnsari */


// console.log("1" + 2);      //12
// console.log(1 + "2");     //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  // first add two digits then concatenate - 1+2= 3 => 3 "2" == 32

// console.log( (3 + 4) * 5 % 3);  // use brackets for better code redability

// console.log(+true);  //1  
// console.log(+"");    //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   // not a good way to assign value to multiple varibles

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter++);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion