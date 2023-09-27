import './ExpenseItem.css';
import Card from '../Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expenseItem: { date, title, amount } }) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
