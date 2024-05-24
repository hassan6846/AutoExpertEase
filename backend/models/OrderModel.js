const mongoose = require('mongoose');

// Schema Model
const OrderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the product model
        required: true,
    }],
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user model who ordered
        required: true,
    },
    orderedAt: {
        type: Date,
        default: Date.now,
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered'],
        default: 'pending',
    },
    PaymentMethod: {
        type: String,
        enum: ['COD', 'Online'],
        default: 'COD',
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
