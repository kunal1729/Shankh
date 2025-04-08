const router = require("express").Router();
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt");
require("dotenv").config();


module.exports = router.post("/", async(req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message : error.details[0].message});

        const user = await User.findOne({email : req.body.email});
        if(user)
        {
            return res.status(409).send({message : "User with given details already exists, kindly Login."});
        }


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password : hashPassword}).save();

        return res.status(200).send({message : "User created successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
