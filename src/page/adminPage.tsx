
import {
  useOutlet,
} from 'react-router-dom';
import { MenuAdmin } from '../components/menu/menuAdmin';

export const AdminPage = () => {
  const outlet = useOutlet();

  return (
    <div className='flex'>
    
      <MenuAdmin/>
      <main className="flex bg-slate-100 overflow-hidden w-full 
      justify-center items-center">
        {outlet}
      </main>
    </div>
  );
};
