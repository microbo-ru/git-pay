// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));

app.post('/w1',function(req,res){
    console.log("body = "+req.body);
    res.end("done");
  });

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);