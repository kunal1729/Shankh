const router = require("express").Router();
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = router.post("/", async(req, res) => {
    try{

        const user = await User.findOne({_id : req.body._id});
        
        console.log(req.body)

        const validPassword = await bcrypt.compare(
            req.body.oldPassword, user.password
        )

        if(!validPassword)
        {
            return res.status(401).send({message : "Invalid Password."})
        }

        

        const data = {
            email : user.email,
            password : req.body.newPassword || "",
            orgId : user.orgId,
            orgName : user.orgName,
            phoneNumber : user.phoneNumber || "",
            userName : user.userName,
            credits : user.credits,
            userId : user.userId || "",
            DOB : user.DOB || "",
            location : user.location || "",
            occupation : user.occupation || ""
        }
        
        const {error} = validate(data);
        if(error)
            return res.status(400).send({message : error.details[0].message});


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

        data.password = hashPassword;

        await User.findByIdAndUpdate(
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
