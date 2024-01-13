const express = require("express")
const app =  express()
require("dotenv").config()
const {initializeApp}=require("firebase-admin/app")





module.exports = { app }