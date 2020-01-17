const userRoleModel = require('../models/users_roles.js');


class UserRoleRepository{

	async create(userId, roleId){

		await userRoleModel.create({
			user_id: userId,
			role_id: roleId,
		});
	}

	async getRole(userId){

		let inst = await userRoleModel.findOne({
			where: {
				user_id: userId
			},
			raw: true
		});

		return inst.role_id;
	}

	async setRole(userId, roleId){
		userRoleModel.update({
			role_id: roleId
		},
		{
			where:{
				user_id:userId
			}
		}
		);
	}
}


module.exports = new UserRoleRepository();