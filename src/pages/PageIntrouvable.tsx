import { Link } from 'react-router';

export function PageIntrouvable() {
  return (
    <section>
      <h1>Page introuvable</h1>
      <Link to="/taches">Retour à la liste des tâches</Link>
    </section>
  );
}
