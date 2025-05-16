const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

module.exports = router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid Email." });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password." });
    }

    // Check if it's user's first login
    let isFirstLogin = false;
    if (user.firstLogin) {
      isFirstLogin = true;
      user.firstLogin = false;
      await user.save(); // Save change
    }

    const token = user.generateAuthToken();
    console.log(user);

    res.status(200).send({
      data: {
        token,
        user: {
          _id: user._id,
          credits: user.credits,
          userName: user.userName,
          orgId : user.orgId,
          orgName: user.orgName,
          email: user.email,
          DOB: user.DOB || "",
          location: user.location || "",
          userId: user.userId || "",
          occupation: user.occupation || "",
          firstLogin: isFirstLogin // <-- Send this to frontend
        },
      },
      message: "Logged in successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  return schema.validate(data);
};
