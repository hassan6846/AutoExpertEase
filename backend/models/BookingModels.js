const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car', // Reference to the car model
        required: true,
    },
    bookedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user model
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },

    paymentStatus: {
        type: String,
        default: 'paid',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },


    isActive:{
        type: Boolean,
        default: true,
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
