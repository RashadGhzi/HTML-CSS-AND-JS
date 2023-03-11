const http = require('http');
const fs = require('fs');

let hostname = '127.0.0.1';
let port = 3000;


const index = fs.readFileSync('index.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');
const about = fs.readFileSync('about.html');

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('content-type', 'text/html');
    const url = req.url;
    console.log(url);
    if (url=='/'){
        res.end(index);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
});

server.listen(port, hostname, ()=>{
    console.log(`running server at http://${hostname}:${port}`);
});