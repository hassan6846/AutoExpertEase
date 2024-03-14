// List of some user controller supported by the app (autoexpertEase).
const express = require("express") //expressjs posting methods etc
const validator = require("validator")//validator for server side Valdiataion
const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")//json web token
const axios = require("axios")
const { GenerateOtp } = require("../utils/GenerateOtp")
// 1 User login/Signup Initial
const loginFunction = async (req, res, next) => {
    //destructure the request object.
    const { name, password, phone, phoneotp, email, emailotp, deviceid, brand, devicename, devicetype, modelname } = req.body;
    // Verify phone send otp to the user 
    try {
        
    } catch (err) {
        console.log(err)
    }
}
//update profile picture..
const updatepicture = async (req, res, next) => {
    const { ImageData } = req.body

    //validate is the provided is b64..
    //convert the b64 data to cloudinary and 
    //find the user by object_id 
    //update the user avatar field....

    //validate the data...
    if (!validator.isBase64(ImageData, { urlSafe: true })) {
        return res.status(400).json({ error: 'Invalid base64 data' });
    }


}
//Check if user is already Signup or Not...
const FindUser = async (req, res, next) => {
    const { phone } = req.body
}
module.exports = { updatepicture, loginFunction }
