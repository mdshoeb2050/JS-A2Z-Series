//var c = 300    // Avoid using var keyword  , use  let or const 

let a = 300     // Global scope 


/* IF this method is defined in other file and imported in this file 
 then it will be more complicated to debug the codes  because of var keyword */
if (true) {
    let a = 10    //local scope 
    const b = 20  // local scope 
    // var c = 30   // Global scope 
    // or 
     //c = 30   // Global scope 
    
}


if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  //10   - local scope

    // Nested scope 
    if (9>4) {
          
        if (4<5) {
             if (0<1) {
                
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


function one(){
    const username = "shoeb"

    function two(){
        const website = "foclearning.com"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "shoeb"
    if (username === "shoeb") {
        const website = "foclearning"
        // console.log(username + website);
    }
    // console.log(website);
}
                                        
// console.log(username);
 

// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}
