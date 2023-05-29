import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ActivitiesPage from '../page/public/activitiesPage';
import GalleryPage from '../page/galleryPage/gallery';
import { HomePage } from '../page/public/homePage';
import TeamPage from '../page/public/teamPage';
import { PublicPage } from '../page/publicPage';
import { LoginPage } from '../page/admin/login';
import { AdminPage } from '../page/adminPage';
import { AddTime } from '../page/admin/addTime';
import { AddPost } from '../page/admin/addPost';
import PostId from '../page/galleryPage/post';




export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programa" element={<ActivitiesPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/galeria/:id" element={<PostId />} />
        <Route path="*" element={<HomePage />} />
      </Route>

      <Route path="/login" element={<LoginPage/>} />
      
      <Route path="/admin" element={<AdminPage/>}>
        <Route path="/admin/membros" element={<AddTime/>} />
        <Route path="/admin/" element={<AddPost/>} />
      </Route>
    </Route>
  ),
);
