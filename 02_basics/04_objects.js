// const tinderUser = new Object()    //{}      // sigleton Object
const tinderUser = {}              //{}    // Non-Sigleton Object

// console.log(tinderUser);

tinderUser.id = "uiop12345"
tinderUser.name = "Shoeb"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// This is for  another App

const regularUser = {
    email: "mdshoeb1024@gmail.com",
    //Nesting of Objects
    fullname: {
        userfullname: {
            firstname: "shoeb",
            lastname: "ansari"
        }
    }
}

// **> try to print Nested objects 
// console.log(regularUser);
/*
    {
    email: 'mdshoeb1024@gmail.com',
    fullname: { userfullname: { firstname: 'shoeb', lastname: 'ansari' } }
    }
*/

// console.log(regularUser.fullname);
//{ userfullname: { firstname: 'shoeb', lastname: 'ansari' } }

// console.log(regularUser.fullname.userfullname);
//{ firstname: 'shoeb', lastname: 'ansari' }


// console.log(regularUser.fullname.userfullname.firstname); //shoeb


//Q- ** How to combine or merge two or more objects **

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);    // nested objects as it is print
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 

// const obj3 = Object.assign( obj1, obj2, obj4)  // bad practice {} must include

/*
    assign()
    Copy the values of all of the enumerable own properties from one or more source objects to a target object.
    Returns the target object.
*/

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // Best practice {} optional but it improve code redability
// {} refers {target object}  & rest parameters refers {source objects}
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const target ={ a: 1 , b:2};
const source ={ c: 3 , d:5};

const returnedTarget= Object.assign(target, source);
// console.log(returnedTarget);  //{ a: 1, b: 2, c: 3, d: 5 }

// console.log(returnedTarget == target);  // true

//>>** Using spread operator **<<< 

const obj3 = {...obj1, ...obj2}
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// Diffrent types of users in Database 
const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "gh234@gmail.com"
    },
    {
        id: 3,
        email: "jk566@gmail.com"
    },
]
// Accessing first value in object
users[1].email


// console.log(tinderUser);



// ### Database work experience Demo ###

//***>>> fetching all { keys & values} from tinderUser Object in a Array form 

// console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ] - we can easily perfom all array method on this Array of keys
// console.log(Object.values(tinderUser));   //[ 'uiop12345', 'Shoeb', false ]

// console.log(Object.entries(tinderUser));   // fetching all entries in Array form  
//[ [ 'id', 'uiop12345' ], [ 'name', 'Shoeb' ], [ 'isLoggedIn', false ] ]

// ### when you want to fetch those value which doesn't exist in DB then in that case you must check manually

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true
// hasOwnProperty -> Determines whether an object has a property with the specified name.

/*
# Extra note - we will study in upcoming lectures 

[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty : ƒ hasOwnProperty()
isPrototypeOf : ƒ isPrototypeOf()
propertyIsEnumerable : ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
 */



//###  object de-Structuring  and JSON API intro 

const course = {
    coursename: "Advance JS",
    price: "1999",
    courseInstructor: "mdShoeb"
}
// ## first syntax {traditional way} 

// course.courseInstructor

// ## Second syntax  {smart way}
const { courseInstructor : instructor} = course 
/*
    course => object name (from where you will fetch data (key , value))
    instructor => temp name of courseIntructor {destructuring of a value (object )}
*/
// console.log(courseInstructor);
// console.log(instructor); //mdshoeb


// Destructuring concept in React - Example  - {company }

/*
const navbar =({company})=>{
}
navbar(company = "shoeb")
*/

// ***>> Array me bhi destructuring hota h , But jyada use nahi hota h

// Apna kam dusre ke sar par dal dena  - API (sab handle kar lega )

//## JSON format example - ( key & value both are -> string in JSON)
// {
//     "name": "shoeb",
//     "coursename": "Advance JS",
//     "price": "free"
// }


// ## API data in the form of Array objects

//## Reference 
/*
   # randomuser me API 
   # JSON formatter 
*/
[
    {},
    {},
    {}
]

