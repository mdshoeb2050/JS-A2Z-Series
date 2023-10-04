//var c = 300    // Avoid using var keyword  , use  let or const 

let a = 300     // Global scope 


/* IF this method is defined in other file and imported in this file 
 then it will be more complicated to debug the codes  because of var keyword */
if (true) {
    let a = 10    //local scope 
    const b = 20  // local scope 
    // var c = 30   // Global scope   - this is the problem
    // or 
     //c = 30   // Global scope - this is the problem
    
}


if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  //10   - local scope

    // Nested scope 
    if (9>4) 
    {
          
        if (4<5) 
        {
             if (0<1) 
             {
                
             }
        }
    }
    
}

// console.log(a);  //300 -  // Global scope 
// console.log(b);
// console.log(c);

/* Brower ke console me jab scope find karenge to wo alag hota h kisi bhi code enviornment (eg - Vscode) ke comparison me , waha scope alag hoga */



/****************************
 *      Lecture - 22 
 * - scope level & mini hoisting 
 * 
 ***************************/


// You can ask for Money to your elder brother , but your elder brother can't ask you for money.
// Inner fun can access outer fun , But Outer fun can't acces innner fun properties or method due to scoping method. { child vs parent fun }

//Tip : As much as you familiar with errors , you will become a good programmer.

function one(){
    const username = "shoeb"

    function two(){
        const website = "foclearning.com"
        // console.log(username);
    }
    // console.log(website);     // Gives Error - Hence fun two() won't be executed

     two()

}

one()  // fun call 


/* Note : there will be a call stack who manages all function which have been called 
 we will learn about "function call stack"  in upcoming lectures */

if (true) {
    const username = "shoeb"
    if (username === "shoeb") 
    {
        const website = "foclearning"
        console.log(username + website);   //shoebfoclearning
    }
    // console.log(website);   // Error - website is not defined 
}
                                        
// console.log(username);    // Error - username is not defined 




// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))  // 6  Here fun executed successfully  

function addone(num){  // Normal function
    return num + 1
}



addTwo(5)   //ReferenceError: Cannot access 'addTwo' before initialization ->  Here fun will not execute and gives Error bcoz 
const addTwo = function(num){  // function Expression  - here Expression varible : addTwo can hold entire function & JSON value and many more .
    return num + 2
}
