let express = require("express");
let app = express();

//middleware to read form data from the request body
app.use(express.urlencoded({extended:true})); 


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
        response.send("Login Successful with get method");
    } else{
        response.send("Login Failed with get method");
    }
})

app.post("/checkLogin", (request, response) => {
    let emailId=request.body.emailId;
    let password=request.body.password;
    console.log("Email ID: " + emailId);
    console.log("Password: " + password);
    if(emailId=="admin@gmail.com" && password=="admin@123"){
        response.send("Login Successful with post method");
    } else{
        response.send("Login Failed with post method");
    }
})


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
