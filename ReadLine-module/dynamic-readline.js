let obj = require('readline');

//this readline is asynchronous, 
// it will wait for the user input and then execute the next statement.
let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Please enter your name:",(name)=>{
    console.log("Hello! welcome to node js, " + name);
    readline.question("Please enter your age:",(age)=>{
        console.log("Your age is: " + age);
        readline.question("Please enter your city:",(city)=>{
            console.log("You are from: " + city);
            readline.close();
        })
    })
})

//this readline is asynchronous, 
// it will wait for the user input and then execute the next statement.

let rl = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your id:",(id)=>{

    rl.question("Please enter your name:",(name)=>{

        rl.question("Please enter your age:",(age)=>{   

        console.log("Your id is: " + id);
        console.log("Your name is: " + name);          
        console.log("Your age is: " + age); 
        rl.close();     
    });
  });
});
