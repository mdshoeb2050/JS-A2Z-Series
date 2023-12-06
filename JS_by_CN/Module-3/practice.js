// Object 
//1st way
var obj1 = {}; //empty object

// 2nd way to create object using new keyword
var obj1 = new Object(); 

var student = {
    name : "shoeb",
    rollno : 67,
    marks : 80
};
//>>>>>> Accessing elements

// console.log(student.name);
// console.table(student);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│  name   │ 'shoeb' │
│ rollno  │   67    │
│  marks  │   80    │
└─────────┴─────────┘
*/

//>>>>>>> Updating elements

// student.rollno=420;
// student.name="Surya";
// console.table(student);


// creating another obj named employee 

let employee ={
    _name : "Kallu",
    age : 24,
    empId : 420,
    salary : {
        ctc : 30000,
        gross : 50000
    },
    exp  : 3,
    gender : "male"
};
// using square bracket notation we can  access invalid identifier (starting with hyphen, space, number) also.

// console.log(employee["_name"]);   // dot vs square bracket notation
// console.table(employee);
/*
┌─────────┬───────┬───────┬─────────┐
│ (index) │  ctc  │ gross │ Values  │
├─────────┼───────┼───────┼─────────┤
│  _name  │       │       │ 'Kallu' │
│   age   │       │       │   24    │
│  empId  │       │       │   420   │
│ salary  │ 30000 │ 50000 │         │
│   exp   │       │       │    3    │
│ gender  │       │       │ 'male'  │
└─────────┴───────┴───────┴─────────┘

*/

// using fun format(obj,prop) method ,  we can print object property
function print(obj,prop){
    console.log(obj[prop]);  //male
}
var prop = "gender";
// print(employee, prop);


//>>>>>>>>>>>>>>>>>>>> Deleting elements (there are two ways )

// 1st way
delete employee._name;
// 2nd way using square bracket notation
delete employee["_name"]; 

// console.table(employee.gender);     //male
// console.table(employee["gender"]);  // male
// console.table(employee["_name"]);  //undefined



// >>>>>>>>>>>>>> How are objects stored in memory 

var obj1 ={
   name :"shoeb",
   age : 23
};

// passing object reference to another object (sharing control )

var obj2=obj1;  

//now here obj1 and obj2 both are pointing to same memory location
//making changes in obj2
obj2.name="kalua";

// console.log(obj1);  //{ name: 'kalua', age: 23 }
// console.log(obj2);  //{ name: 'kalua', age: 23 }


//>>>>>>>>>>> inserting new property 
obj2.gender="male";
// console.log(obj2);  // { name: 'kalua', age: 23, gender: 'male' }
// console.log(obj1);  // { name: 'kalua', age: 23, gender: 'male' }

// console.log(obj1==obj2);  //true
// console.log(obj1===obj2); //true
//now here obj1 and obj2 both are pointing to same memory location


// now creating a 3rd object name obj3

var obj3 ={
    name : "Aladeen",
    age : 25
}

// here obj1 and obj3 have different memory location
// console.log(obj1==obj3);  //false
// console.log(obj1===obj3); //false



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Iterating over the objects 
// NOTE - keys must be string 
var student2 = {
    name : "Sahabe",
    rollno : 77,
    marks : 80,
    college : "Kashiit",
    "5" : "five"
};


for(prop in  student2){  // here prop is bydefault var which iterate automatically one by one over student properties 
    // console.log(prop);  // printing keys 
    
    //printing both keys and values 
    // console.log(prop, student2[prop]);
    /*
        5 five
        name Sahabe
        rollno 77
        marks 80
        college Kashiit
    */
}

// Another ways to print Object's  keys in the form of array of keys 
// it  will jsut simply return Array of keys 

// 1st way using Object.keys() method 
var keys = Object.keys(student2); 
// console.log(keys);  //[ '5', 'name', 'rollno', 'marks', 'college' ]

//or 
// console.log( Object.keys(student2));


// 2nd way using Object.getOwnPropertyNames() method 
var keys2 = Object.getOwnPropertyNames(student2);
// console.log(keys2);  //[ '5', 'name', 'rollno', 'marks', 'college' ]



