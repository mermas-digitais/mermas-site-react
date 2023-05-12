
import {
  useOutlet,
} from 'react-router-dom';
import { MenuAdmin } from '../components/menu/menuAdmin';

export const AdminPage = () => {
  const outlet = useOutlet();

  return (
    <div className='flex max-md:flex-col-reverse w-[100vw] h-[100vh]'>
      
      <MenuAdmin/>
      <main className="flex bg-slate-100 overflow-y-auto w-full h-full 
      justify-center items-center ">
        {outlet}
      </main>
    </div>
  );
};
