require("dotenv").config();// Load environment variables
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { ConnectMongodb } = require("./db/ConnectionDb");


// Initialize the app
const app = express();




// Middlewares
app.disable("x-powered-by"); // Hide tech stack from hackers
app.use(fileupload()); // Use fileupload middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json()); // Server is JSON type
app.use(cookieParser());
app.use(
  bodyParser.json({
    limit: "50mb",

  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000, //50mb limit....
    type: "application/json"
  })
);

// All Routes
const user = require("./routes/UserRoutes");
const product = require("./routes/ProductRoutes");
const chatbot = require("./routes/Chatbot");
const admin = require("./routes/AdminRoutes");
const auth = require("./routes/AuthRoutes");
const payment = require("./routes/PaymentRoutes");
const car = require("./routes/CarRoutes")
const expert = require("./routes/ExpertRoute")
const location = require("./routes/LocationRoutes")
const order = require("./routes/OrderRoutes")
const vendor = require("./routes/VendorRoutes")
const booking = require("./routes/BookingRoute")
// Endpoints middlewares
app.use("/api", user);
app.use("/api", product);
app.use("/api", chatbot);
app.use("/api", admin);
app.use("/api", auth);
app.use("/api", payment);
app.use("/api", car);
app.use("/api", expert);
app.use("/api", location);
app.use('/api', order);
app.use('/api', vendor);
app.use('/api', booking);

// Connect to MongoDB
ConnectMongodb();



// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;