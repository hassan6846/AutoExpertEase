const User = require("../../models/UserModel");
const cloudinaryInstance = require("../../utils/Cloudinary");

const updatepicture = async (req, res, next) => {
    const { image, id } = req.body;
  
    if (!image || !id) {
      return res.status(400).json({
        success: false,
        msg: "Please fill Entiere fields (from Update picture)",
      });
    }
  
    try {
      //Find User First
      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json({
          success: false,
          msg: "User does not exist in the database",
        });
      }
      // Convert base64 string to buffer
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
  
      // Create Data URI
      const dataURI = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      // Send to cloudinary
      const uploadResult = await cloudinaryInstance.uploader.upload(dataURI);
      user.avatar = uploadResult.secure_url;
  
      await user.save();
  
      res.status(200).json({
        success: true,
        msg: "Avatar updated successfully",
        avatarUrl: uploadResult.secure_url,
      });
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).json({
        success: false,
        msg: "Internal Server Error",
      });
    }
  };

  module.exports=updatepicture