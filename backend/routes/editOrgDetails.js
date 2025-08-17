const router = require("express").Router();
const {Admin, validate} = require("../models/admin")

module.exports = router.post("/", async(req, res) => {
    try{

        const data = await Admin.findByIdAndUpdate(req.body._id, req.body)

        return res.status(200).send({message : "Details edited successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
