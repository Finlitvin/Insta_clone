const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const likeController = require('../controllers/likeController');


router.get('/all', postController.getAllPost);
router.get('/:id', postController.getPost);

router.get('/:id/like', likeController.getPostLikes);

router.post('/:id/like', likeController.addLike);
router.post('/add', postController.addPost);

router.delete('/:id/like', likeController.deleteLike);
router.delete('/:id', postController.deletePost);

router.put('/:id', postController.updatePost);


module.exports = router;