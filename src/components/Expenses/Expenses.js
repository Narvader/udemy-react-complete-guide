import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState('2022');

    const changeFilterHandler = year => {
        setfilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear.year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter 
                defaultYear={filteredYear.year} 
                onChangeYear={changeFilterHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;