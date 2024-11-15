import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CreateBunk from './components/CreateBunk';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <><Navbar /><>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-bunk" element={<CreateBunk />} />
        </Routes>
      </Router>

    </></>
  );
};

export default App;
