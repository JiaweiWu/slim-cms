var express = require('express');
var UserController = require('../controllers/userController');
var PostsController = require('../controllers/PostsController');
var passport = require('passport');
var api = express.Router();

var jwtAuth = passport.authenticate('jwt', { session: false });
var localAuth = passport.authenticate('local', { session: false });

api.post("/users/signin", localAuth, UserController.signin);
api.post("/users/signup", UserController.signup);

api.post("/post", jwtAuth, PostsController.newPost);
api.delete("/post", PostsController.deletePost);
api.get("/posts", function(req, res) {
	res.status(200).send("Placeholder");
})

module.exports = api;