var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var passportStrategy = require('./services/passport');

var app = express();
var apiRouter = require('./routes/routes');

var localLogin = passportStrategy.localLogin;
var jwtLogin = passportStrategy.jwtLogin;
passport.use(localLogin);
passport.use(jwtLogin);

//MongoDB
mongoose.connect("mongodb://localhost:27017/CMS");
mongoose.connection
	.once("open", () => {
		console.log("Mongoose Connection Open");
	})
	.on("error", (error) => {
		console.error("Mongoose Connection Error", error);
	});

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(passport.initialize());

app.use("/api", apiRouter);

//Server
var port = process.env.port || 3090;
var server = http.createServer(app);
server.listen(port, () => {
	console.log("Server Started on Port " + port);
})
