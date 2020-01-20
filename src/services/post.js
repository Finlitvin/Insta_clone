const Post = require('../repository/post');


class PostService{

	async create(post){
		return await Post.create(post);
	}

	async update(userId, id, postData){
		return await Post.update(userId, id, postData);
	}

	async delete(userId, id){
		return await Post.delete(userId, id);
	}

	async setLike(userId, postId){
		return await Post.setLike(userId, postId);
	}

	async deleteLike(userId, postId){
		return await Post.deleteLike(userId, postId);
	}
}


module.exports = new PostService();