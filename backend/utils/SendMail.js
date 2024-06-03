const nodemailer = require("nodemailer");

// SendingOtpMail
const SendOtpMail = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'violette.wolff@ethereal.email',
                pass: 'AS9wXY8CJjdGRaTrep'
            }
        });

        const mailOptions = {
            from: 'violette.wolff@ethereal.email',
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
