const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
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
        // Reference to user's phone number
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to UserSchema
            required: true,
        },
    },
    ntnNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
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
        cnicImage: {
            type: String, // Assuming the image is stored as a URL
            required: true,
            trim: true,
        },
        // Other vendor details such as date of birth, nationality, etc.
    },
    
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
