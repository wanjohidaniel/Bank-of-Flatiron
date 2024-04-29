// App.js
import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import './App.css'; // Importing the App.css file

function App() {
  // Pre-existing data
  const preExistingTransactions = [
    { date: new Date('2023-04-27'), description: 'Groceries', category: 'Food', amount: 50 },
    { date: new Date('2022-09-02'), description: 'Supermarket', category: 'Shopping', amount: 500 },
    { date: new Date('2020-11-31'), description: 'Bank withdrawal', category: 'School Fees', amount: 30000 },
    { date: new Date('2021-10-22'), description: 'Fuel', category: 'Transportation', amount: 1000 },
    { date: new Date('2022-02-29'), description: 'Travelling', category: 'Fare', amount: 300 },
    { date: new Date('2023-09-20'), description: 'Book store', category: 'School fees', amount: 1000 },
    { date: new Date('2022-03-12'), description: 'Clothes store', category: 'Work clothes', amount: 1500 },
    { date: new Date('2019-05-30'), description: 'Lunch', category: 'Food', amount: 200 },
    { date: new Date('2024-01-26'), description: 'Supermarket', category: 'Amenities', amount: 1000 }
  ];

  const [transactions, setTransactions] = useState(preExistingTransactions);
  
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header>
        <h1>The Royal Bank of Flatiron</h1>
      </header>
      <main>
        <TransactionForm onSubmit={handleAddTransaction} />
        <TransactionTable transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
