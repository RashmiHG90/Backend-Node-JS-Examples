let fs = require('fs');
let data = "Writing this data asynchronously to the file."

fs.writeFile('output1.txt',data,(err)=>{
    if(err){
        console.error("Error writing to file:", err);
    }else{
        console.log("Data written to file successfully!");
    }
});

console.log(" Statement - 1");
console.log(" Statement - 2");
console.log(" Statement - 3");  