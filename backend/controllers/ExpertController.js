const Expert = require("../models/ExpertModel");
const User = require("../models/UserModel")

//Apply Being Expert
const ApplyExpertShip = async (req, res, next) => {
    const { firstname, lastname, userid, email, phone, dateofbirth, cnicno, cnicfront, cnicback } = req.body;

    try {
        // If request is empty
        if (!firstname || !lastname || !userid || !email || !phone || !dateofbirth || !cnicno || !cnicfront || !cnicback) {
            return res.status(400).json({
                success: false,
                msg: "Please fill all the fields.",
            });
        }

        // Check if application already exists
        const findApplication = await Expert.findOne({ phone });
        if (findApplication) {
            return res.status(409).json({
                success: false,
                msg: "You've Already Applied for Partnership. We'll Let you Know After some approval."
            });
        }
        //Find User Data IN application 
        const findUser = await User.findById(userid);
    

        // Create new application
        const newApplication = new Expert({
            firstName: firstname,
            LastName: lastname,
            user: findUser,
            email: email,
            phone: phone,
            DateOfBirth: dateofbirth,
            CnicNo: cnicno,
            CnicFront: cnicfront,
            CnicBack: cnicback,
        });
  
        // Save the new application
        await newApplication.save();
        // Send success response
        res.status(201).json({
            success: true,
            id: newApplication._id,
            firstname: newApplication.firstName,
            lastname: newApplication.LastName,
            userid: newApplication.user,
            email: newApplication.email,
            phone: newApplication.phone,
            user:newApplication.user,
            userData:findUser,
            dateofbirth: newApplication.DateOfBirth,
            msg: "Successfully Applied for Partnership. We'll Let you Know After some approval."
        });
    } catch (error) {
        console.error(error);
        // Send internal server error response
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}

//Check if already Applied or not..
//Get Topups..
const GetTopup = async (req, res, next) => {
    const { id } = req.params;
    try {
        const expert = await Expert.findById(id)
        res.status(201).json({
            topups:expert.topups,
            success: true,
            msg: "Successfully Fetched Topups.",
          
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}

module.exports = { ApplyExpertShip, GetTopup };
