import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ExpenseCalculator.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const API_URL = 'http://localhost:8080/api/expenses'; // Update with your backend URL

const ExpenseCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch all expenses from the backend
    axios.get(API_URL)
      .then(response => {
        setExpenses(response.data);
        // Set the income from the first expense (or use a default value)
        if (response.data.length > 0) {
          setIncome(response.data[0].income);
        }
      })
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const handleExpenseSubmit = () => {
    // Ensure the income and expenseAmount are numbers
    const incomeAmount = parseFloat(income) || 0;
    const expenseAmountParsed = parseFloat(expenseAmount) || 0;

    if (expenseName && expenseAmountParsed && expenseCategory && expenseDate) {
      const newExpense = {
        description: expenseName,
        amount: expenseAmountParsed,
        category: expenseCategory,
        date: expenseDate,
        income: incomeAmount, // Ensure income is a number
      };

      if (editId !== null) {
        // Update existing expense
        axios.put(`${API_URL}/${editId}`, newExpense)
          .then(() => {
            // Fetch updated expenses list and re-set the income if needed
            axios.get(API_URL)
              .then(response => {
                setExpenses(response.data);
                // If we update the income in the backend, make sure it's updated here too
                const newIncome = response.data.length > 0 ? response.data[0].income : 0;
                setIncome(newIncome);
              })
              .catch(error => console.error('Error fetching expenses:', error));
          })
          .catch(error => console.error('Error updating expense:', error));
        setEditId(null);
      } else {
        // Create new expense
        axios.post(API_URL, newExpense)
          .then(() => {
            // Fetch updated expenses list and re-set the income if needed
            axios.get(API_URL)
              .then(response => {
                setExpenses(response.data);
                // If we add a new expense, update the income field from the backend
                const newIncome = response.data.length > 0 ? response.data[0].income : 0;
                setIncome(newIncome);
              })
              .catch(error => console.error('Error fetching expenses:', error));
          })
          .catch(error => console.error('Error creating expense:', error));
      }

      // Clear form fields
      setExpenseName('');
      setExpenseAmount('');
      setExpenseCategory('');
      setExpenseDate('');
    } else {
      console.error('Please fill out all fields');
    }
  };

  const editExpense = (id) => {
    axios.get(`${API_URL}/${id}`)
      .then(response => {
        const expense = response.data;
        setExpenseName(expense.description);
        setExpenseAmount(expense.amount);
        setExpenseCategory(expense.category);
        setExpenseDate(expense.date);
        setIncome(expense.income); // Set income field correctly
        setEditId(id);
      })
      .catch(error => console.error('Error fetching expense:', error));
  };

  const removeExpense = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        // Fetch updated expenses list and re-set the income if needed
        axios.get(API_URL)
          .then(response => {
            setExpenses(response.data);
            // Update income after deleting an expense (optional)
            const newIncome = response.data.length > 0 ? response.data[0].income : 0;
            setIncome(newIncome);
          })
          .catch(error => console.error('Error fetching expenses:', error));
      })
      .catch(error => console.error('Error deleting expense:', error));
  };

  const clearAllExpenses = () => {
    expenses.forEach(expense => {
      axios.delete(`${API_URL}/${expense.id}`)
        .catch(error => console.error('Error deleting expense:', error));
    });
    setExpenses([]);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = (parseFloat(income) || 0) - totalExpenses;

  const getChartData = () => {
    return {
      labels: ['Income', 'Expenses', 'Balance'],
      datasets: [
        {
          label: 'Amount',
          data: [parseFloat(income) || 0, totalExpenses, balance],
          backgroundColor: ['#0073e6', '#ff4d4d', '#4caf50'],
          borderRadius: 8,
        },
      ],
    };
  };

  return (
    <div className="ExpenseCalculator-container">
      <h1>Expense Calculator</h1>

      <div className="ExpenseCalculator-income">
        <h2>Income</h2>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income"
        />
      </div>

      <div className="ExpenseCalculator-add-edit-expense">
        <h2>Add/Edit Expense</h2>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense name"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="Expense amount"
        />
        <select
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
        placeholder="Select Expense Category"
      >
        <option value="">Expense Category</option> {/* Default empty option */}
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Rent">Rent</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
        <option value="Shopping">Shopping</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          placeholder="Expense date"
        />
        <button onClick={handleExpenseSubmit}>
          {editId !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>

      <div className="ExpenseCalculator-expenses">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>
                {expense.description} (₹{expense.amount.toFixed(2)}) - {expense.category} on {expense.date}
              </span>
              <div>
                <button onClick={() => editExpense(expense.id)} className="ExpenseCalculator-edit-button">
                  Edit
                </button>
                <button onClick={() => removeExpense(expense.id)} className="ExpenseCalculator-remove-button">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={clearAllExpenses} className="ExpenseCalculator-clear-button">
          Clear All Expenses
        </button>
      </div>

      <div className="ExpenseCalculator-summary">
        <h2>Summary</h2>
        <p>Total Income: ₹{(parseFloat(income) || 0).toFixed(2)}</p>
        <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
        <p>Balance: ₹{balance.toFixed(2)}</p>
      </div>

      <div className="ExpenseCalculator-chart">
        <h2>Income vs Expenses</h2>
        <Bar
          data={getChartData()}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.label}: ₹${context.raw.toFixed(2)}`;
                  },
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Category',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Amount',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseCalculator;
