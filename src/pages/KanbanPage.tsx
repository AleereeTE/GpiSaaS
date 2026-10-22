import { useParams } from 'react-router';

export function KanbanPage() {
  const { projetId } = useParams();
  return (
    <section>
      <h1>Kanban du projet {projetId}</h1>
    </section>
  );
}
