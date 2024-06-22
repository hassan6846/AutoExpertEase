const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
//models
const User = require("../models/UserModel")
const Product = require("../models/ProductModel")
const Car = require("../models/CarModal")

const AdminLoginFunction = async (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    
    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found.",
            });
        }
        
        // Check if user is an admin
        if (!user.role.includes('admin')) {
            return res.status(403).json({
                success: false,
                msg: "Access denied. You are not an admin.",
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
        
        // If user is admin and password is correct, generate a JWT token
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role[0] }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        
        // Send success response with token
        res.cookie("token", token);
        res.status(200).json({
            success: true,
            msg: "Logged in successfully.",
            token: token, // Optionally, you can send the token in the response body as well
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error from Admin Login Function" });
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
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
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

//Get all UnApproved Products
const GetUnapprovedProducts = async (req, res, next) => {
    try {
        const unapprovedProducts = await Product.find({ productStatus:false });
        res.status(200).json(unapprovedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//Approve Product 

const ApproveProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const approvedProduct = await Product.findByIdAndUpdate(id, { productStatus: true }, { new: true });
        if (!approvedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product approved successfully' ,name:approvedProduct.name  });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { AdminLoginFunction, GetUsersNo, GetProductNo, GetAllUsers, GetAllCars, RecentSignups, DeleteUser,GetUnapprovedProducts,ApproveProduct }