const postModel = require('../models/posts');


class PostRepository{
	
	async addPost(post){

		await postModel.create(post);
	}

	async getPost(id){

		const post = await postModel.findByPk(id);

		return post;
	}

	async getAllPost(){

		const posts = await postModel.findAll();

		return posts;
	}

	async deletePost(id){
		await postModel.destroy({
			where: {
				id: id
			}
		});
	}

	async updatePost(id, newPostData){

		const post = await postModel.findByPk(id);

		await post.update(newPostData);
	}
}


module.exports = new PostRepository();