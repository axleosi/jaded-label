const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();


function generateToken(user) {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

module.exports = generateToken;