const postRepository = require('../repositories/postRepository');


class PostService{

	async addPost(post){

		await postRepository.addPost(post);
	}

	async getPost(id){

		const post = await postRepository.getPost(id);

		return post;
	}

	async getAllPost(){

		const posts = await postRepository.getAllPost();

		return posts;
	}

	async deletePost(id){

		await postRepository.deletePost(id); 
	}

	async updatePost(id, newPostData){

		await postRepository.updatePost(id, newPostData);

	}
}


module.exports = new PostService();