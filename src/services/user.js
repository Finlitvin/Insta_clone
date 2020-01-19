const User = require('../repository/user');


class UserService{

	async addUser(userData, role){
		return await User.create(userData, role);
	}

	async findUserByEmail(email){
		return await User.findUser(email);
	}

	// async delete(id){

	// }

	async list(){
		return await User.list();
	}

	async setRole(userId, roleId){
		return User.setRole(userId, roleId);
	}
}


module.exports = new UserService();