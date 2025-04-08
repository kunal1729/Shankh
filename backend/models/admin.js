
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const adminSchema = new mongoose.Schema(
    {
        orgName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        orgType : {
            type : String
        },
        phoneNumber : {
            type : String
        }
    }
)

adminSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn : "7d"});
    return token
}

const Admin = mongoose.model("Admin", adminSchema);

const validate = (data) => {
    const schema = Joi.object({
        orgName : Joi.string().required().label("Organization Name"),
        email : Joi.string().email().required().label("Email"),
        orgType : Joi.string().label("Organization Type"),
        phoneNumber : Joi.string().label("Phone Number"),
        password : passwordComplexity().required().label("Password")
    })
    return schema.validate(data);
}

module.exports = {Admin, validate};