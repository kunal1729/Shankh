const router = require("express").Router();
const {Admin, validate} = require("../models/admin")
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = router.post("/", async(req, res) => {
    try{

        const admin = await Admin.findOne({orgId : req.body.orgId});
        

        const validPassword = await bcrypt.compare(
            req.body.oldPassword, admin.password
        )

        if(!validPassword)
        {
            return res.status(401).send({message : "Invalid Password."})
        }

        

        const data = {
            email : admin.email,
            password : req.body.newPassword,
            orgId : admin.orgId,
            orgName : admin.orgName,
            orgType : admin.orgType,
            phoneNumber : admin.phoneNumber
        }
        
        const {error} = validate(data);
        if(error)
            return res.status(400).send({message : error.details[0].message});


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

        data.password = hashPassword;

        await Admin.findByIdAndUpdate(
            req.body._id, data
          );


        return res.status(200).send({data, message : "Password changed successfully !"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})
