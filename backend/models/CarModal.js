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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // assuming you have a User model
        required: true,
    },
    KmTraveled: {
        type: Number,
        required: true,
        min: 0,
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
        type: String,
        enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
        required: true,
    },
    transmission: {
        type: String,
        enum: ['Manual', 'Automatic'],
        required: true,
    },
    features: [{
        type: String,
    }],
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    insuranceDetails: {
        provider: {
            type: String,
            required: true,
        },
        policyNumber: {
            type: String,
            required: true,
        },
        expiryDate: {
            type: Date,
            required: true,
        },
    },
    serviceHistory: [{
        date: {
            type: Date,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the model from the schema
const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
