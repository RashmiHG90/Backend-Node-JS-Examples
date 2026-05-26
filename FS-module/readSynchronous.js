let fs = require('fs');
let result = fs.readFileSync('output.txt');
console.log("File read successfully!");
console.log("buffer data:", result);
console.log("Content of the file:");
console.log(result.toString());