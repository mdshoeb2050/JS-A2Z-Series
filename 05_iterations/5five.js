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

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

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