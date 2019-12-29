const express = require('express');

const tagController = require('../controllers/tagController');

const router = express.Router();

router.get('/', tagController.getAllTags);

router.get('/:id', tagController.getTag);

router.post('/', tagController.addTag);

router.delete('/:id', tagController.deleteTag);

router.put('/:id', tagController.updateTag);


module.exports = router;