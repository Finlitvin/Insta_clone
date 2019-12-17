const DB = require('../init/initDataBase');
//const Post = require('../models/posts')


class PostRepository{
    async addPost(post){

        await DB.Posts.create(post);
    }
}


module.exports = new PostRepository();