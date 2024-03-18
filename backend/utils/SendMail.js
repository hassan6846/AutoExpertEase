const nodemailer = require("nodemailer")
// SendingOtpMail
const SendOtpMail = async (otp,to) => {
    try {
        const transporter=nodemailer.createTransport({
         
            host: 'smtp.ethereal.email',
            port: 587,
            secure:false,
            auth:{
                user: 'violette.wolff@ethereal.email',
                pass: 'AS9wXY8CJjdGRaTrep'
            }
        })
        //mailoption
    const mailOptions={
        from:'violette.wolff@ethereal.email',
        to:`Subject ${to}`,
        subject:"Email Otp",
        text:`The otp for your login/signup email is ${otp}`
    }
    await transporter.sendMail(mailOptions)
    res.status(200).json({message:`Emal sent sucessfull to ${to}`})
    } catch (error) {
        console.error("Error sending email:", error);
      
    }
}
module.exports={SendOtpMail}
