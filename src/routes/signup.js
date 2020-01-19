const express = require('express');
const signupController = require('../controllers/signup');
const validate = require('../middleware/validate');
const UserScheme = require('../schemes/user');

const router = express.Router();


router.post('/', validate(UserScheme.create), signupController.signup);


module.exports = router;