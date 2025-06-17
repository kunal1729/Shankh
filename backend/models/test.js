
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true
        },
        orgId : {
            type : String,
            required : true
        },
        
        date : {
            type : String,
            required : true
        },
        language : {
            type : String,
        },
        overallScore : {
            type : Number,
        },
        voiceInsights : {
            type : Object,
            required : true
        },
        behaviorInsights : {
            type : Object,
            required : true
        },
        fillerWordsUsed : {
            type : Object,
            required : true
        },
        transcript : {
            type : String,
            required : true
        },
    }
)


const Test = mongoose.model("Tests", testSchema);


module.exports = {Test};