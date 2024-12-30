import React, { useState, useEffect } from 'react';
import './LoginPage.css'; // Assuming you have a CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]); // To store user data
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate user credentials
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful');
      navigate('/Dashboard');
      // Redirect to another page on successful login
      // window.location.href = "/ExpenseCalculator";
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bodypal">
    <div className="LoginPage-container">
      <div className="LoginPage-login-container">
        <h1>Login to Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="LoginPage-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              className='form-1'
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="LoginPage-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="LoginPage-submit-button">Login</button>
        </form>
        <div className="LoginPage-links">
          <Link to="/signupPage"><p>Don't have an account? Sign Up</p></Link>
          <Link to="/ForgetPassword"><p>Forgot Password?</p></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
