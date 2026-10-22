import { Link } from 'react-router';

export function ListeTachesPage() {
  return (
    <section>
      <h1>Tâches</h1>
      <Link to="/taches/nouvelle">+ Nouvelle tâche</Link>
      <ul>
        <li><Link to="/taches/t1">Maquette Kanban</Link></li>
        <li><Link to="/taches/t2">API des tâches</Link></li>
      </ul>
    </section>
  );
}