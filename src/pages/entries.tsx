import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import EntryItem from '@/components/EntryItem';
import { Entry } from '@/types';

export default function Page() {
  const router = useRouter();
  const { type } = router.query;
  const [entries, setEntries] = useState<Entry[]>([]);

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

  const handleDeleteEntry = async (id: number) => {
    await axios
      .delete(`http://localhost:3001/entries/${type}/${id}`)
      .then(() => {
        const updatedEntries = entries.filter((entry) => entry.id !== id);
        setEntries(updatedEntries);
      })
      .catch((e) => console.error(e.message));
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl text-yellow-400 mb-6'>
        {type === 'expenses' && 'My Expenses'}
        {type === 'income' && 'My Income'}
      </h1>
      <table className='border-collapse w-96'>
        <thead>
          <tr>
            <th className='p-3 border text-left'>Name</th>
            <th className='p-3 border text-left'>Type</th>
            <th className='p-3 border text-left'>Amount</th>
            <th className='p-3 border'></th>
          </tr>
        </thead>
        <tbody className='border'>
          {entries &&
            entries.map((entry, idx) => (
              <EntryItem key={idx} entry={entry} onDelete={handleDeleteEntry} />
            ))}
        </tbody>
      </table>
    </main>
  );
}
