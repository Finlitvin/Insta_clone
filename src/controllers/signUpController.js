const authService = require('../services/auth');


class SignUpController{

	async signup(req, res, next){

		const userData = req.body;

		try{

			await authService.signup(userData);

			res.send('ok')
		} catch(err){
			next(err);
		}
	}
}


module.exports = new SignUpController();