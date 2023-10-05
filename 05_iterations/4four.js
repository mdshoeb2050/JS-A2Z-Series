const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// default for..in template in Vscode 
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
for(const key in myObject){
    // console.log(key);
}
/*
js
cpp
rb
swift
*/
for(const key in myObject){
    // console.log(myObject[key]);
}
/*
javascript
C++
ruby
swift by apple
*/


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);  // here you will get only keys (indexes of elements stored in array - 0-Based indexing )
    /*
        0
        1
        2
        3
        4
    */
    // console.log(programming[key]); // here you will get actual values stored in array 
    /*
        js
        rb
        py
        java
        cpp
    */
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);  // nothing in output - Bcoz map is not iterable using for..in method 
// }