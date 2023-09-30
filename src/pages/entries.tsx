import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import EntryItem from '@/components/EntryItem';

export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (type) {
        try {
          const res = await axios.get(`http://localhost:3001/entries/${type}`);
          setEntries(res.data.expenses);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, [type]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl text-yellow-400 mb-6'>
        {type === 'expenses' && 'My Expenses'}
      </h1>
      <h1 className='text-4xl text-yellow-400 mb-6'>
        {type === 'income' && 'My Income'}
      </h1>
      {entries &&
        entries.map((entry, idx) => <EntryItem key={idx} entry={entry} />)}
    </main>
  );
}
