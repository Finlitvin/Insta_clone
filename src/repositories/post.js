const Post = require('../models/posts');
const Like = require('./like');


class PostRepository{

	async create(post){
		post.pub_date = new Date();
		return await Post.create(post);
	}

	async update(userId, id, postData){
		postData.last_update = new Date();
		await Post.update(postData, { where: { id: id } });
	}

	async delete(userId, id){
		await Post.destroy({ where: { id: id } });
	}

	async setLike(userId, postId){
		await Like.create(userId, postId);
	}

	async deleteLike(userId, postId){
		await Like.delete(userId, postId);
	}

	async getPostById(id){
		return await Post.findByPk(id);
	}
}


module.exports = new PostRepository();