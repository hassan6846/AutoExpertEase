const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
//models
const User = require("../models/UserModel")
const Product = require("../models/ProductModel")
const Car = require("../models/CarModal")

//Admin Login function
const AdminLoginFunction = async (req, res, next) => {
    //send response testing only
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
        //Find And Check Role from Enum
        //compare password. at the end and send cookie

        //find user
        const user = await User.findOne({ email: email })
        //Check is User Exists or not
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found.",
            })
        }
        // compare password being typed byuser
        const isCorrectPassword = await bcrypt.compare(password, user.password)

        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                msg: "Incorrect password.",
            });
        }

        //If user and password are typed correct send a cookie in response
        const token = jwt.sign({ id: user._id, email: user.email,role:user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

   
        // Send success response
        res.status(200).json({
            success: true,
            msg: "Logged in successfully.",
            token: token, // Optionally, you can send the token in the response body as well
        });

        res.cookie("token",token)

    } 

    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error from Admin Login FUnction" });
    }
}

//Get No of Users All Time
const GetUsersNo = async (req, res, next) => {
    //send response testing only
    try {
        const userCount = await User.countDocuments();
        res.status(200).json({ count: userCount }); // Send the count back as JSON response

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

}

//Product Count
const GetProductNo = async (req, res, next) => {

    try {
        const productCount = await Product.countDocuments();
        res.status(200).json({ count: productCount }); // Send the count back as JSON response

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//Get All USer Documents
const GetAllUsers = async (req, res, next) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//Get All Cars
const GetAllCars = async (req, res, next) => {
    try {
        // Fetch all users from the database
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//Get Recent SignUps.
const RecentSignups = async (req, res, next) => {
    try {
        //fetch Recent Signups
        const recentsignups = await User.find()
            .limit(10)
            .sort({ createdAt: -1 })
        res.status(200).json(recentsignups)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//Delete User By ID
const DeleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.findByIdAndDelete(userId);
        //If User is not found (Maybe its already deleted from our side or may be void)
        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = { AdminLoginFunction, GetUsersNo, GetProductNo, GetAllUsers, GetAllCars, RecentSignups, DeleteUser }