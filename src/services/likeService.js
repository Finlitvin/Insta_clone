const likeRepository = require('../repositories/likeRepository');


class LikeService{

	async addLike(id){

		await likeRepository.addLike(id);
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