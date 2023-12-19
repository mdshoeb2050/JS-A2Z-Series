/**********************\
 * Arrow Function
\**********************/

// It make writing functions easy for US.

// you can write fun in  a very compact way. (beauty of Arrow Fun)


//1st Way  (traditional way )

// var multiply = function (x, y) {
//     return x * y;
// }

// 2nd way (Arrow fun)

var multiply = (x, y) => { return x * y};

// for single line statement you can ommit "curly braces" & "return " keyword.

// like this -
var multiply = (x, y) =>  x * y ;



// Note - In case you are passing "Single parameter" as a input , you can ommit "paranthesis () "

var double = x => 2 * x;



// exercise - 

var factorial = (n) => {
    var ans =1;
    for (var i=1; i<=n; i++){
         ans = ans *i;
    }
    return ans;
}

//passing fun as Argument in Arrow fun 
var ncr = (n,r,factorial) => {
    return  factorial(n)/(factorial(r) * factorial(n-r) ); 
}

// console.log("Factorial result is : ", ncr(5,2,factorial));    // Factorial result is :  10