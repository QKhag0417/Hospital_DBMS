const express = require('express');
const router = express.Router();
const homeController = require('../Controller/HomeController');
const authenticate = require('../middlewares/checkToken');

router.post('/login', homeController.loginUser);

router.post('/', authenticate, homeController.getUserByID);

module.exports = router;
