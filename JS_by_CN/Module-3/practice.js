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

// Array is something like Object , here in case of array keys are index.

var arr = [20,30,40,50];

// you can access both ways
// As we know that object keys must be string  
// console.log(arr[0]); //20 // here bcoz of Coercion interger value got converted into string format 
// console.log(arr["0"]);  //20

//here creating object like arrray 
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

// console.log(arr.length); //11   // prop1 not counted here bcoz of string value

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