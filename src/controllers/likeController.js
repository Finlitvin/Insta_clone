const likeService = require('../services/likeService');

class LikeController{

    async getLike(req, res, next) {
        try {
          const id = req.params.id;
          const like = await likeService.getLike(id);
         
        //   if (!like) {
        //     next(new EmptyResExeption('Empty result body.'));
        //   }
    
          res.send(like);
        } catch (err) {
          next(err);
        }
      }
    
      async getMyLike(req, res, next) {
        try {
          const id = req.user.id;
          const likes = await likeService.getLikesByUserId(id);
          
        //   if (!likes || !likes.length) {
        //     next(new EmptyResExeption('Empty result body.'));
        //   }
    
          res.send(likes);
        } catch (err) {
          next(err);
        }
      }
    
      async getPostLikes(req, res, next) {
        try {
          const post_id = req.params.id;
          const likes = await likeService.getPostLikes(post_id);
          
        //   if (!likes || !likes.length) {
        //     next(new EmptyResExeption('Empty result body.'));
        //   }
    
          res.send(likes);
        } catch (err) {
          next(err);
        }
      }
    
      async getAllLikes(req, res, next) {
        try {
          const likes = await likeService.getAllLikes();
          
        //   if (!likes || !likes.length) {
        //     next(new EmptyResExeption('Empty result body.'));
        //   }
    
          res.send(likes);
        } catch (err) {
          next(err);
        }
      }
    
      async addLike(req, res, next) {
        try {
          const like = req.body;
          like.user_id = req.user.id;
          
          await likeService.addLike(like);
    
          res.send('add like');
        } catch (err) {
          next(err);
        }
      }
    
      async deleteLike(req, res, next) {
        try {
          const user_id = req.user.id;
          const id = req.params.id;
          await likeService.deleteLike(id, user_id);
    
          res.send('delete like');
        } catch (err) {
          next(err);
        }
      }    
}

module.exports = new LikeController();