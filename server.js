// Dependencies
var express = require("express");
var app = express();
var path = require("path");

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/db_jamnow');

// DYnamically serving our RESTful api I guess ?

// Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require(__dirname + '/src/app/routes/api.js'));


// Statically serving Angular application
app.use(express.static(__dirname + "/dist/public"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/public/views/index.html"));
});

// Start server
app.listen(7070);