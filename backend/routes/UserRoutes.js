const express=require('express')
const router=express.Router()//router for nested routes
const { loginFunction } = require('../controllers/UserControllers')

router.route('/login').post(loginFunction)



// exporting all routes.
module.exports={router}