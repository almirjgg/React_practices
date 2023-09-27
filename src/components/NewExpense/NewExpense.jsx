import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [addForm, setAddForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setAddForm(false);
  };
  const addNewExpenseHandler = () => {
    setAddForm(true);
  };
  const cancelAddNewExpense = () => {
    setAddForm(false);
  };

  return (
    <div className='new-expense'>
      {!addForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {addForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
