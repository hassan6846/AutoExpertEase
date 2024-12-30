const OTP = require("../../models/EmailOtpModel"); //otp
//util
const { GenerateOtp } = require("../../utils/GenerateOtp");
const { SendOtpMail } = require("../../utils/SendMail");

const SendEmailOtp = async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
        const otp = GenerateOtp(); // Generate the OTP

        // Send OTP email
        await SendOtpMail(email, "Verification Code for Email", `Your Verification Code for AutoExpertEase ${otp}`);

        // Create and save OTP document
        const otpDocument = new OTP({ email, otp });
        await otpDocument.save();

        // Send success response
        res.status(200).json({ message: "OTP sent successfully to email" });
    } catch (error) {
        console.error(error);

        // Only send the error response if headers have not been sent yet
        if (!res.headersSent) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}


module.exports=SendEmailOtp