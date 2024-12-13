const express = require('express');
const router = express.Router();
const Controller = require('../Controller/NurseController');
const authenticate = require('../middlewares/checkToken');

router.post('/nurse/info', authenticate, Controller.getNurseInfo);
router.post('/nurse/workplace', authenticate, Controller.getWorkingPlace);
router.post('/nurse/caretaking', authenticate, Controller.getCareTaking);

module.exports = router;
