const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60, // 1 minute
    }
});

const OTP = mongoose.model("OTP", OtpSchema);
module.exports = OTP;
