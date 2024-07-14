// services/taskService.js
const Task = require('../models/taskModel');

class TaskService {
  async createTask(userId, title, description, dueDate, status) {
    try {
      const task = await Task.create({ title, description, dueDate, status, UserId: userId });
      return { task };
    } catch (error) {
      throw new Error('Error creating task');
    }
  }

  async getTasks(userId) {
    try {
      const tasks = await Task.findAll({ where: { UserId: userId } });
      return { tasks };
    } catch (error) {
      throw new Error('Error fetching tasks');
    }
  }

  async updateTask(userId, taskId, title, description, dueDate, status) {
    try {
      const task = await Task.findOne({ where: { id: taskId, UserId: userId } });
      if (!task) {
        throw new Error('Task not found');
      }

      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.status = status;
      await task.save();

      return { task };
    } catch (error) {
      throw new Error('Error updating task');
    }
  }

  async deleteTask(userId, taskId) {
    try {
      const task = await Task.findOne({ where: { id: taskId, UserId: userId } });
      if (!task) {
        throw new Error('Task not found');
      }

      await task.destroy();
      return { message: 'Task deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting task');
    }
  }
}

module.exports = new TaskService();
