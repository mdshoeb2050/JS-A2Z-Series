/****************************
 *      Lecture - 24
 * -Immediately Invoked Function Expressions (IIFE)
 * 
 ***************************/

// To avoid pollution of Global Scope (jo bhi varibles declard h ) - we should use IIFE technique in our code
// Immediately Invoked Function Expressions (IIFE)

// () ()  
// () - fun definition
// ()  - Execution call

 

(function chai(){
    // named IIFE - It means you are using fun name 
    console.log(`DB CONNECTED`);
})();

// iife ke curent context ko STOP karne ke liye ; ka use karenge 


//Simple IIFE - not using fun name 
(()=>{
    console.log(`DB CONNECTED SUCCESSFULLY`);
})(); // 2 iife likhte time 1st wale iife ke bad ; lagana must h

 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('by mdShoeb')  // Here i have passed parameter to execution call  

// chai('shoeb')  // I have used this into execution call 

