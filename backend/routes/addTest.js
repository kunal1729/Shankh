const router = require("express").Router();
const {Test} = require("../models/test")

module.exports = router.post("/", async(req, res) => {
    try{

        const data = await new Test(req.body).save();

        console.log(data);

        return res.status(200).send({data : data, message : "User created successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
