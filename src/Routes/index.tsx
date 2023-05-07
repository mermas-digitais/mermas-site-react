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
import { PublicPage } from '../page/publicPage';
import Team from '../components/Team';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicPage/>}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/programa" element={<ActivitiesPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/galeria/:id" element={<GalerryId />} />
        <Route path="*" element={<HomeScreen />} />
      </Route>
      <Route path="/admin" element={<Team/>}>
      {/* Rotas de admin 
      -gerenciar equipe
      criar membro
      editar membro
      deletar membro
      
      -gerenciar galeria
      criar galeria
      editar galeria
      deletar galeria

      */}

      </Route>
    </Route>
  ),
);
