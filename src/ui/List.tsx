import { IList } from '../types';
import { FcLock } from 'react-icons/fc';

function List({ children }: IList) {
  return (
    <li className="flex items-start justify-start gap-2 text-lg font-medium text-black-50">
      <FcLock className="text-2xl" />
      {children}
    </li>
  );
}

export default List;
