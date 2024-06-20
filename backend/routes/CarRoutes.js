const express = require('express');
const router = express.Router()//router for nested routes

//contollers
const { UploadCar } = require('../controllers/CarControllers');

router.route('/car/upload').post(UploadCar)
module.exports = router;
