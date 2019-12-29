const likeRepository = require('../repositories/likeRepository');

class LikeService{

    async getLike(id) {
        const like = await likeRepository.getLike(id);
    
        return like;
      }
    
      async getPostLikes(post_id) {
        const likes = await likeRepository.getPostLikes(post_id);
    
        return likes;
      }
    
      async getLikesByUserId(user_id) {
        const likes = await likeRepository.getLikesByUserId(user_id);
    
        return likes;
      }
    
      async getAllLikes() {
        const likes = await likeRepository.getAllLikes();
    
        return likes;
      }
    
      async addLike(like) {    
    
        await likeRepository.addLike(like);
      }
    
      async deleteLike(id, user_id) {
        const like = await likeRepository.getLike(id);
    
        if (like.user_id != user_id) {
          const err = new Error('error delete like');
          err.status = 400;
          throw err;
        }
    
        await likeRepository.deleteLike(id);
      }
    
      async updateLike(id, data) {
        await likeRepository.updateLike(id, data);
      }
}

module.exports = new LikeService();