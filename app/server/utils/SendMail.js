const nodemailer = require("nodemailer");

// SendingOtpMail
const SendOtpMail = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({

            service: "gmail",
            auth: {
                user: process.env.MAIL_SENDER,
                pass: process.env.MAILER_KEY
            }
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: title,
            text: body
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${email}`);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error('Failed to send email');
    }
}

module.exports = { SendOtpMail };
