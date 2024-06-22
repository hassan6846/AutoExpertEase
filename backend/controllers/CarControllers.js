//Create Cars..
//Approve agency
//Car Bookings..

const Car = require("../models/CarModal");


const UploadCar = async (req, res, next) => {
    const { id, carname, noplate, registrationno, color, cartype, enginetype, fueltype,
        yearofmanufacture, milage, carcondition, seats, ac, tracker, legaldocuments, workingsound, pickupAddress, image1, image2,usercoords} = req.body;
  
         //if request empty
         if(!id||!carname||!noplate||!registrationno||!color||!cartype||!enginetype||!fueltype||!yearofmanufacture||!milage||!carcondition||!seats||!ac||!tracker||!legaldocuments||!workingsound||!pickupAddress||!image1||!image2||!usercoords){
  
            return res.status(400).json({
                success: false,
                msg: "Fill all the fields from upload car",
            });
        }

    

}
//Send ALl Cars..
const GetApprovedCars = async (req, res, next) => {
  try {
        // Fetch all users from the database
        const cars = await Car.find({IsApproved: true});
        res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }               
}
//Get a Car by ID

const GetCarById = async (req, res, next) => {
    try {
        // Fetch user by ID
        const car = await Car.findById(req.params.id);

        if (!car) {
            return res.status(404).json({
                success: false,
                msg: "Car not found",
            });
        }

        res.status(200).json(car);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


//Book Car..


module.exports={UploadCar,GetApprovedCars,GetCarById};