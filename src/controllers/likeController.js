const likeService = require('../services/likeService');

const EmptyResExeption = require('../classes/errors/EmptyResExeption');


class LikeController{

	async addLike(req, res, next){

		try{


			const like = {
				user_id: req.body.user_id,
				post_id: req.params.id,
			}

			await likeService.addLike(like);

			res.send('ok');

		} catch(err){
			next(err);
		}
	}

	async getPostLikes(req, res, next){

		try{

			const id = req.params.id;

			const likes = await likeService.getPostLikes(id);

			if(!likes || !likes.length){
				next(new EmptyResExeption('Empty body'));
			}

			res.send(likes);

		} catch(err){
			next(err);
		}
	}

	async deleteLike(req, res, next){

		try{

			const id = req.params.id;

			await likeService.deleteLike(id);

			res.send('ok');
			
		} catch(err){
			next(err);
		}
	}
}


module.exports = new LikeController();