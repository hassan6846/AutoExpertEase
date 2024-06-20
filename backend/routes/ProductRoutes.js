const express = require('express')
const router = express.Router()
const { CreateProductListing,FetchSellerProducts } = require("../controllers/ProductControllers")
router.route('/product/create').post(CreateProductListing) //Vendor Only can create product
router.route("/products/vendor/:id").get(FetchSellerProducts)//get all product being posted by a vendor
router.route("/product")//get all products
router.route("/product/:id")//get a single product by id 
router.route("/product/search")//search for product
// exporting all routes.
module.exports = router;