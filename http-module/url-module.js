let url = require('url');

let website_name = "https://www.google.com:80/index.html?id=100&name=Raj";
console.log("Website name: " + website_name);

let urlRef = url.parse(website_name);
console.log(urlRef);
console.log("Protocol: " + urlRef.protocol);
console.log("Host: " + urlRef.host);
console.log("Port: " + urlRef.port);
console.log("Pathname: " + urlRef.pathname);
console.log("Query: " + urlRef.query);
console.log("name in query: " + urlRef.query.name);