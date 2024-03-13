const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({
    // userName
    username: {
        type: String,
        require: [true, "Kindly Enter your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],//setting max length
        minLength: [4, "Name should have more than 4 characters"],//setting min length
    },
    Email: {
        type: String, //email type 
        required: [true, "Please Enter Your Email"],
        unique: [true, "Email is already Linked to another account."],//prevent duplciate email
        validate: [validator.isEmail, "Please Enter a valid Email Format."],//Validating is Email.
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
        required: false,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    // User Infomation.
    //     
    //    --Contians User Cnic
    // --Contains Very contagius information.
    UserInfo: {
        // Only for cnic purpose.
        name: {
            type: String,
            required: false,
        },
        //cnic
        Cnic: {
            // Image
            Image: {
                type: String,
                required: false,
            }
            //  Other Ml Releated Data.
        },
        //Image
        FacialData: {
            //Face Id Each user is assigned a special FacialId
            //So we can run the face detection and gives us the same id.
            FaceId: {
                type: String,
                required: false,
            },
            FacialFeatures: {
                type: Array,
                required: false,
                default: null
            },
            // Image 
            Image: {
                type: String,
                required: false,
                default: null,
                validate: [validator.isBase64, "Please Enter a valid Email Format"]
            }

        },

        //User Permenent Address. According to cnic.
        AddressInfo: {
            //Country..
            Country: {
                type: String,
                default: "Pakistan",
            },
            //City..
            City: {
                type: String,
                default: "Lahore"
            },
            State: {
                type: String,
                default: "Punjab"
            },
            //ZipCode.
            ZipCode: {
                type: Number,
                default: 54000,
            }
        },
        // Contain Info About Device Info of the User Device which is primarly used
        //We can Write Algorithms to compare device with new auth device and warn them
        //about suspecius activity.
        DeviceInfo: {
            // Device ID
            DeviceId: {},
            // Brand
            Brand: {},
            //DeviceName.
            DeviceName: {},
            //    Device Type
            DeviceType: {},
            ModelName: {}
        },
        

    },
    //  Phone Number Field.
    phone: {
        type: Number,
        required: [true, "Kindly Enter the Contact Number"],
        validate: {
            validator: function (value) {
                return String(value).length === 10;
            },
            message: "Phone number must be exactly 10 digits",
        }
    },

    isVerifiedEmail: {
        type: Boolean, //IsVerifiedEmail.. (we'll update the status after twilio verification and redirct on this basis if not.)
        default: false
    },
    // UserRoles.
    role: {
        type: Array,
        default: ["user"] //Push different roles but we have to make sure the possible roles as possible.
    },
    //we ill set this after putting this
    rolestatus:{
        type:"pending",
    },

    Locations: {
        // User TypeLocation
        LastLocation: {

        },
        // Mutate location.
        BuisnessLocation: {},
        // Link a database Ref.
        RealtimeLocation: {}
    },
    // Handle User Tokens For Sessions.
    EmailOTP: {
        type: Number,
        required: false
    },
    // User Create at date.
    createdAt: {
        type: Date,
        default: Date.now()
    },
    OtpLogin: {
        type: Number,
        maxLength: [5, "otp cannot exceed 5 characters"],//setting max length
        minLength: [4, "otp should have more than 4 characters"],//setting min length


    }
})
//hash password before saving it....
UserSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bycrypt.hash(this.password, 10);
    }
    next();
});
// HASH COMPARE METHOD
UserSchema.methods.comparePassword = async function (password) {
    return await bycrypt.compare(password, this.password);
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
//Making Model & Exporting It.
