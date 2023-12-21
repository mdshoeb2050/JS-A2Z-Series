/**********************\
 * Let in for loops
\**********************/

// let is bound to "block scope" - every iteration of for loop there is new binding of 'i' will be created.
// for each iteration - 'i' ke har ek value ke liye ek naya scope defined hoga.

// seperate variable value of "every round of for loop"

// Babel is just a standard of JS

// in ES6 change are like syntactical sugar 


var arr = new Array(6);

for(let i=1; i<=5; i++){
    i++;

    //inner fun 
    arr[i]=function(){
        console.log(i);
    }
    i--;
}

//for each time we are calling loop to run for seperate value of 'i'
// here in this code snipper closure concept can be seen.

// use Babel and you can see behind the scene of the above code snippet  working. (see reference image 9.1_let in for loop) 
