const userRepository = require('../repositories/userRepository');


class UserService{

	async addUser(userData, role){

		return await userRepository.create(userData, role);
	}

	async findUserByEmail(email){

		return await userRepository.findUser(email);
	}

	// async delete(id){

	// }

	// async list(){

	// }

	async setRole(userId, roleId){
		return userRepository.setRole(userId, roleId);
	}
}


module.exports = new UserService();