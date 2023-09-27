const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]    // nested array

// console.log(marvel_heros[3][1]);  //flash

// const allHeros = marvel_heros.concat(dc_heros)  
//concat() Combines two or more arrays. 
// This method returns a {new array} without modifying any existing arrays.
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// spread operator - Drop you glass onto the Ground
// const all_new_heros = [...marvel_heros, ...dc_heros]  // no limitation you can add multiple array to print via spread operator
// console.log(all_new_heros);  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat() - Returns a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity) 
// when you are stucked in complex nested array 
// then you can use this flat() method to print all element in sigle Array
// console.log(real_another_array);  
/*
    [
        1, 2, 3, 4, 5,
        6, 7, 6, 7, 4,
        5
    ]
*/



// console.log(Array.isArray("Shoeb")) // false  - checking Array or not 
// console.log(Array.from("Shoeb"))    // making a new array with given string 
//[ 'S', 'h', 'o', 'e', 'b' ]



// console.log(Array.from({name: "shoeb"})) // * can't able to convert into Arrya  - interesting case *
// print empty string []



 
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = "shoeb"
let score5 = true

// console.log(Array.of(score1, score2, score3, score4, score5)); // Array.of -> Returns a new array from a set of elements.
//[ 100, 200, 300, 'shoeb', true ]