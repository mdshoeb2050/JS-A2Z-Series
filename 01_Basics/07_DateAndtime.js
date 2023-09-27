//Date in JS

let date1= new Date();   // here date1 is instance of Date object
// console.log(typeof date1); // object
// console.log(date1);                      //2023-09-27T08:29:33.786Z
// console.log(date1.toString());           //Wed Sep 27 2023 14:01:06 GMT+0530 (India Standard Time)
// console.log(date1.toDateString());       //Wed Sep 27 2023
// console.log(date1.toISOString());        //2023-09-27T08:34:36.983Z
// console.log(date1.toJSON());             //2023-09-27T08:37:10.281Z
// console.log(date1.toLocaleDateString()); // 9/27/2023
// console.log(date1.toLocaleString());     // 9/27/2023, 2:07:59 PM
// console.log(date1.toLocaleTimeString()); // 2:09:18 PM
// console.log(date1.toTimeString());        // 14:10:50 GMT+0530 (India Standard Time)
// console.log(date1.toUTCString());         // Wed, 27 Sep 2023 08:41:08 GMT
// console.log(date1.getTimezoneOffset());   // -330



// Dates in JS

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // month start from 0 index
// console.log(newDate.getDay());      // day start from 1 index

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


let newdate= new Date();

newdate.toLocaleString('default',{
    // control + space => to see more methods 
    calendar
})


