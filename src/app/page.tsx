'use client';
import { Dashboard } from '@/components/Dashboard';
import AddEntry from './entry/page';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>Hello Anubhab!</h1>
      <Dashboard />
      <AddEntry />
    </main>
  );
}
