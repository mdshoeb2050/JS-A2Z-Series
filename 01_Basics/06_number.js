// JavaScript Numbers
// JavaScript has only one type of number. Numbers can be written with or without decimals.

// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals

// >> { Extra large or extra small } numbers can be written with scientific (exponent) notation:

// let a = 123e5;    // eN  :  N 0's after number or multiply by 10 power 5  =>  12300000  
// let b = 123e-5;   // e-N : Divide by 10 oer 5 =>  0.00123


/*
JavaScript Numbers are Always 64-bit Floating Point
> Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

> JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

> This format stores numbers in 64 bits, where 
    # the number (the fraction) is stored in bits 0 to 51
    # the exponent in bits 52 to 62
    #  and the sign in bit 63:

Value (aka Fraction/Mantissa)	  Exponent	            Sign
52 bits (0 - 51) 	            11 bits (52 - 62)	  1 bit (63)

*/

//Integer Precision
//Integers (numbers without a period or exponent notation) are  { accurate up to 15 digits.}

// Example
let x = 999999999999999;   // x will be 999999999999999

//Numeric literals with absolute values equal to 2^53 or greater 
// are too large to be represented accurately as integers.
let y = 9999999999999999;  // y will be 10000000000000000



// Floating Precision
// Floating point arithmetic is not always 100% accurate:

let n = 0.2 + 0.1;
// console.log("The value of n is :", n); //0.30000000000000004


//To solve the problem above, it helps to multiply and divide:

n = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(n); // 0.3


/*
    Adding Numbers and Strings
    WARNING !!
    JavaScript uses the + operator for both addition and concatenation.
   #Numbers are added.
   #Strings are concatenated.
*/

/*
let x = 10;
let y = 20;
let z = x + y; //30
*/

/*
If you add two strings, the result will be a string concatenation:

let x = "10";
let y = "20";
let z = x + y;  // 1020
*/

/*
If you add a number and a string, the result will be a string concatenation:
let x = 10;
let y = "20";
let z = x + y;  //1020
*/


/*
If you add a number and a string, the result will be a string concatenation:
let x = "10";
let y = 20;
let z = x + y;  //1020
*/


/*
Tip : - A common mistake is to expect this result to be 30:
*/
/*
 x = 10;
 y = 20;
let z = "The result is: " + x + y;
console.log(z);  // The result is: 1020
*/


/*
A common mistake is to expect this result to be 102030:

let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
console.log(result); // 10+20 = 30 => 30 + "30" => 3030

*/
/*
The JavaScript interpreter works from left to right.
        #First 10 + 20 is added because x and y are both numbers.
        #Then 30 + "30" is concatenated because z is a string.
*/

// Numeric Strings
// JavaScript strings can have numeric content:
/*
let x = 100;         // x is a number

let y = "100";       // y is a string
*/


/*
JavaScript will try to convert strings to numbers in all numeric operations:

 x = "100";
 y = "10";
 let z = x / y;
 cnsole.log(z); //10

 this will also work -
 x = "100";
 y = "10";
 let z = x * y;
 console.log(z); //1000



 this will also work -
x = "100";
y = "10";
z = x / y;
console.log(z);  //10

x = "100";
y = 10;
z = x / y;
console.log(z);  //10


x = "100";
y = "10";
z = x - y;
console.log(z);  //90



But this will not work  "100" + "10" = 110  - Wrong Output 

x = "100";
y = "10";
z = x + y;
console.log(z);   // 10010

In this  example JavaScript uses the + operator to concatenate the strings.

*/


//NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):


let n1 = 100 / "Apple";

//  console.log(n1); // NaN

//  However, if the string is numeric, the result will be a number:

let x2 = 100 / "10";
// console.log(x2); //10


/*
You can use the global JavaScript function isNaN() to find out if a value is a not a number:

Example
x = 100 / "Apple";
console.log(isNaN(x));  //true
*/

/*
Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

Example
let x = NaN;
let y = 5;
let z = x + y; //NaN


let x = NaN;
let y = "5";
let z = x + y; //NaN5


>>Important ***
NaN is a number: typeof NaN returns number:

Example
console.log(typeof NaN); //number
*/

/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

Example
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity
 */

/*
Division by 0 (zero) also generates Infinity:

Example
let x =  2 / 0;
let y = -2 / 0;
 */

/*
Infinity is a number: typeof Infinity returns number.

Example
console.log(typeof Infinity); //number 

*/

/*
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example
let x = 0xFF;
console.log(x); //255
*/

/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

>Hexadecimal is base 16.
>Decimal is base 10.
>Octal is base 8.
>Binary is base 2.


*/
let myNumber = 32;
// console.log("Original number is :",myNumber);

// console.log("Hexatrigesimal (base 36): ",myNumber.toString(36));
// console.log("Duotrigesimal (base 32): ", myNumber.toString(32));
// console.log("Hexadecimal (base 16): ", myNumber.toString(16));
// console.log("Duodecimal (base 12): ",myNumber.toString(12));
// console.log("Decimal (base 10): ",myNumber.toString(10));
// console.log("Octal (base 8): ",myNumber.toString(8));
// console.log("Binary (base 2): ",myNumber.toString(2));

/*
Original number is : 32
Hexatrigesimal (base 36):  w
Duotrigesimal (base 32):  10
Hexadecimal (base 16):  20
Duodecimal (base 12):  28
Decimal (base 10):  32
Octal (base 8):  40
Binary (base 2):  100000
*/


/*

JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals:

let x = 123;
But numbers can also be defined as objects with the keyword new:
let y = new Number(123);

Example

 */

let x1 = 123;
let y1 = new Number(123);
// console.log(x1);  //123 - number 
// console.log(y1);  //[Number: 123]  - object


/*
Do not create Number objects.
The new keyword complicates the code and slows down execution speed.
Number Objects can produce unexpected results:
*/

/*
// x is a number
 x = 500;

// y is an object
y = new Number(500);

// Numbers and Number objects cannot be safely compared:
// console.log(x==y); //true
*/


/*
When using the === operator, x and y are not equal.


// x is a number
x = 500;

// y is an object
y = new Number(500);
console.log(x===y);  //false
*/

/*
Note the difference between (x==y) and (x===y).

// JavaScript objects cannot be compared
let x = new Number(500);
let y = new Number(500);
console.log(x==y); //false 

console.log(x===y); //false

//Note -> Comparing two JavaScript objects always returns false.



Comparing two objects like this results in false even if they have the same data. 
It is because those are two different object instances,
they are referring to two different objects.
There is no direct method in javascript to check whether two objects have the same data or not.

Note -> 
One way you can compare two objects by value is by using the JSON. stringify function. 
The JSON. stringify() function converts objects into equivalent JSON strings
*/
