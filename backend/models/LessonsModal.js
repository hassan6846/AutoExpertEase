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


    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;
