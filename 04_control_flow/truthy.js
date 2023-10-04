const userEmail = "mdshoeb1024@gmail.com"   // true 
const userEmail2 = ""              // --> empty string : false 
const userEmail3 = []               // --> empty Array  : true

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}


// >>> ***>> falsy values <<<***<<<
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// >>> ***>>  truthy values <<<***<<<
// "0", 'false', " ", [], {}, function(){}     
/* double quote or single quote me yadi koi element h to wo truthy mana jayega - space bhi  */

// function(){}   //--> empty fun with no parameter 

// How to check array is empty or NOT 
// if (userEmail.length === 0) {   // via typechecking 
//     console.log("Array is empty");
// }

const emptyObj = {}

// How to check an Object  is empty or NOT  
if (Object.keys(emptyObj).length === 0) {  // Here array of keys returned and here i am checking if it contains atleast 1 key or not
    // console.log("Object is empty");
}
/*
// interesting facts
// go to > inspect > console > do experiment 

  false == 0  => true 
  false == '' => true 
    0   == '' => true 

    // mostly used in competitive programming  

*/


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

/*
  Note:- 
   The nullish coalescing ( ?? ) operator is a logical operator that returns 
   its right-hand side operand when its left-hand side operand is null or undefined ,
    and otherwise returns its left-hand side operand.

 */
// just a callback value form server side how to handle {errors, null, undefined or any value }

/*
  What is the purpose of the null coalescing operator?
   Ans - The null-coalescing operator ?? returns the value of its left-hand operand 
       if it isn't null ; otherwise, 
       it evaluates the right-hand operand and returns its result.

    for more info - watch : https://youtu.be/yz2PwipRqzw?si=4g3T2xDemOmHdmF- 
*/


console.log(val1);

// Ternary Operator
// link to Image -> https://media.geeksforgeeks.org/wp-content/uploads/20191122171059/Conditional-or-Ternary-Operator-__-in-Java.jpg

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")