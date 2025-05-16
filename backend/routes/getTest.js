const router = require("express").Router();
const { Test } = require('../models/test');

module.exports = router.post("/", async(req, res) => {
    try{
        const data = await Test.findById(req.body.testId);
        res.status(200).send({data, message : "Test found !"})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})