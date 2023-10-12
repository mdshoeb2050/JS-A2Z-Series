// Promise creation 
/*
const promiseOne = new Promise(function(resolve, reject){  // Promise contains aa CallBack  //without storing in a var you can create a Promise
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){  // after 1 sec it will get executed 
        console.log('Async task is complete');
        resolve()  // connecting resolve method to .then   // task complete hone ke bad hi resolve method chalega aur Promise consumed hoga 
    }, 1000)
})

// Promise consumption 
// .then   - direct connection to resolve parameter , And it recive  a CallBack function as a argument 
promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){  // here we are not storing into a variable , we can directly create it 
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){    // incase if  we are not storing into a varible then we can directly attach ".then()" to a promises
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // passing data a parameter via resolve method 
        resolve({username: "mdShoeb", email: "mdshoeb1024@gmail.com"})  // you can pass - Array , Object , function etc 
    }, 1000)
})

promiseThree.then(function(user){  // here we are considering it user to recieve parameters which had been passed through resolve() method 
    console.log(user);
})


// If you are doing a Task then you have to tell about it success or its failure - resolve , reject 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true   // error value - true ( else part executed ) , false -> resolve executed
        if (!error) { // if there is not any error Successfully resolve it 
            resolve({username: "mdShoeb", password: "12345"})
        } else {  // if there is Error Reject it ASAP
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// it it has been successfully resolve it will go through ".then" block otherwise (in case of failure ) go through ".catch" block
promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {  // chaining of .then  ( jab upar wale then me koi value aati h to wo value yaha is chain se hokar jati h )
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // finally be like - jaldi kar bhai , panvel niklana h ( default execute hoga )
// Tip : using finally we have confirm that our task has been successfully done or fail , but at the end we have to mention it - this is a programmer resposibility 

// How to avoid from CallBack Hell ?   // H.W 

*/


// const promiseFive = new Promise(function(resolve, reject){  // you can use Arrow function here in Promises 
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });



// It's not necessary to always   use  .then or catch , you can handle it using async and await also 
// below see this example 

// async , awaits is like - .then or catch   // it takes time to do that task if it successful then no problem , and if any problem occurs then it shows error 
// async function consumePromiseFive(){   //  in this case ( async , awaits) , you can't handle catch easily 
//     try {
//         const response = await promiseFive   // awaits  -> used for recieving ressponse 
//         console.log(response);
//     } catch (error) {   // handle errors Gracefully 
//         console.log(error);
//     }
// }
// Tip : dont forget to use try & catch block  to handle rejection (Errors)
// Tip : your choice it depends on you what you prefer to use - ( then , catch , finally )
        // or 2nd method using (try , catch) method 
// consumePromiseFive()


// link -> https://jsonplaceholder.typicode.com/users  ( Just a user containing a lot of users ), you can use github Api if you wish 


// fetch () - The fetch() method in JavaScript is used to request data from a server. 
// The request can be of any type of API that returns the data in JSON or XML. 
// The fetch() method requires one parameter, the URL to request, and { returns a promise.}
// fetch tutorial - https://youtu.be/tVQgfKqbX3M?si=2lELCwjrsASjvzV9 


// Real life experiment  
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // it is just a network request takes some time 
//          // Tip : you can use  checks here to check which kind of data you are fetching from DB
//         const data = await response.json()  // converting string value  into JSON format  -> here i have used await , bcoz it takes some time to convert into JSON format 
//         console.log(data);  // printing dummy data 
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()




// 2nd method to do above work using (.then , catch) using fetch method 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {  // to handle response use again .then (chaining of then )  - thenable (generally people say this chaining )
    console.log(data);
})
.catch((error) => console.log(error))



// promise.all
// yes this is also available, kuch reading aap b kro.