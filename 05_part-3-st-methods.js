// String Search Methods

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()


// String indexOf()
// The indexOf() method returns the index (position) the first occurrence of a string in a string:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
// console.log(index); // 7

/*
JavaScript counts positions from zero.
0 is the first position in a string, 1 is the second, 2 is the third, ... 
*/

//String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
text = "Please locate where 'locate' occurs!";
let lastIndex = text.lastIndexOf("locate");
// console.log(lastIndex);  //21 

/*Both indexOf(), and lastIndexOf() return -1 if the text is not found: */