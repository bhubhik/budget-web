import { Entry } from '@/types';
import { MdDeleteForever } from 'react-icons/md';

interface EntryItemProps {
  entry: Entry;
  onDelete: (id: number) => void;
}

export default function EntryItem({ entry, onDelete }: EntryItemProps) {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <tr className='border-b'>
      <td className='p-3 border'>
        <h2 className='text-xl font-semibold mb-2'>{entry.description}</h2>
      </td>
      <td className='p-3 border'>
        <p className='mb-2'>{entry.type}</p>
      </td>
      <td className='p-3 border'>
        <p className='text-2xl font-bold text-green-600'>${entry.amount}</p>
      </td>
      <td className='p-3 border'>
        <button onClick={() => handleDelete(entry.id)}>
          <MdDeleteForever className='text-red-500 text-2xl mt-2' />
        </button>
      </td>
    </tr>
  );
}
