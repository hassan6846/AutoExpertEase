const User = require("../../models/UserModel");



const RegisterFunction = async (req, res, next) => {
    const { firstname, lastname, phone, password, email, brand, devicename } =req.body;
  
    // Check if all fields are provided
    if (
      !firstname ||
      !lastname ||
      !phone ||
      !password ||
      !email ||
      !brand ||
      !devicename
    ) {
      return res.status(400).json({
        success: false,
        msg: "Please fill all the fields.",
      });
    }
  
    try {
      // Check if the phone number is already registered
      const FindByPhone = await User.findOne({ phone });
      if (FindByPhone) {
        return res.status(409).json({
          success: false,
          msg: "Phone Already Linked to Another Account",
        });
      }
  
      // Check if the email is already registered
      const FindByEmail = await User.findOne({ email });
      if (FindByEmail) {
        return res.status(409).json({
          success: false,
          msg: "Email Already Linked to Another Account",
        });
      }
  
      // Create the user
      const newUser = new User({
        firstName: firstname,
        lastName: lastname,
        phone,
        email: email,
        password,
        DeviceInfo: {
          Brand: brand,
          DeviceName: devicename,
        },
  
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Respond with success
      res.status(201).json({
        success: true,
        msg: "User registered successfully",
        user: {
          id: newUser._id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          phone: newUser.phone,
          email: newUser.email,
          brand: newUser.brand,
          devicename: newUser.devicename,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, msg: `${error.message}` });
    }
  };


  module.exports = RegisterFunction;