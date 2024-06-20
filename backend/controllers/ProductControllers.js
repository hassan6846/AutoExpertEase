const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const Vendor = require("../models/VendorModal");
//Utils
const cloudinaryInstance = require("../utils/Cloudinary");

//required controllers

//create a listing for product //un approved
//fetch all listing (admin only)
//create listing (from admin)
//fetch all requests listing..
//update user role
//approve listing
//delete single listing
//update listing
//fetch by category 
//fetch by sub category
//fuzzy search
//Price and range filteration
//autocomplete search options
const CreateProductListing = async (req, res, next) => {
    const { id, name, brand, description, category, subcategory, saleprice, beforePrice, image, imagetwo } = req.body;

    try {
        // Check if all required fields are present
        if (!id || !name || !brand || !description || !category || !subcategory || !image || !imagetwo  || !saleprice || !beforePrice) {
            return res.status(400).json({
                success: false,
                msg: "Please fill all required fields",
            });
        }

        // Convert base64 string to buffer and then to Data URI
        const base64ToDataURI = (base64String) => {
            const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            return `data:image/jpeg;base64,${buffer.toString('base64')}`;
        };

        // Upload images to Cloudinary
        const uploadImageToCloudinary = async (base64String) => {
            const dataURI = base64ToDataURI(base64String);
            const uploadResult = await cloudinaryInstance.uploader.upload(dataURI);
            return uploadResult.secure_url;
        };

        // Upload all three images
        const [uploadedImage1, uploadedImage2, uploadedImage3] = await Promise.all([
            uploadImageToCloudinary(image),
            uploadImageToCloudinary(imagetwo),

        ]);

        // Create a new product
        const newProduct = new Product({
            PostedBy: id,
            name: name,
            brand: brand,
            description: description,
            productcategory: {
                category: category,
                subcategory: subcategory
            },
            price: {
                beforePrice: beforePrice,
                saleprice: saleprice,
            },
            image: [uploadedImage1, uploadedImage2]
        });

        // Save the new product to the database
        await newProduct.save();

        // Finally, send response
        res.status(200).json({
            success: true,
            msg: "Product created successfully",
            product: newProduct
        });

    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
};

//Fetch Seller Posted Products.
const FetchSellerProducts = async (req, res, next) => {
    const { id } = req.params;
//check if id is provided
    if (!id) {
        return res.status(400).json({
            success: false,
            msg: "Please provide user id",
        });
    }
    try {
        // Fetch all products posted by the user
        const products = await Product.find({ PostedBy: id });
        res.status(200).json({
            success: true,
            products: products
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }

}




module.exports = { CreateProductListing,FetchSellerProducts }