import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expense }) => {
  if (expense.length === 0) {
    return <h2 className='expenses-list__fallback'> Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expense.map(item => (
        <ExpenseItem key={item.id} expenseItem={item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
