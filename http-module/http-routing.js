let http = require('http');
let url = require('url');

let server = http.createServer((request, response) =>{

    let urlRef = url.parse(request.url, true);
    response.writeHead(200, {"Content-Type": "text/html"});

    if(urlRef.pathname == "/"){
        response.end("Welcome to http node JS module");
    }if(urlRef.pathname == "/about"){
        // response.end("This is about page");
        response.write("<h2> About Us Page </h2>");
        response.write("<p> About us page description </p>");
    }else if(urlRef.pathname == "/contact"){
       // response.end("This is contact page");
        response.write("<h2> Contact Us Page </h2>");
        response.write("<p> Contact us page description </p>");
    }else if(urlRef.pathname == "/login"){
        //response.end("This is login page");
        response.write("<h2> Login Page </h2>");
        response.write("<p> Login page description </p>");
    }else{
        response.end("Page not found");
    }

});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})