var name = "file1";
console.log(name);  //file1

// using setTimeout method to execute code after a delay
setTimeout(function(){
   console.log(name);  //file2
},1000);


var name ="file2";
console.log(name); //file1


/*
o/p in browser console


file1
file2
file2  // due to setTimeout method
*/