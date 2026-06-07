let http = require('http');
let url = require('url');

let server = http.createServer((request, response) =>{

    let urlRef = url.parse(request.url, true);

    if(urlRef.pathname == "/"){
        response.end("Welcome to http node JS module");
    }if(urlRef.pathname == "/about"){
        response.end("This is about page");
    }else if(urlRef.pathname == "/contact"){
        response.end("This is contact page");
    }else if(urlRef.pathname == "/login"){
        response.end("This is login page");
    }else{
        response.end("Page not found");
    }

});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})