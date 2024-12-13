const express = require('express');
const router = express.Router();
const Controller = require('../Controller/ReceptionistController');
const Controller2 = require('../Controller/RecepAdd');
const Controller3 = require('../Controller/Recepdelete');

router.get('/recep/patient', Controller.getPatient);
router.get('/recep/ass', Controller.getAssignment);
router.get('/recep/exam', Controller.getExamination);
router.get('/recep/treat', Controller.gettreatment);
router.get('/recep/care', Controller.getcaretaking);
router.get('/recep/med', Controller.getmedication);
router.get('/recep/bill', Controller.getBill);
router.get('/recep/work', Controller.getWork);
router.get('/recep/specialty', Controller.getSpecialty);

router.post('/recep/addpatient', Controller2.addPatient);
router.post('/recep/addass', Controller2.addAssignment);
router.post('/recep/addexam', Controller2.addExamination);
router.post('/recep/addtreat', Controller2.addtreatment);
router.post('/recep/addcare', Controller2.addcaretaking);
router.post('/recep/addmed', Controller2.addmedication);
router.post('/recep/addbill', Controller2.addBill);
router.post('/recep/addwork', Controller2.addWork);
router.post('/recep/addspecialty', Controller2.addSpecialty);

router.post('/recep/deletepatient', Controller3.deletePatient);
router.post('/recep/deleteass', Controller3.deleteAssignment);
router.post('/recep/deleteexam', Controller3.deleteExamination);
router.post('/recep/deletetreat', Controller3.deletetreatment);
router.post('/recep/deletecare', Controller3.deletecaretaking);
router.post('/recep/deletemed', Controller3.deletemedication);
router.post('/recep/deletebill', Controller3.deleteBill);
router.post('/recep/deletework', Controller3.deleteWork);
router.post('/recep/deletespecialty', Controller3.deleteSpecialty);

module.exports = router;
