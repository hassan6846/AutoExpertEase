const mongoose = require("mongoose")




const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true
    },
    brand: {
        default: undefined,
        required: false,
        type: String,
    },
    description: {
        type: String,
        required: [true, "Please Enter product Description"],
    },
    //images
    image: {
        type: Array,
        required: [, "Kindly Add Some Images to Preview lowest limit is 3 "],
        minItems: [3, "Price cannot exceed 8 characters"],
        maxItems: [9, "Image limits Exceds."]
    },

    //category
    productcategory: {
        category: {
            type: String,
            required: [true, "Please Enter Category"],
            default: "undefined",
        },
        subcategory: {
            type: String,
            default: "undefined",
            required: [true, "Please enter SubCategory"],
        }
    },
    //Setting Product is Trending Or not
    istrending: {
        type: Boolean,
        default: false
    },
    //price
    price: {
        saleprice: {
            type: Number,
            required: [true, "Please Enter product Price"],
            maxLength: [8, "Price cannot exceed 8 characters"],
        },
        beforePrice: {
            type: Number,
            required: [true, "Please Enter product Price"],
            maxLength: [8, "Price cannot exceed 8 characters"],
        },
        TotalEarnings:{
            type:Number,
            default:0,

        }
    },

  Review: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    }],
    //posted and created date
    postedAt: {
        type: Date,
        default: Date.now,
    },
    productStatus:{
        type:String,
        default:false,
    },
    PostedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "Vendor",
        required: true,
    }

})

//Making Model
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

