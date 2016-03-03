var express = require('express')

var app = express()
var port = 5000

app.use(express.static(__dirname + '/dist'));

app.listen(port, function (){
    console.log("Running server on port " + port)
});