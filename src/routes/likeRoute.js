const express = require('express');
const router = express.Router();

const likeController = require('../controllers/likeController');


router.get('/:id', likeController.getPostLikes);
router.post('/add', likeController.addLike);
router.delete('/:id', likeController.deleteLike);


module.exports = router;