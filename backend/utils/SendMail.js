const nodemailer = require("nodemailer")
// SendingOtpMail
const SendOtpMail = async (req, res) => {
    try {
        const transporter=nodemailer.createTransport({
            host:,
            port:,
            auth:{
                user:process.env.
            }
        })
        //mailoption
    const mailOptions={
        from:process.env.SMTP_MAIL,
        to:,
        subject:"Email Otp",
        text:"The otp for your login/signup email is"
    }
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}