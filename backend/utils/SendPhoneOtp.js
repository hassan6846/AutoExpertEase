const axios = require("axios")
//send otp Utility
const OTPSENDER = async (phone, body) => {
    try {
        const response = await axios.post(process.env.MESSAGE_ENDPOINT, {
            "apikey": process.env.MESSAGE_API_KEY,
            "receivernum": phone,
            "sendernum": "Default",
            "textmessage": body
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
module.exports = OTPSENDER