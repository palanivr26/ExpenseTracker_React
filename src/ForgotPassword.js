// ForgotPassword.js
import React, { useState } from 'react';
import './forgotPassword.css';
// import './LoginPage.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage('If an account with that email exists, you will receive a password reset link.');
        } catch (error) {
            setMessage('There was an error processing your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ForgotPassword-container">
            <h2>Forgot Your Password?</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit} className="ForgotPassword-form">
                <label htmlFor="email" className="ForgotPassword-label">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="ForgotPassword-input"
                />
                <button type="submit" className="ForgotPassword-button" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
                {message && <p className="ForgotPassword-message">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
