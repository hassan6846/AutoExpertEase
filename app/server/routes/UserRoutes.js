const express = require('express')
const router = express.Router()//router for nested routes
const { 

    FindUser,
    GetAvatar,
    IsExepert,
    isVendor,
    CanPostCars,
    CanRentCars 
} = require("../controllers/UserControllers")

const loginFunction = require('../controllers/Auth/Login')
const RegisterFunction = require('../controllers/Auth/Signup')
const updatepicture = require('../controllers/Features/UpdateProfilePic')

router.route('/avatar').post(updatepicture)
router.route('/register').post(RegisterFunction)
router.route('/login').post(loginFunction)
router.route('/check').post(FindUser)
router.route('/getavatar/:id').get(GetAvatar);
router.route('/check-expert/:id').get(IsExepert);
router.route('/check-vendor/:id').get(isVendor);
router.route('/can-post/:id').get(CanPostCars);
router.route('/can-rent/:id').get(CanRentCars);
// exporting all routes.
module.exports = router;
