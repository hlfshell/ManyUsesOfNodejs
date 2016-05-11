var koa = require('koa');
var app = koa();

app.use(function *(next){
  var start = new Date;
  yield next;
  var timing = new Date - start;
  this.set('X-Response-Time', timing + 'ms');
  console.log("Handled the request in " + timing + " ms");
});

app.use(function *(next){
  this.body = "Hello!";
  yield next;
});

// response

app.use(function *(){
  this.body += " This is how Koa handles it's middleware differently.";
});

app.listen(80);
