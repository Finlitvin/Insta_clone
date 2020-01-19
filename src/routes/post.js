const express = require('express');
const postController = require('../controllers/post');
const isUser = require('../middleware/isUser');

const router = express.Router();


router.post('/', isUser, postController.create);
router.put('/:id', isUser, postController.update);
router.delete('/:id', isUser, postController.delete);
router.post('/:id/like', isUser, postController.setLike);
router.delete('/:id/like', isUser, postController.deleteLike);


module.exports = router;