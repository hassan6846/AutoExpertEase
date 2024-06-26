const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactInfo: {
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
        },
        phone: {
            type:String,
            required:true
        },
        // Reference to user's phone number
        user: {
            type:String,
            required: true,
        },
    },
    ntnNumber: {
        type: String,
        required: true,

        // You may add validation for NTN format here
    },
    vendorDetails: {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        cnic: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            // You may add validation for CNIC format here
        },

        // Other vendor details such as date of birth, nationality, etc.
    },
    isVendor:{
        type:Boolean,
        default:false,
    
    }
    
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
