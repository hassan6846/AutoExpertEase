const mongoose = require("mongoose");
const VendorSchema = new mongoose.Schema({
    ShopName: {
        type: String,
        required:true,
    
    },
    BuisnessEmail: {
        type: String,
        required:true,
    },
    Country: {
        type: String,
        default: "Pakistan"

    },
    City: {
        type: String,
        default: "Lahore",
    },
    Address: {
        type: String,
        default: "",
    },
    ZipCode: {
        type: String,
        default: "54000",
    },
    CnicNo:{
        type: String,
        defualt:"",

    },
    NtnNo:{
        type: String,
        default:"",
    },
}, { timestamps: true })