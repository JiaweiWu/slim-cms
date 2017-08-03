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
app.use(express.static(path.resolve(__dirname, "react-build")));

app.get("*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "react-build", "index.html"));
});

app.use("/api-v1", apiRouter);

// if(app.get("env") === "development") {
// 	app.use(function(err, req, res, next) {
// 		res.status(500).send({
// 		status: 500,
// 		message: "Internal Error", 
// 		type: "Internal"
// 		});
// 	});
// }

// app.use(function(err, req, res, next) {
// 	console.error(err);
// 	res.status(500).send({
// 		message: err.message
// 	});
// });

//Server
var port = process.env.port || 3090;
var server = http.createServer(app);
server.listen(port, () => {
	console.log("Server Started on Port " + port);
})
