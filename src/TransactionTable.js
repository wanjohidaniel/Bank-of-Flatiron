// TransactionTable.js
import React, { useState } from 'react';

//Set states.
const TransactionTable = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedTransactions, setSearchedTransactions] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    //Filter transactions array by checking transaction's properties
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.date.toLocaleDateString().includes(searchQuery.toLowerCase()) ||
      transaction.amount.toString().includes(searchQuery.toLowerCase())
    );
    setSearchedTransactions(filtered);//Updates state variable 
  };

  return (
    <div>
      <h2>All Transactions</h2>
      <div>
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button> {/* Search button */}
      </div>

      {searchedTransactions.length > 0 && (
        <div>
          <h2>Searched Transactions</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {searchedTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date.toLocaleDateString()}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date.toLocaleDateString()}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
