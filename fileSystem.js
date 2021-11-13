const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res) => {

  fs.readFile("./randomText.txt",'utf-8',(err,data) =>{

    res.writeHead(200,{'content-type':"text/plain"});
    res.write(data);
    res.end();
  });

}).listen(3000,()=>console.log('server running on port 3000'))