var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'KOA is ALIVE!';
});

app.listen(80);
