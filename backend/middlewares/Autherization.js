const jwt=require("jsonwebtoken")

//middleware for authenticated user
exports.isAuthenticated=async (req,res,next)=>{

}
//Authorize roles
exports.authorizeRoles = (allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required to view this content",
        });
      }
  
      const userRole = req.user.role;
  
      if (allowedRoles.includes(userRole)) {
        // User is authorized for the specified roles
        next();
      } else {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to access this resource",
        });
      }
    };
  };