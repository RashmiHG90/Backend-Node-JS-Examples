let fs = require('fs');

let emp1 = {
    id: 1,
    name: 'John',
    age: 30,
    department: 'HR'
};
let emp2 = {
    id: 2,
    name: 'Jane',
    age: 25,
    department: 'IT'
}
let emp3 = {
    id: 3,
    name: 'Bob',
    age: 35,
    department: 'Finance'
}

let employees = [emp1, emp2, emp3];
let employeesData = JSON.parse(fs.readFileSync('employees.json'));
if (employeesData.length === 0) {    
    let employeesJSON = JSON.stringify(employees);
    fs.writeFileSync("employees.json", employeesJSON);
    console.log("Employee data is written to file successfully!");
} else {
    let emp4 ={
        id: 4,
        name: 'Alice',
        age: 28,
        department: 'Marketing'
    }
    let emp5 ={
        id: 5,
        name: 'Charlie',
        age: 32,
        department: 'Sales'
    }
    //let employeeExists = employeesData.some(emp => emp.id === emp4.id);
    let employeeExists = employeesData.some(emp => emp.id === emp4.id || emp.id === emp5.id);
    if(!employeeExists){
        employees.push(emp4);
        employees.push(emp5);
        let employeesUpdated = JSON.stringify(employees);
        fs.writeFileSync("employees.json", employeesUpdated);
        console.log("New employee data is added to file successfully!");
    }else{
        console.log("Employee with id " + emp4.id + " already exists in the file.");
    }
}