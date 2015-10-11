var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/jamie'))

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/jm', function(req,res){
  res.sendFile(path.join(__dirname+'/jamie/jamie.html'))
})

app.listen(process.env.PORT || 4000);
