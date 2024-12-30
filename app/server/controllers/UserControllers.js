// List of some user controller supported by the app (autoexpertEase).
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken"); //json web token
const bcrypt = require("bcrypt");
const cloudinaryInstance = require("../utils/Cloudinary");





//Check if user is already Signup or Not...
//in sense of inital registration...
const FindUser = async (req, res, next) => {
  const { phone } = req.body;
  // we just have to send boolean to frontend to change state accordingly
  const user = await User.findOne({ phone });
  if (user) {
    return res.status(400).json({
      success: true,
      msg: "User Already Exists.",
    });
  }
  //Else send true
  res.status(200).json({
    success: false,
    msg: "User Not Existed on the database",
  });
  next();
};

//Get Avatar Working 100% State done
const GetAvatar = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields from get  avatar",
    });
  }
  //Find User ..
  try {
    // Find the user
    const user = await User.findById(id);
    // Handle if user does not exist
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist in the database",
      });
    }

    // Send success response
    res.status(200).json({
      success: true,
      avatar: user.avatar,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

///Check is Expert/mechanic
const IsExepert = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields from  Isexpert",
    });
  }
  try {
    //find user by id
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist in the database",
      });
    }
    //If user is expert in role array of user
    if (user.role.includes("expert")) {
      return res.status(200).json({
        success: true,
        isExpert: true,
      });
    }
    //If user is not expert in role array of user
    res.status(200).json({
      success: false,
      isExpert: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `${error.message}` });
  }
};
//Is Seller...
const isVendor = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields from  IsVendor",
    });
  }

  try {
    //find user by id
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist in the database",
      });
    }
    //If user is expert in role array of user
    if (user.role.includes("vendor")) {
      return res.status(200).json({
        success: true,
        isVendor: true,
      });
    }
    res.status(200).json({
      success: false,
      isVendor: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `${error.message}` });
  }
};
//Can Post Cars..
const CanPostCars = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields from  CanPostCars",
    });
  }
  try {
    //find user by id
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist in the database",
      });
    }
    //If user is expert in role array of user
    if (user.role.includes("postal")) {
      return res.status(200).json({
        success: true,
        canPostCars: true,
      });
    }
    res.status(200).json({
      success: false,
      canPostCars: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `${error.message}` });
  }
};
//can Rent Cars

const CanRentCars = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields from  CanRentCars",
    });
  }
  try {
    //find user by id
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist in the database",
      });
    }
    //If user is expert in role array of user
    if (user.role.includes("rental")) {
      return res.status(200).json({
        success: true,
        canRentCars: true,
      });
    }
    res.status(200).json({
      success: false,
      canRentCars: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `${error.message}` });
  }
};

module.exports = {


  FindUser,

  FindUser,
  GetAvatar,
  IsExepert,
  isVendor,
  CanPostCars,
  CanRentCars,
};
