export type Statut = 'A_FAIRE' | 'EN_COURS' | 'EN_REVUE' | 'TERMINEE';

export type Membre = {
  id: string;
  nom: string;
};

export type Projet = {
  id: string;
  nom: string;
};

export type SousTache = {
  id: string;
  titre: string;
  faite: boolean;
};

export type Commentaire = {
  id: string;
  auteurId: string;
  texte: string;
  date: string; // ISO 8601
};

export type Tache = {
  id: string;
  titre: string;
  description: string;
  statut: Statut;
  projetId: string;
  membreId: string | null;
  echeance: string; // AAAA-MM-JJ
  sousTaches: SousTache[];
  commentaires: Commentaire[];
};

export type Idee = {
  id: string;
  texte: string;
  destination: 'NON_TRIEE' | 'TODO' | 'PROJET';
};
