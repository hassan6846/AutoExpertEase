const express = require("express");
const app = express();
const fileupload = require("express-fileupload")
const cors = require("cors");
const { updatepicture } = require("./controllers/UserControllers");
require("dotenv").config()
//middlewares
app.disable("x-powered-by")//hiding tech stack from Hacker..
app.use(fileupload()) //using fileupload middleware.
app.use(cors({
    origin: true //cors policy...

}));

app.use(express.json())//server is json type.
//all Routes
const user = require("./routes/UserRoutes")
const product = require('./routes/ProductRoutes')
const chatbot=require('./routes/Chatbot')
//endpoints middlewares
app.use("/api", user)
app.use("/api", product)
app.use('/api',chatbot)
module.exports = app


