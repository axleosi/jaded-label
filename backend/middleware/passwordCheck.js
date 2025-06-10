const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const passwordCheck = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send("Email and password required");

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send("Invalid credentials");

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = passwordCheck;