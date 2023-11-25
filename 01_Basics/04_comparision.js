// today we will learn logical operators 

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  // comparison convert string/null value to a Number, hence here it will give true
// console.log("02" > 1); 



// console.log(null > 0);     // {conversion happen here}  0>0 => false 
// console.log(null == 0);    // null != 0 => false


/* 
    The Reason behind this is that Equality check  (==) 
    and comparison operators ( >, <, >=, =<) work differently.
*/

// console.log(null >= 0);   // {conversion happen here}  0 >= 0   => true 




// console.log(undefined == 0); /* false */
// console.log(undefined > 0); /* false */
// console.log(undefined < 0); /* false */

//  undefined and 0 both are different value , Hence No comparison here 

// === 

// console.log("what will be output? ", "2" === 2); /* false */  // here no coversion happen here