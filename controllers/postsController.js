var Posts = require('../models/posts');
var jwt = require('jsonwebtoken');
var config = require('../config');

function newPost(req, res, next) {
	var token = req.body.token;
	var userId = jwt.verify(token, config.secret);

	res.send(userId);
}

exports.newPost = newPost;