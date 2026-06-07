let http = require('http');

//http://localhost:3000
let server = http.createServer((request,response) =>{
    response.end("Welcome to http node JS module");
});

//port range from 0 to 65535, but ports below 1024 are reserved for system use,
//  so we can use ports above 1024 for our applications
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})