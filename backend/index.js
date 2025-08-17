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
const getUsersRoutes = require("./routes/getUsers")
const addUserRoutes = require("./routes/addUser")
const editUserRoutes = require("./routes/editUser")
const editOrgDetailsRoutes = require("./routes/editOrgDetails");
const getAdminRoutes = require("./routes/getAdmin")
const changeAdminPasswordRoutes = require("./routes/changeAdminPassword")
const changeUserPasswordRoutes = require("./routes/changeUserPassword")
const addTestRoutes = require("./routes/addTest")
const getTestRoutes = require("./routes/getTest")
const getAllTestsRoutes = require("./routes/getAllTests")
const editCreditsRoutes = require("./routes/editCredits")
const getUserRoutes = require("./routes/getUser")
const requestCreditsRoutes = require("./routes/requestCredits")
const getNotificationsRoutes = require("./routes/getNotifications")
const giveCreditsRoutes = require("./routes/giveCredits")

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
app.use("/api/getUsers", getUsersRoutes);
app.use("/api/addUser", addUserRoutes);
app.use("/api/editUser", editUserRoutes);
app.use("/api/editOrgDetails", editOrgDetailsRoutes);
app.use("/api/getAdmin", getAdminRoutes);
app.use("/api/changePassword", changeAdminPasswordRoutes);
app.use("/api/changeUserPassword", changeUserPasswordRoutes);
app.use("/api/addTest", addTestRoutes);
app.use("/api/getTest", getTestRoutes);
app.use("/api/getAllTests", getAllTestsRoutes);
app.use("/api/editCredits", editCreditsRoutes);
app.use("/api/getUser", getUserRoutes);
app.use("/api/requestCredits", requestCreditsRoutes);
app.use("/api/getNotifications", getNotificationsRoutes);
app.use("/api/giveCredits", giveCreditsRoutes);

// Add health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`);
});
