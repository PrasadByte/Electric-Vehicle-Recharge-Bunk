// src/components/CreateBunk.js
import React, { useState } from 'react';
import axios from 'axios';
import '../style/createBunk.css';

const CreateBunk = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    googleMapLocation: '',
    availableSlots: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming you save the token after login
      const response = await axios.post('http://localhost:5000/api/bunks', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert('Bunk created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create bunk!');
    }
  };

  return (
    <div className='create-bunk'>
      <h2>Create Bunk</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Bunk Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="text" name="googleMapLocation" placeholder="Google Map Location" onChange={handleChange} required />
        <input type="number" name="availableSlots" placeholder="Available Slots" onChange={handleChange} required />
        <button type="submit">Create Bunk</button>
      </form>
    </div>
  );
};

export default CreateBunk;
