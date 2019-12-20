const Post = require('../models/posts');

class PostRepository{
    async addPost(post){

        await Post.create(post);
    }



    async deletePost(id){
        await Post.destroy({where: { id : id } });
    }

}


module.exports = new PostRepository();