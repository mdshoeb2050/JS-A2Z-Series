const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){    // forEach needs a  Callback fun which returns a value to forEach method
//     console.log(val);
// } )
/*
    js
    ruby
    java
    python
    cpp
*/

// Arrow fun par bhi forEach method laga sakte h 
// fun ka name nahi dena Bcoz hume value store nahi karna h variable me , use return karna h forEach()  method ko

coding.forEach( (item) => {  
    // console.log(item);
} )
/*
    js
    ruby
    java
    python
    cpp
*/

/* Something Interesting */
// kisi normal function ka reference  forEach method me pass kaise kare ?

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // here i have passed only function reference - baki fun will get executed automatically


/* Note - you can pass multiple parameters in forEach method  */
coding.forEach( (item, index, arr)=> {     // here arr refers to - access to whole Array
    // console.log(item, index, arr);
} )
/*
    js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

/* Note - you will get data from database in Array form which consists objects - 
   in that case you have proper knowledge about how you will handle that array of objects  */

// here i have taken an example - Array of Objects 

// your task is : to fetch object's values inside whole array ??
// Array >> objects >> value 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java", 
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName); 

} )
/*
javascript
java
python
*/


// Note - Loops => To be continued....