const userModel = require('../models/users');
const userRoleRepository = require('./userRoleRepository');


class UserRepository{

	async findUser(email){

		const user = await userModel.findOne({
			where:{
				email: email
			}
		});

		return user;
	}

	async create(user){

		let inst = await userModel.create(user);

		userRoleRepository.create(inst.id, 1);

		return inst;
	}

	// async list(){ }

	async delete(id){
		await userModel.destroy({
			where: {
				id:id
			} 
		});
	}

	async setRole(userId, roleId){
		return await userRoleRepository.setRole(userId, roleId);
	}
}


module.exports = new UserRepository();