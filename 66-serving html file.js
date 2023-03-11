const http = require('http');
const fs = require('fs');


const port = 8000;
const hostname = '127.0.0.1';
const fileContent = fs.readFileSync('34-box shadow.html');

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('content-type', 'text/html');
    res.end(fileContent);
})

server.listen(port, hostname, ()=>{
    console.log(`running server at http://${hostname}:${port}`);
})