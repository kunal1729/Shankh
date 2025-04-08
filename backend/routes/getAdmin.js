const router = require("express").Router();
const { Admin } = require('../models/admin');
require("dotenv").config();

module.exports = router.post("/", async(req, res) => {
    try{
        const data = await Admin.findById(req.body._id);
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
    }
})