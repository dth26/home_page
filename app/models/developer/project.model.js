var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: { type:String, required:true },
	lng_desc: { type:String, required:false },
	short_desc: { type:String, required:true },
	parent_component: {type:String, required:true },
	github_url: { type:String },
	site_url: { type:String },
	img_name: { type:String },
	technologies: { type: [] }
});

module.exports = mongoose.model('Project', schema);
