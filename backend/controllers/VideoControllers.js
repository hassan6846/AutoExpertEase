const User = require("../models/UserModel");
const Lesson = require("../models/LessonsModal");
const cloudinary = require("../utils/Cloudinary");

//Upload Single Day
const UploadVideo = async (req, res, next) => {
    const { title, description, videourl, userid, category } = req.body;
    if (!title || !description || !videourl || !userid || !category) {
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
            videoCategory: category
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
const AllVideos = async (req, res, next) => {
    try {
        const videos = await Lesson.find({})
        res.status(200).json({
            videos
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal server error",
        });
    }

}
//Get Single Video
const GetSingleVideo = async (req, res, next) => {
    const { id } = req.params; // Access id from route parameters
    
    try {
        const video = await Lesson.findOne({ _id: id }); // Find lesson by _id
        if (!video) {
            return res.status(404).json({
                success: false,
                msg: "Video not found",
            });
        }
        
        // If video found, send it in the response
        res.status(200).json({
            success: true,
            data: video,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal server error",
        });
    }
}

//upload localvideo to cloudinary
const uploadvideo = async (req, res) => {
    const { uri } = req.body;

    if (!uri) {
        return res.status(400).json({
            success: false,
            msg: "No URL provided",
        });
    }

    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(uri, {
            resource_type: "video",
            folder: "lesson_videos"
        });
        return res.status(201).json({
            success: true,
            cloudinaryResponse
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
        });
    }
};

module.exports = { UploadVideo, AllVideos,GetSingleVideo,uploadvideo};
