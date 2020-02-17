const Post = require('../repositories/post');
const Like = require('../repositories/like');
const IncorrectDataError = require('../errors/IncorrectDataError');

class PostService{

	async create(post){
		return await Post.create(post);
	}

	async update(userId, id, postData){
		const p = await Post.getPostById(id);
		if(p.user_id != userId){
			throw new IncorrectDataError("ererere");
		}
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