export type VoteChoice = "Pour" | "Contre" | "Abstention";

export type PartyVote = {
  group: string;
  label?: string;
  for: number;
  against: number;
  abstain: number;
};

export type LandmarkVote = {
  id: string;
  date: string;
  legislature: string;
  topic: string;
  title: string;
  plain: string;
  result: string;
  sourceUrl: string;
  positions: Record<string, PartyVote>;
};

export const landmarkVotes: LandmarkVote[] = [
  {
    id: "securite-sociale-2026",
    date: "9 décembre 2025",
    legislature: "17e législature",
    topic: "Santé · retraites · prestations",
    title: "Budget de la Sécurité sociale pour 2026",
    plain:
      "Ce texte fixe l’argent consacré à la santé, aux retraites, aux familles et aux prestations sociales.",
    result: "Adopté par 247 voix contre 234, avec 93 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/4696",
    positions: {
      lfi: { group: "LFI — Nouveau Front populaire", for: 0, against: 71, abstain: 0 },
      ps: { group: "Socialistes et apparentés", for: 63, against: 0, abstain: 6 },
      ecologistes: { group: "Écologiste et Social", for: 3, against: 9, abstain: 26 },
      renaissance: { group: "Ensemble pour la République", for: 91, against: 0, abstain: 0 },
      lr: { group: "Droite Républicaine", for: 18, against: 3, abstain: 28 },
      rn: { group: "Rassemblement National", for: 0, against: 123, abstain: 0 },
    },
  },
  {
    id: "immigration-2023",
    date: "19 décembre 2023",
    legislature: "16e législature",
    topic: "Immigration · intégration",
    title: "Loi pour contrôler l’immigration et améliorer l’intégration",
    plain:
      "Le vote porte sur le texte final issu de l’accord entre députés et sénateurs : séjour, travail, prestations et éloignement des étrangers.",
    result: "Adopté par 349 voix contre 186, avec 38 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/scrutins/3213",
    positions: {
      lfi: { group: "LFI — NUPES", for: 0, against: 75, abstain: 0 },
      ps: { group: "Socialistes et apparentés", for: 0, against: 31, abstain: 0 },
      ecologistes: { group: "Écologiste — NUPES", for: 0, against: 23, abstain: 0 },
      renaissance: { group: "Renaissance", for: 131, against: 20, abstain: 17 },
      lr: { group: "Les Républicains", for: 62, against: 0, abstain: 0 },
      rn: { group: "Rassemblement National", for: 88, against: 0, abstain: 0 },
      "debout-la-france": {
        group: "Nicolas Dupont-Aignan — député DLF de l’Essonne (mandat clos en juin 2024)",
        label: "Vote historique du député DLF",
        for: 0,
        against: 0,
        abstain: 1,
      },
    },
  },
  {
    id: "renouvelables-2023",
    date: "31 janvier 2023",
    legislature: "16e législature",
    topic: "Énergie · climat",
    title: "Accélération de la production d’énergies renouvelables",
    plain:
      "Le texte cherche à raccourcir les procédures et à faciliter l’installation de projets solaires et éoliens.",
    result: "Adopté par 217 voix contre 169, avec 23 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/scrutins/897",
    positions: {
      lfi: { group: "LFI — NUPES", for: 0, against: 41, abstain: 0 },
      ps: { group: "Socialistes et apparentés", for: 20, against: 0, abstain: 0 },
      ecologistes: { group: "Écologiste — NUPES", for: 0, against: 1, abstain: 15 },
      renaissance: { group: "Renaissance", for: 122, against: 1, abstain: 0 },
      lr: { group: "Les Républicains", for: 0, against: 46, abstain: 3 },
      rn: { group: "Rassemblement National", for: 0, against: 73, abstain: 0 },
      "debout-la-france": {
        group: "Nicolas Dupont-Aignan — député DLF de l’Essonne (mandat clos en juin 2024)",
        label: "Vote historique du député DLF",
        for: 0,
        against: 1,
        abstain: 0,
      },
    },
  },
  {
    id: "ivg-2024",
    date: "30 janvier 2024",
    legislature: "16e législature",
    topic: "Droits · Constitution",
    title: "Inscription de la liberté de recourir à l’IVG dans la Constitution",
    plain:
      "Ce vote de première lecture porte sur la protection constitutionnelle de la liberté de recourir à une interruption volontaire de grossesse.",
    result: "Adopté par 493 voix contre 30, avec 23 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/scrutins/3289",
    positions: {
      lfi: { group: "LFI — NUPES", for: 75, against: 0, abstain: 0 },
      ps: { group: "Socialistes et apparentés", for: 31, against: 0, abstain: 0 },
      ecologistes: { group: "Écologiste — NUPES", for: 23, against: 0, abstain: 0 },
      renaissance: { group: "Renaissance", for: 164, against: 0, abstain: 0 },
      lr: { group: "Les Républicains", for: 40, against: 15, abstain: 4 },
      rn: { group: "Rassemblement National", for: 46, against: 12, abstain: 14 },
      "debout-la-france": {
        group: "Nicolas Dupont-Aignan — député DLF de l’Essonne (mandat clos en juin 2024)",
        label: "Vote historique du député DLF",
        for: 0,
        against: 0,
        abstain: 1,
      },
    },
  },
  {
    id: "programmation-militaire-2026",
    date: "1er juillet 2026",
    legislature: "17e législature",
    topic: "Défense · armées",
    title: "Actualisation de la programmation militaire 2024—2030",
    plain:
      "Le vote porte sur le texte final qui actualise les moyens, les priorités et plusieurs dispositions de la programmation militaire française.",
    result: "Adopté par 375 voix contre 113, avec 2 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7905",
    positions: {
      horizons: { group: "Horizons & Indépendants", for: 35, against: 0, abstain: 0 },
      "nouvelle-energie": { group: "Alexandra Martin (Alpes-Maritimes) — secrétaire générale de Nouvelle Énergie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
      "nous-france": { group: "Julien Dive — vice-président de Nous France", label: "Vote du député suivi", for: 1, against: 0, abstain: 0 },
      "generation-ecologie": { group: "Delphine Batho — députée et coordinatrice de Génération Écologie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
      modem: { group: "Les Démocrates — groupe où siègent les députés MoDem", for: 26, against: 0, abstain: 0 },
      pcf: { group: "8 députés PCF identifiés au sein du groupe GDR", label: "Position des députés PCF suivis", for: 0, against: 8, abstain: 0 },
      udr: { group: "Union des droites pour la République", for: 14, against: 0, abstain: 0 },
      debout: { group: "François Ruffin — député et président de Debout !", label: "Vote du député suivi", for: 0, against: 1, abstain: 0 },
      lapres: { group: "Clémentine Autain, Alexis Corbière, Hendrik Davi et Danielle Simonnet", label: "Position des députés L’APRÈS suivis", for: 0, against: 4, abstain: 0 },
      "place-publique": { group: "Aurélien Rousseau et Sacha Houlié — députés Place publique", label: "Position des députés Place publique suivis", for: 2, against: 0, abstain: 0 },
    },
  },
  {
    id: "textile-2026",
    date: "24 juin 2026",
    legislature: "17e législature",
    topic: "Écologie · consommation",
    title: "Réduction de l’impact environnemental de l’industrie textile",
    plain:
      "Le texte final vise notamment la mode très rapide, l’information environnementale et différents leviers pour réduire l’empreinte de l’industrie textile.",
    result: "Adopté par 338 voix pour, aucune contre, avec 151 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7494",
    positions: {
      horizons: { group: "Horizons & Indépendants", for: 33, against: 0, abstain: 0 },
      "nouvelle-energie": { group: "Alexandra Martin (Alpes-Maritimes) — secrétaire générale de Nouvelle Énergie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
      "nous-france": { group: "Julien Dive — vice-président de Nous France", label: "Vote du député suivi", for: 1, against: 0, abstain: 0 },
      modem: { group: "Les Démocrates — groupe où siègent les députés MoDem", for: 32, against: 0, abstain: 0 },
      pcf: { group: "7 députés PCF ayant pris part au scrutin (Stéphane Peu absent)", label: "Position des députés PCF suivis", for: 2, against: 0, abstain: 5 },
      udr: { group: "Union des droites pour la République", for: 17, against: 0, abstain: 0 },
      debout: { group: "François Ruffin — député et président de Debout !", label: "Vote du député suivi", for: 0, against: 0, abstain: 1 },
      lapres: { group: "Autain, Corbière et Simonnet ont voté ; Hendrik Davi n’apparaît pas parmi les votants", label: "Position des députés L’APRÈS ayant voté", for: 0, against: 0, abstain: 3 },
      "place-publique": { group: "Sacha Houlié a voté ; Aurélien Rousseau n’apparaît pas parmi les votants", label: "Vote Place publique enregistré", for: 0, against: 0, abstain: 1 },
    },
  },
  {
    id: "aide-a-mourir-2025",
    date: "27 mai 2025",
    legislature: "17e législature",
    topic: "Santé · fin de vie",
    title: "Droit à l’aide à mourir — première lecture",
    plain:
      "Ce vote porte sur l’ensemble du texte créant, sous conditions, un droit à l’aide à mourir.",
    result: "Adopté par 305 voix contre 199, avec 57 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/2107",
    positions: {
      horizons: { group: "Horizons & Indépendants", for: 14, against: 13, abstain: 6 },
      "nouvelle-energie": { group: "Alexandra Martin (Alpes-Maritimes) — secrétaire générale de Nouvelle Énergie", label: "Vote de la députée suivie", for: 0, against: 0, abstain: 1 },
      "nous-france": { group: "Julien Dive — vice-président de Nous France", label: "Vote du député suivi", for: 0, against: 0, abstain: 1 },
      "generation-ecologie": { group: "Delphine Batho — députée et coordinatrice de Génération Écologie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
      modem: { group: "Les Démocrates — groupe où siègent les députés MoDem", for: 20, against: 9, abstain: 7 },
      pcf: { group: "8 députés PCF identifiés au sein du groupe GDR", label: "Position des députés PCF suivis", for: 6, against: 1, abstain: 1 },
      udr: { group: "UDR", for: 0, against: 16, abstain: 0 },
      debout: { group: "François Ruffin — député et président de Debout !", label: "Vote du député suivi", for: 1, against: 0, abstain: 0 },
      lapres: { group: "Clémentine Autain, Alexis Corbière, Hendrik Davi et Danielle Simonnet", label: "Position des députés L’APRÈS suivis", for: 4, against: 0, abstain: 0 },
      "place-publique": { group: "Aurélien Rousseau — député Place publique ; Sacha Houlié n’est pas retenu pour ce scrutin antérieur à son arrivée au parti", label: "Vote Place publique enregistré", for: 1, against: 0, abstain: 0 },
    },
  },
  {
    id: "antisemitisme-universite-2025",
    date: "2 juillet 2025",
    legislature: "17e législature",
    topic: "Université · lutte contre l’antisémitisme",
    title: "Lutte contre l’antisémitisme dans l’enseignement supérieur",
    plain:
      "Le vote porte sur le texte final renforçant le cadre de prévention et de lutte contre l’antisémitisme dans l’enseignement supérieur.",
    result: "Adopté par 366 voix contre 88, avec 7 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/2880",
    positions: {
      pcf: { group: "8 députés PCF identifiés au sein du groupe GDR", label: "Position des députés PCF suivis", for: 2, against: 6, abstain: 0 },
    },
  },
  {
    id: "securite-retention-2026",
    date: "16 juin 2026",
    legislature: "17e législature",
    topic: "Sécurité · terrorisme",
    title: "Sécurité, rétention administrative et prévention des risques d’attentat",
    plain:
      "Le texte final renforce plusieurs dispositifs de sécurité et de rétention administrative liés à la prévention du risque terroriste.",
    result: "Adopté par 345 voix contre 177, avec 11 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7405",
    positions: {
      "nouvelle-energie": { group: "Alexandra Martin (Alpes-Maritimes) — secrétaire générale de Nouvelle Énergie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
    },
  },
  {
    id: "aide-a-mourir-2026",
    date: "30 juin 2026",
    legislature: "17e législature",
    topic: "Santé · fin de vie",
    title: "Droit à l’aide à mourir — nouvelle lecture",
    plain:
      "Le vote porte sur l’ensemble du texte relatif au droit à l’aide à mourir lors de sa nouvelle lecture à l’Assemblée nationale.",
    result: "Adopté par 295 voix contre 232, avec 35 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7894",
    positions: {
      "nous-france": { group: "Julien Dive — vice-président de Nous France", label: "Vote du député suivi", for: 0, against: 1, abstain: 0 },
    },
  },
  {
    id: "corse-autonomie-2026",
    date: "23 juin 2026",
    legislature: "17e législature",
    topic: "Institutions · Corse",
    title: "Projet constitutionnel pour une Corse autonome au sein de la République",
    plain:
      "Ce vote de première lecture porte sur l’inscription dans la Constitution d’un statut d’autonomie pour la Corse au sein de la République.",
    result: "Adopté par 271 voix contre 202, avec 64 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7454",
    positions: {
      "generation-ecologie": { group: "Delphine Batho — députée et coordinatrice de Génération Écologie", label: "Vote de la députée suivie", for: 1, against: 0, abstain: 0 },
    },
  },
  {
    id: "pacte-ferroviaire-2018",
    date: "13 juin 2018",
    legislature: "15e législature",
    topic: "Transports · service public",
    title: "Nouveau pacte ferroviaire",
    plain:
      "Le texte réforme l’organisation du système ferroviaire et de la SNCF, notamment en préparation de l’ouverture à la concurrence.",
    result: "Adopté par 452 voix contre 80, avec 27 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/15/scrutins/942",
    positions: {
      "les-patriotes": {
        group: "José Évrard — député ayant rejoint Les Patriotes en novembre 2017",
        label: "Vote historique du député Les Patriotes",
        for: 0,
        against: 1,
        abstain: 0,
      },
    },
  },
  {
    id: "manifestations-2019",
    date: "5 février 2019",
    legislature: "15e législature",
    topic: "Libertés · sécurité",
    title: "Prévenir les violences lors des manifestations et sanctionner leurs auteurs",
    plain:
      "Cette proposition de loi, souvent appelée loi « anti-casseurs », renforce les mesures de prévention et de sanction autour des manifestations.",
    result: "Adopté par 387 voix contre 92, avec 74 abstentions.",
    sourceUrl: "https://www.assemblee-nationale.fr/dyn/15/scrutins/1662",
    positions: {
      "les-patriotes": {
        group: "José Évrard — député Les Patriotes à la date du scrutin",
        label: "Vote historique du député Les Patriotes",
        for: 0,
        against: 1,
        abstain: 0,
      },
    },
  },


];

export type PartyVoteContext = {
  representation: string;
  note: string;
};

export const partyVoteContexts: Record<string, PartyVoteContext> = {
  horizons: { representation: "Groupe Horizons & Indépendants", note: "Horizons dispose d’un groupe parlementaire. Les chiffres affichés sont ceux du groupe entier, qui comprend aussi des apparentés et des indépendants." },
  "nouvelle-energie": { representation: "Alexandra Martin, députée des Alpes-Maritimes et secrétaire générale de Nouvelle Énergie", note: "Nouvelle Énergie n’a pas de groupe propre : nous comptons uniquement les votes personnels d’Alexandra Martin, sans assimiler tout le groupe Droite Républicaine au parti." },
  "nous-france": { representation: "Julien Dive, député de l’Aisne et vice-président de Nous France", note: "Nous France n’a pas de groupe propre : seuls les votes personnels de Julien Dive sont attribués au mouvement ici." },
  "generation-ecologie": { representation: "Delphine Batho, députée des Deux-Sèvres et coordinatrice de Génération Écologie", note: "Génération Écologie n’a pas de groupe propre : seuls les votes personnels de Delphine Batho sont retenus, pas ceux de tout le groupe Écologiste et Social." },
  modem: { representation: "Groupe Les Démocrates", note: "Les députés MoDem siègent dans le groupe Les Démocrates. Le graphique reprend le vote du groupe, qui ne se confond pas parfaitement avec le seul MoDem." },
  pcf: { representation: "Députés PCF au sein du groupe Gauche démocrate et républicaine", note: "Le groupe GDR est composite. Nous isolons donc les députés PCF identifiables au lieu d’attribuer au PCF les votes des élus ultramarins ou d’autres sensibilités du groupe." },
  udr: { representation: "Groupe Union des droites pour la République", note: "L’UDR dispose de son propre groupe parlementaire : les chiffres affichés sont les votes du groupe enregistrés lors de chaque scrutin." },
  debout: { representation: "François Ruffin, député de la Somme et président de Debout !", note: "Debout ! n’a pas de groupe propre : les cartes affichent les votes personnels de François Ruffin." },
  lapres: { representation: "Clémentine Autain, Alexis Corbière, Hendrik Davi et Danielle Simonnet", note: "L’APRÈS n’a pas de groupe propre. Nous isolons les votes de ses quatre députés actuels qui siègent dans le groupe Écologiste et Social." },
  "place-publique": { representation: "Aurélien Rousseau et Sacha Houlié", note: "Place publique n’a pas de groupe propre. Nous isolons les votes de ses députés identifiés plutôt que de reprendre automatiquement tout le groupe Socialistes et apparentés." },
  "lutte-ouvriere": { representation: "Aucun député Lutte ouvrière actuellement identifié à l’Assemblée nationale", note: "Il n’existe donc pas de vote de député LO à afficher pour la 17e législature. Nous n’utilisons pas le vote d’un autre parti par approximation." },
  "debout-la-france": { representation: "Nicolas Dupont-Aignan — ancien député DLF de l’Essonne, mandat clos le 9 juin 2024", note: "DLF n’a plus de député dans la 17e législature. Pour ne pas laisser la section vide, nous affichons quelques scrutins récents de la 16e législature où Nicolas Dupont-Aignan a personnellement voté, clairement signalés comme historiques." },
  "les-patriotes": { representation: "José Évrard — ancien député ayant représenté Les Patriotes entre 2017 et 2019", note: "Les Patriotes n’ont pas de député actuel. Nous affichons donc deux scrutins de la 15e législature où José Évrard représentait officiellement le mouvement, clairement signalés comme historiques." },
  upr: { representation: "Aucun député UPR actuellement identifié à l’Assemblée nationale", note: "Le mouvement ne dispose pas d’un député auquel rattacher des votes de la 17e législature." },
  "solution-democratique": { representation: "Aucun député Solution démocratique actuellement identifié à l’Assemblée nationale", note: "Le mouvement ne dispose pas d’un député auquel rattacher des votes de la 17e législature." },
  equinoxe: { representation: "Aucun député Équinoxe actuellement identifié à l’Assemblée nationale", note: "Le mouvement ne dispose pas d’un député auquel rattacher des votes de la 17e législature." },
  udb: { representation: "Aucun député actuellement attribué directement à l’UDB", note: "Des élus régionalistes siègent à l’Assemblée, mais nous ne les attribuons pas automatiquement à l’UDB sans appartenance partisane actuelle suffisamment claire." },
  reconquete: { representation: "Aucun député Reconquête actuellement identifié à l’Assemblée nationale", note: "Le mouvement ne dispose pas d’un député auquel rattacher directement des votes de la 17e législature." },
  "la-convention": { representation: "Aucun député actuellement attribué directement à La Convention", note: "Des parlementaires peuvent être proches de Bernard Cazeneuve, mais nous ne transformons pas un soutien politique en appartenance partisane sans base explicite." },
  "france-humaniste": { representation: "Aucun député La France humaniste actuellement identifié à l’Assemblée nationale", note: "Le mouvement de Dominique de Villepin ne dispose pas d’un député auquel rattacher directement des votes de la 17e législature." },
};

export function dominantChoice(vote: PartyVote): VoteChoice {
  const choices: Array<[VoteChoice, number]> = [
    ["Pour", vote.for],
    ["Contre", vote.against],
    ["Abstention", vote.abstain],
  ];

  return choices.sort((a, b) => b[1] - a[1])[0][0];
}
