const express = require('express');
const router = express.Router();
const Controller = require('../Controller/PatientController');
const authenticate = require('../middlewares/checkToken');



module.exports = router;
