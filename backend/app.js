const express = require("express");
const app = express();
const fileupload = require("express-fileupload")
const cors=require("cors")
require("dotenv").config()




//middlewares
app.disable("x-powered-by")//hiding tech stack from Hacker..
app.use(fileupload()) //using fileupload middleware.
app.use(cors({
    origin: true //cors policy...

}));
app.use(express.json())//server is json type.

module.exports = { app }


