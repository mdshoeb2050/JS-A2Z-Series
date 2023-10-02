// singleton
// Object.create  // constructor method to create objects - singleton method

/*
In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

All JavaScript values, {except primitives}, are objects.

// *** >> JavaScript Primitives
A primitive value is a value that has no properties or methods.
3.14 is a primitive value

A primitive data type is data that has a primitive value.
// >>>JavaScript defines 7 types of primitive data types:

Examples
    string
    number
    boolean
    null
    undefined
    symbol
    bigint
*/

// object literals



// key : value  => both are string in object behind the scene strign is considered
// you can make also nested objects

//creating a symbol and add to this into obejct to make symbol as a key
const mySym = Symbol("key1")

//creating an object
const JsUser = {
    name: "Shoeb",
    "full name": "Shoeb Ansari",
    [mySym]: "mykey1",  // here i have used symbol as a key [mySym]
    age: 18,
    location: "Varanasi",
    email: "mdshoeb1024@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // 1st way to access obejects value
// console.log(JsUser["email"])  // 2nd way to access obejects value {square notation method}

// console.log(JsUser["full name"]) //this is the best practice 

// console.log(JsUser[mySym])  //mykey1   - * interview things
// console.log( typeof JsUser[mySym])  //string


// * Interview Q - Create a symbol make that key and access that value 
JsUser.email = "mdshoeb1024@gmail.com"
// Object.freeze(JsUser)  // value freez - ab aage koi bhi new value propogate nahi hoga iske andar
JsUser.email = "mdshoeb1024@microsoft.com"
// console.log(JsUser);   // email: 'mdshoeb1024@gmail.com',

/*
{
  name: 'Shoeb',
  'full name': 'Shoeb Ansari',
  age: 18,
  location: 'Varanasi',
  email: 'mdshoeb1024@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'          // here it refers that key is symbol, not a normal key 
}
*/

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // same object ko refer karna using this keyword
}

// console.log(JsUser.greeting);  //[Function (anonymous)]  - fun execute nahi hua h sirf uska reference aaya h
// console.log(JsUser.greeting());  

// console.log(JsUser.greetingTwo()); 
//Hello JS user, Shoeb 
// undefined  -> ye extra line execute hua h browser me bhi hota h - have to study in upcoming lecture 
