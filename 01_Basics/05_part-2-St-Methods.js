// JavaScript string methods 

// String length
// String slice()
// String substring() :  -ve value treated as 0
// String substr()    : (second parameter) specifies the {length of the extracted part.} 
// String replace()   : replaces { only the first match }
// String replaceAll() : replace all matches using Regular expression (Regex)
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()    : remove whitespace 
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt() :returns the {unicode of the character}
// String split()      :   A string can be converted to an array with the split() method:


// String length
let quote = "If you do not sacrifice for what you want what you want becomes the sacrifice"
let quote2= "Love is Blind"
// console.log(quote2.length);  //13


//slice() 
 /* Note :- 
 slice() method extracts a part of a string and returns the extracted part in a new string.
 The method takes 2 parameters: start position, and end position (end not included).*/

let fruits="Apple, Banana, blackberry, grapes"
let part = fruits.slice(7,13);
// console.log(part); // Banana


/* NOTE =>
    If you omit the second parameter, 
    the method will slice out the rest of the string.
*/

let part2 = fruits.slice(7); // 2nd parameter is missing here 
// console.log(part2);  //Banana, blackberry, grapes


// Note - If a parameter is negative, the position is counted from the "End of the string".

let user="shoebAnsari"
// let part3= user.slice(-6)  // given  index se  pura substring print kar dega end tak
// console.log(part3);  //Ansari

let text = "Apple, Banana, Kiwi";
let part4 = text.slice(-12, -6); // from end we will go to -12 index (B) , start printing and stopped at -5 index (a) , -6 index will not included
// console.log(part4);  // Banana
let part5 = text.slice(-12, 6);  // empty string


// substring()
/* 
    substring() is similar to slice(). 
    The difference is that start and end values less than 0 {Negative value } 
    then  -> those values treated as 0 in substring() 
*/

fruits="Apple, Banana, blackberry, grapes"
// console.log(fruits.substring(7,13));  //Banana
// console.log(fruits.substring(-1,6));  // -ve value treated as 0 [0-6] --> Apple,   { Interview Q }

// Note => If you omit the second parameter, substring() will slice out the rest of the string.
// console.log(fruits.substring(7));  //Banana, blackberry, grapes



// String substr()

/* 
    substr() is similar to slice().
    The difference is that the  (second parameter) specifies the {length of the extracted part.} 
*/

// console.log(fruits.substr(7,6));   //Banana  - length : 6
// console.log(fruits.substr(15,10));  // blackberry - length : 10   
//explanation : start traversing  from 15 index and extract string of length 10 



// replace()
// The replace() method replaces a specified value with another value in a string:

let sentence = "Please visit Microsoft";
let word = sentence.replace("Microsoft", "foclearning");
// console.log(word);  //Please visit foclearning

/*
NOTE =>
>> The replace() method  { does not change the string}  it is called on.
>> The replace() method returns a new string.
The replace() method replaces { only the first match }

If you want to replace all matches, use a {Regular expression} with the /g flag set. See examples below.
*/

sentence = "Please visit Microsoft, and again here Microsoft ";
let word2 = sentence.replace(/Microsoft/g, "foclearning");
// console.log(word2);  //Please visit foclearning, and again here foclearning 


// To replace {Case insensitive}, use a regular expression with an /i flag (insensitive)
// Note => Regular expressions are written without quotes. -> /MICROSOFT/i , /Microsoft/g
let text3 = "Please visit Microsoft";
let newText = text3.replace(/MICROSOFT/i, "foclearning"); 
// console.log(newText); //Please visit foclearning

/* 
NOTE =>  we  will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions. 
*/



// replaceAll()
//In 2021, JavaScript introduced the string method replaceAll():
//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a (TypeError) is thrown.


let text5 = " Cats are very easy to love. Cats are very popular";
let ans =text5.replaceAll(/cats/g,"dogs")
// console.log(ans); // cats -> dogs  (if not found then not replace)
//Cats are very easy to love. Cats are very popular

