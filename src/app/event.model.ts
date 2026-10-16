export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  place: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Atelier TypeScript',
    category: 'Atelier',
    date: '2026-11-15',
    place: 'Campus - Salle B12',
    price: 0,
    imageUrl: 'images/typescript.svg',
    description:
      'Découverte de TypeScript : types, interfaces et génériques, avec des exercices pratiques pour bien préparer Angular.',
  },
  {
    id: 2,
    title: 'Conférence IA & Avenir',
    category: 'Conférence',
    date: '2026-11-22',
    place: 'Amphithéâtre principal',
    price: 15,
    imageUrl: 'images/ia.svg',
    description:
      "Des experts présentent l'impact de l'intelligence artificielle sur les métiers du numérique et répondent à vos questions.",
  },
  {
    id: 3,
    title: 'Tournoi de Football',
    category: 'Sport',
    date: '2026-12-03',
    place: 'Stade universitaire',
    price: 5,
    imageUrl: 'images/football.svg',
    description:
      'Tournoi inter-classes en équipes de 7 joueurs. Inscrivez votre équipe et venez défendre les couleurs de votre filière.',
  },
  {
    id: 4,
    title: 'Atelier Design UI/UX',
    category: 'Atelier',
    date: '2026-12-10',
    place: 'Lab Créatif',
    price: 10,
    imageUrl: 'images/design.svg',
    description:
      "Initiation à la conception d'interfaces : wireframes, maquettes et bonnes pratiques d'ergonomie avec Figma.",
  },
  {
    id: 5,
    title: 'Rencontre Entreprises',
    category: 'Rencontre',
    date: '2027-01-14',
    place: 'Hall des expositions',
    price: 0,
    imageUrl: 'images/rencontre.svg',
    description:
      "Rencontrez des recruteurs, déposez votre CV et découvrez les opportunités de stage et d'emploi proposées par nos partenaires.",
  },
  {
    id: 6,
    title: 'Conférence Cybersécurité',
    category: 'Conférence',
    date: '2027-01-28',
    place: 'Amphithéâtre B',
    price: 20,
    imageUrl: 'images/cyber.svg',
    description:
      'Panorama des menaces actuelles, démonstrations de bonnes pratiques et retours d\'expérience de professionnels du secteur.',
  },
  {
    id: 7,
    title: 'Course Solidaire 5 km',
    category: 'Sport',
    date: '2027-02-07',
    place: 'Parc de la ville',
    price: 0,
    imageUrl: 'images/course.svg',
    description:
      "Une course conviviale ouverte à tous, au profit d'une association caritative. Ravitaillement offert à l'arrivée.",
  },
];
