const router = require("express").Router();
const {Notifications} = require('../models/notifications')
require("dotenv").config();

module.exports = router.get("/", async(req, res) => {
    try{
        const data = await Notifications.find({});
        console.log(data);
        if(!data)
        {
            res.status(409).send({message : "No notifications found"});
        }
        else
        {
            res.status(200).send({data, message : "notifications listed !"})
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})