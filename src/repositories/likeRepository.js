const Like = require('../models/likes');

class LikeRepository{
    async getLike(id) {
        const like = await Like.findByPk(id);
    
        return like;
      }
    
      async getAllLikes() {
        const likes = await Like.findAll();
    
        return likes;
      }
    
      async getLikesByUserId(user_id) {
        const likes = await Like.findAll({ where: { user_id: user_id } });
    
        return likes;
      }
    
      async getPostLikes(post_id) {
        const likes = await Like.findAll({ where: { post_id: post_id } });
    
        return likes;
      }
    
      async addLike(like) {
        await Like.create(like);
      }
    
      async deleteLike(id) {
        await Like.destroy({ where: { id: id } });
      }
    
      async updateLike(id, newLikeData) {
        const like = await Like.getLike(id);
        await like.update(newLikeData);
      }
}

module.exports = new LikeRepository();