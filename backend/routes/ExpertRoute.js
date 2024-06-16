const express = require('express')
const router = express.Router()//router for nested routes

//controllers
const {ApplyExpertShip,GetTopup}=require("../controllers/ExpertController")

router.route("/apply-expert").post(ApplyExpertShip)
router.route('/get-topup/:id').get(GetTopup)

module.exports = router;
