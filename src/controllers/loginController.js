const passport = require("passport");


class LoginController {
	login(req, res, next) {
		try {
			passport.authenticate("local", (err, user, info) => {
			if (user) {
				req.session.user = user;
				req.session.role = user.role;

			return res.send('ok');
			}

			return res.send('not user');
			})(req, res, next);
		} catch (err) {
			next(err);
		}
	}

	logout(req, res, next) {
		req.session.user = null;
		res.json('ok');
		}
	}


module.exports = new LoginController();
