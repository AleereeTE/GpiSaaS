import { Link } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import type { Tache } from '../../types';

export function ListeTachesPage() {
  const { data: taches, loading, error } = useFetch<Tache[]>('/api/taches');

  return (
    <section>
      <h1>Tâches</h1>
      <Link to="/taches/nouvelle">+ Nouvelle tâche</Link>

      {loading && <p>Chargement des tâches…</p>}
      {error && <p role="alert">Échec du chargement : {error.message}</p>}
      {taches && taches.length === 0 && <p>Aucune tâche pour l'instant.</p>}
      {taches && taches.length > 0 && (
        <ul>
          {taches.map(t => (
            <li key={t.id}>
              <Link to={`/taches/${t.id}`}>{t.titre}</Link> · {t.statut} · échéance {t.echeance}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
