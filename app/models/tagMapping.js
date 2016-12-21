var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	item_id : trackfinity item in projects table
*/

var schema = new Schema({
	tag_id: {type: Schema.Types.ObjectId},
	parent_component: {type: Schema.Types.ObjectId},
	item_id: {type: Schema.Types.ObjectId, required:true }
});