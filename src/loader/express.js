const bodyParser = require('body-parser');
const session = require('express-session');

const express = require('express');
const router = express.Router();


router.use(bodyParser());
router.use(session({ secret: "flamingo" }));


module.exports = router;