
const User = require("../models/UserModel");
const Vendor = require("../models/VendorModal");

const ApplyForVendor = async (req, res) => {
    const { shopname, email, buisnessphone, address, coordinates, accountno, ntnno, userid, cnic } = req.body;
    
    if (!shopname || !email || !buisnessphone || !address || !coordinates || !accountno || !ntnno || !userid || !cnic) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields."
        });
    }

    try {
        // Check if an application already exists for the user
        const existingApplication = await Vendor.findOne({ 'contactInfo.user': userid });
        
        if (existingApplication) {
            return res.status(400).json({
                success: false,
                msg: "You have already applied for a vendor."
            });
        }

        // Find the user by ID
        const user = await User.findById(userid);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found."
            });
        }

        // Create a new Vendor
        const vendor = new Vendor({
            shopName: shopname,
            location: coordinates,
            contactInfo: {
                email: email,
                phone: buisnessphone,
                user: userid,
            },
            ntnNumber: ntnno,
            vendorDetails: {
                cnic: cnic,
                name: user.firstName,
                address: address,
                accountno: accountno
            },
        });
        
        await vendor.save();

        res.status(200).json({
            success: true,
            vendor
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }
};

module.exports = { ApplyForVendor };
