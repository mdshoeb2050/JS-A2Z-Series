//Task - Generate a Random color 

const randColor= function (){
    // taking hex value range from 0 to 9 and A - F
    const hex='0123456789ABCDEF'
    let color = '#'      // taking # bcoz color start with #
    // to make 6 digit number using loop
    for(let i=0; i<6; i++){
        //values constantly add karni h
        // ith value nahi select karna h, Random value select karna h
        color += hex[Math.floor(Math.random()*16)]
    }
   return color;
};

let intervalId; // global scope 

const startChangingColor = function () {
   //safety check for NULL
   if(!intervalId){
       intervalId = setInterval(changeBgcolor,1000);
   }

  // To run continuously use method 
   function changeBgcolor(){
    document.body.style.backgroundColor= randColor();
   }
 

};

const stopChangingColor = function () {
    clearInterval(intervalId);
    // tip : after clearInterval the best practice is to make intervalId is NULL ( dereference)
    // tip : professioalism  - bar bar kisi variable ko override karna thik nahi after use set it as NULL
    intervalId = null;   // agar varible ka reference use nahi aa rha to NULL set kar denge so that automatically thodi memory free ho jaye
};

// taking reference of a function 
document.querySelector('#start').addEventListener
('click', startChangingColor);

document.querySelector('#stop').addEventListener
('click', stopChangingColor);


// tip : try to find and Learn  corner case (Edge case)  this will make you a good developer  

//32;05 - second project