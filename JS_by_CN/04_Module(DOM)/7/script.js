var outerDiv = document.getElementById('outer');
// applying eventlistener on id of div
// outer.addEventListener('mouseover',function () {
//    console.log('Mouse hover'); 
// });


function print1(){
    alert("A mouse button is pressed over an element"); 
}
// outer.addEventListener('mousedown',print1);

function print2(){
    alert("The mouse pointer moves into an element");
}
// outer.addEventListener('mouseenter',print2);


function print3(){
    alert("The mouse pointer moves out of an element");
}
// outer.addEventListener('mouseleave',print3);


function print4(){
    alert(" The mouse pointer moves over an element"); 
}
// outer.addEventListener('mousemove',print4);
  // or
// outerDiv.addEventListener('mousemove',print4);

function print5(){
    alert("The mouse pointer moves out of an element"); 
}
// outer.addEventListener('mouseout',print5);


function print6(){
    alert("The mouse pointer moves onto an element"); 
}
// outer.addEventListener('mouseover',print6);


function print7(){
    alert("A mouse button is released over an element"); 
}
outer.addEventListener('mouseup',print7);



//>>>>>>>> Key Events 

/**************************\
//>>>>>>>>>>>>>  keypress  - when you press & leave any key, then  it will be counted. 
// Note - keyPress ingnore - Arrow keys , space , tab , shift etc buttons.
\**************************/



// Task - you have to fetch data from input tag and confirm key press event via Event listener
var searchInput =document.getElementById('search');
// searchInput.addEventListener('keypress',function(){
//    alert("Key Pressed....!");
// });

//another way on whole document keypress checking 
// document.addEventListener('keypress',function() {
//     console.log("key press invoked."); 
// });



//>>>>>>>>>>>>>  keydown  - when you press any key it will be immediately counted - used in games 
// searchInput.addEventListener('keydown',function(){
//     alert("keydown method ....!");
//  });

// or applying on whole document 
// document.addEventListener('keydown',function() {
//     console.log("key down invoked."); 
// });



//>>>>>>>>>>>>>  keyup - when you leave  any key after pressing,... it will be counted.

// document.addEventListener('keyup',function() {
//     console.log("key up invoked."); 
// });



/**************************\
| Key code  method         |
\**************************/

// document.addEventListener('keydown',function (event) { // here passing default param in fun 
//     console.log("key down invoked.", event.keyCode); // deprecated 
//     console.log("key down invoked.", KeyboardEvent.keyCode); 

// });
// tip - you can catch events via fun and perform any method on it acc to your needs 