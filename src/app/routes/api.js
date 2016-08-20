// Dependencies
var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');
// Models

var User = require('../models/user');
var Jam = require('../models/jam');
var Contact = require('../models/contact');

// Routes
// user routes
User.methods(['get', 'put', 'post', 'delete']);

User.before('post', hash_password).before('put', hash_password);

User.register(router, '/users');

// jam routes
Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');

// contact routes
Contact.methods(['get', 'post']);
Contact.register(router, '/contacts');

// login routes

router.post('/login', function(req, res) {
	
});

// hashing passwords
function hash_password(req, res, next) {
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
	        req.body.password = hash;
	        next();
	    });
	});
}



// comparing passwords

// function compare_passwords() {

// }

// Return router

module.exports = router;