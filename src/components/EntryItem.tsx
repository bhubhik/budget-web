import { Entry } from '@/types';

interface EntryItemProps {
  entry: Entry;
}

export default function EntryItem({ entry }: EntryItemProps) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden mb-4 w-80'>
      <div className='p-3 flex justify-between'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            {entry.description}
          </h2>
          <p className='text-gray-600 mb-2'>{entry.type}</p>
        </div>

        <p className='text-2xl font-bold text-indigo-600'>${entry.amount}</p>
      </div>
    </div>
  );
}
