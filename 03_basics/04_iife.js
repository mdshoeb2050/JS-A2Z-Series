/****************************
 *      Lecture - 24
 * -Immediately Invoked Function Expressions (IIFE)
 * 
 ***************************/


// we should use IIFE technique in our code to avoid pollution of Global Scope i.e (jo bhi varibles declard h ) - 
// Immediately Invoked Function Expressions (IIFE)

// syntax -: () ()  
// () - fun definition    --> inside this parenthesis we will write fun definition
// ()  - Execution call

 

(function chai(){
    // named IIFE -->  It means you are using function name 
    console.log(`DB CONNECTED`);
})();

// iife ke curent context ko STOP karne ke liye ; ka use karenge nahi to ye sabhi iife ko execute karne lagega 
// in this case it  will produce an error


//Simple IIFE - Here i am NOT using function name 
(()=>{
    console.log(`DB CONNECTED SUCCESSFULLY`);   // DB CONNECTED SUCCESSFULLY
})(); // 2 iife eksath likhte time 1st wale iife ke bad ; lagana must h

 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // DB CONNECTED TWO by mdShoeb
} )('by mdShoeb')  // Here i have passed parameter to execution call  



// chai('shoeb')  // I have used this into execution call - ( smart method )

