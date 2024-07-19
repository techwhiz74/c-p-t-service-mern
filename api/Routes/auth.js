const router = require("express").Router();
const { User } = require("../modules/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Email or password is wrong");
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword, "validPassworkd");
    if (!validPassword)
      return res.status(400).send("Email or password is wrong");
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (err) {
    res.status(500).send("internal server error");
  }
});
const validate = (body) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(body);
};
module.exports = router;

