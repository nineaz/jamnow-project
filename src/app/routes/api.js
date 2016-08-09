// Dependencies
var express = require('express');
var router = express.Router();

// Models

var User = require('../models/user');
var Jam = require('../models/jam');
var Contact = require('../models/contact');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');

Contact.methods(['get', 'put', 'post', 'delete']);
Contact.register(router, '/contacts');


// Return router

module.exports = router;