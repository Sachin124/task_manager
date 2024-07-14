import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { login } from './api/auth';
import LoginForm from './component/Auth/LoginForm';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/AuthContext';
import TaskDashboard from './pages/TaskDashboard';
import TaskProvider from './context/TaskContext';
import TaskForm from './component/Task/TaskForm';

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className='text-warning'>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          {(window.location.pathname !== 'login' || window.location.pathname !== 'register') && <Header />}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/all-tasks" Component={TaskDashboard} />
            <Route path="/create-task" Component={TaskForm} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
