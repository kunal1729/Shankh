const router = require("express").Router();
const {User} = require("../models/user")


module.exports = router.post("/", async(req, res) => {
    try{

        const result = await User.updateOne(
            { _id: req.body._id },
            { $set: { credits: req.body.credits } }
          );


        return res.status(200).send({message : "User edited successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})