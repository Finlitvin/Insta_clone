const HTTPstatus = require('http-status-codes');
const likeService = require('../services/likeService');
const resMessage = require('../helpers/resMessage');


class LikeController {
	async addLike(req, res, next){
		const like = req.body;
		like.user_id = req.user.id;

		await likeService.addLike(like);

		res.status(HTTPstatus.CREATED).json(resMessage.OK(HTTPstatus.CREATED, 'Like Create'));
	}

	async deleteLike(req, res, next){
		const id = req.body.id;
		const userId = req.user.id;

		await likeService.deleteLike(id, userId);

		res.status(HTTPstatus.OK).json(resMessage.OK(HTTPstatus.OK, 'Like Create'));
	}
}


module.exports = new LikeController();