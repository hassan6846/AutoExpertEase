const cloudinary =require("cloudinary").v2
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});
//for Naming Convention the Name Alias is name Different ..
//but instances and method would remain same..
module.exports={cloudinaryInstance:cloudinary}