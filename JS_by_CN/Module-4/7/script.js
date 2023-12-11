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