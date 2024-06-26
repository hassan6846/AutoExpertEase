const Vendor = require("../models/VendorModal")
const User = require("../models/UserModel");

const ApplyForVendor = async (req, res) => {
    const { shopname, email, buisnessphone, address,
         coodrinates, accountno, ntnno,userid,cnic } = req.body;
    if(!shopname ||!email ||!buisnessphone ||!address ||!coodrinates||!accountno ||!ntnno ||!userid||!cnic  ){
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields."
        });
    }
    try{
        //find if application already exists
        const findApplication=await Vendor.findOne({vendorDetails:{user:userid}})
        //find user by id
        if(findApplication){
            return res.status(400).json({
                success: false,
                msg: "You have already applied for a vendor."
            });  


        const user = await User.findById(userid);
        if(!user){
            return res.status(404).json({
                success: false,
                msg: "User not found."
            });
        }

 
       
        //create new Vendor
        const vendor=new Vendor({
            shopName:shopname,
            location:coodrinates,
            contactInfo:{
                email:email,
                phone:buisnessphone,
                user:userid,
            },
           ntnNumber:ntnno,
           vendorDetails:{
            cnic:cnic,
            name:user.firstName,
            address:address,
            accountno:accountno
           },
        
        })
        await vendor.save();
        await user.save();
        res.status(200).json({
            success: true,
            vendor
        });
    }}
    catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }
}
module.exports = {ApplyForVendor}