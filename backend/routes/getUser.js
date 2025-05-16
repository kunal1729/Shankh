const router = require("express").Router();
const {User} = require('../models/user')
require("dotenv").config();

module.exports = router.post("/", async(req, res) => {
    try{
        console.log("Hi" , req.body);
        const data = await User.findById({_id : req.body._id});
        res.status(200).send({data, message : "User found !"})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})