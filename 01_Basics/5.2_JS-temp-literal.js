// JavaScript Template Literals

/*
Browser Support
Template Literals is an ES6 feature (JavaScript 2015).
It is supported in all modern browsers:

 Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax
*/

//Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string.

let text = `Hello World!`;

// Quotes Inside Strings
// With template literals, you can use both single and double quotes inside a string:

text='My name is "md shoeb ansari"'



//Multiline Strings
// Template literals allows multiline strings:
text =`The quick brown fox jumps over the lazy dog`;


//Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.

// ${'HEllO WORLD'}


//Variable Substitutions
// Template literals allow variables in strings.

let firstName = "John";
let lastName = "Doe";

text = `Welcome ${firstName}, ${lastName}!`;

// Automatic replacing of variables with real values is called string interpolation.


//Expression Substitution
// Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // toFixed(2) - decimal ke 2 digit tak
console.log(total);  //Total: 12.50

//Automatic replacing of expressions with real values is called string interpolation.

