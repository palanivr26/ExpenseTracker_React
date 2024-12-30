import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ExpenseCalculator from './ExpenseCalculator';
import AboutUsPage from './AboutUsPage';
import ForgetPassword from './ForgotPassword'
import Footer from './Footer';
import Navbar from './Navbar';
import SignUpPage from './SignUpPage';
import './App.css';
import Dashboard from './Dashboard';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import FinanceTracker from './FinanceTracker';



const App = () => {
    return (
      <BrowserRouter>
    
        <Routes>
                
                <Route path="/" element={<LandingPage/>} />
                <Route path="/LoginPage" element={<LoginPage/>} />
                <Route path="/signupPage" element={<SignUpPage/>} />
                <Route path="/add-expense" element={<ExpenseCalculator/>} />
                <Route path="/aboutUsPage" element={<AboutUsPage/>} />
                <Route path="/ForgetPassword" element={<ForgetPassword/>} />
                <Route path="/Footer" element={<Footer/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Policy" element={<PrivacyPolicy/>} />
                <Route path="/Fintracker" element={<FinanceTracker/>} />
                <Route path="/Fintracker" element={<Navbar/>} />
              
               
        </Routes>
        </BrowserRouter>
    );
}

export default App;