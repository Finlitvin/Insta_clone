const postRepository = require('../repositories/postRepository');

class PostService{
    async addPost(post){

        await postRepository.addPost(post);
    }

    async deletePost(id){
        await postRepository.deletePost(id);
    }

    async getAllPost(){

        const posts = await postRepository.getAllPost();

        return posts;
    }

}

module.exports = new PostService();