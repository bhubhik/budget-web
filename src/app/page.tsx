'use client';
import AddEntry from './entry/page';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>Hello Anubhab! Add your entry below:</h1>
      <AddEntry />
    </main>
  );
}