//>>>>>>>>>>>>>>>>>>>>>>> Nested Objects

var student3 = {
    name : "Amir Hamza",
    rollno : 51,
    marks : 78,
    college : "KashiIT",
    "5" : "five",
    address : {
        street : "Ghosia Bazar",
        district : "Bhadohi",
        pincode : 221414
    }
};

// accessing nested properties 
// console.log(student3.address.district);  //Bhadohi
// console.log(student3.address["district"]);  //Bhadohi   // you  can use this method in all cases of invalid identifier

// Tips : correct way to accessing values of nested objects 

// 1st way  - object.key1.key2
// 2nd way  - object["key1"]["key2"]
// 3rd way  - object.key2["key2"]




//>>>>>>>>>>>>>>>>>>>>>>>>>>>> Arrays and Objects

// Arrays use numbered indexes while  objects use Named indexes.
// Array is something like Object , here in case of array keys are index.
/*
When to Use Arrays?
    We use arrays whenever we want to create and store a list of multiple items in a single variable.
    Arrays are especially useful when creating ordered collections,
    where items in the collection can be accessed by their numerical position in the list.
*/


var arr = [20,30,40,50];

// you can access both ways
// As we know that object keys must be string  
// console.log(arr[0]); //20 // here bcoz of "Coercion concept" interger value got converted into string format 
// console.log(arr["0"]);  //20

//here creating same arr using object representation - Curly braces
var obj = {
    "0" : 20,
    "1" : 30,
    "2" : 40,
    "3" : 50
};
 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Iterating over Arrays using For..in method


var arr = [20,30,40,50];

arr[10]=200;

//object ki tarah yaha bhi property add kar sakte h
arr.prop1="hello";

// console.log(arr);
//[ 20, 30, 40, 50, <6 empty items>, 200, prop1: 'hello' ]

// console.log(arr.length); //11   // prop1 not counted here bcoz of string value, only integer value will be counted 

// for ..in method on Array
for(prop in arr){
    // console.log(prop);  // priniting all keys of object
}
/*
0
1
2
3
10
prop1
*/



//>>>>>>>>>>>>>>>>>>>>> Timing Events 

/*
Timing events are mechanisms that allow you to execute code or functions at specified intervals or after a certain delay.
These events are essential for creating animations, managing asynchronous tasks, and implementing features such as timeouts and intervals. 
*/


// setTimeout

// used to execute a specified function or code block after a specified delay (in milliseconds).
// It triggers the code once after the specified time interval.
//basic structure
/*
var id2 = setTimeout(() => {
        
    }, timeout);
*/


// now let's play 

function hello(){
    console.log("Hello Everyone, How is the Josh ? ");
}

// setTimeout(hello, 3000);  //  hello - fun exression , hello() - fun call


// setInterval
// used to repeatedly execute a specified function or code block at a defined interval.
// It continues to trigger the code at the specified interval until it is cleared using `clearInterval`.

let counter =1;
function wishing(){
    console.log("Happy birthday :)");
    counter++;
    // if we want to stop use clearInterval to clear instance id of the setInterval
    if(counter == 4){
        clearInterval(instanceId); // stop the interval after 3 execution
    }
}

// var instanceId = setInterval(wishing, 2000); // here setInterval create instances and return its Id.


// Both `clearTimeout` and `clearInterval` 
// functions are used to cancel a timeout or interval set by `setTimeout` or `setInterval`, respectively.
/*
   setTimeout - clearTimeout  - 1 bar 
   setInterval - clearInterval - Bar bar 
*/
 

// Example of setTimeout , clearTimeout
let timeoutId = setTimeout(function() {
    console.log("This code won't run.");
  }, 2000);

clearTimeout(timeoutId); // Cancel the timeout, preventing the code from executing


// Example of setInterval, clearInterval
  let intervalId = setInterval(function() {
    console.log("This code won't run repeatedly.");
  }, 1000);
  clearInterval(intervalId); // Cancel the interval, preventing further executions
