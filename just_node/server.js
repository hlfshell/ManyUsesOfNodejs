// Load the http module to create an http server.
var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Go Cards!\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(80);
