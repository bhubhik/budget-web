'use client';
import axios from 'axios';
import { useState } from 'react';

interface Entry {
  id?: number;
  description: string;
  type: string;
  amount: number;
  entryType: 'expense' | 'income';
}

export default function AddEntry() {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [entryType, setEntryType] = useState<'expense' | 'income'>('expense');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!description || !amount || !type) {
      alert('Please fill up all the fields.');
      return;
    }
    const entry: Entry = { description, type, amount, entryType };

    try {
      const response = await axios.post(`http://localhost:3001/entry`, entry);
      console.log('Expense added:', response.data);
      setDescription('');
      setAmount(0);
      setType('');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className='p-8 '>
      <h1 className='mb-4'>Add your entry:</h1>
      <form onSubmit={handleSubmit} className='text-black flex flex-col gap-4'>
        <input
          placeholder='Your description'
          className='p-4 rounded-md'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder='Entry type'
          className='p-4 rounded-md'
          type='text'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder='Amount'
          className='p-4 rounded-md'
          type='number'
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <div className='flex justify-evenly'>
          <button
            name='expense'
            className='border-2 border-yellow-500 p-4 rounded-md text-white hover:bg-yellow-500'
            onClick={() => setEntryType('expense')}
          >
            EXPENSE
          </button>
          <button
            className='border-2 text-white border-green-600 hover:bg-green-600 p-4 rounded-md'
            onClick={() => setEntryType('income')}
          >
            INCOME
          </button>
        </div>
      </form>
    </div>
  );
}
