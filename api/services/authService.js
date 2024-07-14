// services/authService.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class AuthService {
  async register(username, password) {
    try {
      const user = await User.create({ username, password });
      return { user };
    } catch (error) {
      throw new Error('Error registering user');
    }
  }

  async login(username, password) {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || !await user.comparePassword(password)) {
        throw new Error('Invalid username or password');
      }

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return { token };
    } catch (error) {
      throw new Error('Error logging in user');
    }
  }
}

module.exports = new AuthService();
