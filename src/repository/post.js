const Post = require('../models/posts');
const Like = require('./like');


class PostRepository{

	async create(post){
		return await Post.create(post);
	}

	async update(userId, id, postData){
		const currentPost = await Post.findOne({ where: {id: id} });

		if(currentPost.user_id != userId){
			throw new Error("Not right");
		}

		postData.last_update = new Date();
		await Post.update(postData, { where: { id: id } });
	}

	async delete(id){
		await Post.destroy({ where: { id: id } });
	}

	async setLike(userId, postId){
		if(await Like.findLike(userId, postId)){
			throw new Error('Error: like exist')
		}
		await Like.create(userId, postId);
	}

	async deleteLike(userId, postId){
		await Like.delete(userId, postId);
	}
}


module.exports = new PostRepository();