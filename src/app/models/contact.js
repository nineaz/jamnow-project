// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var contactSchema = new mongoose.Schema({
	name: String,
	phone_number: Number,
	email: String,
	message: String
});

// Return model
module.exports = restful.model('Contacts', contactSchema);