const express = require('express');

const roleController = require('../controllers/roleController');

const router = express.Router();


router.get('/', roleController.getAllRoles);

router.get('/:id', roleController.getRole);

router.post('/', roleController.addRole);

router.delete('/:id', roleController.deleteRole);

router.put('/:id', roleController.updateRole);

module.exports = router;