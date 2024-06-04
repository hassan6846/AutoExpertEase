// List of some user controller supported by the app (autoexpertEase).
const express = require("express") //expressjs posting methods etc
const validator = require("validator")//validator for server side Valdiataion
const User = require("../models/UserModel")
const OTP = require("../models/EmailOtpModel")
const jwt = require("jsonwebtoken")//json web token
const bcrypt = require("bcrypt")
const cloudinaryInstance = require("../utils/Cloudinary")
const { GenerateOtp } = require("../utils/GenerateOtp")



const loginFunction = async (req, res) => {
    const { phone, password } = req.body;
    if (!phone || !password) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }

    try {
        // Find user by phone
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found.",
            });
        }

        // Compare password
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                msg: "Incorrect password.",
            });
        }

        // Password is correct, generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // Send success response with token
        return res.status(200).json({
            success: true,
            msg: "Login successful.",
            token: token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
const RegisterFunction = async (req, res, next) => {
    //register functions
    const { firstname, lastname, email, password, otp, Emailotp, deviceid, brand, devicename, devicetype } = req.body

    //fields are empty
    if (!firstname || !lastname || !password || !phone || !email || !deviceid || !brand || !devicename || !devicetype || !otp || !Emailotp) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    //find if the Phone is already registered or not
    //Find if email is already register or not then redirect or tell him to login
    //hash password 
    try {
        const FindUser = await User.findOne({ phone })
        //IF we find User Then ASked them or alert them that This Phone is already Registed please Try Latter.
        if (FindUser) {
            return res.status(409).json({ message: 'This phone number is already registered. Please try again later.' });
        }
        //Send Otp To Phone And Then Send OTP TO Email
        const response = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1)
        console.log(response)
        //Find the Length is not found
        if (response.length === 0) {
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid"
            })
        }
        else if (otp !== response[0].otp) {
            // Invalid OTP
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid",
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
    next()
}


//update profile picture..
const updatepicture = async (req, res, next) => {
    const { ImageData, phone } = req.body

    //validate if the provided data is base64
    //convert the base64 data to Cloudinary and update the field
    //find the user by email 
    //update the user avatar field

    //if fields are empty
    if (!ImageData || !email || !phone) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }



    try {
        // Find the user
        const user = await User.findOne({ phone: phone, email: email })
        // Handle if user does not exist
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "User does not exist in the database"
            })
        }

        // Upload the image to Cloudinary
        const uploadResult = await cloudinaryInstance.uploader.upload(ImageData);

        // Update the user avatar field with the Cloudinary URL
        user.avatar = uploadResult.secure_url;
        await user.save();

        // Send success response
        res.status(200).json({
            success: true,
            msg: "Avatar updated successfully",
            avatarUrl: uploadResult.secure_url
        });
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }

    next();
}


//Check if user is already Signup or Not...
//in sense of inital registration...
const FindUser = async (req, res, next) => {
    const { phone } = req.body
    // we just have to send boolean to frontend to change state accordingly
    const user = await User.findOne({ phone })
    if (user) {
        return res.status(400).json({
            success: true,
            msg: "User Already Exists.",
        });
    }
    //Else send true
    res.status(200).json({
        success: false,
        msg: "User Not Existed on the database"

    })
    next()

}



//Send EmailOTP
const SendEmailOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = await GenerateOtp
    } catch (error) {

    }
}
//send Phone Otp
const SendPhoneOtp = async (req, res, next) => {
    const { phone } = req.body;
    //send otp to phone
}
const VerifyPhoneOtp = async (req, res, next) => {
    // Verify Otp to the phone
    const { phone, otp } = req.body;


}
module.exports = { RegisterFunction, loginFunction, FindUser, updatepicture, FindUser, SendPhoneOtp, VerifyPhoneOtp }
