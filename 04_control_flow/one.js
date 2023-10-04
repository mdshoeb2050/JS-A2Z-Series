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

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
// }