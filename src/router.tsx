import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { ListeTachesPage } from './pages/ListeTaches/ListeTachesPage';
import { FicheTachePage } from './pages/FicheTachePage';
import { FormulaireTachePage } from './pages/FormulaireTachePage';
import { KanbanPage } from './pages/KanbanPage';
import { BacklogIdeesPage } from './pages/BacklogIdeesPage';
import { MaTodoPage } from './pages/MaTodoPage';
import { PageIntrouvable } from './pages/PageIntrouvable';

export const router = createBrowserRouter([
  {
    element: <Layout />, // layout commun : navigation + <Outlet />
    children: [
      { path: '/', element: <Navigate to="/taches" replace /> }, // la page d'accueil redirige vers la liste
      { path: '/taches', element: <ListeTachesPage /> },             // liste des tâches
      { path: '/taches/nouvelle', element: <FormulaireTachePage /> }, // création
      { path: '/taches/:id', element: <FicheTachePage /> },          // fiche d'une tâche
      { path: '/taches/:id/modifier', element: <FormulaireTachePage /> }, // modification
      { path: '/projets/:projetId', element: <KanbanPage /> },       // Kanban d'un projet
      { path: '/idees', element: <BacklogIdeesPage /> },             // backlog d'idées
      { path: '/ma-todo', element: <MaTodoPage /> },                 // mes tâches
      { path: '*', element: <PageIntrouvable /> },                   // 404
    ],
  },
]);
