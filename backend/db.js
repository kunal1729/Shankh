const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
};

module.exports = async() => {
    try{
        mongoose.connect(process.env.DATABASE_URI, connectionParams);
        console.log("Connected to database successfully.")
    }
    catch(error)
    {
        console.log(error);
        console.log("Database not connected.")
    }
} 
