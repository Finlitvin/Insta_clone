const User = require('../models/users');
const UserRole = require('./userRole');


class UserRepository{

	async findUser(email){
		const user = await User.findOne({ where: { email: email } });

		return user;
	}

	async create(user){
		let inst = await User.create(user);
		UserRole.create(inst.id, 1);
		return inst;
	}

	async delete(id){
		return await User.destroy({ where: { id: id } });
	}

	async list(){
		let result = await User.findAll();

		for(let obj of result){
			let roles = [];
			let rolesObj = await UserRole.getRole(obj.id);
			roles.push(rolesObj);
			obj.dataValues.roles = roles;
		}
		return result;
	}

	async setRole(userId, roleId){
		if(roleId == 1){
			if(await UserRole.isLastAdmin(userId)){
				throw new Error('Error: last admin');
			}
		}
		return UserRole.setRole(userId, roleId);
	}
}


module.exports = new UserRepository();