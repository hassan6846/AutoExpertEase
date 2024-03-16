const express = require('express')
const router = express.Router()
const { CreateProductListing } = require("../controllers/ProductControllers")
router.route('/product/create',CreateProductListing)

// exporting all routes.
module.exports = router;