const express = require('express')
const router = express.Router()//router for nested routes
//controllers
const { SendEmailOtp,VerifyEmail} = require('../controllers/AuthControllers')
//middlewares utils
const { OtpRequestLimit ,OtpVerificationLimit} = require('../middlewares/RequestRateLimit')

router.route('/sendemail').post(OtpRequestLimit,SendEmailOtp)
router.route('/verifyemail').post(OtpVerificationLimit,VerifyEmail)

module.exports = router;
