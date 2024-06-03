const nodemailer = require("nodemailer");

// SendingOtpMail
const SendOtpMail = async (res, email, title, body) => { // Pass res as an argument
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
        res.status(200).json({ message: `Email sent successfully to ${email}` }); // Send response using res
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Send error response using res
    }
}

module.exports = { SendOtpMail };
