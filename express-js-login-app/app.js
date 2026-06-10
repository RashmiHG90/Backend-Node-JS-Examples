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



app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
