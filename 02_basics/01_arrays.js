// array
//An array is a special variable, which can hold more than one value:

//JavaScript arrays are resizable and can contain a mix of different data type

//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings 

//JavaScript arrays are zero-indexed

//JavaScript array-copy operations create shallow copies.
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Spiderman", "IronMan"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//**** >>>> Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()    // delete last value 

// myArr.unshift(9)   // push 9 into Array 
// myArr.shift()      // delete element from front 

// console.log(myArr.includes(9));  // true or false 
// console.log(myArr.indexOf(3));   // element or -1 (in case of not found)

// const newArr = myArr.join()  // join array & convert into string

// console.log(myArr);   //[ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); //0,1,2,3,4,5
// console.log(typeof newArr);  //string


// slice  vs splice

// console.log("A ", myArr);   //// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(0, 3)     //Returns a copy of a section of an array.
// console.log(myn1);             //[ 0, 1, 2 ]

// console.log("B ", myArr);      //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)  
// console.log("C ", myArr);  //C  [ 0, 4, 5 ]  - Original Array got manupulated due to splice()  - * interview Q {slice vs splice}
// console.log(myn2);         // [ 1, 2, 3 ]
