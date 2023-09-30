import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3001/expenses');
        console.log(res.data.expenses);
        setEntries(res.data.expenses);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>{type === 'expenses' && 'My Expenses'}</h1>
      <h1>{type === 'income' && 'My Income'}</h1>
    </main>
  );
}
