
const mongoose = require("mongoose");


const userOTPSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true
        },
        otp : {
            type : String,
            required : true
        }
    }
)


const UserOTPs = mongoose.model("UserOTPs", userOTPSchema);

module.exports = {UserOTPs};