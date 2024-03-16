// List of some user controller supported by the app (autoexpertEase).
const express = require("express") //expressjs posting methods etc
const validator = require("validator")//validator for server side Valdiataion
const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")//json web token
const axios = require("axios")
const { GenerateOtp } = require("../utils/GenerateOtp")
const { SendOtpMail } = require("../utils/SendMail")
const cloudinaryInstance = require("../utils/Cloudinary")
// 1 User login/Signup Initial
const loginFunction = async (req, res, next) => {
    //destructure the request object.
    const { name, password, phone, email,
        // Device details further...
        deviceid, brand, devicename, devicetype, modelname } = req.body;
    //if posted empty field
    if (!name || !password || !phone || !email || !deviceid || !brand || !devicename || !devicetype || !modelname) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            success: false,
            msg: "Invalid Email Format.",
        });
    }
    //validate phone number format
    else if (!validator.isMobilePhone(phone)) {
        return res.status(400).json({
            success: false,
            msg: "Invalid Phone Number Format.",
        });
    }

    // Verify phone send otp to the user 
    try {
        //send otp to both email and phone generate and set field to mogoose model..
        const findUser = await User.findOne({ phone: phone, email: email })
        //if we found already a user then dont save just send otp to both and verify the otp by sending the id..
        //else  save the credientals just send otp to both end points thanks and verify otp by id thanks...

        if (findUser) {
            //generating otp for phone only /-
            const otp = await GenerateOtp()
            //update otp phone field only /-
            await User.findOneAndUpdate({ phone: phone, email: email }, { otp: otp })
            //Generate Otp for email field..
            const setEmailOtp = await GenerateOtp()
            await User.findOneAndUpdate({ phone: phone, email }, { emailotp: setEmailOtp })

            //Last thing is Send Otp


        }
        ///else Save the credientials just send and set otp to email and phone otp fields
        else {
            const phoneOtp = GenerateOtp()//generate otp
            await User.findOneAndUpdate({ phone: phone, email: email })
            const user = new User({

                name: name,
                password: password,
                phone: phone,
                email: email,
                deviceid: deviceid,
                brand: brand,
                devicename: devicename,
                devicetype: devicetype,
                modelname: modelname,
            })
            await user.save()
        }
        res.send("hello")


    } catch (err) {
        console.log(err)
    }
    next()
}



//update profile picture..
const updatepicture = async (req, res, next) => {
    const { ImageData, email, phone } = req.body

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
    const { phone, email, } = req.body
    // we just have to send boolean to frontend to change state accordingly
    const user = await User.findOne({ phone, email })
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
//verify Otp
const VerifyPhoneOtp = async (req, res, next) => {
    const { phone, id, otp } = req.body
}
//verify Email Otp
const VerifyEmailOtp = async (req, res, next) => {
    const { id, otp, email } = req.body;
}



module.exports = { updatepicture, loginFunction, FindUser }
