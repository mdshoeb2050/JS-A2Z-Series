const accountId = 345235
let accountEmail = "mdshoeb1024@gmail.com"
var accountPassword = "12345678"
accountCity = "Varanasi"
let accountState;

// accountId = 223412 // not allowed


accountEmail = "mdshoeb2050@gmail.com"
accountPassword = "21212121"
accountCity = "Varanasi"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// table method to print multiple varible value at one time
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])