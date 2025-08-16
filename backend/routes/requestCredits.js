const router = require("express").Router();
const {Notifications} = require("../models/notifications")

module.exports = router.post("/", async(req, res) => {
    try{

        const data = await new Notifications(req.body).save();

        return res.status(200).send({message : "Credit Request sent successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
