const postService = require('../services/postService');

class PostController{
    async addPost(req, res, next){
        try{
            const post = {
                user_id: req.body.user_id ,
                pub_date: req.body.pub_date ,
                content: req.body.content ,
                photo_url: req.body.photo_url
            };
             
            await postService.addPost(post);

            res.send('post create');

        } catch (err)    {
            next(err);
        }
    }

    async deletePost(req, res, next){
        try {

            const id = req.params.id;
            
            await postService.deletePost(id);

            res.send('delete post');
        } catch (err) {
            next(err);
        }
    }

    async getAllPost(req, res, next){
        try {

            const posts = await postService.getAllPost();

            if(!posts || !posts.length){
                next(new EmptyResExeption('Empty body'));
            }

            res.send(posts);
        } catch (err) {
            next(err);
        }
    }

}   
                                                                                                                                                                                                                                                        
module.exports = new PostController();