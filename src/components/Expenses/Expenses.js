import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState('2019');

    const changeFilterHandler = year => {
        setfilteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onAddSavedYear={changeFilterHandler} />
            {props.items.map((expense) => (
                <ExpenseItem 
                    id={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            ))}
        </Card>
    )
}

export default Expenses;