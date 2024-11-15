import React from 'react';
import '../style/home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to EV Charging Bunk Finder</h1>
        <p>Find electric vehicle charging stations near you quickly and easily.</p>
      </header>

      <main className="home-main">
        <div className="search-section">
          <h2>Discover Charging Stations</h2>
          <p>Enable location services to see nearby EV charging bunks or search by location.</p>
          <button className="btn-primary">Enable Location</button>
        </div>

        <div className="info-section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Step 1</h3>
              <p>Enable your location or enter your desired location.</p>
            </div>
            <div className="step">
              <h3>Step 2</h3>
              <p>View a list of nearby EV charging bunks with details.</p>
            </div>
            <div className="step">
              <h3>Step 3</h3>
              <p>Book your slot to avoid waiting in queues.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <p>Powered by EV Bunk Finder</p>
      </footer>
    </div>
  );
};          

export default Home;
