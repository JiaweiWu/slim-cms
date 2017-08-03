var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var SALT_FACTOR = 10;

var userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: "posts"
	}]
});

userSchema.pre('save', function(next) {
	var user = this;

	if(user.isModified("password")) {
		bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
			if(err) {
				return next(err);
			}
			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) {
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	}
	next();
});

userSchema.pre('save', function(next) {
	var user = this;
	mongoose.model('User').findOne({email: user.email}, function (err, result) {
		if(err) {
			return next(err);
		}
		if(user.isNew && result) {
			user.invalidate("email", "Email Must Be Unique");

			return next(new Error("Email Must Be Unique"));
		}
		next();
	});
});

userSchema.methods.checkPassword = function(guess, next) {
	bcrypt.compare(guess, this.password, function(err, isMatch) {
		if (err) {
			return next(err);
		}
		next(null, isMatch);
	});
};

var User = mongoose.model('User', userSchema);

module.exports = User;