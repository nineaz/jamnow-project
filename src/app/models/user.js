// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	firstname: String,
	lastname: String,
	email: String,
	location: String
});

// Return model
module.exports = restful.model('Users', userSchema);