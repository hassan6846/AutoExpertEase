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
    totalPrice: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agency",
        required: true,
    },
    ownerUserDetauls:{
        type:mongoose.Schema.Types.ObjectId,
        
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
