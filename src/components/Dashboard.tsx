import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/expense').then((res) => {
      const totalExpenseValue = parseFloat(res.data.totalExpense);
      setTotalExpense(totalExpenseValue);
    });
  }, []);

  const budgetSpentPercentage = (totalExpense / monthlyBudget) * 100;
  const remainingBudget = monthlyBudget - totalExpense;

  const strokeDashoffset = 88 - (budgetSpentPercentage * 88) / 100;

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-bold'>Remaining budget:</h2>
      <h2 className='text-2xl'>${remainingBudget}</h2>
      <div className='relative w-64 h-64'>
        <svg
          className='absolute w-full h-full'
          viewBox='0 0 64 64'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            r='18'
            cx='32'
            cy='32'
            fill='transparent'
            strokeWidth='4'
            stroke='#ccc'
          />

          <circle
            r='18'
            cx='32'
            cy='32'
            fill='transparent'
            strokeWidth='4'
            className='stroke-current text-green-500'
            strokeDasharray='88 100'
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
          <span className='text-2xl font-bold'>${totalExpense}</span>
          <div className='border-t border-b my-2 w-1/3' />
          <span className='text-2xl'>${monthlyBudget}</span>
        </div>
      </div>
    </div>
  );
};
