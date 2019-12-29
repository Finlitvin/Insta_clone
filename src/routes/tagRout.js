const express = require('express');

const tagController = require('../controllers/tagController');

const router = express.Router();

router.get('/', tagsController.getAllTags);

router.get('/:id', tagsController.getTag);

router.post('/', tagsController.addTag);

router.delete('/:id', tagsController.deleteTag);

router.put('/:id', tagsController.updateTag);


module.exports = router;