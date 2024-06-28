const Booking = require("../models/BookingModels");

const CreateBooking = async (req, res) => {

    const { carId, bookerId, startDate, endDate, } = req.body;
    if (!carId || !bookerId || !startDate || !endDate) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all the fields."
        });
    }
    try {
       const booking = new Booking({
        bookedby:boookerId,
        car:carId,
        startDate: startDate,
        endDate: endDate,
       })
       await booking.save();
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        });
    }
}

module.exports={CreateBooking}