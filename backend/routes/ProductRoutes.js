const express = require('express')
const router = express.Router()
const { CreateProductListing } = require("../controllers/ProductControllers")
router.route('/product/create').post(CreateProductListing) //Vendor Only can create product
router.route("/product")//get all products
router.route("/product/:id")//get a single product by id 
router.route("/product/search")//search for product
router.route("/product/nearby")// find product from nearby sellers...
router.route("/product/update/:id")//update a single product by id
router.route("/product/delete/:id")//delete a single product by id
// exporting all routes.
module.exports = router;