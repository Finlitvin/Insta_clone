const postRepository = require('../repositories/postRepository');

class PostService{
    async addPost(post){

        await postRepository.addPost(post);
    }



    async deletePost(id){
        await postRepository.deletePost(id);
    }

}

module.exports = new PostService();