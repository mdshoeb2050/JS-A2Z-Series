// In today class we will learn string & their operatoins 

const name = "shoeb"
const repoCount = 16

// console.log(name + repoCount + " 16 repo pushed on github");

// literal method (inside backtick)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// using new keyword 
const gameName = new String('Call-of-Duty')

// console.log(gameName[0]); // C
// console.log(gameName.__proto__); // {} here it refers string 


// console.log(gameName.length);         //12
// console.log(gameName.toUpperCase());  // CALL-OF-DUTY
// console.log(gameName.charAt(2));      // l
// console.log(gameName.indexOf('t'));   // 10

const newString = gameName.substring(0, 4)  
// console.log(newString);  // Call

const anotherString = gameName.slice(1, 5)
// console.log(anotherString);  // all-

const anotherString2 = gameName.slice(-3, 5)
// console.log(anotherString2);   // empty string 

const newStringOne = "  mdshoeb    "
// console.log(newStringOne);           // as it is print with white spaces 
// console.log(newStringOne.trim());  // print only string - mdshoeb ( without space )

const url = "https://www.foclearning.com/%20name%area"
// console.log(url.replace('%20', '-'))   //https://www.foclearning.com/-name%area

const string2 = "%20name%area"
// console.log(string2);
// console.log(string2.replace('%','#'));   //#20name%area

// console.log(url.includes('sundar'))  // false


const gameName3 = new String('Call-of-Duty')
// console.log(gameName3.split('-'));   //[ 'Call', 'of', 'Duty' ]