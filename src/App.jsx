import './App.css';
import { EXPENSES } from './constants/expenses';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import Card from './components/Card';

export function App() {
  const [expenses, setExpenses] = useState(EXPENSES);
  const addExpenseHandle = expense => {
    setExpenses(previousVal => [expense, ...previousVal]);
  };
  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses items={expenses} />
    </Card>
  );
}
