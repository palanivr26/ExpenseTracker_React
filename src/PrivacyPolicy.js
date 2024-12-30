import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        Effective Date: [Insert Date]
      </p>
      <p>
        [Your Company Name] ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our expense tracker application ("Service").
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide when you use our Service, which may include:
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, and any other contact details you provide.</li>
          <li><strong>Financial Information:</strong> Expense data you enter, including amounts, dates, categories, and descriptions.</li>
        </ul>
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to:
        <ul>
          <li><strong>Perform Calculations:</strong> To calculate your expenses, budget, and savings as part of the core functionality of our Service.</li>
          <li><strong>Improve Our Service:</strong> To analyze how you use the Service and make improvements based on your feedback and usage patterns.</li>
          <li><strong>Communicate With You:</strong> To respond to your inquiries, provide support, and notify you about updates or changes to the Service.</li>
        </ul>
      </p>

      <h2>3. How We Protect Your Information</h2>
      <p>
        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your data for as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy. You may request the deletion of your data at any time by contacting us.
      </p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our practices, please contact us at:
        <br />
        Email: [Your Email Address]
        <br />
        Address: [Your Company Address]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
