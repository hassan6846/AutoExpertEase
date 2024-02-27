const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({

})

//Making Model & Exporting It.
module.exports = mongoose.model('User', UserSchema)