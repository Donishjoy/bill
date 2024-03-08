// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your authentication logic here
    console.log('User logged in');

    // Redirect to the dashboard page after successful login
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
