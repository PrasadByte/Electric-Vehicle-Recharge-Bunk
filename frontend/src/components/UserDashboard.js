import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../style/UserDashboard.css'; // CSS file for styling

const UserDashboard = () => {
  const [bunks, setBunks] = useState([]);
  const [selectedBunk, setSelectedBunk] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();  // Use navigate for redirection

  // Fetch EV bunks when the component loads
  useEffect(() => {
    const fetchBunks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/bunks'); // Fetch all EV bunks
        setBunks(response.data);
      } catch (error) {
        console.error('Error fetching bunks:', error);
        alert('Failed to load bunks!');
      } finally {
        setLoading(false);
      }
    };

    fetchBunks();
  }, []);

  // Handle bunk selection
  const handleSelectBunk = (bunk) => {
    setSelectedBunk(bunk);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="user-dashboard">
      <h2>Welcome to EV Recharge Bunk Finder</h2>
      
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>

      <div className="bunk-list">
        <h3>Nearby EV Bunks</h3>
        {loading ? (
          <p>Loading bunks...</p>
        ) : (
          <ul>
            {bunks.map((bunk) => (
              <li key={bunk.id} onClick={() => handleSelectBunk(bunk)}>
                <h4>{bunk.name}</h4>
                <p>{bunk.address}</p>
                <p>Slots Available: {bunk.availableSlots}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedBunk && (
        <div className="bunk-details">
          <h3>Bunk Details</h3>
          <p><strong>Name:</strong> {selectedBunk.name}</p>
          <p><strong>Address:</strong> {selectedBunk.address}</p>
          <p><strong>Mobile:</strong> {selectedBunk.mobile}</p>
          <p><strong>Google Map Location:</strong> <a href={selectedBunk.googleMapLocation} target="_blank" rel="noopener noreferrer">View on Map</a></p>
          <p><strong>Available Slots:</strong> {selectedBunk.availableSlots}</p>
          <button onClick={() => alert('Slot booked successfully!')}>Book Slot</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
