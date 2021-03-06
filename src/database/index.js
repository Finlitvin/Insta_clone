const sequelize = require('./sequelize');
require('../models');

const userService = require('../services/user');


class DataBase{
	async connect(){
		await sequelize.sync();
		console.log('DATABASE [+]')

		let admin = await userService.findUserByEmail('admin@gmail.com');

		if(!admin){
			admin = await userService.addUser({
				email: "admin@gmail.com",
				password: "admin",
				first_name: "adminName",
				last_name: "adminName"
			});
			userService.setRole(admin.id, 2);
		}
	}
}


module.exports = new DataBase();