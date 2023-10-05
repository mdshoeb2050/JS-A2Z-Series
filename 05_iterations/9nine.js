/*
 The reduce() method of Array instances executes a user-supplied "reducer" callback function
  on each element of the array, 
in order, passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.

 <<<<<>>>>>>>

>The reduce() method executes a reducer function for array element.

>The reduce() method returns a single value: the function's accumulated result.

>The reduce() method does not execute the function for empty array elements.

>The reduce() method does not change the original array.

>>Note :-
>At the first callback, there is no return value from the previous callback.

>Normally, array element 0 is used as initial value,
and the iteration starts from array element 1.

>If an initial value is supplied, this is used, and the iteration starts from array element 0.


*/
// example -

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// first time - accumulator variable  takes value from initialValue (0)  then after it stored expression return value 
// console.log(sumWithInitial);     // Expected output: 10




const myNums = [1, 2, 3]

// const myTotal1 = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal1);
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

// using Arrow fun method 
// using implicit return method --> 1 line shortcut
const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 10) // here we are initializing acc with 10
// 10 +1 =11
// 11 +2=13
// 13 +3=16
// console.log(myTotal2);   //16




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 
//here item refers to each and every objects in the Array 

// console.log(priceToPay);  //22996