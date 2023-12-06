//create a countdown timer when user give a input printing until you reached 0;

// Method-I
var count =10;
function print(){
    console.log(count);
    count--;
    if(count==0){
        clearInterval(intervalId); 
    }
}

var intervalId = setInterval(print, 1000);
/*
10
9
8
7
6
5
4
3
2
1
*/