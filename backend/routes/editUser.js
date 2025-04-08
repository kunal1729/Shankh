const router = require("express").Router();
const {User, validate} = require("../models/user")


module.exports = router.post("/", async(req, res) => {
    try{

        await User.findByIdAndUpdate({_id : req.body._id}, req.body)

        return res.status(200).send({message : "User edited successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
