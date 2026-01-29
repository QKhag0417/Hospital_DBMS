const express = require('express');
const router = express.Router();
const Controller = require('../Controller/DoctorController');
const authenticate = require('../middlewares/checkToken');

router.post('/doctor/info', authenticate, Controller.getMyDoctorInfo);
router.post('/doctor/workplace', authenticate, Controller.getWorkingPlace);
router.post('/doctor/examination', authenticate, Controller.getExamination);
router.post('/doctor/treatment', authenticate, Controller.gettreatment);
router.post('/doctor/specialty', authenticate, Controller.getSpecialty);

module.exports = router;