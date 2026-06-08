let http = require('http');
let url = require('url');
let fs = require('fs');
let PORT = 3000;

let server = http.createServer((request, response) =>{

    let urlRef = url.parse(request.url, true);

    if(urlRef.pathname == "/login"){
        let loginpage = fs.readFileSync("login.html");
        response.write(loginpage);
        
    }else if(urlRef.pathname == "/aboutUs"){
        let aboutpage = fs.readFileSync("aboutus.html");
        response.write(aboutpage);
    }
    else if(urlRef.pathname == "/contactUs"){
        let contactpage = fs.readFileSync("contactus.html");
        response.write(contactpage);
    }
    else{
        let indexpage = fs.readFileSync("index.html");
        response.write(indexpage);
    }

})


server.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`);})