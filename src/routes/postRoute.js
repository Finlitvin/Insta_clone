const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');


router.post('/add', postController.addPost);
router.get('/all', postController.getAllPost);
router.get('/:id', postController.getPost);
router.delete('/delete/:id', postController.deletePost);
router.put('/update/:id', postController.updatePost);


module.exports = router;