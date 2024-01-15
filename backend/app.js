const express = require("express");
const { initializeApp, firestore } = require("firebase-admin");
const serviceAccount = require("./db/Firebase.json");
const { cert } = require("firebase-admin/app");

// Initialize Firebase Admin SDK
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

// Firestore instance
const db = firestore();

// Adding fake data
const docRef = db.collection("user").doc(''); // Replace with a valid document ID
docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
});

const app = express();

module.exports = { app };
