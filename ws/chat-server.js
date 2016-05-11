var WebSocketServer = require('ws').Server;
var wsServer = new WebSocketServer({ port: 80 });

var allConnections = [];

wsServer.on('connection', function open(ws) {

  allConnections.push(ws);

  ws.on('message', function incoming(message){
    allConnections.forEach(function(connection){
      connection.send(message);
    });
  });

});
