//Print on console

function abc(arr){
    var arr2;
    for(i in arr){
        console.log(i);
        // arr2[i]=i; //TypeError: Cannot set properties of undefined (setting '0')
        // arr2[i]=arr[i]; // TypeError: Cannot set properties of undefined (setting '0')
    }
    return arr2;
}

var arr =[12,56,48,"hello"];
// console.log(abc(arr)[1]);  // TypeError: Cannot read properties of undefined (reading '1')

console.log(abc(arr)); 