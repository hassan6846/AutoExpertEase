
const { Stripe } = require("stripe")

const CreateCardPaymentIntent = async (req, res) => {
    try {
   
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error While Payment" });
    }
}

module.exports = {}