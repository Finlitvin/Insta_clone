const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();


router.post('/', postController.addPost);

module.exports = router;