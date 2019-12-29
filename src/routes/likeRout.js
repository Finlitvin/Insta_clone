const express = require('express');

const likeController = require('../controllers/likeController');

const router = express.Router();


router.post('/', likeController.addLike);
router.get('/my', likeController.getMyLike);
router.delete('/:id', likeController.deleteLike);


router.get('/', likeController.getAllLikes);
router.get('/:id', likeController.getLike);

router.get('/posts/:id', likeController.getLike);


module.exports = router;