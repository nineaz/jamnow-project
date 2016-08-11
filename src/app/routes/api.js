// Dependencies
var express = require('express');
var router = express.Router();

// Models

var User = require('../models/user');
var Jam = require('../models/jam');
var Contact = require('../models/contact');

// Routes
// user routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// jam routes
Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');

// contact routes
Contact.methods(['get', 'post']);
Contact.register(router, '/contacts');

// hashing passwords




// Return router

module.exports = router;