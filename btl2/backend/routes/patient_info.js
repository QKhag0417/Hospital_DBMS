const express = require('express');
const router = express.Router();
const Controller = require('../Controller/PatientController');
const authenticate = require('../middlewares/checkToken');

router.post('/patient/info', authenticate, Controller.getmyInfo);
router.post('/patient/assigment', authenticate, Controller.getmyAssignment);
router.post('/patient/exam', authenticate, Controller.getmyExamination);
router.post('/patient/treatment', authenticate, Controller.getmytreatment);
router.post('/patient/care', authenticate, Controller.getmycare_taking);
router.post('/patient/medication', authenticate, Controller.getmymedication);
router.post('/patient/bill', authenticate, Controller.getmybill);

module.exports = router;
