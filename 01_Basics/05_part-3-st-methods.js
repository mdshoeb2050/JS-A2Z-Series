// String Search Methods

// String indexOf()   : index of first occurrence of a string 
// String lastIndexOf() : index of {last occurrence} of a specified text in a string.
// String search()      : for finding powerful search values (Regex) ->   use search() method
// String match()       : returns an array containing the results of matching a string against a string (or a regular expression).
// String matchAll() 
// String includes()    : true / false 
// String startsWith()
// String endsWith()


// String indexOf()
// The indexOf() method returns the index (position) of  the {first occurrence} of a string in a string:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
// console.log(index); // 7   target string starting with index : 7

/*
JavaScript counts positions from zero.
0 is the first position in a string, 1 is the second, 2 is the third, ... 
*/

//String lastIndexOf()
// The lastIndexOf() method returns the index of the {last occurrence} of a specified text in a string:
text = "Please locate where 'locate' occurs!";
let lastIndex = text.lastIndexOf("locate");
// console.log(lastIndex);  //21 

/*   
   NOTE :-  
      Both indexOf(), and lastIndexOf() return -1 if the text is not found. 
*/


// String search()
// The search() method searches a string for a string 
// (or a regular expression) and returns the position of the match.
text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate")); //7 

// console.log(text.search(/locate/));     //regular expression

/*
Did You Notice?
The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:
    >>The search() method can't take a second start position argument.
    >>The indexOf() method can't take powerful search values (regular expressions).

==> NOTE ==>
for finding powerful search values ->  we will prefer to use search() method

*/


// String match()

/*
The match() method returns an array containing the results of matching a string
against a string (or a regular expression).
*/
text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("nly"));
/*
[
  'nly',
  index: 27,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
*/

const myArr = text.match(/ain/);
// console.log(myArr); // 'ain',index: 5,
// console.log(myArr.length + " " + myArr); //1 ain


// ===> NOTE===>
// Perform a global search for "ain":
text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/g)); //[ 'ain', 'ain', 'ain' ]


//Perform a global & case-insensitive search for "ain":
text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/gi));  //[ 'ain', 'AIN', 'ain', 'ain' ]


//String matchAll()
/*
The matchAll() method returns an iterator 
containing the {results of matching a string} against a string (or a regular expression).
*/
text = "I love cats. Cats are very easy to love. Cats are very popular.Cats are cute"
const iterator =text.matchAll("Cats")
console.log(Array.from(iterator));
/*
     'Cats',
    index: 13, 
      'Cats',
    index: 41,
       'Cats',
    index: 63
*/

/*
Notes :
matchAll() is an ES2020 feature.
matchAll() does not work in Internet Explorer.
*/


//String includes()
/*The includes() method returns true if a string contains a specified value.
Otherwise it returns false.*/

text = "Hello world, welcome to the universe.";
// console.log(text.includes("wel"));  //true


// Check if a string includes "world". Start at position 12:

text = "Hello world, welcome to the universe.";
// console.log(text.includes("world", 12)); //false

/*
Notes : 
includes() is case sensitive.
includes() is an ES6 feature.
includes() is not supported in Internet Explorer.
*/

// String startsWith()
/*The startsWith() method returns true if a string begins with a specified value.
Otherwise it returns false:*/

text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world")); //false

//A start position for the search can be specified:
text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world", 6));  //true   // Bcoz 'world' starting from 6th index

/*
startsWith() is case sensitive, an ES6 feature & NOT supported in Internet Explorer. 
 */

// String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:

text = "John Doe";
// console.log(text.endsWith("Doe"));  // true

text = "Hello world, welcome to the universe.";
// console.log(text.endsWith("world", 6)); //false

/*
 endsWith()is case sensitive, an ES6 feature & NOT supported in Internet Explorer. 
*/