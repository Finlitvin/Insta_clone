const postRepository = require('../repositories/postRepository');

class PostService{
    async addPost(post){

        await postRepository.addPost(post);
    }

}

module.exports = new PostService();