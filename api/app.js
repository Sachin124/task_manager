const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
