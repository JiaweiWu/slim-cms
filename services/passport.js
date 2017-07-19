var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

var localLogin = new LocalStrategy({usernameField: "email"}, function(email, password, next) {
	User.findOne({ email: email}, function(err, result) {
		if(err) {
			return next(err);
		}
		if(!result) {
			return next(null, false);
		}

		result.checkPassword(password, function(err, isMatch) {
			if(err) {
				return next(err);
			}
			if(!isMatch){
				return next(null, false);
			}
			return next(null, result);
		});
	});
})

var jwtOptions = {
	secretOrKey: config.secret,
	jwtFromRequest: ExtractJwt.fromHeader('authorization')
};
	
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, next) {
	User.findById(payload.sub, function(err, result) {
		if(err) {
			return next(err);
		}
		if(result) {
			return next(null, result);
		}
		else {
			return next(null, false);
		}
	});
});

exports.localLogin = localLogin;
exports.jwtLogin = jwtLogin;