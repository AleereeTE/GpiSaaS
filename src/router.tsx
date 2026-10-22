import { createBrowserRouter, Navigate } from 'react-router';
import { ListeTachesPage } from './pages/ListeTaches/ListeTachesPage';
import { FicheTachePage } from './pages/FicheTachePage';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/taches" replace /> }, // la page d'accueil redirige vers la liste
  { path: '/taches', element: <ListeTachesPage /> },          // route 1 : la liste
  { path: '/taches/:id', element: <FicheTachePage /> },       // route 2 : la fiche d'une tâche
]);