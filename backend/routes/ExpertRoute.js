const express = require('express')
const router = express.Router()//router for nested routes

//controllers
const {ApplyExpertShip,GetTopup,AddTopup}=require("../controllers/ExpertController")

router.route("/apply-expert").post(ApplyExpertShip)
router.route('/add-topup').post(AddTopup)
router.route('/get-topup/:id').get(GetTopup)

module.exports = router;