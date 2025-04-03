const router = require("express").Router();
const {UserOTPs} = require('../models/userOTP')
require("dotenv").config();
const {sendOTP} = require("../routes/users")
const bcrypt = require("bcrypt");

module.exports = router.post("/", async(req, res) => {
    try{
        sendOTP(req, res);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
