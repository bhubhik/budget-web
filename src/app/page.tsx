'use client';
import axios from 'axios';
import { useState } from 'react';

interface Expense {
  id: number;
  description: string;
  type: string;
  amount: number;
}

export default function Home() {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!description || !amount || !type) {
      alert('Please fill up all the fields.');
      return;
    }

    const expense = { description, type, amount };

    try {
      const response = await axios.post(
        'http://localhost:3001/expense',
        expense
      );
      console.log('Expense added:', response.data);
      setDescription('');
      setAmount(0);
      setType('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>Finance Tracker</h1>
      <div className='p-8 '>
        <h2 className='mb-4'>Add new Expense</h2>
        <form
          onSubmit={handleSubmit}
          className='text-black flex flex-col gap-4'
        >
          <input
            placeholder='Your expense description'
            className='p-4 rounded-md'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder='Your expense type'
            className='p-4 rounded-md'
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            placeholder='Your expense amount'
            className='p-4 rounded-md'
            type='number'
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <button
            className='bg-slate-300 p-4 rounded-md text-blue-500 font-bold'
            type='submit'
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
}
