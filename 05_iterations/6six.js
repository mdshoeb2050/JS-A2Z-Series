const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {  // forEach() does not return any value 
    // console.log(item);
    // return item
} )

// console.log(values);  // undefined  --> here forEach() does not return any value  to values variable 


/*

The filter() method { creates a new array} filled with elements that pass a test provided by a function.

The filter() method does not execute the function for {empty elements.}

The filter() method { does not change} the original array.
*/

// Return an array of all values in ages[] that are 18 or over:???

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// 2nd example
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //implicit return
// const newNums = myNums.filter((num) => num > 2 )   // filter method need a callback value ff
// console.log(newNums);
/*
     [
        3, 4, 5,  6,
        7, 8, 9, 10
     ]
*/

// Explicit  return
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums); 
/*
  [ 5, 6, 7, 8, 9, 10 ]
*/


/* Now we will do the same thing using forEach() method -> 2nd approach  */

const newNums = []  // creating an empty array 

myNums.forEach( (num) => {
       // using if technique we will checking condition 
    if (num > 4) {
        newNums.push(num)    //  here we are pushing desired value into newNums array
    }
} )

// console.log(`using forEach() method reuslt is :${newNums}`);  // using forEach() method reuslt is :5,6,7,8,9,10


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // let userBooks = books.filter( (bk) => bk.genre === 'History')

  const historyBooks = books.filter( (obj)=>  obj.genre ==="History" ) 
  // console.log(historyBooks);
  /*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  
  */
 
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  // console.log(userBooks);
  /*
   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
  */