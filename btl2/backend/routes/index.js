const express = require('express');
const get_home_info = require('./get_home_info');
const router = express.Router();

router.use(get_home_info);

module.exports = router;