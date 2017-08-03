var express = require('express');
var UserController = require('../controllers/userController');
var PostsController = require('../controllers/PostsController');
var passport = require('passport');
var api = express.Router();

var jwtAuth = passport.authenticate('jwt', { session: false });
var localAuth = passport.authenticate('local', { session: false });

api.post("/signin", localAuth, UserController.signin);
api.post("/signup", UserController.signup);

api.post("/newpost", PostsController.newPost);
api.post("/deletepost", PostsController.deletePost);

module.exports = api;