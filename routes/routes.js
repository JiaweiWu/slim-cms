var express = require('express');
var UserController = require('../controllers/userController');
var PostsController = require('../controllers/PostsController');
var api = express.Router();

api.post("/signin", UserController.signin);
api.post("/signup", UserController.signup);

api.post("/newpost", PostsController.newPost);

module.exports = api;