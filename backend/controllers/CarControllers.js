//Create Cars..
//Approve agency
//Car Bookings..
const UploadCar = async (req, res, next) => {
    const { id, carname, noplate, registrationno, color, cartype, enginetype, fueltype,
        yearofmanufacture, milage, carcondition, seats, ac, tracker, legaldocuments, workingsound, pickupAddress, image1, image2, image3,usercoords} = req.body;
  
         //if request empty
         if(!id||!carname||!noplate||!registrationno||!color||!cartype||!enginetype||!fueltype||!yearofmanufacture||!milage||!carcondition||!seats||!ac||!tracker||!legaldocuments||!workingsound||!pickupAddress||!image1||!image2||!image3||!usercoords){
  
            return res.status(400).json({
                success: false,
                msg: "Fill all the fields from upload car",
            });
        }

    

}


module.exports={UploadCar};