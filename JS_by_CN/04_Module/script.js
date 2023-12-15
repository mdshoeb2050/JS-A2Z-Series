var btn1 = document.querySelector('#btn3');
btn1.addEventListener('click',function(){
   alert('Successfully sign up');
});

// var mybtn = document.getElementById('btn4');
// mybtn.addEventListener('click',function(){
//     alert('successfully login');
// });

// here is another way of doing same thing

function loginfun(){
    alert('successfully login');
}

var mybtn = document.getElementById('btn4');
mybtn.addEventListener('click',loginfun); // Adding (fun call / event handler ) to eventlistener

function printMsg(){
    alert("Happy New Year");
}
// you can add multiple event handler to a eventlistener

var mybtn = document.getElementById('btn4');
mybtn.addEventListener('click',printMsg);  // here printMsg handler added to same eventlistener