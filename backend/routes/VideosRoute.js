const express=require("express")
const router=express.Router()

//Import all Controllers
const { UploadVideo,AllVideos } = require("../controllers/VideoControllers")

router.route("/video").post(UploadVideo)//upload A single video
router.route("/getallvideos").get(AllVideos)
module.exports=router