const userService = require('../services/user');
const CreationError = require('../errors/CreationError');
const UpdateError = require('../errors/UpdateError');
const DeleteError = require('../errors/DeleteError');
const Response = require('../helpers/response');


class UserController{
	// async delete(){}

	async list(req, res, next){
		try{

			res.json(await userService.list());
		}catch(err){
			return next(new DeleteError("Failed"));
		}
	}

	async setRole(req, res, next){
		try{
			const userId = req.params.id;
			let roleId = 1;

			if(req.query.value === "admin"){
				roleId = 2;
			}

			await userService.setRole(userId, roleId);
			res.json(new Response('Role set successful', 200));
		}catch(err){
			return next(new UpdateError("Failed"))
		}
	}
}


module.exports = new UserController();