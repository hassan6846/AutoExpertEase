const express=require('express')
const router=express.Router()

//controllers
const { ApplyForVendor } = require('../controllers/VendorController')

//Routes
router.route('/vendor/apply').post(ApplyForVendor)

module.exports = router;