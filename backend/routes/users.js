const router = require("express").Router();
const {User, validate} = require("../models/user")
const {UserOTPs} = require('../models/userOTP')
const bcrypt = require("bcrypt");
require("dotenv").config();

const nodemailer = require("nodemailer");
const { text } = require("express");


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
})


const sendOTP = async(req, res) => {
    const OTP = Math.floor((Math.random() * 9000) + 1000);

    const existsEmail = await UserOTPs.findOne({email : req.body.email});

    if(existsEmail)
    {
        const updateData = await UserOTPs.findByIdAndUpdate({_id : existsEmail._id} , {otp : OTP});

        console.log(updateData.otp)

        await updateData.save();

        const mailOptions = {
            from : process.env.EMAIL,
            to : req.body.email,
            subject : "OTP Verification mail",
            text : `OTP - ${OTP}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error)
            {
                console.log("Error : ", error);
                res.status(400).send({message : "Email not sent !"});
            }
            else
            {
                console.log("Email sent", info.response);
                res.status(200).send({message : "Email sent successfully!"});
            }
        })
    }

    else
    {
        const savedOtpData = new UserOTPs({
            email : req.body.email , otp : OTP
        });

        await savedOtpData.save();

        const mailOptions = {
            from : process.env.EMAIL,
            to : req.body.email,
            subject : "OTP Verification mail",
            text : `OTP - ${OTP}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error)
            {
                console.log("Error : ", error);
                res.status(400).send({message : "Email not sent !"});
            }
            else
            {
                console.log("Email sent", info.response);
                res.status(200).send({message : "Email sent successfully!"});
            }
        })
    }
}


const userRoutes = router.post("/", async(req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message : error.details[0].message});

        const user = await User.findOne({email : req.body.email});
        if(user)
        {
            return res.status(409).send({message : "User with given details already exists, kindly Login."});
        }


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        sendOTP(req, res);

        await new User({...req.body, password : hashPassword}).save();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : "Internal Server error."})
    }
})

module.exports = {sendOTP, userRoutes}