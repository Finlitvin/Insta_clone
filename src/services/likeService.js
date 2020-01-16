const likeRepository = require('../repositories/likeRepository');


class LikeService{

	async addLike(like){

		await likeRepository.addLike(like);
	}

	async getPostLikes(id){

		const likes = await likeRepository.getPostLikes(id);

		return likes;
	}

	async deleteLike(id){

		await likeRepository.deleteLike(id);
	}
}


module.exports = new LikeService();