import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';


export function App() {
  return <RouterProvider router={router} />;
}
