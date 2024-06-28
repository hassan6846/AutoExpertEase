const express = require('express');
const router=express.Router();

// controllers
const { CreateBooking } = require('../controllers/BookingControllers');
///

router.route('/booking').post(CreateBooking);

module.exports = router;

// c:\Users\pc\Documents\GitHub\AliShan\AutoExpertEase\backend\routes\BookingRoutes.js