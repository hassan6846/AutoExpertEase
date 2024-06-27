const mongoose = require('mongoose');
const validator = require('validator');

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    licensePlate: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    RegistrationNo:{
        type: String,
        required: true,
    
    },
    color:{
        type:String,
        default:"undefined",
    },
    Cartype: {
        type: [String],
  
        required: true,
    },
    EngineType:{
        type:String,
        defualt:"Gasoline Engine"
    },
    fuelType: {
        type: [String],
       
        required: true,
    },
    YearOfManufacture: {
        type: Number,
        required: true,
        min: 1886, // Year of the first automobile
    },
    Milage:{
        type: Number,
        required: true,
        min: 0,
    },
    condition: {
        type: String,
        trim: true,
    },
    seats: {
        type: Number,
        required: true,
        min: 1,
    },
    haveAc: {
        type: Boolean,
        required: true,
        default: false,
    },
    hasTraker:{
        type: Boolean,
        required: true,
        default: false,
    },
    WorkingSoundSystem:{
        type: Boolean,
        required: true,
        default: false,
    },
    LegalDocuments:{
        type: Boolean,
        required: true,
        default: false,
    },
    
    pricePerDay: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: Object,
        required: true,
    },
    Address:{
        type: String,
        required: true,
    },
    owner: {
        type:String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
        default: true,
    },
    images: [{
        type: [String],
        required: [true, "Kindly Add Some Images to Preview (minimum limit is 3)"],
        validate: {
            validator: function(array) {
                return array.length >= 1 && array.length <= 9;
            },
            message: "Image array should have between 3 and 9 items."
        }

    }],





    createdAt: {
        type: Date,
        default: Date.now,
    },
    IsApproved:{
        type:Boolean,
        default:true,
    },
    // Owner details
    
});

// Create the model from the schema
const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
