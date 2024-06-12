const express=require("express")
const router=express.Router()

//Import all Controllers
const { UploadVideo } = require("../controllers/VideoControllers")

router.route("/video").post(UploadVideo)
module.exports=router