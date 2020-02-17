const likeRepository = require('../repositories/likeRepository');

const NotFoundException = require('../errors/NotFoundExceptions');
const AlreadyExistException = require('../errors/AlreadyExistExceptions');
const NotEnoughRigthsException = require('../errors/NotEnoughRigthsExceptions');


class LikeService {

	async addLike(like) {
		const likes = await likeRepository.getAllPostLikes(like.post_id);//postId

		if(!likes) {
			throw new NotFoundExceptions(`Post with id ${like.post_id} not found`);
		}

		const isLikeExist = likes.some((l) => l.dataValues.post_id == like.post_id);

		if(isLikeExist) {
			throw new AlreadyExistExceptions('Like already exist');
		}

		return likeRepository.addLike(like);
	}

	async deleteLike(id, userId) {
		const like = await likeRepository.getLike(id);

		if(!like) {
			throw new NotFoundException(`Like with id ${id} not found`);
		}

		if(like.user_id != userId) {
			throw new NotEnoughRigthsException('No rights'); 
		}

		return likeRepository.deleteLike(id);
	}

}


module.exports = new LikeService();