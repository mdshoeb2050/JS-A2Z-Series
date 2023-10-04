/****************************
 *      Lecture - 26
 * -Control flow in javascript  in one shot
 * 
 ***************************/

// Control flow is the order in which statements are executed in a program. 
//  The default control flow is for statements to be read and executed in order from left-to-right,
//  top-to-bottom in a program file.

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
if(2 == "2"){  //condition : true
    // console.log("hello coders");
}
if(2 === "2"){  // Type checking - condition :false
    // console.log("hello coders");
}

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"   // local scope
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);    // error 


// const balance = 1000


/* Implicit scope : statement in 1 line  --> Bad practice */
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


//Real life example 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {   // 2 -> true , 3 --> true
    // console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {  // single check in multiple option condition
    // console.log("User logged in");
// }

// Note : In upcoming lectures you will learn multiple { conditional rendering }
// conditional rendering link to diagram : https://miro.medium.com/v2/resize:fit:1400/1*cDDiXg9p6rKAja7rms4mfA.png
