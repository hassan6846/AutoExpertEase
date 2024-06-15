const mongoose = require("mongoose")

const ExpertSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: false,
   },
   LastName: {
      type: String,
      required: false
   },

   topups: {
      type: Number,
      default: 0
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   DateOfBirth: {
      type: String,
      default: "",
   },
   ExpertContact: {
      type: String,
      required:false,
   },
   CnicNo:{
      type: String,
      required:false,
   },
   CnicFront: {
      type: String,
      required:false,

   },
   CnicBack: {
      type: String,
      default: ""
   },
   facialVerification:{
      type:String,
      default:"",
   }
}, { timestamps: true })
const Expert = mongoose.model('Expert', ExpertSchema)
module.exports = Expert;
