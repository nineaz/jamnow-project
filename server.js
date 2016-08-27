// Dependencies
var express = require("express");
var app = express();
var path = require("path");

var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// MongoDB
mongoose.connect('mongodb://localhost/db_jamnow');
db = mongoose.connection;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DYnamically serving our RESTful api I guess ?
app.use('/api', require(__dirname + '/src/app/routes/api.js'));


// Statically serving Angular application
app.use(express.static(__dirname + "/dist/public"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/public/views/index.html"));
});

// Start server
app.listen(7070);