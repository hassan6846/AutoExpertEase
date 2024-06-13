const mongoose=require("mongoose")

const ExpertSchema=new mongoose.Schema({

     topups:{
        type:Number,
        default:0
     }

})
const Expert=mongoose.model('Expert',ExpertSchema)
module.exports = Expert;
