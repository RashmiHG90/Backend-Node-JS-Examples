let fs = require('fs');

let emp = {
    id: 101,
    name: "John Doe",
    department: "IT"
};
//convert JavaScript object to JSON string
let empJSON = JSON.stringify(emp);
fs.writeFileSync("employee.json", empJSON);
console.log("Data written to file successfully!");
