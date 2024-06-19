const Expert = require("../models/ExpertModel");
const User = require("../models/UserModel")

//Apply Being Expert
const ApplyExpertShip = async (req, res, next) => {
    const { firstname, lastname, userid, email, phone, dateofbirth, cnicno, cnicfront, cnicback } = req.body
    //IfRequest is Empety
    if (!firstname || !lastname || !userid || !email || !phone || !dateofbirth || !cnicno || !cnicfront || !cnicback) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields.",
        });
    }
    try {
       //Check If Already Applied or Not..
       const findapplication=await Expert.findOne({phone})
       if(findapplication){
        res.status(409).json({
            success:false,
            msg:"You've Already Applied for PartherShip We'll Let you Know After some approval"
        })
       }
    } catch (error) {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
//Check if already Applied or not..
//Get Topups..
const GetTopup = async (req, res, next) => {
    const { expertid } = req.body;
    try {
        const expert = await Expert.findById({ expertid })
        // finally Send Topup
        res.status(201).json({
            success:true,
            msg: "Successfully Fetched Topups.",
            topup:expert.topups,
        })
    } catch (error) {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}