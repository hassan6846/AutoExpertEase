const express = require('express')
const router = express.Router()//router for nested routes
//controllers
const { SendEmailOtp } = require('../controllers/AuthControllers')

router.route('/sendemail').post(SendEmailOtp)
module.exports = router;
