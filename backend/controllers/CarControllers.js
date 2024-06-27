//Create Cars..
//Approve agency
//Car Bookings..

const Car = require("../models/CarModal");
const cloudinaryInstance = require("../utils/Cloudinary");

const UploadCar = async (req, res, next) => {
    const { id, carname, noplate, registrationno, color, cartype, enginetype, fueltype,
        yearofmanufacture, milage, carcondition, seats, ac, tracker, legaldocuments, workingsound, pickupAddress, image, imagetwo,usercoords,price} = req.body;
  
         //if request empty
         if(!id||!carname||!noplate||!registrationno||!color||!cartype||!enginetype||!fueltype||!yearofmanufacture||!milage||!carcondition||!seats||!ac||!tracker||!legaldocuments||!workingsound||!pickupAddress||!image||!imagetwo||!usercoords||!price){
  
            return res.status(400).json({
                success: false,
                msg: "Fill all the fields from upload car",
            });
        }
try {
    const base64ToDataURI = (base64String) => {
        const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        return `data:image/jpeg;base64,${buffer.toString('base64')}`;
    };
    const uploadImageToCloudinary = async (base64String) => {
        const dataURI = base64ToDataURI(base64String);
        const uploadResult = await cloudinaryInstance.uploader.upload(dataURI);
        return uploadResult.secure_url;
    };
    // Upload all three images
    const [uploadedImage1, uploadedImage2] = await Promise.all([
        uploadImageToCloudinary(image),
        uploadImageToCloudinary(imagetwo),

    ]);
    // Create a new car
    const newCar = new Car({
        name: carname,
        licensePlate: noplate,
        RegistrationNo:registrationno,
        color: color,
        Cartype: cartype,
        EngineType:enginetype,
        fuelType:fueltype,
        YearOfManufacture:yearofmanufacture,
        Milage:milage,
        condition:carcondition,
        seats:seats,
         haveAc:ac,
         hasTraker:tracker,
         WorkingSoundSystem:workingsound,
         LegalDocuments:legaldocuments,
         pricePerDay:price,
         location:usercoords,
         Address:pickupAddress,
         owner:id,
         images: [uploadedImage1, uploadedImage2],
         
 
    });
    // Save the car to the database
    await newCar.save();
    res.status(201).json({
        success: true,
        msg: "Car uploaded successfully",
        car: newCar
    });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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