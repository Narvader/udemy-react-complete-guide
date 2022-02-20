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

    const filteredExpenses = props.items.filter(expense => {
        console.log(expense)
        return expense.date.getFullYear().toString() === filteredYear.year;
    });

    let expensesContent = <p>No expenses found</p>;

    if ( filteredExpenses.length > 0 ) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} 
                id={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear.year} 
                onAddSavedYear={changeFilterHandler} 
            />
            {expensesContent}
        </Card>
    )
}

export default Expenses;