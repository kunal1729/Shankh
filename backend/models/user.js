
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
    {
        orgName : {
            type : String,
            required : true
        },
        orgId : {
            type : String,
            required : true
        },
        userName : {
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
        credits : {
            type : String
        },
        phoneNumber : {
            type : String
        },
        userId : {
            type : String
        },
        DOB : {
            type : String
        },
        location : {
            type : String
        },
        occupation : {
            type : String
        },
    }
)

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn : "7d"});
    return token
}

const User = mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        orgName : Joi.string().required().label("Organization Name"),
        orgId : Joi.string().required().label("Organization Id"),
        userName : Joi.string().required().label("User Name"),
        email : Joi.string().email().required().label("Email"),
        credits : Joi.string().label("Credits"),
        phoneNumber : Joi.string().label("Phone Number"),
        password : passwordComplexity().required().label("Password"),
        userId : Joi.string().label("UserId"),
        DOB : Joi.string().label("DOB"),
        location : Joi.string().label("Location"),
        occupation : Joi.string().label("Occupation")
    })
    return schema.validate(data);
}

module.exports = {User, validate};