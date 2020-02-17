const likeModel = require('../models/likes');


class LikeRepository{

	getLike(id){
		return likeModel.findByPk(id);
	}//

	addLike(like){
		return likeModel.create(like);
	}//

	deleteLike(id){
		return likeModel.destroy({ where: { id:id } });
	}//

	getAllPostLikes(postId){
		return likeModel.findAll({ where: {post_id: postId} });
	}

}


module.exports = new LikeRepository();