const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNumers.map( (num) => { 
    return num + 10
})
// console.log(newNums1);
const newNums2 = myNumers.map( (num) => num + 10)
// console.log(newNums2);

/*
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/



// chaining techniques -->  multiple methods ko . ke sath connect kar dena 
//example -1 
const newNums3 = myNumers.map((num) => num * 10 ).map( (num) => num + 1)

// or you can write code like this 
const newNums4 = myNumers
                .map((num) => num * 10 ) // here this method will return final result  to second method (adjacent method)
                .map( (num) => num + 1)  // here after evvaluation this   method pass final result to its adjacent method 

// console.log(newNums3);
/*
  [
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/

//example -2
const newNums = myNumers
                .map((num) => num * 10 ) // here this method will return final result  to second method (adjacent method)
                .map( (num) => num + 1)  // here after evvaluation this   method pass final result to its adjacent method 
                .filter( (num) => num >= 40)// filter --> idhar sirf true/false wala kam hoga - comparison 
                 // finally  this method will return final value to -> newNums 

// console.log(newNums);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/