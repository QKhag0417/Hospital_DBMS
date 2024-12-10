const express = require('express');
const get_home_info = require('./get_home_info');
const get_doctor_info = require('./doctor_info');
const get_nurse_info = require('./nurse_info');
const get_dependent_info = require('./dependent_info');
const get_other_info = require('./other_info');
const get_patient_info = require('./patient_info');
const router = express.Router();

router.use(get_home_info);
router.use(get_doctor_info);
router.use(get_nurse_info);
router.use(get_dependent_info);
router.use(get_other_info);
router.use(get_patient_info);

module.exports = router;