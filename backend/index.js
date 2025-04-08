require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const {sendOTP, userRoutes} = require("./routes/users");
const adminRoutes = require("./routes/admins");
const authRoutes = require("./routes/auth");
const adminAuthRoutes = require("./routes/adminAuth")
const otpVerifyRoutes = require("./routes/otpVerify")
const resendOtpRoutes = require("./routes/resendOtp")
const getUserRoutes = require("./routes/getUsers")
const addUserRoutes = require("./routes/addUser")
const editUserRoutes = require("./routes/editUser")
const editOrgDetailsRoutes = require("./routes/editOrgDetails");
const getAdminRoutes = require("./routes/getAdmin")
const changePasswordRoutes = require("./routes/changePassword")

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/adminAuth", adminAuthRoutes);
app.use("/api/otpVerify", otpVerifyRoutes);
app.use("/api/resendOtp", resendOtpRoutes);
app.use("/api/getUsers", getUserRoutes);
app.use("/api/addUser", addUserRoutes);
app.use("/api/editUser", editUserRoutes);
app.use("/api/editOrgDetails", editOrgDetailsRoutes);
app.use("/api/getAdmin", getAdminRoutes);
app.use("/api/changePassword", changePasswordRoutes);


const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log('Listening on port ${port}...')
})