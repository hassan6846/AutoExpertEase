
const { TWILIO_Account_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID } = process.env
const client = require("twilio")(TWILIO_SERVICE_ID, TWILIO_Account_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

// SendOtp..
// ---  Api support request Limit for test purpose.
const SendOtp = async (req, res, next) => {
    const { CountryCode, PhoneNumber } = req.body;
    try {
        const OtpSend = await client.verify
            .v2.services(TWILIO_SERVICE_ID)
            .verifications.create({
                to: `+${CountryCode}${PhoneNumber}`,
                channel: "sms"
            })
    } catch (error) {
        res.send(error.message)
    }
}
// Export all modeles
module.exports={SendOtp}