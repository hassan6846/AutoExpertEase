const express = require("express")
const app =  express()
require("dotenv").config()
//initalizing Cloud Functions (firebase.)
const {initializeApp}=require("firebase-admin/app")
initializeApp()
const {getFirestore,Timestamp,FieldValue,Filter}=require("firebase-admin/firestore")
const db=getFirestore()



module.exports = { app }