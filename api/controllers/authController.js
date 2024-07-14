const authService = require('../services/authService');


exports.register = async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).send({ message: 'Passwords do not match' });
  }

  try {
    const { user } = await authService.register(username, password);
    res.status(201).send({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { token } = await authService.login(username, password);
    res.send({ message: 'User logged in successfully', token });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
