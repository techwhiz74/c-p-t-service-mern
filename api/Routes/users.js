const router = require("express").Router();
const { User, validate } = require("../modules/user.js");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const existinguser = await User.findOne({ email: req.body.email });
  if (existinguser) return res.status(400).send("User already exists");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(201).send("user created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
