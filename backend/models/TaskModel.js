const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: [true, "Kindly Add Some Images to Preview (minimum limit is 3)"],

    },
    vehicleType: {
        type: String,
        required: true
    },
    LocationCoordinates: {
        Longitude: {
            type: String,
        },
        Latitude: {
            type: String,
        }
    },
    NearbyPlace: {

    },
    Postedby: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    //Offers should be array of objects
    Offers: {
        price: {

        },
        distance: {

        },
        time: {

        }
    },
    isArrived: {
    },
    AcceptedBy: {
        type: String,
        default: null
    },
    finalPrice:{
        type: Number,
        default: null
    }
},{timestamps: true});