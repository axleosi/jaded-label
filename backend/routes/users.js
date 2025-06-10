const express = require("express");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel.js");
const authenticateToken = require("../middleware/authenticateToken.js");
const passwordCheck = require("../middleware/passwordCheck.js");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const generateToken = require("../utils/generateToken");

dotenv.config();

const router = express.Router();

router.post('/user/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).send("Missing fields");

    const user = new User({ name, email, password });
    const saved = await user.save();
    const token = generateToken(saved);

    res.status(201).json({ message: "User registered", user: saved, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/user/login', passwordCheck, async (req, res) => {
  try {
    const user = req.user;
    const token = generateToken(user);
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }

});

router.put('/user/update', authenticateToken, async (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.user._id;

  if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { name, email, password: hashedPassword },
    { new: true, runValidators: true }
  );

  res.status(200).json({ message: 'User updated', user: updatedUser });
});

router.patch('/user/update', authenticateToken, async (req, res) => {
  const updates = req.body;
  const userId = req.user._id;

  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: updates },
    { new: true, runValidators: true }
  );

  res.status(200).json({ message: "User updated", user: updatedUser });
});

router.delete('/user/delete', authenticateToken, async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.user._id);
  res.status(200).json({ message: "User deleted", user: deletedUser });
});

router.get('/user/profile', authenticateToken, (req, res) => {
  res.status(200).json({ message: "Profile fetched", user: req.user });
});

module.exports = router;