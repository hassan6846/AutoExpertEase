const User = require("../models/UserModel");
const Lesson = require("../models/LessonsModal");
const cloudinary = require("../utils/Cloudinary");

//Upload Single Day
const UploadVideo = async (req, res, next) => {
    const { title, description, videourl, userid } = req.body;
    if (!title || !description || !videourl || !userid) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }

    try {
        // Find user by ID and check if it exists
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ error: 'User not Found' });
        }

        // Upload video to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(videourl, {
            resource_type: "video",
            folder: "lesson_videos"
        });

        // Create new lesson
        const newLesson = new Lesson({
            title,
            description,
            postedBy: user,
            videoUrl: cloudinaryResponse.secure_url, // Store secure URL
        });

        // Save the lesson to the database
        const savedLesson = await newLesson.save();

        res.status(201).json(savedLesson);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal server error",
        });
    }
};
//Get All Videos
const AllVideos=async(req,res,next)=>{
  try {
    const videos=await Lesson.find({})
    res.status(200).json({
        videos
    })
  }catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        msg: "Internal server error",
    });
}

}
module.exports = { UploadVideo,AllVideos };
