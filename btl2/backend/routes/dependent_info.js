const express = require('express');
const router = express.Router();
const Controller = require('../Controller/DependentController');
const authenticate = require('../middlewares/checkToken');

router.post('/dependent/myfamilyinfo', authenticate, Controller.getMyFamilyInfo);
router.post('/dependent/myfamilyassignment', authenticate, Controller.getMyFamilyAssignment);
router.post('/dependent/myfamilyexamination', authenticate, Controller.getMyFamilyExamination);
router.post('/dependent/myfamilytreatment', authenticate, Controller.getMyFamilytreatment);
router.post('/dependent/myfamilycaretaking', authenticate, Controller.getMyFamily_care_taking);
router.post('/dependent/myfamilymedication', authenticate, Controller.getMyFamily_medication);
router.post('/dependent/myfamilybill', authenticate, Controller.getMyFamily_bill);


module.exports = router;
