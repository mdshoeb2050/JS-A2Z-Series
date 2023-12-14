// 'use strict'; or 
"use strict";
var box =document.getElementById('inner');
var clickCount = document.getElementById('click-count');

// count =0;  //ReferenceError: count is not defined
var count=0;
box.addEventListener('click',function () {
    // "use strict"; // you can use `use strict` method inside functions 
    // demo=100; //ReferenceError: count is not defined
    count++;
    console.log(count);
    clickCount.innerHTML= count + " "; 
});