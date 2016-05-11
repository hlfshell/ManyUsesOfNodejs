var express = require('express'),
    app = express();

app.get('/', function(req, res){
  res.send("Hey - who are you?");
});

app.get('/hello/:name', function(req, res){
  res.send("Hello " + req.params.name);
});

app.listen(80);
