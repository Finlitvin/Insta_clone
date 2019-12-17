const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();


router.post('/add', postController.addPost);

module.exports = router;