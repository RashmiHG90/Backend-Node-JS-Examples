let express = require("express");
let app = express();



app.get("/",(request, response)=>{
    response.setHeader("Content-Type","text/html");
    response.write("<h2>Index Page</h2>");
    response.write("<p>Welcome to Express JS</p>");
    response.end();
})

app.get("/aboutUs",(request, response)=>{
    response.send("Welcome to About us JS page");
})

app.get("/contactUs",(request, response)=>{
    response.send("Welcome to Contact us JS page");
})

app.get("/Login",(request, response)=>{
    response.send("Welcome to Login JS page");
})




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})