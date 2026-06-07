let obj = require('readline');

let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Please enter your name:",(name)=>{
    console.log("Hello! welcome to node js, " + name);
    readline.close();
})
