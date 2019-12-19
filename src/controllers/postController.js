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

}   
                                                                                                                                                                                                                                                        
module.exports =     new PostController();