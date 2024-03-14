// List of some user controller supported by the app (autoexpertEase).
const express = require("express") //expressjs posting methods etc
const validator = require("validator")//validator for server side Valdiataion
const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")//json web token
const axios = require("axios")
const { GenerateOtp } = require("../utils/GenerateOtp")
// 1 User login/Signup Initial
async function loginFunction  (req, res, next)  {
    //destructure the request object.
    const { phone, PhoneOtp, Email, EmailOtp, Password, name } = req.body;
    try {

        //perform initial validation..using pakistani local for number
        if (!validator.isMobilePhone(phone, "en-PK")) {

        }
        //Find user through mobile Number or email provided..
        let FindUser = await User.findOne({ $or: [{ phone }, { email: Email }] })
        //If user Already a member or already registed..
        if (FindUser) {
            // User exists, handle login
            // Implement login logic here
        }
        else {
            //    Generate phone Number otp and send to the endpoint to user phone and verify the otp
            const otp =  await GenerateOtp()// generate 4digit otp..
             //send otp to user whatsapp number
             const sendWhatsappOtp= await axios.get("https://reqres.in/api/users")
            console.log(sendWhatsappOtp.data)
             //    set otp field to phone otp...
            //Verify email and send otp and verify that otp and save password...

        }

    } catch (err) {
        console.log(err)
    }

}
module.exports={loginFunction}
