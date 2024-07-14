import React, { createContext, useState, useContext } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { AuthContext } from './AuthContext';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks(token);
      setTasks(data);
    } catch (error) {
      console.error('Fetch tasks error:', error.response.data);
    }
  };

  const addTask = async (task) => {
    try {
      const { data } = await createTask(task, token);
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Add task error:', error.response.data);
    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      const { data } = await updateTask(id, updatedTask, token);
      setTasks(tasks.map(task => (task.id === id ? data : task)));
    } catch (error) {
      console.error('Edit task error:', error.response.data);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id, token);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Delete task error:', error.response.data);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
