const express = require("express");
const app = express();
const fileupload = require("express-fileupload")
const cors = require("cors");
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
// Initializing App
const http=require("http")
const {Server}=require("socket.io")
const server=http.createServer(app)
const io=new Server(server)
//END OF INITIALIZATION...
require("dotenv").config()
//middlewares
app.disable("x-powered-by")//hiding tech stack from Hacker..
app.use(fileupload()) //using fileupload middleware.
app.use(cors({
    origin: true, //cors policy...
    credentials: true
}));

app.use(express.json())//server is json type.
app.use(cookieParser())
app.use(bodyParser.json())

//all Routes
const user = require("./routes/UserRoutes")
const product = require('./routes/ProductRoutes')
const chatbot=require('./routes/Chatbot')
const admin=require('./routes/AdminRoutes');
const auth=require("./routes/AuthRoutes")
//endpoints middlewares
app.use("/api", user)
app.use("/api", product)
app.use('/api',chatbot)
app.use('/api',admin)
app.use("/api",auth)
module.exports = app


