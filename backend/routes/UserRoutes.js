const express = require('express')
const router = express.Router()//router for nested routes
const { RegisterFunction, updatepicture, loginFunction } = require("../controllers/UserControllers")

router.route('/avatar').post(updatepicture)
route.route('/register').post(RegisterFunction)
router.route('/login').post(loginFunction)

// exporting all routes.
module.exports = router;
