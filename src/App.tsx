import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

import './styles/global.css'

export function App() {
  return (

    <RouterProvider router={router} />
  );
}

