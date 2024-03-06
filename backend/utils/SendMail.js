const nodemailer = require("nodemailer")
// SendingOtpMail
const SendOtpMail = async (req, res) => {
    try {

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}