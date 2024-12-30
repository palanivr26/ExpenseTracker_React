import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-logo">Budget Buddy</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/LoginPage">Login</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
