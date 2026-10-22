import { NavLink, Outlet } from 'react-router';

export function Layout() {
  return (
    <>
      <header>
        <nav aria-label="Navigation principale">
          <ul>
            <li><NavLink to="/taches" end>Tâches</NavLink></li>
            <li><NavLink to="/projets/p1">Kanban</NavLink></li>
            <li><NavLink to="/idees">Idées</NavLink></li>
            <li><NavLink to="/ma-todo">Ma to-do</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* la page de la route courante s'affiche ici */}
      </main>
    </>
  );
}
