import React from 'react';
import './App.css';
import Header from './component/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/AuthContext';
import TaskDashboard from './pages/TaskDashboard';
import TaskProvider from './context/TaskContext';
import TaskForm from './component/Task/TaskForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <TaskProvider>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<TaskDashboard />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/edit-task/:id" element={<TaskForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </TaskProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
