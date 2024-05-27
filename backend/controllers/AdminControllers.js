const express = require("express")
const jwt = require("jsonwebtoken")
//models
const User = require("../models/UserModel")
const Product=require("../models/ProductModel")
const Car = require("../models/CarModal")

//Admin Login function
const AdminLoginFunction = async (req, res, next) => {
    //send response testing only
    try {
        const users = await User.find(); // Retrieve all users from the database

        // If there are no users in the database
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        // Sending the entire user collection in the response
        res.json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//Get No of Users All Time
const GetUsersNo=async(req,res,next)=>{
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
const GetProductNo=async(req,res,next)=>{
 
    try {
        const productCount = await Product.countDocuments();
        res.status(200).json({ count: productCount }); // Send the count back as JSON response

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//Get All USer Documents
const GetAllUsers=async(req,res,next)=>{
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
const GetAllCars=async(req,res,next)=>{
    try {
            // Fetch all users from the database
            const cars = await Car.find();
            res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    }
module.exports={AdminLoginFunction,GetUsersNo,GetProductNo,GetAllUsers,GetAllCars}