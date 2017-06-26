// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

const http = require('http');

const port = process.argv[2]; 

const httpServer = http.createServer(function (req, res) {
  let body = [];
    if (req.method === "POST") {
        req.on('error', function(err) {
            console.error(err);
        }).on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString().toUpperCase();
            res.write(body);
            res.end();
        });
    }
});

httpServer.listen(port);