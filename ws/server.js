var WebSocketServer = require('ws').Server;
var wsServer = new WebSocketServer({ port: 80 });

wsServer.on('connection', function open(ws) {
  ws.send('I seeeeee you!');

  ws.on('message', function incoming(message){
    console.log("Message received!", message);
    var data;
    try {
      data = JSON.parse(message);
    } catch(err){
      return ws.send("That... wasn't quite JSON, was it?");
    }

    var sum = 0;
    data.forEach(function(value){
      sum += value;
    });

    ws.send("Total = " + sum);
  });

});
