
function sayMyName(){
    // fun definition
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("E");
    console.log("B");
}
 

// sayMyName()  // fun Reference

// function addTwoNumbers(number1, number2){  // you can take both lowercase of Uppercase  but for consistency in code use lowercase
//       console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // checking correct parameter in fun definition is Programmer responsibility

    // let result = number1 + number2     // result  - local Scope 
    // return result

     /* Function must have return a value  hence function return control & value */
    return number1 + number2    // 1 line code

}

// const result = addTwoNumbers(3, 5)           // result  - Global Scope 
// console.log("Result: ", result);  //8 

// const result2 = addTwoNumbers(3, "5")     // 35 : concatenation - No Error -> JS automatically  make conversion


// console.log("Result-2: ", result2);

const result3 = addTwoNumbers(3, "a")     // checking correct parameter in fun definition is Programmer responsibility
// console.log(result3);  //3a

const result4 = addTwoNumbers(3, null)   // Here we are passing "null" as a arguments 
// console.log(result4);  // 3



function loginUserMessage(username ){
    return `${username} just logged in`
}
// console.log(loginUserMessage("shoeb"))   //shoeb just logged in
// console.log(loginUserMessage(""))         //  just logged in
// console.log(loginUserMessage())            // undefined just logged in   // when you pass nothing result will be undefined


function loginUserMessage2(username = "pappu"){   // here  "pappu" is a default value when user does'nt pass any argument in that case this default value pass to the function
    // if(username == undefined){
    //     console.log("PLease enter a username");
    //     return
    // }

    //or  using logical not operator we can evaluate 

    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage2());      //pappu just logged in

// console.log(loginUserMessage2("shoeb"))  //shoeb just logged in ->  store value in a varible then print or you can directly include function call in console.log



/****************************
 *      Lecture - 20        *
 ***************************/

/* How to implement Business logics in javascript function ??? */

/* what would you do if you don't know how many argument user will pass to the function -
eg - Add to cart feature in e-commerce app */

/* Using {REST operator} you can pass infinite no of arguments  */
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000,2000))   //[ 200, 400, 500, 1000, 2000 ]


/* Case-II */
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))   // [ 500, 2000 ]    
// 200 -> val1 , 400 -> val2    and  rest value will go through REST operator in the function 




const user = {
    username: "shoeb",
    course : "JS in Hindi",
    price: 199
}

/* Tip : Typechecking must be done - eg -> price ko prices ,  Avoid typing mistake  */
function handleObject(anyobject){  
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// you can pass object directly to the function
// handleObject({
//     username: "Aslam",
//     price: 399
// })
// o/p - Username is Aslam and price is 399  -> fun ke andar print hoga 



// you can pass Arrays directly to the function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));   // 400 
// console.log(returnSecondValue()); 

/* Array pass two  ways - variable me dalke or direct yo can pass */
// console.log(returnSecondValue([200, 400, 500, 1000]));  //getArray[1] -> 400