// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var jamSchema = new mongoose.Schema({
	name: String,
	description: String,
	date: Date,
	id_admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	email: String,
	location: String
});

// Return model
module.exports = restful.model('Jams', jamSchema);