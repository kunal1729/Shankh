const router = require("express").Router();
const {Admin, validate} = require("../models/admin")
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = router.post("/", async(req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message : error.details[0].message});

        const user = await Admin.findOne({email : req.body.email});
        if(user)
        {
            return res.status(409).send({message : "User with given details already exists, kindly Login."});
        }

        console.log(req.body);

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new Admin({...req.body, password : hashPassword}).save();

        res.status(200).send({message : "Admin created successfully ! Login now"})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
