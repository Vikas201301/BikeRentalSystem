import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" 
    >
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Bike Rental System. All rights reserved.</p>
        <p className="mb-0">
          <a href="/contact" className="text-light me-3">Contact</a>
          <a href="/about" className="text-light">About</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
