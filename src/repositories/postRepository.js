const Post = require('../models/posts');

class PostRepository{
    async addPost(post){

        await Post.create(post);
    }

}


module.exports = new PostRepository();