let ans2=text5.replaceAll(/Cats/g,"Dogs")
// console.log(ans2); // Cats -> Dogs   // Dogs are very easy to love. Dogs are very popular



// String toUpperCase()

let user2="javedansari"
// console.log(user2.toUpperCase());  //JAVEDANSARI

let user3="SHOEBANSARI IS A GOOD BOY"
// console.log(user3.toLowerCase());  //shoebansari is a good boy


//String concat()
// concat() joins two or more strings

let text1 = "Hello";
let text2 = "World";
let result = text1.concat(" ", text2); // " " it means there will be space between texts
// console.log(result); //Hello World

/*
The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";       //Hello World
text = "Hello".concat(" ", "World!"); //Hello World
*/

/*
Note => 
        All string methods return a new string. They {don't modify the original string.}

        ~Formally said:
        Strings are immutable: Strings cannot be changed, only replaced. 
*/

// String trim()
//The trim() method removes whitespace from both sides of a string:

 text1 = "      Hello Motto!      ";
 text2 = text1.trim();
//  console.log(text2); //Hello Motto!

// Note => 
// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

text1 = "       Hello Motto!     ";
text2= text1.trimStart();
// console.log(text2); //Hello Motto!     How are you

text2=text1.trimEnd()
// console.log(text2); //       Hello Motto!


// String padStart()

// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// Pad a string with "0" until it reaches the length 4:
text = "5";
let padded = text.padStart(4,"0"); // 0 laga ke starting me 5 ke , 4 length ka string bana dega
// console.log(padded); //0005

text = "5";  
padded = text.padStart(6,"x"); //xxxxx5  , x laga ke 6 length ka ban gaya
// console.log(padded); 

/*
~Note=>
    The padStart() method is a string method.

    >>> To pad a number, convert the number to a string first.
*/
let num=7;
let txt = num.toString();
padded = txt.padStart(8,"0");
// console.log(padded);  //00000007

/* NOTE :  padStart() is not supported in Internet Explorer. */

/*
String padEnd()
The padEnd() method pads a string from the end.
 */
num=7; 
txt = num.toString();
padded = txt.padEnd(8,"0");
// console.log(padded);  //70000000


// String charAt()
// The charAt() method returns the character at a specified index (position) in a string

 text = "HELLO MOTTO";
 let char = text.charAt(6);
// console.log(char); //M

//String charCodeAt()
// The charCodeAt() method returns the {unicode of the character} at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

text = "HELLO MOTTO";
char = text.charCodeAt(6);
// console.log(char); //77

//Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings
text = "HELLO MOTTO";
// console.log(text[6]); //M


/*
Note:-  {Interview Q }
        Property access might be a little unpredictable:
        It makes strings look like arrays (but they are not)
        If no character is found, [ ] returns undefined, while charAt() returns an empty string.
        It is read only. str[0] = "A" gives no error (but does not work!)
*/
// console.log(text[16]); //undefined
// console.log(text.charAt(13)); // blank ( Empty string)


text = "HELLO WORLD";
text[0] = "A";    // Will Give no error, but does not work
// console.log(text); //HELLO WORLD 


/*
NOTE =>
    Converting a String to an Array
    If you want to work with a string as an array, you can convert it to an array.

    String split()
    A string can be converted to an array with the split() method:

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/

text = "a,b,c,d,e,f";
const myArray = text.split(",");
// console.log(myArray); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]



myArray2 = text.split("");
// console.log(myArray2);
/*
    [
    'a', ',', 'b', ',' , 'c', ',', 'd', ',', 'e', ',', 'f'
   ]
*/
// console.log(myArray2[2])  // b


//If the separator is omitted, the returned array will contain the whole string in index [0].
myArray2 = text.split();
// If the separator is ""(empty), the returned array will be an array of single characters:
// console.log(myArray2); //[ 'a,b,c,d,e,f' ]

// console.log(myArray2[0])   // a,b,c,d,e,f