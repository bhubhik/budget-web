'use client';
import { Dashboard } from '@/components/Dashboard';
import AddEntry from './entry/page';

export default function Home() {
  const month = new Date();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-3xl text-yellow-400 mb-8'>Hello Anubhab!</h1>
      <div className='bg-yellow-300 text-black px-2 py-1 rounded-md mb-4'>
        <h2>{month.toLocaleString('en-us', { month: 'long' })}</h2>
      </div>
      <Dashboard />
      <AddEntry />
    </main>
  );
}
