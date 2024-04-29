// TransactionForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importing the styles for react-datepicker

//Initialize states
const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState(null); // Initialize date state with null
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();//Prevents reloading of page.
    if (!date || !description || !amount) return;//Checks if the required fields are filled in.
    onSubmit({ date, description, amount: parseFloat(amount), category });
    setDate(null); // Reset date state to null upon submitting.
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <DatePicker // Use DatePicker component
            selected={date}//Prop that binds DatePicker to date state
            onChange={(date) => setDate(date)}
            dateFormat="MMMM d, yyyy" // Date format
            placeholderText='MMMM d, yyyy'
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
