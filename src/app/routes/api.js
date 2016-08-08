// Dependencies
var express = require('express');
var router = express.Router();

// Models

var User = require('../models/user');
var Jam = require('../models/jam');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');


// Return router

module.exports = router;