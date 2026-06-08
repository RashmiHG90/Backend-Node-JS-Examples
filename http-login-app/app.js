let http = require('http');
let url = require('url');
let fs = require('fs');
let PORT = 3000;

let server = http.createServer((request, response) =>{

    let urlRef = url.parse(request.url, true);

    if(urlRef.pathname == "/login"){
        let loginpage = fs.readFileSync("login.html");
        response.write(loginpage);
        response.end();
        
    }else if(urlRef.pathname == "/aboutUs"){
        let aboutpage = fs.readFileSync("aboutus.html");
        response.write(aboutpage);
        response.end();
    }else if(urlRef.pathname=="/checkLogin"){
        console.log(urlRef.query);
        let login =urlRef.query;
        let email =login.emailId;
        let password = login.password;
        // Add login validation logic here
        console.log(email, password);
        if(email == "raj@gmail.com" && password == "raj@123"){
            response.write("Login successful!");
        } else {
            response.write("Login failed!");
        }
        response.end();
    }
    else if(urlRef.pathname == "/contactUs"){
        let contactpage = fs.readFileSync("contactus.html");
        response.write(contactpage);
        response.end();
    }
    else{
        let indexpage = fs.readFileSync("index.html");
        response.write(indexpage);
        response.end();
    }
    response.end();

})


server.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`);})