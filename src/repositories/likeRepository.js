const likeModel = require('../models/likes');


class LikeRepository{

	async addLike(like){

		await likeModel.create(like);
	}

	async getPostLikes(id){

		const likes = await likeModel.findAll({
			where: {
				id: id
			}
		});

		return likes;
	}

	async deleteLike(id){
		
		await likeModel.destroy({
			where: {
				id: id
			}
		});
	}

}


module.exports = new LikeRepository();