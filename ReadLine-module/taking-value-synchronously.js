//not part of core module, hence install it using npm install readline-sync
let readline = require('readline-sync');
console.log("Loaded node module successfully!");

let name = readline.question("What is your name? ");
let id = readline.questionInt("What is your id? ");
let salary = readline.questionFloat("What is your salary? ");
let emailId = readline.questionEMail("What is your email id? ");
let password = readline.questionNewPassword("What is your password? ", {min:6, max: 12, confirmMessage: "Confirm your password: ", unmatchMessage: "Passwords do not match. Try again."});
console.log("Hello " + name);
console.log("Your id is: " + id);
console.log("Your salary is: " + salary);
console.log("Your email id is: " + emailId);
console.log("Your password is: " + password);