// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	firstname: String,
	lastname: String,
	email: {type: String, required: true},
	location: String,
	jams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Jam'}]
});

// Return model
module.exports = restful.model('Users', userSchema);