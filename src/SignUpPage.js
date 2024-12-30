import React, { useState } from 'react';
import './SignUpPage.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // POST request to create a new user
      const response = await axios.post('http://localhost:8080/users', {
        username: name,
        email: email,
        password: password
      });
      console.log('User created:', response.data);
      alert('Sign-up successful!');
      navigate('/LoginPage');
    } catch (error) {
      console.error('There was an error creating the user:', error);
      alert('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className="SignupPage-container">
      <div className="SignupPage-signup-container">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="SignupPage-form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="SignupPage-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="SignupPage-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="SignupPage-submit-button">Sign Up</button>
        </form>
        <div className="SignupPage-links">
          <Link to="/LoginPage"><p>Already have an account? Login</p></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
