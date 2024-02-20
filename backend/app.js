const express = require("express");
const { run } = require("./db/ConnectionDb");

const app = express();
//middlewares
require("dotenv").config()
run()


module.exports = { app }


