const Expert = require("../models/ExpertModel");
const User = require("../models/UserModel")

//Apply Being Expert
const ApplyExpertShip = async (req, res, next) => {
  const { firstname, lastname, userid, email, phone, dateofbirth, cnicno, cnicfront, cnicback } = req.body;

  // Check if all fields are provided
  if (!firstname || !lastname || !userid || !email || !phone || !dateofbirth || !cnicno || !cnicfront || !cnicback) {
    return res.status(400).json({
      success: false,
      msg: "Please fill all the fields.",
    });
  }

  try {
    // Check if user has already applied
    const findApplication = await Expert.findOne({ phone });

    if (findApplication) {
      return res.status(409).json({
        success: false,
        msg: "You've already applied for Expertship. We'll notify you after approval.",
      });
    }

    // Find user to get avatar
    const user = await User.findById(userid);

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found.",
      });
    }

    // Save new application 
    const expert = new Expert({
      firstname,
      lastname,
      user: userid,
      email,
      phone,
      dateofbirth,
      cnicno,
      cnicfront,
      cnicback,
    });

    await expert.save();

    // Respond with success and include avatar
    res.status(201).json({
      success: true,
      msg: "Successfully Applied for Expertship.",
      expert,
      avatar: user.avatar, // Assuming user.avatar is the field containing the avatar URL
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
//Check if already Applied or not..
//Get Topups..
const GetTopup = async (req, res, next) => {
    const { id } = req.params;
    try {
    //Find Expert by ID
    const expert = await Expert.findOne({user:id})
    // finally Send Topup
    res.status(201).json({
        success:true,
        msg: "Successfully Fetched Topups.",
        topup: expert.topups,
    });
    

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
//Add Topup To Account
const AddTopup = async (req, res) => {
    const { amount, id } = req.body;
  
    if (!amount) {
      return res.status(400).json({
        success: false,
        msg: "Please Provide Amount.",
      });
    }
  
    try {
      // Update the balance and find the updated expert document
      const expert = await Expert.findOneAndUpdate(
        { user: id },
        { $inc: { topups: amount } },
        { new: true }
      );
  
      if (!expert) {
        return res.status(404).json({
          success: false,
          msg: "Expert not found.",
        });
      }
  
      // Send Top-up Response
      res.status(201).json({
        success: true,
        msg: "Topup Successfully Added.",
        expert: expert,
      });
    } catch (error) {
      console.error('Error adding top-up:', error);
      res.status(500).json({
        success: false,
        msg: "Internal Server Error.",
      });
    }
  };
  
const PostTask=async (req, res, next) => {
   
    const {title,vehciletype,description,coordinates,county}=req.body;
    if (!title || !vehciletype || !description || !coordinates || !county) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
}

//rate and comment expert




module.exports = { ApplyExpertShip, GetTopup,PostTask,AddTopup,  };
