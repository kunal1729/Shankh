
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
       
    }
)


const userNotifications = mongoose.model("userNotifications", notificationsSchema);


module.exports = {userNotifications};