import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate to navigate
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faChartPie, faListAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
    navigate(`/${section}`);
  };

  // Logout handler to navigate to the LandingPage
  const handleLogout = () => {
    // Navigate to LandingPage ("/")
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className={`dashboard-sidebar ${isSidebarOpen ? 'dashboard-open' : 'dashboard-closed'}`}>
        <ul>
          <li onClick={() => handleSidebarItemClick('dashboard')}>
            <FontAwesomeIcon icon={faChartPie} /> {isSidebarOpen && 'Dashboard'}
          </li>
          <li onClick={() => handleSidebarItemClick('add-expense')}>
            <FontAwesomeIcon icon={faMoneyBillWave} /> {isSidebarOpen && 'Expense Calculator'}
          </li>
          <li onClick={() => handleSidebarItemClick('fintracker')}>
            <FontAwesomeIcon icon={faDollarSign} /> {isSidebarOpen && 'Finance Tracker'}
          </li>
          <li onClick={() => handleSidebarItemClick('Contact')}>
            <FontAwesomeIcon icon={faDollarSign} /> {isSidebarOpen && 'Contact Us'}
          </li>
        </ul>
      </div>

      <div className={`dashboard-main-content ${isSidebarOpen ? 'dashboard-sidebar-open' : 'dashboard-sidebar-closed'}`}>
        <div className="dashboard-top-bar">
          {/* Removed Sidebar Toggle Button */}
          {/* Logout Button */}
          <button className="dashboard-logout-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {isSidebarOpen && 'Logout'}
          </button>
        </div>

        {/* Render active section content */}
        {activeSection === 'dashboard' && (
          <>
            <div className="dashboard-header-item">
              <FontAwesomeIcon icon={faMoneyBillWave} />
              <span>TOTAL EXPENSES: $50,000</span>
            </div>
            <div className="dashboard-header-item">
              <FontAwesomeIcon icon={faChartPie} />
              <span>BUDGET: $100,000</span>
            </div>
            <div className="dashboard-header-item">
              <FontAwesomeIcon icon={faListAlt} />
              <span>CATEGORIES: 8</span>
            </div>
            <div className="dashboard-header-item">
              <FontAwesomeIcon icon={faDollarSign} />
              <span>SAVINGS: $5,000</span>
            </div>

            <div className="dashboard-stats-revenue">
              <Stats />
              <ExpenseChart />
              <LatestExpenses />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Stats = () => (
  <div className="dashboard-stats">
    <div className="dashboard-stat">
      <h3>Total Budget</h3>
      <div className="dashboard-revenue">
        <div className="dashboard-revenue-circle">50.0%</div>
        <div className="dashboard-revenue-details">
          <p>Total budget this year: $100,000</p>
          <p>Spent: $50,000</p>
          <p>Remaining: $50,000</p>
          <p>Savings: $5,000</p>
        </div>
      </div>
    </div>
  </div>
);

const data = [
  { name: 'March', expenses: 5000 },
  { name: 'April', expenses: 7000 },
  { name: 'May', expenses: 6000 },
  { name: 'June', expenses: 8000 },
  { name: 'July', expenses: 10000 },
  { name: 'August', expenses: 9000 },
];

const ExpenseChart = () => (
  <div className="dashboard-expense-chart">
    <h3>Monthly Expenses (Last 6 months)</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="expenses" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const LatestExpenses = () => (
  <div className="dashboard-latest-expenses">
    <h3>Latest Expenses</h3>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8/15/2022</td>
          <td>Office Supplies</td>
          <td>Stationery</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>8/14/2022</td>
          <td>Team Lunch</td>
          <td>Food</td>
          <td>$500</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Dashboard;
