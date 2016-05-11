var express = require('express'),
    app = express();

app.get('/',
  function(req, res, next){
    res.write("Hello ");
    next();
  },
  function(req, res){
    res.write("world!");
    res.end();
  }
);

app.listen(80);
