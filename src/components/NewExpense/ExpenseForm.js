import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Alternative 1 & 2: This alternative useState is capable to receive an initial argument as parameter
  // const [userInputs, setUserInputs] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // Alternative 1: not good as it sounds, it may have problems
    // setUserInputs({
    //   ...userInputs,
    //   enteredTitle: event.target.value
    // });

    // Alternative 2: React schedules state updates. It doesn't perform the instantly. This approach React guarantee that the state snapschot it gives you here in this inner function will always the latest snapshot. If your state update depends on previous state, use this alternative:

    // setUserInputs((prevState) => {
    //   return{...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
          </div>
      </div>
      <div className='new-expense__actions'>
          <button type='button' onClick={props.onEdtiStatus}>Cancel</button>
          <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;


// Two-way binding: that for inputs we don't just listen to changes, but we can also pass a new value back into the input. So that we can reset or change the input programmatically. How? adding to value attribute the new value
//
// After that we need to add the new expense by passing the data.
//
//
// In order to provide the data to the parent component we have to do:
// 1- Create prop in parent component ex: onSaveExpenseData, with "on" we consider a function is going to work inside of the ExpenseForm component
// 2- In parent component it is necessary to create a function and pass it as parameter on onSaveExpenseData and the name will be saveExpenseDataHandler and AS A PARAMETER WE HAVE TO EXPECT the entered expense data:
//
//                             onSaveExpenseData={saveExpenseDataHandler}
//
// so onSaveExpenseData will receive the function saveExpenseDataHandler as a value. IT JUST POINTS AT THE FUNCTION
//
// 3- Inside we can expect onSaveExpenseData prop and we execute here. WE CALL IT HERE AND IS TRIGGER IN THE PARENT
//
//
//
// Lifting state up:
//

// Controlled component: using two way binding. It means that the value that use a component is passed on to a parent component, through props and is received from the parent component. The parent becomes a controlled component.


// Presentational/Stateless VS Stateful components: in basically all React apps which you're building, you will have a couple of components that manage some state, those are stateful and the others that don't have any state are stateless components


//rendering lists and rendering conditional content