import { Link, useParams } from 'react-router';

export function FicheTachePage() {
  const { id } = useParams(); // récupère le ":id" de l'URL
  return (
    <section>
      <Link to="/taches">← Retour à la liste</Link>
      <h1>Tâche {id}</h1>
    </section>
  );
}