let fs = require('fs');

fs.readFile('output.txt',(err,data) =>{
    //fs.readFile('output12.txt',(err,data) =>{
    if(err){
        console.error("Error reading file:", err);
    }else{
        console.log("File read successfully!");
        console.log("buffer data:", data);
        console.log("Content of the file:");
        console.log(data.toString());
    }
})

console.log(" Statement - 1");
console.log(" Statement - 2");
console.log(" Statement - 3");  