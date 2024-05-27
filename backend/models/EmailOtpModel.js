const mongoose = require("mongoose")
const SendOtpMail = require("../utils/SendMail")

const OtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
    , otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    }
}, { timestamps: true })
//Defined a FUnction To Send Email To Email,
async function sendVerificationEmail(email, otp) {
    try {
        const MailResponse = await SendOtpMail(
            email, "Otp Verification Email",
            `<h1>Please confirm your OTP </h1>
            <p> here is your OTP code:-> ${otp} </p>
           `

        );

        console.log(`OTP CODE SUCESSFULLY SEND TO ${MailResponse}`)
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error,
    
        });
  
    }
}
OtpSchema.pre('save',async function (next){
    console.log("New Document from Email Otp Is being created and sent to Email");
    //only Send and Email Only when new Document is created
    if(this.isNew){
        await sendVerificationEmail(this.email,this.otp)
    }
    //next for skiping part
    next()
})
const OTP=mongoose.model("OTP",OtpSchema)
module.exports=OTP