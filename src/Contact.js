import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState(null); // To handle response message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to backend (assuming you are using fetch or axios)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage({
          message: 'Message sent! We will get back to you shortly.',
          type: 'success',
        });
      } else {
        setResponseMessage({
          message: 'Error sending message. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      setResponseMessage({
        message: 'Error sending message. Please try again.',
        type: 'error',
      });
    }

    // Clear form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="Contact-contact-page">
      <h1>Contact Us</h1>
      {responseMessage && (
        <div
          className={`Contact-response-message ${responseMessage.type}`}
        >
          {responseMessage.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="Contact-contact-form">
        <div className="Contact-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="Contact-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="Contact-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="Contact-submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
