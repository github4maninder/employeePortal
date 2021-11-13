const http = require('http');
const server = http.createServer((req,res) => {
  res.writeHead(200,{'content-type':"text/html"});
  res.write("<h1>Hello from Server, Welcome</h1>");
  res.write("<h1>wassup</h1>");
  res.end();
}).listen((3000), () => console.log(`Server running on 3000 port`));