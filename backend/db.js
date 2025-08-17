const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
};

module.exports = async() => {
    try{
        mongoose.connect(process.env.DATABASE_URI, connectionParams);
    }
    catch(error)
    {
        console.log(error);
    }
} 
