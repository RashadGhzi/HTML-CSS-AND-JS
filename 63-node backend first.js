const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>box shadow</title>
  
      <style>
          .container {
              display: flex;
              margin-top: 20px;
          }
  
          .card {
              margin: 0px 7px;
              background-color: yellowgreen;
              padding: 2em;
              /* box-shadow: offset-x offset-y blur-radius */
              /* box-shadow: -5px -5px 8px black; */
              box-shadow: 5px 5px 8px rgb(252, 8, 8);
          }
  
          div>h4 {
              color: rgb(255, 255, 255);
              text-shadow: 2px 2px 4px rgb(0, 0, 0);
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div class="card">
              <h4>This is card 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est.</p>
          </div>
          <div class="card">
              <h4>This is card 2</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est.</p>
          </div>
          <div class="card">
              <h4>This is card 3</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est.</p>
          </div>
  
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});