require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel.js');

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existing = await User.findOne({ email: 'osi@example.com' });
  if (existing) {
    console.log("Admin already exists.");
    return process.exit(0);
  }

  const admin = new User({
    name: 'Super Admin',
    email: 'osi@example.com',
    password: 'osi123',
    role: 'admin'
  });

  await admin.save();
  console.log("Admin user created successfully.");
  process.exit(0);
};

run();
