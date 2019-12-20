const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/all', postController.getAllPost);
router.post('/', postController.addPost);
router.delete('/:id', postController.deletePost);

module.exports = router;