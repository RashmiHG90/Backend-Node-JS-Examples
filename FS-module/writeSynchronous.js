//let fs = require('fs');
//import is ES6 style, require is ES5 style. We are using ES6 style here.
import { writeFileSync,appendFileSync } from 'fs';
console.log("Module loaded successfully!");
let data = "This is a sample text to be written to the file.";
let data2 = "add another line to the file.";
try {
    //fs.writeFileSync('output.txt', data);
    writeFileSync('output.txt', data);//overwrite content of file.
    appendFileSync('output.txt', data2);//append content to file.
    console.log("Data written to file successfully!");
} catch (err) {
    console.error("Error writing to file:", err);
}