const express=require("express")
const router=express.Router()
//middlewares
const { AdminLoginLimit } = require("../middlewares/RequestRateLimit")
///controllers
const { AdminLoginFunction,GetUsersNo,GetProductNo,GetAllUsers,GetAllCars,RecentSignups } = require("../controllers/AdminControllers")

//routes links 

router.route("/admin/login").get(AdminLoginLimit,AdminLoginFunction) //admin login
router.route('/admin/usercount').get(GetUsersNo) //User Counts All Time
router.route('/admin/productscount').get(GetProductNo) //count all products
router.route('/admin/getusers').get(GetAllUsers)//Get All User Objects.
router.route('/admin/cars').get(GetAllCars)//Fetch All Cars
router.route('/admin/recentSignups').get(RecentSignups)//get recent signups.
router.route('admin/user/:id').delete()
module.exports=router