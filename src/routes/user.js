const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();


router.get('/', userController.list);
// router.delete();
router.post('/:id/role', userController.setRole);


module.exports = router;