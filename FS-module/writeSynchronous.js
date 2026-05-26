//let fs = require('fs');
//import is ES6 style, require is ES5 style. We are using ES6 style here.
import { writeFileSync } from 'fs';
console.log("Module loaded successfully!");
let data = "This is a sample text to be written to the file.";
try {
    //fs.writeFileSync('output.txt', data);
    writeFileSync('output.txt', data);
    console.log("Data written to file successfully!");
} catch (err) {
    console.error("Error writing to file:", err);
}