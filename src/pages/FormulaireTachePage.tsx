import { Link, useParams } from 'react-router';

export function FormulaireTachePage() {
  const { id } = useParams();
  return (
    <section>
      <Link to={id ? `/taches/${id}` : '/taches'}>← Retour</Link>
      <h1>{id ? `Modifier la tâche ${id}` : 'Nouvelle tâche'}</h1>
    </section>
  );
}
