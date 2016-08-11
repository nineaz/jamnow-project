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
	location: String,
	jams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Jam'}]
});

// Return model
module.exports = restful.model('Users', userSchema);