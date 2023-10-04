// link to diagram - https://www.google.com/search?q=what+is+this+keyword+in+javascript&sca_esv=570043172&rlz=1C5CHFA_enIN1024IN1024&tbm=isch&sxsrf=AM9HkKn2faqfWoJWGvu8LsDgjlTjWC9vCg:1696258816165&source=lnms&sa=X&ved=2ahUKEwjt1LzB0NeBAxWYMN4KHQQ-DZ0Q_AUoAnoECAIQBA&biw=1422&bih=758&dpr=0.9#imgrc=8i3xq2PbBkJnHM
// https://webtips.dev/webtips/javascript-interview/what-is-the-this-keyword-in-javascript
const user = {
    username: "shoeb",
    price: 999,

    // to access/refers  current (parent) context properties , we use "this" keyword 
            welcomeMessage: function() {
                console.log(`${this.username} , welcome to website`);  //shoeb , welcome to website
                console.log(this);
                /*
                    {
                        username: 'shoeb',
                        price: 999,
                        welcomeMessage: [Function: welcomeMessage]
                    }
                */
            }

   }

/*
Note - 
    we can not use this keyword directly into arrow function 
    because it does not contain its own this .
    So when we use this keyword in the arrow function, it will return an undefined value.
 */

// user.welcomeMessage()

// user.username = "sam"    // Here i have change curent context of username 
// user.welcomeMessage()
  /*  {
        username: 'sam',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
    }
    */
 
// console.log(this);  //{}  - empty string : here in node enviornment it refers global object.

// But in Browser window -o/p - window object 
/*
  Window {0: global, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
*/


// function chai(){
    // let username = "shoeb"
    // console.log(this);
    /*
                    <ref *1> Object [global] {
                global: [Circular *1],
                queueMicrotask: [Function: queueMicrotask],
                clearImmediate: [Function: clearImmediate],
                setImmediate: [Function: setImmediate] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                structuredClone: [Function: structuredClone],
                clearInterval: [Function: clearInterval],
                clearTimeout: [Function: clearTimeout],
                setInterval: [Function: setInterval],
                setTimeout: [Function: setTimeout] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                atob: [Function: atob],
                btoa: [Function: btoa],
                performance: Performance {
                    nodeTiming: PerformanceNodeTiming {
                    name: 'node',
                    entryType: 'node',
                    startTime: 0,
                    duration: 69.91126399859786,
                    nodeStart: 6.201292999088764,
                    v8Start: 11.17951899766922,
                    bootstrapComplete: 56.10130899772048,
                    environment: 29.824703998863697,
                    loopStart: -1,
                    loopExit: -1,
                    idleTime: 0
                    },
                    timeOrigin: 1696260375203.722
                },
                fetch: [AsyncFunction: fetch]
                }
    */

    // console.log(this.username);  //undefined  : Don't use this keyword with fun
// }

// chai()

// const chai = function () {      
//     let username = "shoeb"
//     // console.log(this.username);  //undefined
// }

// const chai =  () => {        // remove function keyword and use => after empty paranthesis
//     let username = "shoeb"
//     console.log(this);  // {} empty string 
// }


// chai()



/* Passing arguments to Arrow function  */


// 1: Explicit method  - use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* 
  2nd way to declare syntax Arrow function with 
  {implicit return method : dont use {} and return keyword } 
*/
// const addTwo = (num1, num2) =>  num1 + num2
  
// const addTwo = (num1, num2) => ( num1 + num2 )    // we will use this method in React a lot
// you can wrap inside parenthesis - No problem no need to use return keyword 

 
const addTwo = (num1, num2) => ( {username: "shoeb"})  // return Object using inside parenthesis ( )

// we will use this mehtod in react a lot 
const addThree = (num1, num2) => ({
    username: "shoeb",
    password : "12345",
    email : "mdshoeb1024@gmail.com"

}) 

// console.log(addTwo(3, 4))   //{ username: 'shoeb' }


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// we will learn more about forEach module ...