
const mongoose = require("mongoose");

const notificationsSchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true
        },
        orgId : {
            type : String,
            required : true
        },
        userName : {
            type : String,
            required : true
        },
        status : {
            type : Boolean,
            default : false
        },
        credits : {
            type : String,
            required : true
        },
        orgName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phoneNumber : {
            type : String,
        },
        grantedDate : {
            type : String
        }
    }
)


const Notifications = mongoose.model("Notifications", notificationsSchema);


module.exports = {Notifications};