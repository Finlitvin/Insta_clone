const userRepository = require('../repositories/userRepository');
const userRoleRepository = require('../repositories/userRoleRepository');


class UserService{

	async signUp(userData){

		return await userRepository.create(userData);
	}

	async login(email, password, next){
		
		const user = await userRepository.findUser(email);

		// if (!user || !user.validatePassword(password)) {
		// 	return next(null, false, "Wrong email or password");
		// }

		user.role = await userRoleRepository.getRole(user.dataValues.id);
		if (!user.role){
			return next(null, false, "Internal error");
		}

		return next(null, user);
		}
}


module.exports = new UserService();