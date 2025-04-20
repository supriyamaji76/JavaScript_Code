const accountId = 144553; //const cant be changed after declaration
let accountEmail = "support@gmail.com";
var accountPassword = "12345";

accountState = "West Bengal"; // This is a global variable

//accountId = 2; not possible as it is a const

console.log(accountId);

/* var is a function scope, let and const are block scope. let and const are not hoisted
Never use var always use let and const
*/

console.table({accountId, accountEmail, accountPassword, accountState});
