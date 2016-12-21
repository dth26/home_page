var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type:String, required:true },
	aliases:  { type: [] }
});

module.exports = mongoose.model('Tag', schema);
