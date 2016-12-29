var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type:String, required:true },
	aliases:  { type: [] },
	tag_type: {type:String}				// developer tags, personal tags
});

module.exports = mongoose.model('Tag', schema);
