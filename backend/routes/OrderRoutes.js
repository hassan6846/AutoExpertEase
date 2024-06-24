const express = require('express');
const router=express.Router();

//controllers
const { CreateProductOrder ,GetUserOrders } = require('../controllers/OrderControllers');

router.route('/create-order').post(CreateProductOrder);
router.route('/order/:id').get(GetUserOrders)
module.exports=router;