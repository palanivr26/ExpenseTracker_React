import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Budget Buddy. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/AboutUsPage" href="AboutUsPage">About Us</Link>
          <Link to= "/Contact" href="Contact">Contact</Link>
          <Link to= "/Policy" href="privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
