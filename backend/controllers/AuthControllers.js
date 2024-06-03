const express = require("express") //expressjs posting methods etc
const OTP = require("../models/EmailOtpModel") //email otp
const PHONEOTP = require("../models/PhoneOtpModel")
const { GenerateOtp } = require("../utils/GenerateOtp")

///Send Otp To the phones and email 
const SendPhoneOtp=async(req,res,next)=>{
    const {phone}=req.body
}
//Verify OTP
