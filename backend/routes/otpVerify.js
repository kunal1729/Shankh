const router = require("express").Router();
const {UserOTPs} = require('../models/userOTP')

module.exports = router.post("/", async(req, res) => {
    try{
        const user = await UserOTPs.findOne({email : req.body.email});
        console.log(user.otp);
        if(req.body.otp == user.otp)
        {
            res.status(200).send({message : "User created successfully !"});
        }
        else
        {
            res.status(400).send({message : "Incorrect OTP !"});
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server Error."})
          
    }
})