const express = require('express');
const router = express.Router();

const likeController = require('../controllers/LikeController');
const tryCatch = require('../helpers/tryCatch');

const isAuthorized = require('../middleware/isAuthorized');


router.use(isAuthorized);

router.post('/', tryCatch(likeController.addLike));
router.delete('/:id', tryCatch(likeController.deleteLike));

module.exports = router;