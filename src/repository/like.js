const Like = require('../models/likes');


class LikeRepository{

	async create(userId, postId){
		await Like.create({
			user_id: userId,
			post_id: postId
		});
	}

	async delete(userId, postId){
		await Like.destroy({
			where: {
				user_id: userId,
				post_id: postId
			}
		});
	}

	async findLike(userId, postId){
		if(await Like.findOne({
			where: { user_id: userId, post_id: postId },
			raw: true
		})){
			return true;
		}
		return false;
	}
}


module.exports = new LikeRepository();