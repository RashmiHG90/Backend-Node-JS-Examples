let express = require("express");
let app = express();




app.get("/", (request, response) => {
    //response.send("Welcome to the Express JS Login App");
    //response.sendFile("index.html"); // errors out without complete path
    //response.send(__dirname); // gives the complete path of the current directory
    response.sendFile(__dirname + "/index.html");
})

app.get("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html");
})

app.get("/checkLogin", (request, response) => {
    let emailId=request.query.emailId;
    let password=request.query.password;
    console.log("Email ID: " + emailId);
    console.log("Password: " + password);
    if(emailId=="admin@gmail.com" && password=="admin@123"){
        response.send("Login Successful");
    } else{
        response.send("Login Failed");
    }
}
)


app.get("/textFile", (request, response) => {
    //response.send("Welcome to the Express JS Login App");
    //response.sendFile("index.html"); // errors out without complete path
    //response.send(__dirname); // gives the complete path of the current directory
    response.sendFile(__dirname + "/info.txt");
})

app.get("/docFile", (request, response) => {
    //response.send("Welcome to the Express JS Login App");
    //response.sendFile("index.html"); // errors out without complete path
    //response.send(__dirname); // gives the complete path of the current directory
    response.sendFile(__dirname + "/info.docx");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
