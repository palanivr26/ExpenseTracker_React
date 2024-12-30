import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling
import Footer from './Footer'; // Import the Footer component
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate("/signupPage");
  }

  return (
    <div>
    <Navbar/>
    <div className="LandingPage-landing-page">
      <header className="LandingPage-hero">
        <div className="LandingPage-hero-content">
          <h1>Welcome to Budget Buddy</h1>
          <p>Your ultimate tool for effortless financial management and tracking.</p>
          {/*<a href="About" className="cta-button">Learn More</a>*/}
        </div>
      </header>
      
      <section id="features" className="LandingPage-features">
        <div className="LandingPage-features-container">
          <div className="LandingPage-feature">
            <h2>Track Expenses</h2>
            <p>Monitor and categorize your spending to understand where your money goes.</p>
          </div>
          <div className="LandingPage-feature">
            <h2>Create Budgets</h2>
            <p>Set and manage budgets to keep your spending on track and achieve financial goals.</p>
          </div>
          <div className="LandingPage-feature">
            <h2>Analyze Reports</h2>
            <p>Generate detailed reports and insights to help you make informed financial decisions.</p>
          </div>
        </div>
      </section>
      
      <section className="LandingPage-cta">
        <h2>Ready to Take Control of Your Finances?</h2>
        <p>Sign up today and start managing your money like a pro.</p>
        <button className="LandingPage-cta-button" onClick={handleSubmit}>Get Started</button>
      </section>

      <Footer /> {/* Include the Footer component */}
    </div>
    </div>
  );
};

export default LandingPage;
