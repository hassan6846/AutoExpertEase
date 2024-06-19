const express = require('express')
const router = express.Router()//router for nested routes
const { RegisterFunction, updatepicture, loginFunction, FindUser,GetAvatar, IsExepert,isVendor} = require("../controllers/UserControllers")

router.route('/avatar').post(updatepicture)
router.route('/register').post(RegisterFunction)
router.route('/login').post(loginFunction)
router.route('/check').post(FindUser)
router.route('/getavatar/:id').get(GetAvatar);
router.route('/check-expert/:id').get(IsExepert);
router.route('/check-vendor/:id').get(isVendor);
// exporting all routes.
module.exports = router;
