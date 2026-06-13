let express = require("express");
let fs = require("fs");
let app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(request, response)=>{
    response.sendFile(__dirname + "/login.html");
});

app.get("/signUpPage",(request, response)=>{
    response.sendFile(__dirname + "/signUp.html");
});

app.post("/signUp",(request, response)=>{
    // let emailId = request.body.emailId;
    // let password = request.body.password;
    // let typeOfUser = request.body.typeOfUser;
    let loginDetails = request.body;

    let loginfs = JSON.parse(fs.readFileSync("login.json").toString());
    let loginExists = loginfs.find(login => login.emailId == loginDetails.emailId);
    if(loginExists){
        response.send("User with email id " + loginDetails.emailId + " already exists. Please try with different email id.");
    }else{
        loginfs.push(loginDetails);
        //fs.writeFileSync("login.json", JSON.stringify([...loginfs, {emailId: emailId, password: password, typeOfUser: typeOfUser}]));
        fs.writeFileSync("login.json", JSON.stringify(loginfs));
        response.send("User registered successfully! Please <a href='/'>login</a> to continue.");
    }
})

app.post("/signIn",(request, response)=>{
    let loginDetails = request.body;
    let loginfs = JSON.parse(fs.readFileSync("login.json").toString());
    let loginExists = loginfs.find(login => login.emailId == loginDetails.emailId && login.password == loginDetails.password && login.typeOfUser == loginDetails.typeOfUser);
    console.log(loginExists);
    if(loginExists){
        if(loginExists.typeOfUser === "admin"){
            response.sendFile(__dirname + "/adminDashboard.html");
        }else{
            response.sendFile(__dirname + "/customerDasboard.html");
        }
    }else{
        response.send("Invalid credentials. Please <a href='/'>login</a> again.");
    }
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});