const User = require('../repository/user');
const UserRole = require('../repository/userRole');


class AuthService{

	async signUp(userData){
		return await User.create(userData);
	}

	async login(email, password, next){
		const user = await User.findUser(email);

		if(!user || !user.validatePassword(password)){
			return next(null, false, "Wrong email/password");
		}

		user.role = await UserRole.getRole(user.dataValues.id);

		if(!user.role){
			return next(null, false, "Internal error");
		}

		return next(null, user);
	}
}


module.exports = new AuthService();