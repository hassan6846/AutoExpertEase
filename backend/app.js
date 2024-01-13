const express = require("express")
const app = express()
require("dotenv").config()
//initalizing Cloud Functions (firebase.)
const {initializeApp,applicationDefault,cert} =require("firebase-admin/app")
const serviceAccount=require("./db/Firebase.json")
const admin=require("firebase-admin")
initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:process.env.DATABASE_URL
})

module.exports = { app }