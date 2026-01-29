const express = require('express');
const router = express.Router();
const Controller = require('../Controller/OtherController');
const authenticate = require('../middlewares/checkToken');

router.post('/other/info', authenticate, Controller.getOtherInfo);
router.post('/other/workplace', authenticate, Controller.getWorkingPlace);


module.exports = router;
