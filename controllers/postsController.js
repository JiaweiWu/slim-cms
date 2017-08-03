var Posts = require('../models/posts');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

function newPost(req, res, next) {
	var token = req.body.token;
	var userId;
	try {
		userId = jwt.verify(token, config.secret);
	} catch(err) {
		return next(err);
	}

	var title = req.body.title;
	var description = req.body.description;
	var content = req.body.content;

	User.findById({ _id: userId.sub }, function(err, result) {
		if(err) {
			return next(err);
		}

		var tempPost = new Posts({
				title: title,
				description: description,
				content: content,
				author: result
		});

		result.posts.push(tempPost);
		result.save(function(err) {
			if(err) {
				return next(err);
			}
			tempPost.save(function(err) {
				if(err) {
					return next(err);
				}
			});
		});
	});
	res.status(201).send("Post Successfully Added");
}

function deletePost(req, res, next) {
	var token = req.body.token;
	var postId = req.body.postId;
	var userId = jwt.verify(token, config.secret);

	Posts.findByIdAndRemove({ _id: postId }, function(err, result) {
		if(err) {
			return next(err);
		}
		if(!result) {
			return res.status(500).send("No Post Found");
		}
	});
	res.status(202).send("Post Successfully Removed");
}

exports.newPost = newPost;
exports.deletePost = deletePost;