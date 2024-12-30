
const OTP = require("../../models/EmailOtpModel");


const VerifyEmail = async (req, res, next) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ error: "Please provide both email and OTP" });
    }

    try {
        // Find the latest OTP document for the given email
        const latestOTP = await OTP.findOne({ email }).sort({ createdAt: -1 }).exec();
        if (!latestOTP) {
            return res.status(404).json({ message: "OTP not found" });
        }

        if (latestOTP.otp === otp) {
            // OTP is valid

            return res.status(200).json({ message: "OTP verified successfully" });
        } else {
            // OTP is invalid
            return res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = VerifyEmail;