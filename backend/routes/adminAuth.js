const router = require("express").Router();
const {Admin} = require("../models/admin");

const Joi = require("joi");
const bcrypt = require("bcrypt");


module.exports = router.post("/", async(req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
        {
            return res.status(400).send({message : error.details[0].message});
        }
        const admin = await Admin.findOne({email : req.body.email});
        if(!admin)
        {
            return res.status(401).send({message : "Invalid Email."})
        }

        const validPassword = await bcrypt.compare(
            req.body.password, admin.password
        )
        if(!validPassword)
        {
            return res.status(401).send({message : "Invalid Email or Password."})
        }



        const token = admin.generateAuthToken();
        console.log(admin);
        res.status(200).send({data : {token, details : {_id : admin._id , orgName : admin.orgName, email : admin.email}}, message : "Logged in successfully."})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server Error."})
          
    }
})

const validate = (data) => {
    const schema = Joi.object({
        email : Joi.string().email().required().label("Email"),
        password : Joi.string().required().label("Password")
    })

    return schema.validate(data)
}