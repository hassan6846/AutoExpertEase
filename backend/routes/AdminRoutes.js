const express=require("express")
const router=express.Router()
//middlewares
const { AdminLoginLimit } = require("../middlewares/RequestRateLimit")
///controllers
const { AdminLoginFunction,GetUsersNo,GetProductNo } = require("../controllers/AdminControllers")

//routes links 

router.route("/admin/login").get(AdminLoginLimit,AdminLoginFunction) //admin login
router.route('/admin/usercount').get(GetUsersNo) //User Counts All Time
router.route('/admin/productscount').get(GetProductNo) //count all products
module.exports=router