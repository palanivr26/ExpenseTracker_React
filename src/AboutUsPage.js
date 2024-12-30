import React from 'react';
import './AboutUsPage.css'; // Assuming you have a CSS file for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <section className="about-section">
        <h1>About Us</h1>
        <p>Welcome to our expense tracker! Our mission is to help you manage your finances effortlessly and efficiently. We believe that everyone deserves to have control over their spending and savings, and our tool is designed to make that possible.</p>
        
        <h2>Our Mission</h2>
        <p>We are dedicated to providing a user-friendly and secure platform that allows individuals and families to track their expenses, set budgets, and gain insights into their financial health. Our goal is to empower you with the tools you need to make informed financial decisions and achieve your financial goals.</p>
        
        <h2>Meet the Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Co-Founder & CEO</p>
            <p>Jane is passionate about financial literacy and leads our team with a vision for innovation and user-centered design.</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Co-Founder & CTO</p>
            <p>John is our tech guru, ensuring our platform is built on the latest technologies and maintains top-notch security.</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Alice Johnson</h3>
            <p>Lead Designer</p>
            <p>Alice designs intuitive and attractive interfaces, making sure our users have the best experience possible.</p>
          </div>
        </div>
        
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, we'd love to hear from you. Please reach out to us at:</p>
        <p>Email: <a href="mailto:support@expensetracker.com">support@expensetracker.com</a></p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default AboutUsPage;
