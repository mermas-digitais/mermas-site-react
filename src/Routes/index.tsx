import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ActivitiesPage from '../page/activities';
import GalleryPage from '../page/gallerylPage';
import GalerryId from '../page/gallerylPage/galleryId';
import { HomeScreen } from '../page/HomeScreen';
import TeamPage from '../page/teamPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/atividades" element={<ActivitiesPage />} />
      <Route path="/time" element={<TeamPage />} />
      <Route path="/galeria" element={<GalleryPage />} />

      <Route path="/galeria/:id" element={<GalerryId />} />
      <Route path="*" element={<HomeScreen />} />
    </>,
  ),
);

// export const Routers = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<HomeScreen />} />
//       <Route path='*' element={<HomeScreen />} />
//       <Route path="galeria" element={<GalleryPage />} />
//       <Route path="atividades" element={<ActivitiesPage />} />
//       <Route path="time" element={<TeamPage />} />
//       <Route path="galeria/:id" element={<GalerryId />} />
//     </Routes>
//   )
// }
