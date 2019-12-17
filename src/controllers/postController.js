const HTTPStatus = require('http-status-codes');

const postService = require('../services/postService');

class PostController{
    async addPost(req, res, next){
        try{
            const post = req.body;
            
            await postService.addPost(post);
            
            res.status(HTTPStatus.CREATED).json(resMessage.OK(HTTPStatus.CREATED, 'Post created.'));
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new PostController();