var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: { type: String, required: true},
	description: { type: String, required: true},
	content: { type: String, required: true},
	tags: [String],
	date: { type: Date, default: Date.now},
	author: { 
		type: Schema.Types.ObjectId,
		ref: "User" 
	},
});

var Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;