// src/App.js
import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandigPage() {
  return (
    <div className="landing-page">
    
      
        

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Explore the City on Two Wheels</h1>
          <p>Affordable. Fast. Eco-Friendly. Rent your ride in minutes!</p>
          

         
        </div>
        <div className="hero-img">
          <img src="https://mcdn.wallpapersafari.com/medium/21/7/fSwG9Z.jpg" alt="Bike rental" />
        </div>
         <Link to="/login" className="btn btn-primary btn-lg mt-3">
          Book Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 BikeRental. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandigPage;
