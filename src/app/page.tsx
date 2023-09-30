'use client';
import { Dashboard } from '@/components/Dashboard';
import AddEntry from './entry/page';
import Link from 'next/link';

export default function Home() {
  const month = new Date();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-3xl text-yellow-400 mb-4'>Hello Anubhab!</h1>
      <div>
        <Link
          href='/entries?type=expenses'
          className='mx-4 my-2 underline hover:text-yellow-400'
        >
          View Expenses
        </Link>
        <Link
          href='/entries?type=income'
          className='mx-4 my-2 underline hover:text-yellow-400'
        >
          View Income
        </Link>
      </div>
      <div className='bg-yellow-300 text-black px-2 py-1 rounded-md my-8'>
        <h2>{month.toLocaleString('en-us', { month: 'long' })}</h2>
      </div>
      <Dashboard />
      <AddEntry />
    </main>
  );
}
