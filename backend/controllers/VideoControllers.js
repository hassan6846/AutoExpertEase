//Create A Video 
//Get All Random Feed
///Fetch A Single VIdeo...
//Use Cloudinary to upload
const User = require("../models/UserModel");
const Lesson = require("../models/LessonsModal");
//utils
const cloudinaryInstance = require("../utils/Cloudinary");



//Create A Video 
const UploadVideo = async (req, res, next) => {
    const { title, description, videourl, userid } = req.body
    if (!title || !description || !videourl || !userid) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }

    const user = await User.findById(userid);
    if (!user) {
        return res.status(404).json({ error: 'User not Existed' });
    }
try {
        //Upload Video To cloud..
        const result = await cloudinaryInstance.uploader.upload(videourl, {
            resource_type: "video",
            folder: "video"
        })
        //create video
        const newVideo = new Lesson({
            title:title,
            description:description,
            postedBy: user._id,
            videoUrl: result.secure_url,
    
    
        })
        //Finally Save this to database
        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo)
} catch (error) {
    console.log(error)
}
}
module.exports = { UploadVideo }