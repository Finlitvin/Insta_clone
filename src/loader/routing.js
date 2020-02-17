const express = require('express');

//const routes = require('../routes/');
const likeRoute = require('../routes/likeRoute');
const errorHandler = require('../middleware/errorHandler');
const notFound = require('../middleware/NotFound');

const router = express.Router();


router.use('/likes', likeRoute);
router.use(notFound);
router.use(errorHandler);


module.exports = router;