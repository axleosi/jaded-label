const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/userModel");
const requireAdmin = require("../middleware/requireAdmin");
const passwordCheck = require("../middleware/passwordCheck");
const generateToken = require("../utils/generateToken");

// GET all users
router.get("/admin", requireAdmin, async (req, res) => {
  const users = await User.find({}, "-password");
  res.json(users);
});

// Admin creates a new user
router.post("/admin/signup", requireAdmin, async (req, res) => {
  const { name, email, password, role = 'user' } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });

  const user = new User({ name, email, password, role });
  await user.save();
  res.status(201).json(user);
});

// Admin login
router.post("/admin/login", passwordCheck, async (req, res) => {
  const user = req.user;
  if (user.role !== 'admin') return res.status(403).json({ message: "Admins only" });

  const token = generateToken(user);
  res.status(200).json({ message: "Login successful", user, token });
});

// Update any user
router.put("/admin/users/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  const update = { name, email, role };
  if (password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, update, { new: true });
  res.json(user);
});

// Delete any user
router.delete("/admin/users/:id", requireAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
