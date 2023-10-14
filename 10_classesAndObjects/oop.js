const user = {
    username: "shoeb",
    loginCount: 18,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);  // 'this' refers to current context - for eg -  kon sa monday kis week ka ?
        console.log(this);
        /*
        // Printing current context via this 
            {
                username: 'shoeb',
                loginCount: 18,
                signedIn: true,
                getUserDetails: [Function: getUserDetails]
            }
        */
    }

}
/*
The `this` keyword refers to the current object, and its value depends on how and where it's used. 
Inside a constructor function or a method of an object, 
`this` refers to the instance of the object being created or operated on.
*/


//console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  // accessig Global context - {} bcoz you are in node enviornment , but in browser you will see a lot more things 


/*
  Constructors in JavaScript are special functions used to create and initialize objects. 
  They serve as blueprints for creating new instances of objects with shared properties and methods. 
  Constructors are typically named with an initial capital letter to distinguish them from regular functions. 
  You can create your own custom constructors to define the structure and behavior of objects.
*/

// const promiseOne = new Promise(); // each time we need new context in memory we dont like to use old context of others 
// const date  = new Date(); // creating new context in memory using constructor method (new)

// here we are declaring a fun to 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // Defining a method 
    // user dont know about greeting method working : Abstraction 
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this   // implicitly defined - you can write or dont write : fun atomatically return  
}

const userOne = User("shoeb", 12, true)  
const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);

// console.log(userOne instanceof User);  // false
// console.log(userTwo instanceof User);  // false

 // when you print userOne actually here you have overridden userOne memory context with userTwo values - 
// this is very dangerous thing in collaborative development that's why we should use 'new ' to create new instances each time 
/*
username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false
*/


// construcotr provide us a new copy each time when object is created  ( new keyword)
// you can make any changes of that particular copies , there will be no effect on other copies (references )
// Importance of new keyword 

const user1 = new User("shoeb", 12, true)  
const user2 = new User("ChaiAurCode", 11, false)
// console.log(user1);
/*
  User { username: 'shoeb', loginCount: 12, isLoggedIn: true }
*/
// console.log(user2);
/*
User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }
 */

// console.log(userOne.constructor); // [Function: Object]   // using contructor we are accessing method 

// console.log(user1 instanceof User);  // true 
// console.log(user2 instanceof User);  // true 

// instanceof in javascript 
/*
  The instanceof operator in JavaScript is used to check the type of an object at run time. 
  It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 
*/

/*
The instanceof operator is a useful tool for checking the type or class of objects in JavaScript. 
It's commonly used in situations where you need to handle objects differently based on their origins or prototypes.
*/