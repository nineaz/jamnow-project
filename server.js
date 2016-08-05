var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname + "/dist/public"));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/public/views/index.html"));
});

app.listen(8080);