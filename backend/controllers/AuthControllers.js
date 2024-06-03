const express = require("express");
const OTP = require("../models/EmailOtpModel");
const { GenerateOtp } = require("../utils/GenerateOtp");
const { SendOtpMail } = require("../utils/SendMail");

const SendEmailOtp = async (req, res, next) => {
    const { email } = req.body;
    if(!email){
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
        const otp = GenerateOtp(); // Directly use the value returned by GenerateOtp
        await SendOtpMail(res,email, "Verification Code for Email", `Your Verification Code for AutoExpertEase ${otp}`);
        res.status(200).json({ message: "OTP sent successfully to email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const SendPhoneOtp=async(req,res,next)=>{
    const {phone}=req.body;
}
module.exports = { SendEmailOtp };
