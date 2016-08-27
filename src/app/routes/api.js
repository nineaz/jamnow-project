// Dependencies
var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// Models
var User = require('../models/user');
var Jam = require('../models/jam');
var Contact = require('../models/contact');

// Passport local strategy

passport.use(new localStrategy(
  function(username, password, done){
  	console.log('coucou');
    User.findOne({username: username}, function(err, user) {
      if (err) {
      	return done(err); 
      }
      if(!user) {
      	console.log('Check username');
      	return done(null, false, {message: "wrong user"});
      }
      if (user.compare_passwords(password)) {
      	return done(null, false, {message: "wrong password"});
      }
      else {
      	console.log('omg you did it !');
      	return done(null, user);
      }
    });
}));

// Session management (I guess)

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


// Routes
// user routes
User.methods(['get', 'put', 'post', 'delete']);

User.before('post', hash_password);

User.register(router, '/users');

// jam routes
Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');

// contact routes
Contact.methods(['get', 'post']);
Contact.register(router, '/contacts');

// login routes

router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
		console.log(req);
		console.log(res);
		console.log('you are logged in');
});

// hashing passwords
function hash_password(req, res, next) {
	console.log('hashing password...');
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
	        req.body.password = hash;
	        next();
	    });
	});
};

// Return router

module.exports = router;