// List of some user controller supported by the app (autoexpertEase).
const express = require("express") //expressjs posting methods etc
const validator = require("validator")//validator for server side Valdiataion
const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")//json web token
const bcrypt=require("bcrypt")
const { GenerateOtp } = require("../utils/GenerateOtp")
const { SendOtpMail } = require("../utils/SendMail")

const cloudinaryInstance = require("../utils/Cloudinary")
// 1 User login/Signup Initial
const loginFunction = async (req, res, next) => {
    const { phone, password } = req.body
    //if fields are not filled
    if(!phone||!password){
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
    //find if he is already a user
    //if not then send error to register 
    //else Try Registration
    const FindUserByPhone=await User.findOne({phone});
    //if he is not the user
    if(!FindUserByPhone){
        return res.status(404).json({
            success: false,
            msg: "Invalid Credientials", //for preventing attacks not to send invalid or other unsecure message
        });
    }
    //if we found users then we have to compare password is correct or not
    const comparePassword=await bcrypt.compare(password,FindUserByPhone.password)
    
    if(!comparePassword){
        return res.status(401).json({
            success: false,
            msg: "Invalid Credientials", //for preventing attacks not to send invalid or other unsecure message
        });
    }
    } 
    
    catch (err) {
        console.log(err)
    }
    next()
}

const RegisterFunction = async (req, res, next) => {
    //register functions
    const { firstname,lastname, email, password, otp, Emailotp, deviceid, brand, devicename, devicetype, modelname } = req.body

    //fields are empty
    if (!firstname || !lastname || !password || !phone || !email || !deviceid || !brand || !devicename || !devicetype || !modelname, otp, Emailotp) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
    

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



//Logout




module.exports = { RegisterFunction, loginFunction, FindUser, updatepicture, FindUser }
