const taskService = require('../services/taskService');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const userId = req.user.id;

  try {
    const { task } = await taskService.createTask(userId, title, description, dueDate, status);
    res.status(201).send({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const { tasks } = await taskService.getTasks(userId);
    res.send(tasks);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, status } = req.body;
  const userId = req.user.id;

  try {
    const { task } = await taskService.updateTask(userId, id, title, description, dueDate, status);
    res.send({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const { message } = await taskService.deleteTask(userId, id);
    res.send({ message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
