const router = require("express").Router();
const {Test} = require('../models/test')
require("dotenv").config();

module.exports = router.get("/", async(req, res) => {
    try{
        const data = await Test.find({});
        console.log("Data",data);
        if(!data)
        {
            res.status(409).send({message : "No users found"});
        }
        else
        {
            res.status(200).send({data, message : "User list found !"})
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
        return;
    }
})