const mongoose = require("mongoose");


const LessonSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    shares: {
        type: Number,
        default: 0,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
});

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;
