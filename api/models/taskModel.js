// models/taskModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
});

Task.belongsTo(User);
User.hasMany(Task);

module.exports = Task;
