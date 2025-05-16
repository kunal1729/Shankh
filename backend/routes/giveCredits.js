const router = require("express").Router();
const {Notifications} = require("../models/notifications")


module.exports = router.post("/", async(req, res) => {
    try{
        const result = await Notifications.updateOne(
            { _id: req.body._id },
            { $set: { status: true} }
          );

          console.log(result)

        return res.status(200).send({message : "Credits granted successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})