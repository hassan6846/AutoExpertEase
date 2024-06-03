const mongoose = require("mongoose")
const validator = require("validator")
const SendPhoneOtp  = require("../utils/SendPhoneOtp")

const otpSchema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    otp: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time

    }
},{timestamps:true})
//module and function realated to model
async function SendOtpPhone(phone, otp) {
    try {
        // endpoint to send mail to the phone
        const Otp=await SendOtpPhone(phone,otp)
       console.log(otp)
        return Otp
    } catch (err) {
        console.log(err)
    }
    next()
}
//Pre
otpSchema.pre("save",async function(next){
    console.log("New Document save to the Database")
      // Only send an email/message when a new document is created
      if(this.isNew){
        await SendOtpPhone(this.phone,this.otp)
      }
      next()
})
const PHONEOTP=mongoose.model("PHONEOTP",otpSchema)
module.exports=PHONEOTP