var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

function tokenForUser(user) {
	var timestamp = new Date().getTime();
	return jwt.sign({sub: user.id, iat: timestamp}, config.secret);
}

function signin(req, res, next) {
	res.send({
		token: tokenForUser(req.user)
	});
}

function signup(req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	var username = req.body.username;

	if(!email || !password) {
		return res.status(422).send({
			error: "You Must Provide an Email or password"
		});
	}

	var newUser = new User({
		username: username,
		email: email,
		password: password,
		posts: []
	});

	newUser.save(function(err) {
		if (err) {
			console.log("ERROR MESSAGE: " + JSON.stringify(err.message));
			return next(err);
		}
		res.json({
			token: tokenForUser(newUser)
		})
	});
}

exports.signin = signin;
exports.signup = signup;
