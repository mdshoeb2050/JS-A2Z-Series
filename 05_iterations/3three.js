//Tip :- three.js is a kind of JS library.

// for of

// ["", "", ""]   // Array of string 
// [{}, {}, {}]  // Array of objects 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // yaha loop me object hona jaruri nahi , string, map... kuch bhi ho sakta h 
    // yaha object ka matlab -> koi entity (string , map , object(JS) ,, etc ) , naki JS wala object nahi 
    // console.log(num);
}
/*
    1
    2
    3
    4
    5
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/



// >>> Maps  <<<<
// The map object holds key-value pairs and remembers that original insertion order of the keys.
// any value (both object and primitive values) may be used as either a key  or a value.
// map objects are collection of key-values pairs.
// A key in hash map may only occurs once. It is unique in map's collection.

const map = new Map()  // using map() method i have created an object map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Cn', "China")


// console.log(map);
/*
    Map(4) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France',
    'Cn' => 'China'
    }
*/
for(const key of map ){
    // console.log(key);
}
/*
it prints key-value pairs in Array form 

[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
[ 'Cn', 'China' ]
*/

// >>> Interesting syntax ( square bracket notation)
for (const [key] of map) {  // destructing of array 
    // console.log(key);
}
/*
IN
USA
Fr
Cn
*/

for (const [key, value] of map) {  // destructing of array 
    // console.log(key, '=>', value)
}
/*
IN => India
USA => United States of America
Fr => France
Cn => China
*/

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of myObject)
    {
    //    console.log(key, ':-', value);    //TypeError: myObject is not iterable
    }

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject1) {
//     console.log(key, ':-', value);      //TypeError: myObject is not iterable
// }


/* Note -  there is another way exist by which we can iterate over Objects  , we will study in upcoming lectures */

/*
   #conclusion 
We can use {For of} loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
We can use {For in} loop for values printing/for iterating over values "by Indexes/Keys" over Objects and Arrays & Strings .

We Can Use {for Each} loop for iterating  {Arrays} and its values as well.

Use for...of with arrays and other iterable objects(strings, maps, sets .etc)
Use for...in to iterate over keys/properties of plain objects.



 */