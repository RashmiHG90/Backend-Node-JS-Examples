let fs = require('fs');
let result = fs.readFileSync('output.txt');
console.log("File read successfully!");
console.log("buffer data:", result);
console.log("Content of the file:");
console.log(result.toString());

console.log(" Statement - 1");
console.log(" Statement - 2");
console.log(" Statement - 3");