// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../style/Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className='Login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <a href="/register">Dont have Account Sign Up</a>
      </form>
    </div>  
  );
};

export default Login; 
