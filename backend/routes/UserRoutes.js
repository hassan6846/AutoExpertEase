const express=require('express')
const router=express.Router()//router for nested routes
const {updatepicture} =require("../controllers/UserControllers")

router.route('/avatar').post(updatepicture)

                           

// exporting all routes.
module.exports = router;
