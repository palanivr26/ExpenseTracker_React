import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinanceTracker.css';

const FinanceTracker = () => {
    const [formData, setFormData] = useState({
        email: '',
        month: '',
        paycheck: '',
        sideHustle: '',
        giving: '',
        rent: '',
        utilities: '',
        groceries: '',
        funMoney: ''
    });

    const [financeRecords, setFinanceRecords] = useState([]);
    const navigate = useNavigate();

    // Fetch stored finance records from the backend on component mount
    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            setFormData((prevData) => ({
                ...prevData,
                email: userEmail
            }));
        }

        // Fetch stored finance records from the backend
        axios.get('http://localhost:8080/finance/records')
            .then((response) => {
                setFinanceRecords(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching finance records:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/finance/records', formData);
            console.log('Record saved:', response.data);

            // Refresh the finance records list
            setFinanceRecords((prevRecords) => [...prevRecords, response.data]);

            // Navigate to the Dashboard after saving
            navigate('/Dashboard');
        } catch (error) {
            console.error('There was an error saving the record:', error);
        }
    };

    return (
        <div className="finance-tracker-container">
            <div className="finance-tracker">
                <form onSubmit={handleSubmit} className="finance-form">
                    <h2>Finance Tracker</h2>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="month"
                        placeholder="Enter Month"
                        value={formData.month}
                        onChange={handleChange}
                        required
                    />

                    <h3>Income</h3>
                    <input
                        type="number"
                        name="paycheck"
                        placeholder="Paycheck"
                        value={formData.paycheck}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="sideHustle"
                        placeholder="Side Hustle"
                        value={formData.sideHustle}
                        onChange={handleChange}
                    />

                    <h3>Expenses</h3>
                    <input
                        type="number"
                        name="giving"
                        placeholder="Giving"
                        value={formData.giving}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="rent"
                        placeholder="Rent"
                        value={formData.rent}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="utilities"
                        placeholder="Utilities"
                        value={formData.utilities}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="groceries"
                        placeholder="Groceries"
                        value={formData.groceries}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="funMoney"
                        placeholder="Fun Money"
                        value={formData.funMoney}
                        onChange={handleChange}
                    />

                    <button type="submit">Save Record</button>
                </form>

                <div className="finance-records">
                    <h3>Saved Finance Records</h3>
                    {financeRecords.length > 0 ? (
                        <ul>
                            {financeRecords.map((record, index) => (
                                <li key={index}>
                                    <h4>{record.month} - {record.email}</h4>
                                    <p>Paycheck: ₹{record.paycheck}</p>
                                    <p>Side Hustle: ₹{record.sideHustle || 0}</p>
                                    <p>Giving: ₹{record.giving || 0}</p>
                                    <p>Rent: ₹{record.rent || 0}</p>
                                    <p>Utilities: ₹{record.utilities || 0}</p>
                                    <p>Groceries: ₹{record.groceries || 0}</p>
                                    <p>Fun Money: ₹{record.funMoney || 0}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No records available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FinanceTracker;
