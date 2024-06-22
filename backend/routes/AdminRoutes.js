const express=require("express")
const router=express.Router()
//middlewares
const { AdminLoginLimit } = require("../middlewares/RequestRateLimit")
///controllers
const { AdminLoginFunction,GetUsersNo,GetProductNo,GetAllUsers,GetAllCars,RecentSignups,DeleteUser,GetUnapprovedProducts,ApproveProduct} = require("../controllers/AdminControllers")

//routes links 

router.route("/admin/login").post(AdminLoginLimit,AdminLoginFunction) //admin login
router.route('/admin/usercount').get(GetUsersNo) //User Counts All Time
router.route('/admin/productscount').get(GetProductNo) //count all products
router.route('/admin/getusers').get(GetAllUsers)//Get All User Objects.
router.route('/admin/cars').get(GetAllCars)//Fetch All Cars
router.route('/admin/recentSignups').get(RecentSignups)//get recent signups.
router.delete('/admin/user/:id',DeleteUser)
router.route('/admin/get-unapprovedproducts').get(GetUnapprovedProducts) //get all unapproved products
router.route('/admin/approve-product/:id').put(ApproveProduct) //approve product
module.exports=router