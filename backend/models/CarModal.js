const mongoose = require('mongoose');
const validator = require('validator');

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    modelYear: {
        type: Number,
        required: true,
        min: 1886, // Year of the first automobile
    },
    licensePlate: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    owner: {
        type:String,
        required: true,
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
    pricePerDay: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
        default: true,
    },
    images: [{
        type: String,
        validate: {
            validator: function(v) {
                return validator.isURL(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    }],
    description: {
        type: String,
        trim: true,
    },
    fuelType: {
        type: [String],
        enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
        required: true,
    },
    transmission: {
        type: [String],
        enum: ['Manual', 'Automatic'],
        required: true,
    },
    features: [{
        type: String,
    }],


    createdAt: {
        type: Date,
        default: Date.now,
    },
    IsApproved:{
        type:Boolean,
        default:false,
    },
    // Owner details
    
});

// Create the model from the schema
const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
