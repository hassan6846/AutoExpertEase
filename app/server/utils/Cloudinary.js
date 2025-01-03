const cloudinary = require("cloudinary").v2;

// Configure the SDK
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_KEY,
    api_secret:process.env.API_SECRET 

});

// Export the configured Cloudinary instance
const cloudinaryInstance = cloudinary;
module.exports = cloudinaryInstance;
