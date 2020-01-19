const loginRouter = require('./login');
const logoutRouter = require('./logout');
const signupRouter = require('./signup');
const userRouter = require('./user');
const postRouter = require('./post');

const isNotAuthorized = require('../middleware/isNotAuthorized');
const isAuthorized = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');

const express = require('express');
const router = express.Router();


router.use('/signup', isNotAuthorized, signupRouter);
router.use('/login', isNotAuthorized, loginRouter);
router.use(isAuthorized);
router.use('/logout', logoutRouter);
router.use('/post', postRouter);
router.use(isAdmin);
router.use('/users', userRouter);

module.exports = router;