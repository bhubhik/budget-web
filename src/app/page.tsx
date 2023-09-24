'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[] | undefined>();

  useEffect(() => {
    axios
      .get('http://localhost:3001/tasks/')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>Finance Tracker</h1>
      <div className='p-8'>
        <input
          placeholder='Add your tasks'
          className='p-4 rounded-md'
          type='text'
        />
        <button className='bg-slate-300 p-4 ml-4 rounded-md text-blue-500'>
          Add
        </button>
      </div>
      <div className='container bg-slate-50 h-96 w-96'>
        <ul>
          {tasks &&
            tasks.map((task, idx) => (
              <li className='text-black' key={idx}>
                {task.title}
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
