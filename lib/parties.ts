export type Confidence = "fort" | "moyen" | "faible";

export type PartyDossierStatus = "published" | "in_preparation";

export type PartyBase = {
  slug: string;
  short: string;
  logo?: string;
  name: string;
  family: string;
  candidate: string;
  candidateStatus: string;
  thesis: string;
  color: string;
  soft: string;
  dossierStatus: PartyDossierStatus;
};

export type PublishedParty = PartyBase & {
  dossierStatus: "published";
  logo: string;
  ink: string;
  programLabel: string;
  programDate: string;
  sourceUrl: string;
  sourceName: string;
  documentStatus: string;
  assemblyGroup: string;
  extraSources?: Array<{ label: string; url: string }>;
  overview: string;
  measures: Array<{
    area: string;
    title: string;
    detail: string;
    impact: string;
    horizon: string;
    confidence: Confidence;
  }>;
  timeline: Array<{ year: string; title: string; text: string }>;
  daily: Array<{ label: string; title: string; text: string; image?: string }>;
  brakes: Array<{ title: string; text: string }>;
};

export type PendingParty = PartyBase & {
  dossierStatus: "in_preparation";
};

export type Party = PublishedParty | PendingParty;

export const parties: Party[] = [
  {
    slug: "lfi",
    dossierStatus: "published",
    short: "FI",
    logo: "/logos/lfi-diy.webp",
    name: "La France insoumise",
    family: "Gauche de rupture",
    candidate: "Jean-Luc Mélenchon",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Redistribuer vite, planifier l’écologie, changer les institutions.",
    color: "#d31d50",
    soft: "#f5d7df",
    ink: "#32101b",
    programLabel: "L’Avenir en commun",
    programDate: "édition 2025 — construction 2027",
    sourceUrl: "https://melenchon2027.fr/programme2025/livre/",
    sourceName: "Programme officiel LFI",
    documentStatus: "Programme détaillé publié",
    assemblyGroup: "La France insoumise — Nouveau Front populaire",
    overview:
      "Le projet assume une rupture rapide avec la politique économique actuelle : hausse des revenus, intervention de l’État, planification écologique et passage à une VIe République. Son application dépendrait fortement d’une majorité stable et de la réponse des institutions européennes.",
    measures: [
      {
        area: "Revenus",
        title: "Hausse du SMIC et blocage de prix essentiels",
        detail:
          "Une action immédiate sur les bas salaires et certains prix, avec un effet direct recherché sur le pouvoir d’achat.",
        impact: "Très direct",
        horizon: "100 jours",
        confidence: "fort",
      },
      {
        area: "Retraites",
        title: "Retour vers la retraite à 60 ans",
        detail:
          "Une réforme coûteuse et structurante, nécessitant une loi de financement et des recettes nouvelles.",
        impact: "Structurel",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Planification des transports, logements et énergie",
        detail:
          "Investissements publics et normes sectorielles organisés autour d’objectifs écologiques pluriannuels.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Institutions",
        title: "Processus constituant pour une VIe République",
        detail:
          "Le changement le plus profond du projet, mais aussi celui dont le chemin juridique et politique est le plus incertain.",
        impact: "Systémique",
        horizon: "Pluriannuel",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le choc d’ouverture",
        text: "Décrets applicables rapidement, budget rectificatif, premières mesures sur les revenus et lancement du calendrier institutionnel.",
      },
      {
        year: "2028",
        title: "Le mur du financement",
        text: "Les recettes fiscales, la retraite et les investissements publics deviennent le cœur du débat avec les oppositions et l’Union européenne.",
      },
      {
        year: "2029",
        title: "L’État planificateur à l’épreuve",
        text: "Les projets de rénovation, de transport et d’énergie entrent dans la phase concrète : appels d’offres, travaux et pénuries de compétences possibles.",
      },
      {
        year: "2030—32",
        title: "Rupture confirmée ou freinée",
        text: "Le résultat dépend de l’emploi, de l’investissement, des prix et de la capacité à conserver une majorité politique.",
      },
    ],
    daily: [
      {
        label: "Fiche de paie",
        title: "Des bas revenus relevés",
        text: "Le changement recherché serait visible rapidement pour les salariés au SMIC, avec des répercussions négociées sur les grilles salariales.",
        image: "/illustrations/daily/lfi/daily-lfi-01-smic-revalorise.svg",
      },
      {
        label: "Ville",
        title: "Davantage de chantiers publics",
        text: "Rénovation des logements, transports collectifs et services publics prendraient une place plus visible dans les budgets locaux.",
        image: "/illustrations/daily/lfi/daily-lfi-02-chantiers-publics.svg",
      },
      {
        label: "Débat public",
        title: "Une forte conflictualité institutionnelle",
        text: "Référendums, Constituante et confrontation autour du droit européen domineraient une partie du quinquennat.",
        image:
          "/illustrations/daily/lfi/daily-lfi-03-conflit-institutionnel.svg",
      },
    ],
    brakes: [
      {
        title: "Majorité parlementaire",
        text: "Sans majorité, les mesures fiscales, sociales et institutionnelles centrales seraient négociées ou bloquées.",
      },
      {
        title: "Financement",
        text: "La vitesse de la dépense précéderait parfois celle des nouvelles recettes, créant un risque de tension budgétaire.",
      },
      {
        title: "Droit européen",
        text: "Certaines ruptures revendiquées ouvriraient des négociations ou contentieux avec les institutions européennes.",
      },
    ],
  },
  {
    slug: "ps",
    dossierStatus: "published",
    short: "PS",
    logo: "/logos/ps-diy.webp",
    name: "Parti socialiste",
    family: "Gauche sociale-démocrate",
    candidate:
      "Philippe Brun · Jérôme Guedj · Ségolène Royal · Karim Bouamrane",
    candidateStatus:
      "Plusieurs candidatures / primaire et candidatures directes",
    thesis:
      "Revaloriser le travail, réparer les services publics, transformer par la négociation.",
    color: "#e62973",
    soft: "#f9dbea",
    ink: "#37101f",
    programLabel: "Le Projet socialiste",
    programDate: "adopté en juillet 2026",
    sourceUrl: "https://projet.parti-socialiste.fr/",
    sourceName: "Projet officiel du PS",
    documentStatus: "Projet structuré en six engagements",
    assemblyGroup: "Socialistes et apparentés",
    overview:
      "Le projet combine redistribution, services publics, réindustrialisation et écologie dite populaire, tout en conservant un cadre européen assumé. La méthode serait plus graduelle et négociée que celle d’une gauche de rupture.",
    measures: [
      {
        area: "Travail",
        title: "Mieux vivre du travail",
        detail:
          "Salaires, conditions de travail et coût de la vie sont placés au début de la chaîne de décisions.",
        impact: "Direct",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Industrie",
        title: "Réindustrialisation vers les emplois de demain",
        detail:
          "Aides, commandes publiques et stratégie européenne chercheraient à accélérer l’investissement productif.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Services publics",
        title: "Santé, école et protection sociale renforcées",
        detail:
          "Le projet suppose des recrutements, de la formation et une trajectoire budgétaire durable.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Une transition présentée comme protectrice",
        detail:
          "Rénovation, agriculture et mobilités seraient reliées à des mécanismes d’accompagnement social.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un budget de réorientation",
        text: "Premières mesures sociales, arbitrages sur les recettes et lancement de conférences avec syndicats et collectivités.",
      },
      {
        year: "2028",
        title: "Services publics et industrie",
        text: "Début des recrutements et des investissements, avec des effets encore inégaux selon les territoires.",
      },
      {
        year: "2029",
        title: "Le test européen",
        text: "La stratégie industrielle, climatique et budgétaire doit s’articuler avec les partenaires et règles de l’Union.",
      },
      {
        year: "2030—32",
        title: "La preuve par le quotidien",
        text: "Le jugement se jouerait sur l’accès réel aux soins, l’école, les salaires et la création d’emplois industriels.",
      },
    ],
    daily: [
      {
        label: "Travail",
        title: "Plus de négociation collective",
        text: "Les branches et partenaires sociaux seraient davantage sollicités pour les salaires et la qualité du travail.",
        image: "/illustrations/daily/ps/daily-ps-01-negociation-collective.svg",
      },
      {
        label: "Services",
        title: "Une amélioration attendue, pas instantanée",
        text: "Former un enseignant, un soignant ou un technicien prend plusieurs années : le décalage serait central.",
        image:
          "/illustrations/daily/ps/daily-ps-02-formation-services-publics.svg",
      },
      {
        label: "Écologie",
        title: "Des aides avant les interdictions",
        text: "La transition chercherait à limiter le sentiment de punition, avec un coût budgétaire supérieur à court terme.",
        image: "/illustrations/daily/ps/daily-ps-03-aides-transition.svg",
      },
    ],
    brakes: [
      {
        title: "Coalition à gauche",
        text: "Une candidature commune pourrait obliger à fusionner des propositions parfois incompatibles entre partenaires.",
      },
      {
        title: "Capacité administrative",
        text: "Les ambitions de recrutement se heurteraient aux métiers en tension et au temps de formation.",
      },
      {
        title: "Équilibre budgétaire",
        text: "Le financement des services publics serait arbitré face à une dette déjà élevée.",
      },
    ],
  },
  {
    slug: "ecologistes",
    dossierStatus: "published",
    short: "LE",
    logo: "/logos/ecologistes-diy.webp",
    name: "Les Écologistes",
    family: "Écologie politique",
    candidate: "Marine Tondelier",
    candidateStatus: "Candidature maintenue",
    thesis:
      "Faire de l’adaptation climatique le moteur de l’économie et du quotidien.",
    color: "#2b7a4b",
    soft: "#d8eadc",
    ink: "#0e2b1a",
    programLabel: "Pour une prospérité écologique",
    programDate: "programme national présenté en 2026",
    sourceUrl: "https://lesecologistes.fr/",
    sourceName: "Programme officiel des Écologistes",
    documentStatus: "Programme national publié",
    assemblyGroup: "Écologiste et Social",
    overview:
      "Le projet place le climat, la santé et la réduction des dépendances énergétiques au centre de toutes les politiques. Il promet des transformations physiques très visibles, mais dépend d’une mobilisation rapide des filières du bâtiment, du transport et de l’énergie.",
    measures: [
      {
        area: "Logement",
        title: "500 000 rénovations performantes par an",
        detail:
          "Une massification des travaux qui nécessiterait financement, artisans formés et contrôles de qualité.",
        impact: "Très visible",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Mobilité",
        title: "Un million de voitures électriques en location sociale",
        detail:
          "Le dispositif ciblerait les ménages contraints d’utiliser une voiture, avec des enjeux d’offre et de recharge.",
        impact: "Direct",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Santé",
        title: "2 000 nouveaux centres de santé",
        detail:
          "Un maillage territorial renforcé, à condition de recruter les professionnels nécessaires.",
        impact: "Territorial",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Travail",
        title: "SMIC à 2 000 € brut et congé climatique",
        detail:
          "Deux mesures immédiatement perceptibles, avec négociations sur leur financement et leur application.",
        impact: "Direct",
        horizon: "An 1",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le climat entre dans chaque ministère",
        text: "Le budget et les projets de loi seraient évalués selon leurs effets écologiques et sociaux.",
      },
      {
        year: "2028",
        title: "Le pays devient un chantier",
        text: "Rénovations, voies cyclables, transports et adaptation urbaine deviennent les signes visibles du projet.",
      },
      {
        year: "2029",
        title: "Tensions sur les compétences",
        text: "Artisans, ingénieurs, soignants et matières premières pourraient limiter la cadence annoncée.",
      },
      {
        year: "2030—32",
        title: "Baisse des factures ou rejet des contraintes",
        text: "La réussite dépendrait du bénéfice concret ressenti avant les nouvelles normes et restrictions.",
      },
    ],
    daily: [
      {
        label: "Quartier",
        title: "Moins de bitume, plus d’ombre",
        text: "Les villes seraient poussées à végétaliser et adapter écoles, rues et logements aux canicules.",
        image:
          "/illustrations/daily/ecologistes/daily-ecologistes-01-ville-vegetalisee.svg",
      },
      {
        label: "Logement",
        title: "Le diagnostic devient un calendrier",
        text: "Propriétaires et locataires verraient les aides, obligations et travaux se multiplier.",
        image:
          "/illustrations/daily/ecologistes/daily-ecologistes-02-renovation-calendrier.svg",
      },
      {
        label: "Mobilité",
        title: "Davantage d’alternatives à la voiture thermique",
        text: "L’effet serait rapide en zone dense, mais plus difficile à rendre équitable en territoire rural.",
        image:
          "/illustrations/daily/ecologistes/daily-ecologistes-03-mobilites-alternatives.svg",
      },
    ],
    brakes: [
      {
        title: "Capacité des filières",
        text: "L’argent seul ne crée pas immédiatement les professionnels et équipements nécessaires.",
      },
      {
        title: "Acceptabilité",
        text: "Les contraintes seront contestées si les alternatives arrivent trop tard ou coûtent trop cher.",
      },
      {
        title: "Pouvoir local",
        text: "Une grande partie des transformations dépendrait des régions, intercommunalités et communes.",
      },
    ],
  },
  {
    slug: "renaissance",
    dossierStatus: "published",
    short: "RE",
    logo: "/logos/renaissance-diy.webp",
    name: "Renaissance",
    family: "Centre libéral et européen",
    candidate: "Gabriel Attal",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Accélérer par le travail, l’investissement, l’Europe et la continuité réformatrice.",
    color: "#5c43cf",
    soft: "#e2ddf8",
    ink: "#1d1741",
    programLabel: "Conventions et orientations nationales",
    programDate: "textes disponibles en août 2026",
    sourceUrl: "https://parti-renaissance.fr/",
    sourceName: "Propositions officielles de Renaissance",
    documentStatus: "Programme 2027 encore en construction",
    assemblyGroup: "Ensemble pour la République",
    overview:
      "Faute de programme présidentiel 2027 complet à ce jour, le scénario prolonge les orientations affichées : travail, Europe, innovation, autorité de l’État, égalité des chances et écologie compatible avec la croissance.",
    measures: [
      {
        area: "Économie",
        title: "Continuité de la politique de l’offre",
        detail:
          "Compétitivité, investissement et emploi resteraient privilégiés, avec des aides plus ciblées qu’universelles.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Europe",
        title: "Plus de décisions à l’échelle européenne",
        detail:
          "Défense, industrie, énergie et numérique seraient davantage coordonnés avec les partenaires européens.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "fort",
      },
      {
        area: "Travail",
        title: "Incitations à l’activité et réformes",
        detail:
          "Le projet chercherait à augmenter le taux d’emploi, avec un débat persistant sur la protection des plus fragiles.",
        impact: "Direct",
        horizon: "1—3 ans",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Décarbonation par la technologie",
        detail:
          "Nucléaire, électrification et industrie verte seraient préférés à une politique de décroissance.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "La continuité revendiquée",
        text: "Le nouveau mandat chercherait à ouvrir rapidement des réformes sur le travail, l’État et l’investissement.",
      },
      {
        year: "2028",
        title: "L’Europe comme multiplicateur",
        text: "Les grands projets industriels et de défense dépendraient de compromis avec les partenaires européens.",
      },
      {
        year: "2029",
        title: "Le test des services publics",
        text: "La recherche d’économies serait confrontée aux besoins visibles de l’hôpital, de l’école et des collectivités.",
      },
      {
        year: "2030—32",
        title: "Résultats contre fatigue politique",
        text: "Le bilan opposerait créations d’emplois et investissements au sentiment de continuité ou d’inégalités.",
      },
    ],
    daily: [
      {
        label: "Entreprise",
        title: "Une politique favorable à l’investissement",
        text: "Les dispositifs privilégieraient la création d’activité et les filières considérées stratégiques.",
        image:
          "/illustrations/daily/renaissance/daily-renaissance-01-investissement.svg",
      },
      {
        label: "Démarches",
        title: "Un État plus numérique",
        text: "La simplification pourrait accélérer certains services tout en aggravant les difficultés des publics éloignés du numérique.",
        image:
          "/illustrations/daily/renaissance/daily-renaissance-02-demarches-numeriques.svg",
      },
      {
        label: "Europe",
        title: "Plus de décisions partagées",
        text: "Des politiques autrefois nationales seraient présentées comme impossibles à mener efficacement seul.",
        image:
          "/illustrations/daily/renaissance/daily-renaissance-03-decisions-europeennes.svg",
      },
    ],
    brakes: [
      {
        title: "Bilan sortant",
        text: "Le projet serait jugé à partir de dix années de pouvoir, rendant toute promesse de renouveau plus difficile.",
      },
      {
        title: "Majorité fragmentée",
        text: "Le centre aurait besoin d’alliés à droite ou à gauche pour les textes les plus contestés.",
      },
      {
        title: "Dette et économies",
        text: "Réduire le déficit sans dégrader les services publics imposerait des arbitrages politiquement coûteux.",
      },
    ],
  },
  {
    slug: "lr",
    dossierStatus: "published",
    short: "LR",
    logo: "/logos/lr-diy.webp",
    name: "Les Républicains",
    family: "Droite conservatrice",
    candidate: "Bruno Retailleau",
    candidateStatus: "Désigné par les adhérents LR",
    thesis:
      "Renforcer l’autorité, remettre le travail au centre, réduire la dépense.",
    color: "#175ca8",
    soft: "#d7e4f3",
    ink: "#0d2642",
    programLabel: "Nos idées et nos propositions",
    programDate: "orientations disponibles en août 2026",
    sourceUrl: "https://republicains.fr/nos-propositions/",
    sourceName: "Propositions officielles LR",
    documentStatus: "Programme 2027 encore en construction",
    assemblyGroup: "Droite Républicaine",
    extraSources: [
      {
        label: "Principes et idées LR",
        url: "https://republicains.fr/nos-idees/",
      },
    ],
    overview:
      "Le projet présidentiel final reste en construction. Les orientations actuelles associent baisse de la dépense, valorisation du travail, fermeté sur l’immigration et la sécurité, école plus exigeante et écologie centrée sur l’adaptation.",
    measures: [
      {
        area: "Travail",
        title: "Priorité au revenu d’activité",
        detail:
          "Fiscalité et prestations seraient réorganisées pour augmenter l’écart entre revenus du travail et de l’inactivité.",
        impact: "Direct",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Dépenses",
        title: "Réduction de la dépense publique",
        detail:
          "Des économies importantes seraient recherchées dans l’organisation de l’État et les politiques sociales.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "faible",
      },
      {
        area: "Autorité",
        title: "Durcissement pénal et migratoire",
        detail:
          "Les moyens policiers, les peines et les règles migratoires seraient modifiés rapidement si la majorité suit.",
        impact: "Très direct",
        horizon: "100 jours",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Adapter plutôt qu’interdire",
        detail:
          "Le projet privilégierait nucléaire, protection contre les risques et innovation plutôt que restrictions générales.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un début centré sur l’autorité",
        text: "Immigration, justice, travail et budget formeraient probablement le premier paquet législatif.",
      },
      {
        year: "2028",
        title: "La bataille des économies",
        text: "Les réductions de dépenses se traduiraient en réorganisations concrètes et en conflits avec les secteurs concernés.",
      },
      {
        year: "2029",
        title: "Le test des territoires",
        text: "École, santé et sécurité révéleraient les effets différents entre métropoles, villes moyennes et zones rurales.",
      },
      {
        year: "2030—32",
        title: "Autorité perçue ou tensions durables",
        text: "Le bilan dépendrait des résultats mesurés sur l’emploi, les comptes publics, la délinquance et l’accès aux services.",
      },
    ],
    daily: [
      {
        label: "Travail",
        title: "Des aides davantage conditionnées",
        text: "La logique générale viserait à rendre le travail financièrement plus avantageux et les prestations plus contrôlées.",
        image: "/illustrations/daily/lr/daily-lr-01-aides-conditionnees.svg",
      },
      {
        label: "École",
        title: "Discipline et fondamentaux",
        text: "Programmes, évaluations et autorité des équipes seraient plus fortement encadrés au niveau national.",
        image: "/illustrations/daily/lr/daily-lr-02-ecole-fondamentaux.svg",
      },
      {
        label: "Sécurité",
        title: "Une présence et des sanctions accrues",
        text: "Les résultats dépendraient autant des recrutements judiciaires que des annonces pénales.",
        image: "/illustrations/daily/lr/daily-lr-03-securite-sanctions.svg",
      },
    ],
    brakes: [
      {
        title: "Conseil constitutionnel",
        text: "Certaines mesures migratoires ou pénales pourraient nécessiter une révision constitutionnelle.",
      },
      {
        title: "Économies contestées",
        text: "Chaque réduction de dépense toucherait une administration, un service, une collectivité ou une prestation identifiée.",
      },
      {
        title: "Concurrence à droite",
        text: "La majorité pourrait se diviser entre compromis institutionnels et surenchère avec le RN.",
      },
    ],
  },
  {
    slug: "rn",
    dossierStatus: "published",
    short: "RN",
    logo: "/logos/rn-diy.webp",
    name: "Rassemblement national",
    family: "Droite nationale",
    candidate: "Marine Le Pen",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Priorité nationale, contrôle migratoire, sécurité et souveraineté économique.",
    color: "#172e62",
    soft: "#d9deea",
    ink: "#08152e",
    programLabel: "Projet, livrets et contre-budget",
    programDate: "corpus 2022—2026",
    sourceUrl: "https://rassemblementnational.fr/livrets-thematiques",
    sourceName: "Documents officiels du RN",
    documentStatus: "Plusieurs documents, pas encore un programme 2027 unique",
    assemblyGroup: "Rassemblement National",
    extraSources: [
      {
        label: "Contre-budget 2026 du groupe RN",
        url: "https://rassemblementnational.fr/documents/GRN-CONTRE-BUDGET-2026.pdf",
      },
    ],
    overview:
      "Le scénario repose sur les textes nationaux disponibles : forte réduction de l’immigration, priorité nationale pour certaines prestations et emplois, durcissement sécuritaire, souveraineté et soutien au nucléaire. Plusieurs mesures centrales rencontreraient immédiatement des obstacles constitutionnels et européens.",
    measures: [
      {
        area: "Immigration",
        title: "Référendum et réduction forte des admissions",
        detail:
          "Le projet cherche à modifier le droit d’asile, le regroupement familial et les conditions de séjour.",
        impact: "Très direct",
        horizon: "100 jours",
        confidence: "faible",
      },
      {
        area: "Prestations",
        title: "Priorité nationale et durée de travail",
        detail:
          "Accès au logement social et à certaines prestations serait différencié selon la nationalité ou la durée d’activité.",
        impact: "Très direct",
        horizon: "An 1",
        confidence: "faible",
      },
      {
        area: "Sécurité",
        title: "Peines et moyens policiers renforcés",
        detail:
          "Le changement serait rapide dans les textes ; l’effet réel dépendrait des capacités de la police, des tribunaux et des prisons.",
        impact: "Direct",
        horizon: "1—3 ans",
        confidence: "moyen",
      },
      {
        area: "Énergie",
        title: "Nucléaire, souveraineté et pouvoir d’achat",
        detail:
          "Le projet favoriserait la production nationale et contesterait certaines règles européennes de marché.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le choc juridique",
        text: "Référendum, immigration et priorité nationale placeraient immédiatement le quinquennat face aux juges et aux institutions européennes.",
      },
      {
        year: "2028",
        title: "L’administration applique — ou ralentit",
        text: "Préfectures, tribunaux, police, bailleurs et organismes sociaux devraient traduire des règles nouvelles en procédures.",
      },
      {
        year: "2029",
        title: "Les effets économiques apparaissent",
        text: "Emploi, secteurs dépendants de travailleurs étrangers, finances publiques et relations européennes deviendraient mesurables.",
      },
      {
        year: "2030—32",
        title: "Normalisation ou crise institutionnelle",
        text: "Le scénario dépendrait de la capacité à modifier durablement le droit sans rupture politique ou économique majeure.",
      },
    ],
    daily: [
      {
        label: "Préfecture",
        title: "Des règles de séjour beaucoup plus strictes",
        text: "Délais, contrôles et contentieux augmenteraient probablement pendant la transition administrative.",
        image: "/illustrations/daily/rn/daily-rn-01-regles-sejour.svg",
      },
      {
        label: "Services sociaux",
        title: "Des droits différenciés",
        text: "Des organismes devraient vérifier davantage de critères, avec des effets directs et de nombreux recours possibles.",
        image: "/illustrations/daily/rn/daily-rn-02-droits-differencies.svg",
      },
      {
        label: "Espace public",
        title: "Un climat politique plus conflictuel",
        text: "Manifestations, procédures judiciaires et débats identitaires occuperaient une place centrale dans le quinquennat.",
        image: "/illustrations/daily/rn/daily-rn-03-climat-conflictuel.svg",
      },
    ],
    brakes: [
      {
        title: "Constitution",
        text: "La priorité nationale et plusieurs différences de traitement se heurteraient au principe d’égalité et au contrôle constitutionnel.",
      },
      {
        title: "Union européenne",
        text: "Libre circulation, droit d’asile, marché intérieur et engagements communs limiteraient plusieurs mesures annoncées.",
      },
      {
        title: "Économie réelle",
        text: "Agriculture, hôtellerie, bâtiment, santé et industrie pourraient subir des pénuries de main-d’œuvre selon l’application retenue.",
      },
    ],
  },
  {
    slug: "horizons",
    dossierStatus: "published",
    short: "HOR",
    logo: "/logos/horizons-diy.webp",
    name: "Horizons",
    family: "Centre droit",
    candidate: "Édouard Philippe",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Redresser le pays par l’ordre, l’école, le travail et la puissance technologique.",
    color: "#008b9a",
    soft: "#d6ecee",
    ink: "#083d45",
    programLabel: "Les priorités d’Édouard Philippe",
    programDate: "premières orientations publiées en 2026",
    sourceUrl: "https://www.edouardphilippe.fr/",
    sourceName: "Avec Édouard — présidentielle 2027",
    documentStatus: "Premières orientations 2027 — programme encore enrichi",
    assemblyGroup: "Horizons & Indépendants",
    extraSources: [
      {
        label: "Pour une France plus sûre",
        url: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure",
      },
      {
        label: "Pour une France plus attentive à ses enfants",
        url: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants",
      },
      {
        label: "Pour une France plus prospère",
        url: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere",
      },
      {
        label: "Pour une France plus conquérante",
        url: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante",
      },
    ],
    overview:
      "Le corpus 2027 actuellement publié s’organise autour de quatre priorités : sécurité, enfants, prospérité et puissance technologique et climatique. Il assume à la fois un durcissement régalien, une forte réforme de l’État et des comptes, une refonte de l’école et une stratégie d’investissement dans l’IA, l’énergie et l’adaptation. Le site de campagne présente encore ces textes comme les premières orientations d’un programme appelé à s’étoffer.",
    measures: [
      {
        area: "Sécurité",
        title: "Refonder justice, lutte antidrogue et politique migratoire",
        detail:
          "Peines courtes et planchers, état d’urgence contre le narcotrafic, quotas migratoires et expulsions renforcées formeraient un premier bloc très régalien.",
        impact: "Direct",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Économie",
        title: "50 Md€ d’impôts de production en moins contre 50 Md€ d’aides",
        detail:
          "Le choc de compétitivité serait accompagné d’un moratoire normatif et fiscal et d’une réorganisation d’agences et opérateurs publics.",
        impact: "Structurel",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "École & famille",
        title:
          "Donner plus d’autonomie aux établissements et relancer la politique familiale",
        detail:
          "Chefs d’établissement renforcés, rémunération des enseignants, soutien scolaire universel et nouvelles aides aux familles changeraient l’organisation scolaire et familiale.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "IA & climat",
        title: "Investir dans la puissance technologique et l’adaptation",
        detail:
          "Capacité de calcul européenne, formation d’ingénieurs, nucléaire et renouvelables, Fonds vert et DATAR 2.0 sont regroupés dans une logique de souveraineté.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le régalien et les comptes en ouverture",
        text: "Les réformes de justice, d’immigration, de simplification et la nouvelle trajectoire budgétaire seraient parmi les dossiers les plus immédiatement législatifs.",
      },
      {
        year: "2028",
        title: "École, famille et appareil d’État",
        text: "L’autonomie scolaire, la réforme des carrières enseignantes et la réorganisation des opérateurs publics entreraient dans une phase d’exécution concrète.",
      },
      {
        year: "2029",
        title: "Le test du choc de compétitivité",
        text: "Entreprises, retraites, financement social et dépenses de santé devraient produire des résultats sans dégrader les services essentiels.",
      },
      {
        year: "2030—32",
        title: "Puissance technologique et adaptation",
        text: "Le bilan se jouerait aussi sur la capacité de calcul, les ingénieurs formés, l’électrification et la transformation des villes face au climat.",
      },
    ],
    daily: [
      {
        label: "Travail",
        title: "Un salaire net davantage dissocié du financement social",
        text: "Le projet veut moins faire reposer le modèle social sur le travail, tout en demandant un effort supplémentaire sur la durée d’activité et les retraites.",
        image:
          "/illustrations/daily/horizons/daily-horizons-01-un-salaire-net-davantage-dissocie-du-financement-social.png",
      },
      {
        label: "École",
        title: "Un établissement plus autonome",
        text: "Horaires, méthodes, discipline et choix des enseignants pourraient davantage dépendre du chef d’établissement, avec un soutien scolaire public renforcé.",
        image:
          "/illustrations/daily/horizons/daily-horizons-02-un-etablissement-plus-autonome.png",
      },
      {
        label: "Ville",
        title: "L’adaptation climatique devient visible",
        text: "Ombrage, végétalisation, climatisation des lieux fragiles et rénovation d’équipements publics prendraient une place plus importante dans les investissements locaux.",
        image:
          "/illustrations/daily/horizons/daily-horizons-03-ladaptation-climatique-devient-visible.png",
      },
    ],
    brakes: [
      {
        title: "Équation budgétaire",
        text: "Atteindre 2 % de déficit tout en baissant fortement les impôts de production et en investissant dans la défense, l’école, l’IA et l’adaptation supposerait des économies réellement exécutées.",
      },
      {
        title: "Réformes institutionnelles",
        text: "Règle d’or constitutionnelle, pouvoirs du parquet, justice et migration rencontreraient des contraintes juridiques et nécessiteraient des majorités solides.",
      },
      {
        title: "Capacité d’exécution",
        text: "Former beaucoup plus d’ingénieurs et d’enseignants, massifier les réserves ou transformer rapidement les opérateurs publics ne se décrète pas en quelques mois.",
      },
    ],
  },
  {
    slug: "nouvelle-energie",
    dossierStatus: "published",
    short: "NE",
    logo: "/logos/nouvelleenergie-diy.webp",
    name: "Nouvelle Énergie",
    family: "Droite libérale et décentralisatrice",
    candidate: "David Lisnard",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Libérer l’économie, recentrer l’État, décentraliser et restaurer l’autorité.",
    color: "#e2552c",
    soft: "#f4dfd7",
    ink: "#4c1b0f",
    programLabel: "Notre programme",
    programDate: "corpus en ligne vérifié en août 2026",
    sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/",
    sourceName: "Nouvelle Énergie — programme officiel",
    documentStatus: "Programme structuré — corpus thématique encore évolutif",
    assemblyGroup: "Alexandra Martin siège au groupe Droite Républicaine",
    extraSources: [
      {
        label: "Éducation",
        url: "https://www.unenouvelleenergie.fr/notre-programme/education/",
      },
      {
        label: "Sécurité",
        url: "https://www.unenouvelleenergie.fr/notre-programme/securite/",
      },
      {
        label: "Santé",
        url: "https://www.unenouvelleenergie.fr/notre-programme/sante/",
      },
      {
        label: "Agriculture",
        url: "https://www.unenouvelleenergie.fr/notre-programme/agriculture/",
      },
      {
        label: "Immigration",
        url: "https://www.unenouvelleenergie.fr/notre-programme/immigration/",
      },
    ],
    overview:
      "Nouvelle Énergie présente son projet comme une « révolution de la liberté » articulée autour de Liberté, Ordre et Dignité. Le fil directeur est un État plus petit hors de ses missions essentielles mais plus puissant sur le régalien, accompagné d’une forte décentralisation, d’une école fondée sur l’exigence et d’une économie plus libérale. Le site annonce neuf thématiques principales ; plusieurs fiches détaillées et trois grands axes de refondation sont déjà publics.",
    measures: [
      {
        area: "État",
        title:
          "Débureaucratiser et recentrer l’État sur les fonctions essentielles",
        detail:
          "La doctrine vise moins de normes, d’agences et de centralisation, avec davantage de responsabilité locale et une action nationale concentrée sur sécurité, justice, diplomatie, instruction et santé.",
        impact: "Structurel",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "École",
        title: "Certificat de fin de primaire et autonomie accrue",
        detail:
          "L’entrée au collège serait conditionnée à la maîtrise des fondamentaux ; l’autorité, l’évaluation, la formation et les rémunérations des enseignants seraient réorganisées.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Territoires",
        title: "Une décentralisation radicale",
        detail:
          "Le projet veut transférer beaucoup plus de décisions aux territoires et aller vers de grandes provinces dotées d’une autonomie de gestion et de réglementation renforcée.",
        impact: "Systémique",
        horizon: "5 ans et +",
        confidence: "faible",
      },
      {
        area: "Économie",
        title: "Libérer production, travail et investissement",
        detail:
          "Baisse des impôts de production, simplification du droit, flexibilité accrue et soutien aux filières productives doivent relever croissance, emploi et souveraineté.",
        impact: "Direct",
        horizon: "1—3 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Débureaucratisation et régalien",
        text: "Le mandat commencerait par des suppressions ou regroupements administratifs, des textes sur sécurité et immigration et des mesures de simplification économique.",
      },
      {
        year: "2028",
        title: "La révolution scolaire",
        text: "Le certificat de fin de primaire, la réorganisation des carrières et l’autonomie des établissements nécessiteraient une montée en charge nationale.",
      },
      {
        year: "2029",
        title: "Décentralisation à l’épreuve",
        text: "Transferts de compétences, finances locales et redécoupage territorial deviendraient un chantier institutionnel lourd.",
      },
      {
        year: "2030—32",
        title: "Mesurer la liberté par les résultats",
        text: "Le bilan porterait sur la baisse de la dépense et des normes, l’emploi, les délais de soins, la sécurité et la capacité des territoires à assumer leurs nouvelles responsabilités.",
      },
    ],
    daily: [
      {
        label: "Démarches",
        title: "Moins de procédures nationales",
        text: "Entreprises, agriculteurs et collectivités seraient censés passer moins de temps avec des normes et davantage décider au niveau local.",
        image:
          "/illustrations/daily/nouvelle-energie/daily-nouvelle-energie-01-moins-de-procedures-nationales.png",
      },
      {
        label: "École",
        title: "Une sélection plus nette des acquis",
        text: "La maîtrise des fondamentaux avant le collège deviendrait un seuil explicite, avec accompagnement spécifique pour les élèves en difficulté.",
        image:
          "/illustrations/daily/nouvelle-energie/daily-nouvelle-energie-02-une-selection-plus-nette-des-acquis.png",
      },
      {
        label: "Santé",
        title: "Un système plus territorial",
        text: "Maisons de santé, conventionnement différencié et accès direct à certains professionnels visent à réduire les déserts médicaux sans imposer l’installation.",
        image:
          "/illustrations/daily/nouvelle-energie/daily-nouvelle-energie-03-un-systeme-plus-territorial.png",
      },
    ],
    brakes: [
      {
        title: "Ampleur des économies",
        text: "Une réduction rapide de la bureaucratie et de la dépense suppose de préciser quels services, aides et structures disparaissent ou changent réellement.",
      },
      {
        title: "Réforme territoriale",
        text: "Créer de grandes provinces et transférer de nombreuses compétences implique droit constitutionnel, financement local et acceptation des élus.",
      },
      {
        title: "Transitions sociales",
        text: "Des réformes simultanées de l’école, du marché du travail, de la santé et de l’administration créeraient des gagnants, des perdants et des besoins de transition importants.",
      },
    ],
  },
  {
    slug: "nous-france",
    dossierStatus: "published",
    short: "NF",
    logo: "/logos/nousfrance-diy.webp",
    name: "Nous France",
    family: "Droite sociale et territoriale",
    candidate: "Xavier Bertrand",
    candidateStatus: "Préparation à 2027 — pas encore officiellement candidat",
    thesis:
      "Rendre du pouvoir aux territoires, revaloriser le travail et reconstruire une droite sociale.",
    color: "#315caa",
    soft: "#dce4f3",
    ink: "#15284c",
    programLabel: "Projet participatif Nous France",
    programDate: "axes publics disponibles en août 2026",
    sourceUrl: "https://www.nousfrance.fr/",
    sourceName: "Nous France — site officiel",
    documentStatus:
      "Projet participatif — candidature et programme non finalisés",
    assemblyGroup: "Julien Dive siège au groupe Droite Républicaine",
    extraSources: [
      {
        label: "Rétablir l’autorité",
        url: "https://www.nousfrance.fr/programme/autorite/",
      },
      {
        label: "République des territoires",
        url: "https://www.nousfrance.fr/programme/territoires/",
      },
      {
        label: "Société du travail",
        url: "https://www.nousfrance.fr/programme/travail/",
      },
      {
        label: "Protéger l’environnement",
        url: "https://www.nousfrance.fr/programme/environnement/",
      },
      {
        label: "Immigration",
        url: "https://www.nousfrance.fr/programme/immigration/",
      },
      { label: "Europe", url: "https://www.nousfrance.fr/programme/europe/" },
      {
        label: "Pouvoir d’achat",
        url: "https://www.nousfrance.fr/programme/pouvoir-achat/",
      },
    ],
    overview:
      "Nous France ne publie pas encore un programme présidentiel final. Le mouvement organise une démarche participative autour de huit axes : autorité, République des territoires, travail, environnement, immigration, jeunesse, Europe et pouvoir d’achat. Xavier Bertrand assume se préparer pour 2027 tout en indiquant, début août 2026, ne pas être encore officiellement candidat. Cette fiche distingue donc les orientations publiques des mesures qui restent à préciser.",
    measures: [
      {
        area: "Territoires",
        title: "Faire de la décentralisation le principe d’organisation",
        detail:
          "L’État se concentrerait davantage sur le régalien et les grandes orientations, tandis que emploi, formation, santé, logement ou transition seraient plus largement pilotés au plus près du terrain.",
        impact: "Systémique",
        horizon: "5 ans",
        confidence: "faible",
      },
      {
        area: "Travail",
        title: "Replacer travail et pouvoir d’achat au cœur du contrat social",
        detail:
          "Le mouvement veut valoriser davantage l’activité et les revenus du travail ; les instruments précis du programme 2027 restent encore à consolider.",
        impact: "Direct",
        horizon: "1—3 ans",
        confidence: "faible",
      },
      {
        area: "Autorité",
        title:
          "Sécurité, justice et immigration comme missions prioritaires de l’État",
        detail:
          "Xavier Bertrand présente ces fonctions comme les responsabilités nationales que l’État doit mieux assumer, parallèlement à une décentralisation du reste de l’action publique.",
        impact: "Direct",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Culture & jeunesse",
        title: "Culture, école et cohésion comme outils de réconciliation",
        detail:
          "Parmi ses orientations récentes, Xavier Bertrand propose notamment de porter la culture à 1 % du budget de l’État d’ici 2032 et de mieux l’intégrer au parcours scolaire.",
        impact: "Progressif",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un projet à transformer en textes",
        text: "La première étape serait de convertir les huit axes participatifs et les prises de position de campagne en programme chiffré et en priorités législatives.",
      },
      {
        year: "2028",
        title: "Le transfert vers les territoires",
        text: "Santé, emploi, formation, logement ou transition pourraient faire l’objet de nouvelles répartitions de compétences et de financements.",
      },
      {
        year: "2029",
        title: "La preuve par les services publics",
        text: "La promesse de proximité serait évaluée sur les délais de soins, l’école, les transports, la sécurité et la simplicité des décisions locales.",
      },
      {
        year: "2030—32",
        title: "Redressement et réconciliation",
        text: "Le bilan revendiqué dépendrait de la capacité à améliorer travail, autorité, pouvoir d’achat et cohésion sans recréer des inégalités fortes entre territoires.",
      },
    ],
    daily: [
      {
        label: "Territoire",
        title: "Davantage de décisions prises près de chez vous",
        text: "Régions et collectivités auraient plus de responsabilité sur des politiques aujourd’hui très pilotées depuis Paris.",
        image:
          "/illustrations/daily/nous-france/daily-nous-france-01-davantage-de-decisions-prises-pres-de-chez-vous.png",
      },
      {
        label: "Travail",
        title: "Le revenu d’activité devient un repère central",
        text: "Les futures mesures devraient être jugées sur leur capacité à rendre le travail plus rémunérateur et à protéger le pouvoir d’achat.",
        image:
          "/illustrations/daily/nous-france/daily-nous-france-02-le-revenu-dactivite-devient-un-repere-central.png",
      },
      {
        label: "Culture",
        title: "Plus de culture dans l’école et hors de Paris",
        text: "La ligne présentée en août 2026 associe hausse progressive du budget culturel, mécénat et décentralisation de l’offre.",
        image:
          "/illustrations/daily/nous-france/daily-nous-france-03-plus-de-culture-dans-lecole-et-hors-de-paris.png",
      },
    ],
    brakes: [
      {
        title: "Programme encore incomplet",
        text: "Une partie importante des mesures, des coûts et du calendrier n’est pas encore arrêtée : le niveau d’incertitude est donc supérieur à celui d’un programme final publié.",
      },
      {
        title: "Compétences et finances locales",
        text: "Décentraliser davantage exige de redistribuer ressources fiscales, personnels et responsabilités sans creuser les écarts entre territoires.",
      },
      {
        title: "Statut de la candidature",
        text: "Xavier Bertrand se prépare à 2027 mais ne se présente pas encore comme candidat officiellement déclaré ; le corpus peut donc évoluer fortement.",
      },
    ],
  },
  {
    slug: "generation-ecologie",
    dossierStatus: "published",
    short: "GE",
    logo: "/logos/ge-diy.webp",
    name: "Génération Écologie",
    family: "Écologie de la décroissance",
    candidate: "Delphine Batho",
    candidateStatus: "Candidate officiellement investie",
    thesis:
      "Organiser la décroissance et la résilience pour protéger les besoins essentiels et le vivant.",
    color: "#6b8f28",
    soft: "#e2ead2",
    ink: "#29380f",
    programLabel: "Vivre autrement !",
    programDate: "socle programmatique 2023–2026",
    sourceUrl: "https://www.generationecologie.fr/vivre-autrement/",
    sourceName: "Génération Écologie — Vivre autrement !",
    documentStatus:
      "Socle publié — programme présidentiel 2027 en construction",
    assemblyGroup:
      "Aucun groupe propre — Delphine Batho siège au groupe Écologiste et Social",
    extraSources: [
      {
        label: "Notre projet",
        url: "https://www.generationecologie.fr/a-propos/generation-ecologie/notre-projet/",
      },
      {
        label: "Investiture de Delphine Batho",
        url: "https://www.generationecologie.fr/publication/investiture-de-delphine-batho-a-lelection-presidentielle/",
      },
      {
        label: "Pour un État-résilience",
        url: "https://www.generationecologie.fr/app/uploads/2025/06/POUR-UN-ETAT-RESILIENCE-cahier-dacteur-de-Generation-Ecologie.pdf",
      },
    ],
    overview:
      "Génération Écologie assume une rupture nette avec l’objectif de croissance du PIB. Son socle « Vivre autrement ! » vise une réduction de la consommation d’énergie et de matières, la satisfaction des besoins essentiels, la régénération du vivant, davantage de temps de vie et un État organisé pour la résilience. Delphine Batho a été officiellement investie en juin 2026, mais le mouvement dit encore construire le programme de gouvernement qui sera porté en 2027.",
    measures: [
      {
        area: "Économie",
        title: "Faire de la décroissance une politique de transition",
        detail:
          "Le projet veut réduire l’empreinte matérielle et énergétique des pays riches tout en garantissant une vie digne, le temps de vivre et la protection des besoins essentiels.",
        impact: "Systémique",
        horizon: "5 ans et +",
        confidence: "faible",
      },
      {
        area: "Résilience",
        title: "Organiser la sécurité alimentaire, l’eau et l’adaptation",
        detail:
          "État et collectivités devraient anticiper les chocs climatiques en adaptant infrastructures, sécurité civile, accès à l’eau, alimentation et aménagement du territoire.",
        impact: "Structurel",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Vivant & santé",
        title:
          "Régénérer les écosystèmes et faire de la santé environnementale une priorité",
        detail:
          "Biodiversité, alimentation, pollution, agriculture et conditions de vie sont traitées comme un même enjeu de sécurité humaine.",
        impact: "Très visible",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Démocratie",
        title: "Abolir le présidentialisme",
        detail:
          "Le mouvement veut réduire la concentration du pouvoir présidentiel au profit d’institutions plus parlementaires, collégiales et citoyennes.",
        impact: "Institutionnel",
        horizon: "5 ans et +",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Les besoins essentiels comme boussole",
        text: "Budget, adaptation et premières décisions seraient relus à travers énergie, matières, eau, santé, alimentation, inégalités et résilience.",
      },
      {
        year: "2028",
        title: "Un État-résilience sur le terrain",
        text: "Plans locaux d’adaptation, sécurité civile, infrastructures et préservation des ressources devraient devenir plus visibles dans les territoires.",
      },
      {
        year: "2029",
        title: "Le test économique de la décroissance",
        text: "Emploi, recettes publiques et financement social devraient être réorganisés pour que la baisse de certains flux matériels ne se transforme pas en récession subie.",
      },
      {
        year: "2030—32",
        title: "Changer les institutions et les modes de vie",
        text: "Le succès serait jugé moins par la seule croissance du PIB que par la sécurité des besoins, le temps de vie, les inégalités, la santé et l’état des écosystèmes.",
      },
    ],
    daily: [
      {
        label: "Temps",
        title: "Moins de course à la consommation, plus de temps à vivre",
        text: "Le projet cherche à déplacer le centre de gravité du bien-être vers le temps libre, les liens humains, les activités utiles et les services essentiels.",
        image:
          "/illustrations/daily/generation-ecologie/daily-generation-ecologie-01-moins-de-course-a-la-consommation-plus-de-temps-a-vivre.png",
      },
      {
        label: "Territoire",
        title:
          "L’eau, l’alimentation et la chaleur deviennent des sujets de sécurité",
        text: "Les politiques locales seraient davantage organisées autour de l’adaptation, de l’autonomie et de la continuité des besoins vitaux.",
        image:
          "/illustrations/daily/generation-ecologie/daily-generation-ecologie-02-leau-lalimentation-et-la-chaleur-deviennent-des-sujets-de-securite.png",
      },
      {
        label: "Santé",
        title: "L’environnement entre dans la prévention",
        text: "Pollutions, alimentation, biodiversité et conditions de travail seraient traitées comme des déterminants directs de santé publique.",
        image:
          "/illustrations/daily/generation-ecologie/daily-generation-ecologie-03-lenvironnement-entre-dans-la-prevention.png",
      },
    ],
    brakes: [
      {
        title: "Programme 2027 encore en construction",
        text: "Le socle politique est clair, mais beaucoup d’instruments, de montants et de calendriers doivent encore être arrêtés avant l’élection.",
      },
      {
        title: "Équation macroéconomique",
        text: "Une baisse volontaire des consommations matérielles doit être articulée avec emploi, dette, recettes publiques, retraites et protection sociale pour éviter une décroissance subie.",
      },
      {
        title: "Changement institutionnel et culturel",
        text: "Abolir le présidentialisme et modifier en profondeur les habitudes de production et de consommation demanderait des majorités politiques et sociales durables.",
      },
    ],
  },
  {
    slug: "lutte-ouvriere",
    dossierStatus: "published",
    logo: "/logos/lutteouvriere-diy.webp",
    short: "LO",
    name: "Lutte ouvrière",
    family: "Extrême gauche révolutionnaire",
    candidate: "Nathalie Arthaud",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Faire de la présidentielle une tribune pour les revendications du monde du travail et une rupture révolutionnaire avec le capitalisme.",
    color: "#c71920",
    soft: "#f1d7d8",
    ink: "#4b080b",
    programLabel: "Présidentielle 2027 — campagne de Nathalie Arthaud",
    programDate: "brochure officielle de juin 2026",
    sourceUrl:
      "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf",
    sourceName: "Lutte ouvrière — présidentielle 2027",
    documentStatus:
      "Corpus 2027 officiel — programme révolutionnaire, pas un programme de gouvernement classique",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Le Manifeste communiste, notre programme",
        url: "https://www.lutte-ouvriere.org/journal/article/nathalie-arthaud-24nbspmai-le-manifeste-communiste-notreprogramme-194603.html",
      },
      {
        label: "Vers l’élection présidentielle de 2027",
        url: "https://journal.lutte-ouvriere.org/mensuel/article/france-vers-lelection-presidentielle-2027-195201.html",
      },
    ],
    overview:
      "Lutte ouvrière ne présente volontairement pas un catalogue classique de réformes présidentielles. Nathalie Arthaud utilise la campagne pour défendre des revendications immédiates — salaires, emploi, services publics, contrôle des entreprises — et une perspective communiste révolutionnaire : exproprier la grande bourgeoisie et placer les moyens de production sous propriété collective. Le mouvement dit lui-même que cette transformation dépend d’un rapport de force et de luttes du monde du travail, pas du seul résultat électoral.",
    measures: [
      {
        area: "Revenus",
        title: "Augmenter fortement salaires, pensions et allocations",
        detail:
          "La campagne demande une hausse générale des revenus du travail, avec un repère d’au moins 2 200 € nets pour les salaires et une indexation automatique sur l’évolution réelle des prix.",
        impact: "Très direct",
        horizon: "Immédiat",
        confidence: "fort",
      },
      {
        area: "Emploi",
        title: "Répartir le travail entre tous sans perte de salaire",
        detail:
          "Face aux licenciements et au chômage, LO défend la réduction du temps et de la charge de travail, ainsi que des embauches massives dans les secteurs socialement nécessaires.",
        impact: "Structurel",
        horizon: "Rapport de force",
        confidence: "moyen",
      },
      {
        area: "Entreprises",
        title: "Ouvrir les comptes et exproprier les grands groupes",
        detail:
          "Le mouvement veut lever le secret des affaires, rendre publics les comptes et, au-delà du contrôle, retirer aux grands actionnaires la propriété des principaux moyens de production sans indemnité.",
        impact: "Systémique",
        horizon: "Rupture",
        confidence: "faible",
      },
      {
        area: "Internationalisme",
        title: "Refuser la division entre travailleurs français et immigrés",
        detail:
          "LO défend la régularisation des sans-papiers, la liberté de circulation et d’installation et rejette le nationalisme comme réponse à la crise économique et sociale.",
        impact: "Sociétal",
        horizon: "Immédiat à pluriannuel",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Une campagne conçue comme point d’appui",
        text: "Dans la logique propre de LO, le scrutin sert d’abord à populariser les revendications et à organiser les travailleurs plutôt qu’à promettre un calendrier gouvernemental classique.",
      },
      {
        year: "2028",
        title: "Le rapport de force devient déterminant",
        text: "Hausses de salaires, interdiction des licenciements ou ouverture des comptes supposeraient des mobilisations capables d’imposer ces décisions aux grandes entreprises et à l’État.",
      },
      {
        year: "2029",
        title: "Du contrôle à la propriété collective",
        text: "Si la dynamique révolutionnaire décrite par LO se réalisait, la question centrale deviendrait celle de l’expropriation des grands capitalistes et de l’organisation collective de la production.",
      },
      {
        year: "2030—32",
        title: "Une transformation qui dépasse le quinquennat",
        text: "Le projet revendiqué est international et systémique : sa réussite ne se mesure donc pas comme celle d’un programme présidentiel ordinaire limité à cinq ans.",
      },
    ],
    daily: [
      {
        label: "Salaire",
        title: "Le bulletin de paie est la première bataille",
        text: "La revendication centrale est une hausse générale des revenus et leur indexation sur les prix réellement constatés.",
        image:
          "/illustrations/daily/lutte-ouvriere/daily-lutte-ouvriere-01-le-bulletin-de-paie-est-la-premiere-bataille.png",
      },
      {
        label: "Travail",
        title: "Moins d’heures et davantage d’embauches",
        text: "La répartition du travail viserait à réduire chômage, cadence et surcharge sans diminuer les salaires.",
        image:
          "/illustrations/daily/lutte-ouvriere/daily-lutte-ouvriere-02-moins-dheures-et-davantage-dembauches.png",
      },
      {
        label: "Droits",
        title: "Le statut migratoire pèserait moins sur la vie quotidienne",
        text: "Régularisation et liberté de circulation chercheraient à mettre fin à une partie de la précarité administrative des travailleurs étrangers.",
        image:
          "/illustrations/daily/lutte-ouvriere/daily-lutte-ouvriere-03-le-statut-migratoire-peserait-moins-sur-la-vie-quotidienne.png",
      },
    ],
    brakes: [
      {
        title: "Un mode d’application assumé hors du seul cadre électoral",
        text: "LO dit explicitement ne pas croire que son programme révolutionnaire puisse être réalisé simplement par l’élection d’un président et renvoie au rapport de force social.",
      },
      {
        title: "La propriété privée des grands groupes",
        text: "L’expropriation sans indemnité modifierait radicalement le droit de propriété, le financement des entreprises et l’organisation de l’économie, avec des résistances juridiques, économiques et politiques majeures.",
      },
      {
        title:
          "Une transition impossible à chiffrer comme un quinquennat classique",
        text: "Changer le système de propriété et viser une transformation internationale rend très incertain tout indicateur budgétaire ou macroéconomique à horizon 2032.",
      },
    ],
  },
  {
    slug: "debout-la-france",
    dossierStatus: "published",
    logo: "/logos/deboutlafrance-diy.webp",
    short: "DLF",
    name: "Debout la France",
    family: "Droite souverainiste",
    candidate: "Nicolas Dupont-Aignan",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Rendre le pouvoir aux Français, sortir de l’Union européenne et reconstruire une politique nationale de sécurité, de production et de services publics.",
    color: "#2456a4",
    soft: "#dce5f3",
    ink: "#0c2856",
    programLabel: "Projet 2027 — La révolution du bon sens",
    programDate: "actualisation 2025—2026",
    sourceUrl: "https://www.debout-la-france.fr/notre-projet/",
    sourceName: "Debout la France — projet officiel",
    documentStatus: "Programme en actualisation pour 2027 — 32 thèmes publiés",
    assemblyGroup:
      "Aucun groupe actuel — votes historiques de Nicolas Dupont-Aignan",
    extraSources: [
      {
        label: "Annonce officielle de candidature",
        url: "https://www.debout-la-france.fr/actualite/je-suis-candidat-pour/",
      },
      {
        label: "Affaires européennes",
        url: "https://www.debout-la-france.fr/projet/affaires-europeennes/",
      },
      {
        label: "Sécurité",
        url: "https://www.debout-la-france.fr/projet/securite/",
      },
    ],
    overview:
      "Debout la France actualise encore son projet pour 2027, mais la direction politique est nette : Nicolas Dupont-Aignan veut un électrochoc démocratique par le référendum, puis un électrochoc indépendantiste avec la sortie de l’Union européenne. Autour de cette rupture, le corpus officiel développe 32 thèmes portant sur l’ordre, les frontières, la production française, l’énergie, l’école, la santé, les territoires et les protections sociales.",
    measures: [
      {
        area: "Souveraineté",
        title:
          "Sortir de l’Union européenne et retrouver une coopération à la carte",
        detail:
          "La campagne 2027 assume désormais explicitement la sortie de l’UE pour reprendre le contrôle des lois, des frontières, du commerce et des grandes politiques nationales.",
        impact: "Systémique",
        horizon: "Début de mandat",
        confidence: "faible",
      },
      {
        area: "Démocratie",
        title: "Multiplier les référendums et renforcer l’initiative citoyenne",
        detail:
          "Nicolas Dupont-Aignan veut soumettre les grands choix au vote populaire et réorganiser les institutions autour d’une souveraineté nationale plus directe.",
        impact: "Institutionnel",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Ordre",
        title: "Renforcer police, douanes, justice et capacités carcérales",
        detail:
          "Le volet sécurité prévoit davantage d’effectifs de terrain, une forte hausse des places de prison et une politique pénale plus ferme.",
        impact: "Très visible",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Production",
        title:
          "Produire en France et retrouver une souveraineté industrielle, énergétique et numérique",
        detail:
          "Le projet associe préférence productive, soutien aux entreprises françaises, énergie compétitive, nucléaire, recherche et intelligence artificielle souveraine.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Référendums et bras de fer européen",
        text: "La priorité politique serait d’obtenir une légitimité populaire sur les institutions, la souveraineté et la sortie de l’Union européenne, tout en lançant les premières mesures d’ordre public.",
      },
      {
        year: "2028",
        title: "Réorganiser les règles économiques nationales",
        text: "Commerce, monnaie, normes, commande publique, énergie et fiscalité devraient être adaptés au nouveau cadre de souveraineté choisi.",
      },
      {
        year: "2029",
        title: "La production et les services publics comme test",
        text: "Industrie, agriculture, école, santé et territoires deviendraient les principaux indicateurs pour juger si la rupture institutionnelle produit effectivement un redressement concret.",
      },
      {
        year: "2030—32",
        title: "Consolider le nouveau cadre",
        text: "Le succès dépendrait de la stabilité monétaire et commerciale, de l’investissement productif, des finances publiques et de la capacité à maintenir les services essentiels pendant la transition.",
      },
    ],
    daily: [
      {
        label: "Europe",
        title:
          "Des règles nationales remplaceraient une partie du droit européen",
        text: "Normes économiques, frontières, agriculture, commerce ou énergie seraient davantage décidés au niveau français.",
        image:
          "/illustrations/daily/debout-la-france/daily-debout-la-france-01-des-regles-nationales-remplaceraient-une-partie-du-droit-europeen.png",
      },
      {
        label: "Sécurité",
        title: "Plus de présence policière et de capacités de justice",
        text: "Effectifs et investissements pénitentiaires sont présentés comme des conditions d’une réponse plus rapide à la délinquance.",
        image:
          "/illustrations/daily/debout-la-france/daily-debout-la-france-02-plus-de-presence-policiere-et-de-capacites-de-justice.png",
      },
      {
        label: "Consommation",
        title:
          "Le “produire en France” deviendrait un critère de politique économique",
        text: "Commande publique, industrie, agriculture, énergie et innovation seraient orientées vers l’autonomie productive nationale.",
        image:
          "/illustrations/daily/debout-la-france/daily-debout-la-france-03-le-produire-en-france-deviendrait-un-critere-de-politique-economique.png",
      },
    ],
    brakes: [
      {
        title: "Une sortie de l’UE à organiser",
        text: "Le projet suppose une transition juridique, monétaire, commerciale et diplomatique dont les modalités et le coût peuvent fortement modifier le reste du programme.",
      },
      {
        title: "Majorité, référendums et Constitution",
        text: "Plusieurs transformations exigeraient lois, révisions institutionnelles ou consultations populaires ; une victoire présidentielle ne suffirait donc pas à elle seule.",
      },
      {
        title: "Programme 2027 encore en actualisation",
        text: "Les 32 thèmes officiels sont publiés, mais certaines pages sont plus anciennes ou moins détaillées que les nouvelles fiches estampillées “Projet 2027”.",
      },
    ],
  },
  {
    slug: "les-patriotes",
    dossierStatus: "published",
    logo: "/logos/lespatriotes-diy.webp",
    short: "LP",
    name: "Les Patriotes",
    family: "Souverainisme et Frexit",
    candidate: "Florian Philippot",
    candidateStatus:
      "Candidature déclarée, retrait possible en cas de candidature de rassemblement",
    thesis:
      "Faire du Frexit la clé de voûte d’un retour à la souveraineté politique, monétaire, énergétique et diplomatique.",
    color: "#1d4b8f",
    soft: "#dbe3ef",
    ink: "#102c58",
    programLabel: "Grandes orientations pour un Projet patriote",
    programDate: "édition septembre 2025 — socle actuel",
    sourceUrl:
      "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf",
    sourceName: "Les Patriotes — Projet pour la France",
    documentStatus:
      "Projet officiel détaillé — socle actuel de la campagne 2027",
    assemblyGroup: "Aucun groupe actuel — votes historiques de José Évrard",
    extraSources: [
      {
        label: "Page Projet pour la France",
        url: "https://les-patriotes.fr/projetpourlafrance/",
      },
      {
        label: "Charte des Patriotes",
        url: "https://les-patriotes.fr/la-charte/",
      },
    ],
    overview:
      "Le projet actuel des Patriotes fait du Frexit la condition préalable à presque toutes les autres politiques : sortie de l’Union européenne, de l’euro, de Schengen, de la CEDH, de l’OTAN et de l’OMS. Le mouvement associe ce retour à la souveraineté à un RIC constitutionnel, un franc national, un monopole public d’EDF et du nucléaire, une politique industrielle et agricole protectionniste, une forte restriction migratoire et une diplomatie non alignée.",
    measures: [
      {
        area: "Frexit",
        title: "Quitter UE, euro, Schengen, CEDH, OTAN et OMS",
        detail:
          "Le mouvement présente ces sorties comme la condition juridique et politique permettant de reprendre le contrôle des lois, de la monnaie, des frontières et de la diplomatie.",
        impact: "Systémique",
        horizon: "Début de mandat",
        confidence: "faible",
      },
      {
        area: "Énergie",
        title:
          "Rétablir un monopole public d’EDF et relancer fortement le nucléaire",
        detail:
          "Les Patriotes veulent quitter le marché européen de l’électricité, stopper le développement éolien et exploiter l’avantage nucléaire français pour réduire les prix.",
        impact: "Structurel",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Économie",
        title:
          "Réindustrialiser avec protection commerciale et monnaie nationale",
        detail:
          "Le projet lie nouveau franc, contrôle commercial, commande publique et soutien aux productions françaises afin de réduire les dépendances extérieures.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "faible",
      },
      {
        area: "Institutions",
        title: "Créer le RIC sur tout sujet et lutter contre la corruption",
        detail:
          "Le RIC serait inscrit dans la Constitution et les révisions constitutionnelles seraient elles-mêmes soumises au référendum ; des sanctions d’inéligibilité renforcées viseraient la corruption.",
        impact: "Institutionnel",
        horizon: "An 1",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le Frexit comme première séquence",
        text: "Le mandat serait immédiatement dominé par les procédures de sortie, le retour à la souveraineté monétaire et le rétablissement du contrôle national des frontières et des règles économiques.",
      },
      {
        year: "2028",
        title: "Franc, énergie et protection économique",
        text: "La nouvelle monnaie, le marché national de l’électricité et les instruments de protection des productions françaises seraient testés en conditions réelles.",
      },
      {
        year: "2029",
        title: "Réindustrialisation et services publics",
        text: "Le résultat se mesurerait sur l’emploi industriel, les prix de l’énergie, l’agriculture, les soins, l’école et la présence des services publics.",
      },
      {
        year: "2030—32",
        title: "Stabiliser la souveraineté retrouvée",
        text: "Le scénario favorable suppose que commerce, monnaie, dette et relations diplomatiques se stabilisent sans crise financière ni isolement économique durable.",
      },
    ],
    daily: [
      {
        label: "Monnaie",
        title: "Le franc remplacerait l’euro",
        text: "Salaires, prix, épargne, contrats et dette devraient être convertis et fonctionner dans un nouveau cadre monétaire national.",
        image:
          "/illustrations/daily/les-patriotes/daily-les-patriotes-01-le-franc-remplacerait-leuro.png",
      },
      {
        label: "Énergie",
        title:
          "L’électricité serait davantage pilotée comme un service public national",
        text: "EDF retrouverait un monopole et le nucléaire serait privilégié, avec arrêt du développement éolien voulu par le mouvement.",
        image:
          "/illustrations/daily/les-patriotes/daily-les-patriotes-02-lelectricite-serait-davantage-pilotee-comme-un-service-public-national.png",
      },
      {
        label: "Frontières",
        title: "Les contrôles migratoires et commerciaux seraient renforcés",
        text: "La sortie de Schengen et la politique de souveraineté rendraient les frontières plus présentes dans les déplacements et les échanges.",
        image:
          "/illustrations/daily/les-patriotes/daily-les-patriotes-03-les-controles-migratoires-et-commerciaux-seraient-renforces.png",
      },
    ],
    brakes: [
      {
        title: "Une rupture simultanée avec plusieurs organisations",
        text: "Sortir à la fois de l’UE, de l’euro, de Schengen, de la CEDH, de l’OTAN et de l’OMS concentre de nombreux risques juridiques, financiers, commerciaux et diplomatiques.",
      },
      {
        title: "Le passage à une nouvelle monnaie",
        text: "Conversion des contrats, dette, banques, inflation, taux de change et mouvements de capitaux seraient les points les plus sensibles de la transition.",
      },
      {
        title:
          "Un document actuel mais pas encore un programme présidentiel 2027 final",
        text: "Le livret de septembre 2025 est le corpus officiel détaillé disponible aujourd’hui ; certaines mesures peuvent encore être modifiées avant le scrutin.",
      },
    ],
  },
  {
    slug: "upr",
    dossierStatus: "published",
    logo: "/logos/upr-diy.webp",
    short: "UPR",
    name: "Union populaire républicaine",
    family: "Souverainisme et sortie de l’Union européenne",
    candidate: "François Asselineau",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Sortir de l’UE, de l’euro et de l’OTAN pour rendre applicables des réformes économiques, sociales et institutionnelles nationales.",
    color: "#233f67",
    soft: "#dbe1e9",
    ink: "#152942",
    programLabel: "Programme de libération nationale — corpus provisoire",
    programDate: "programme 2022 · édition 2027 en cours d’élaboration",
    sourceUrl: "https://upr.fr/notre-programme",
    sourceName: "UPR — programme officiel",
    documentStatus:
      "Programme 2027 non publié — corpus 2022 utilisé provisoirement",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Programme présidentiel complet de 2022",
        url: "https://upr.fr/actualites/programme-presidentiel-2022",
      },
      {
        label: "Lancement de la campagne 2027",
        url: "https://upr.fr/actualites/francois-asselineau-candidat-presidentielle-2027/",
      },
    ],
    overview:
      "L’UPR annonce que son programme présidentiel 2027 est encore en cours d’élaboration. Pour ne pas inventer des mesures absentes, cette fiche utilise provisoirement le dernier programme présidentiel complet de François Asselineau, celui de 2022, tout en le signalant partout. Son architecture repose sur la sortie de l’Union européenne, de l’euro et de l’OTAN, présentée comme la condition nécessaire à 27 engagements économiques, sociaux, institutionnels et diplomatiques, plus un engagement de remise en jeu du mandat à mi-parcours si la moitié n’est pas tenue.",
    measures: [
      {
        area: "Souveraineté",
        title: "Sortir de l’UE, de l’euro et de l’OTAN",
        detail:
          "Le programme 2022 présente ces sorties comme le préalable à toutes les autres politiques, afin de reprendre les compétences monétaires, commerciales, budgétaires et diplomatiques.",
        impact: "Systémique",
        horizon: "Début de mandat",
        confidence: "faible",
      },
      {
        area: "Pouvoir d’achat",
        title: "Augmenter le SMIC brut de 24 % sur cinq ans",
        detail:
          "Le dernier programme complet prévoit une hausse cumulée du SMIC et une revalorisation parallèle des rémunérations publiques de terrain.",
        impact: "Très direct",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Services publics",
        title: "Réarmer l’hôpital, l’école et les services publics",
        detail:
          "Le corpus 2022 prévoit notamment 30 000 lits hospitaliers supplémentaires et un retour plus large des services publics sur le territoire.",
        impact: "Très visible",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Démocratie",
        title: "Installer le RIC et démocratiser les institutions",
        detail:
          "Le référendum d’initiative citoyenne figure parmi les engagements structurants, avec une volonté plus générale de rendre les décisions nationales directement contrôlables par les citoyens.",
        impact: "Institutionnel",
        horizon: "An 1—2",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title:
          "Un scénario provisoire tant que le nouveau programme n’est pas publié",
        text: "La campagne devrait d’abord remplacer ou confirmer les 28 engagements de 2022. Toute projection est donc susceptible d’être révisée dès la publication du corpus 2027.",
      },
      {
        year: "2028",
        title: "La transition de souveraineté",
        text: "Si les principes de 2022 sont maintenus, monnaie, commerce, alliances et droit européen constitueraient la première grande phase de transformation.",
      },
      {
        year: "2029",
        title: "Mettre à l’épreuve les 27 engagements",
        text: "Pouvoir d’achat, emploi, hôpital, école, agriculture, logement, sécurité et libertés serviraient de tests concrets au milieu du mandat.",
      },
      {
        year: "2030—32",
        title: "Le bilan de la “libération nationale”",
        text: "Le succès dépendrait de la stabilisation du franc, du commerce, des finances publiques et de la capacité à financer les engagements sociaux après la rupture européenne.",
      },
    ],
    daily: [
      {
        label: "Pouvoir d’achat",
        title: "Une hausse programmée du SMIC",
        text: "Dans le corpus 2022, le SMIC brut augmenterait de 24 % sur le quinquennat, avec un effet recherché sur l’ensemble de l’échelle salariale.",
        image:
          "/illustrations/daily/upr/daily-upr-01-une-hausse-programmee-du-smic.png",
      },
      {
        label: "Santé",
        title: "Plus de lits et un hôpital public renforcé",
        text: "Le dernier programme complet chiffre à 30 000 le nombre de lits hospitaliers supplémentaires à créer.",
        image:
          "/illustrations/daily/upr/daily-upr-02-plus-de-lits-et-un-hopital-public-renforce.png",
      },
      {
        label: "Souveraineté",
        title: "Le quotidien économique passerait par une nouvelle monnaie",
        text: "Une sortie de l’euro modifierait paiements, épargne, contrats, prix et financement de l’économie, avec une transition dont les détails 2027 restent à publier.",
        image:
          "/illustrations/daily/upr/daily-upr-03-le-quotidien-economique-passerait-par-une-nouvelle-monnaie.png",
      },
    ],
    brakes: [
      {
        title: "Le programme 2027 n’est pas encore publié",
        text: "C’est la limite principale de cette fiche : le corpus 2022 est une référence provisoire, pas une promesse que toutes ces mesures seront reprises à l’identique en 2027.",
      },
      {
        title: "La triple rupture UE-euro-OTAN",
        text: "Le calendrier juridique et diplomatique, la transition monétaire et les réactions financières conditionneraient fortement le reste du projet.",
      },
      {
        title: "Une majorité et des capacités d’exécution nécessaires",
        text: "Les engagements sociaux, les nationalisations ou relocalisations et les transformations institutionnelles exigeraient lois, budgets et administration capables de suivre simultanément plusieurs chantiers.",
      },
    ],
  },
  {
    slug: "solution-democratique",
    dossierStatus: "published",
    logo: "/logos/solutiondemocratique-diy.webp",
    short: "SD",
    name: "Solution démocratique",
    family: "Démocratie directe",
    candidate: "Clara Egger",
    candidateStatus: "Candidature déclarée",
    thesis:
      "Changer d’abord les règles démocratiques : RIC constituant et décentralisation ascendante.",
    color: "#744495",
    soft: "#e8dff0",
    ink: "#31183f",
    programLabel: "La démocratie directe comme programme unique",
    programDate: "programme et calendrier 2027",
    sourceUrl:
      "https://solutiondemocratique.fr/notre-solution/calendrier-president/",
    sourceName: "Solution Démocratique — programme officiel 2027",
    documentStatus:
      "Programme volontairement limité à deux réformes institutionnelles",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "La solution : démocratie directe",
        url: "https://solutiondemocratique.fr/notre-solution/",
      },
      {
        label: "Présentation de Clara Egger",
        url: "https://solutiondemocratique.fr/notre-solution/calendrier-president/",
      },
    ],
    overview:
      "Solution Démocratique assume de ne pas proposer un catalogue économique, social ou écologique. Clara Egger veut utiliser la présidentielle pour modifier les règles du jeu : créer un référendum d’initiative citoyenne constituant et permettre une décentralisation ascendante, commune par commune. Le président redeviendrait ensuite un arbitre et les choix de politiques publiques seraient davantage décidés directement par les citoyens.",
    measures: [
      {
        area: "Constitution",
        title: "Créer le RIC constituant",
        detail:
          "Permettre aux citoyens de proposer une modification constitutionnelle et rendre obligatoire un référendum pour toute révision de la Constitution.",
        impact: "Systémique",
        horizon: "2027",
        confidence: "moyen",
      },
      {
        area: "Territoires",
        title: "Décentraliser par le bas",
        detail:
          "Donner aux communes la possibilité de reprendre des compétences et de définir davantage leurs règles démocratiques locales.",
        impact: "Institutionnel",
        horizon: "2027—28",
        confidence: "moyen",
      },
      {
        area: "Présidence",
        title: "Rendre au président un rôle d’arbitre",
        detail:
          "Le projet refuse l’idée d’un président porteur d’un programme exhaustif et cherche à rendre la décision politique plus directement citoyenne.",
        impact: "Institutionnel",
        horizon: "Dès le mandat",
        confidence: "faible",
      },
      {
        area: "Méthode",
        title: "Un calendrier référendaire annoncé",
        detail:
          "Le mouvement prévoit le dépôt rapide de deux textes, puis des référendums à l’automne 2027 si le calendrier peut être juridiquement tenu.",
        impact: "Très direct",
        horizon: "100 jours—oct. 2027",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Les deux textes fondateurs",
        text: "Le calendrier publié prévoit un gouvernement de transition, le dépôt des réformes par l’article 11 et des référendums le 9 octobre 2027.",
      },
      {
        year: "2028",
        title: "La décentralisation commune par commune",
        text: "Après un éventuel oui, les communes pourraient engager le transfert de règles et compétences selon le mécanisme ascendant proposé.",
      },
      {
        year: "2029",
        title: "La démocratie directe à l’épreuve",
        text: "Le fonctionnement concret dépendrait de la participation, du contrôle constitutionnel, des institutions et de la manière dont les référendums sont organisés.",
      },
      {
        year: "2030—32",
        title: "Un président moins programmatique",
        text: "Si le système fonctionne comme prévu, les grandes décisions ne découleraient plus d’un catalogue présidentiel unique mais de procédures démocratiques plus fréquentes.",
      },
    ],
    daily: [
      {
        label: "Vote",
        title: "Des référendums plus fréquents",
        text: "Le changement le plus visible serait la possibilité de participer directement à des décisions institutionnelles et, à terme, à davantage de choix publics.",
        image:
          "/illustrations/daily/solution-democratique/daily-solution-democratique-01-des-referendums-plus-frequents.png",
      },
      {
        label: "Mairie",
        title: "Plus de décisions au niveau communal",
        text: "Les collectivités volontaires pourraient demander davantage de compétences et adapter leur organisation démocratique.",
        image:
          "/illustrations/daily/solution-democratique/daily-solution-democratique-02-plus-de-decisions-au-niveau-communal.png",
      },
      {
        label: "Présidence",
        title: "Moins de promesses sectorielles venues de l’Élysée",
        text: "Santé, retraite, fiscalité ou écologie ne sont volontairement pas tranchées dans le programme présidentiel de Solution Démocratique.",
        image:
          "/illustrations/daily/solution-democratique/daily-solution-democratique-03-moins-de-promesses-sectorielles-venues-de-lelysee.png",
      },
    ],
    brakes: [
      {
        title: "Chemin constitutionnel contestable",
        text: "L’utilisation de l’article 11 pour une réforme constitutionnelle aussi profonde pourrait susciter un conflit juridique et politique majeur.",
      },
      {
        title: "Aucune majorité garantie",
        text: "Même avec l’Élysée, la mise en œuvre dépendrait des institutions, du gouvernement, du Parlement et du Conseil constitutionnel.",
      },
      {
        title: "Pas de programme économique à projeter",
        text: "Le mouvement le revendique : il n’existe pas de trajectoire présidentielle propre sur la dette, le chômage, les retraites ou la fiscalité à transformer honnêtement en chiffres.",
      },
    ],
  },
  {
    slug: "equinoxe",
    dossierStatus: "published",
    logo: "/logos/equinoxe-diy.webp",
    short: "ÉQ",
    name: "Équinoxe",
    family: "Écologie pragmatique",
    candidate: "Antoine Mikolajczak",
    candidateStatus: "Désigné par les adhérents d’Équinoxe",
    thesis:
      "Décider collectivement, produire en France et vivre en bonne santé dans les limites planétaires.",
    color: "#217b70",
    soft: "#d9ebe8",
    ink: "#123832",
    programLabel: "Priorités présidentielles + manifeste + contre-budget",
    programDate: "corpus 2025—2026 ; programme 2027 encore en finalisation",
    sourceUrl: "https://parti-equinoxe.fr/qui-est-antoine-mikolajczak/",
    sourceName: "Équinoxe — campagne présidentielle officielle",
    documentStatus: "Programme 2027 annoncé comme prochainement disponible",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Contre-budget 2026",
        url: "https://parti-equinoxe.fr/contre-budget-2026/",
      },
      {
        label: "Actualités et positions",
        url: "https://parti-equinoxe.fr/actualites/",
      },
    ],
    overview:
      "Équinoxe présente Antoine Mikolajczak comme son candidat mais indique encore que le programme présidentiel complet arrive prochainement. La fiche combine donc les trois priorités déjà officialisées — décider collectivement, produire en France, vivre en bonne santé — avec le manifeste, le contre-budget 2026 et les positions thématiques publiques. L’écologie est traitée comme une contrainte transversale plutôt que comme un chapitre isolé.",
    measures: [
      {
        area: "Démocratie",
        title: "Donner plus de pouvoirs aux territoires et aux citoyens",
        detail:
          "Simplifier les règles, décentraliser davantage et créer de nouveaux espaces de participation pour réduire la distance avec la décision publique.",
        impact: "Institutionnel",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Industrie",
        title: "Relocaliser les productions jugées essentielles",
        detail:
          "Choisir collectivement les productions agricoles et industrielles à sécuriser en France tout en respectant les limites planétaires.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Santé",
        title: "Agir sur les soins et leurs causes environnementales",
        detail:
          "Réduire déserts médicaux, pollution et mauvaise alimentation en reliant santé, agriculture, air et conditions de travail.",
        impact: "Progressif",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Budget",
        title: "Ramener le déficit autour de 3 %",
        detail:
          "Le contre-budget 2026 propose une trajectoire de responsabilité budgétaire et prépare des réformes structurelles encore en construction pour 2027.",
        impact: "Macroéconomique",
        horizon: "2027 et après",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Finaliser le programme et stabiliser les comptes",
        text: "Le premier test serait de transformer les priorités de campagne et le contre-budget en lois compatibles avec une trajectoire de déficit proche de 3 %.",
      },
      {
        year: "2028",
        title: "Relocalisations et décentralisation",
        text: "Les décisions industrielles, agricoles et territoriales commencent à produire des investissements et des changements réglementaires visibles.",
      },
      {
        year: "2029",
        title: "Santé et climat deviennent un même chantier",
        text: "Prévention, alimentation, énergie, mobilité et adaptation seraient évaluées ensemble plutôt que ministère par ministère.",
      },
      {
        year: "2030—32",
        title: "Le test du pragmatisme",
        text: "Le bilan dépendrait de la capacité à concilier sobriété matérielle, industrie nationale, services publics et discipline des finances publiques.",
      },
    ],
    daily: [
      {
        label: "Territoire",
        title: "Davantage de décisions prises localement",
        text: "Collectivités et citoyens auraient plus d’espace pour adapter les politiques aux réalités locales.",
        image:
          "/illustrations/daily/equinoxe/daily-equinoxe-01-davantage-de-decisions-prises-localement.png",
      },
      {
        label: "Consommation",
        title: "Plus de production française ciblée",
        text: "Certains achats pourraient provenir davantage de filières nationales ou européennes, avec un arbitrage entre prix, souveraineté et impact écologique.",
        image:
          "/illustrations/daily/equinoxe/daily-equinoxe-02-plus-de-production-francaise-ciblee.png",
      },
      {
        label: "Santé",
        title: "La prévention gagnerait du terrain",
        text: "Alimentation, pollution de l’air, conditions de travail et accès aux soins seraient traités comme un même enjeu de santé.",
        image:
          "/illustrations/daily/equinoxe/daily-equinoxe-03-la-prevention-gagnerait-du-terrain.png",
      },
    ],
    brakes: [
      {
        title: "Programme 2027 encore incomplet",
        text: "La campagne annonce de nouvelles mesures dans les prochains mois : les chapitres actuels devront donc être actualisés.",
      },
      {
        title: "Arbitrage croissance-sobriété",
        text: "Relocaliser et investir tout en réduisant l’empreinte matérielle impose des choix sectoriels difficiles.",
      },
      {
        title: "Trajectoire budgétaire exigeante",
        text: "Ramener rapidement le déficit vers 3 % tout en investissant dans santé, industrie et transition suppose des économies et recettes politiquement sensibles.",
      },
    ],
  },
  {
    slug: "modem",
    dossierStatus: "published",
    logo: "/logos/modem-diy.webp",
    short: "MD",
    name: "Mouvement démocrate",
    family: "Centre démocrate et européen",
    candidate: "Aucun candidat désigné",
    candidateStatus: "François Bayrou a exclu d’être candidat en 2027",
    thesis:
      "Réformer par le compromis, la décentralisation, l’Europe et une gestion plus soutenable des finances publiques.",
    color: "#ee8a20",
    soft: "#f6e4cf",
    ink: "#4c2605",
    programLabel: "Nos priorités pour la France et l’Europe",
    programDate: "corpus permanent + orientations budgétaires 2025—2026",
    sourceUrl: "https://www.mouvementdemocrate.fr/programme",
    sourceName: "Mouvement Démocrate — Nos priorités",
    documentStatus:
      "Corpus de parti ; aucun programme présidentiel 2027 finalisé",
    assemblyGroup: "Les Démocrates",
    extraSources: [
      {
        label: "Fiscalité et dépenses publiques",
        url: "https://www.mouvementdemocrate.fr/programme/fiscalite-et-depenses-publiques-2439",
      },
      {
        label: "Transition écologique",
        url: "https://www.mouvementdemocrate.fr/programme/transition-ecologique-2432",
      },
    ],
    overview:
      "Le MoDem dispose d’un corpus structuré en six priorités mais n’a pas encore de candidat ni de programme présidentiel 2027 autonome. La fiche synthétise donc ses propositions durables et la ligne budgétaire récente défendue par François Bayrou et les responsables centristes : Europe renforcée, démocratie plus représentative, transition écologique territorialisée, fiscalité simplifiée, décentralisation et solidarités.",
    measures: [
      {
        area: "Finances",
        title: "Ramener progressivement le déficit sous 3 %",
        detail:
          "La ligne récente du mouvement privilégie plusieurs années de redressement des comptes plutôt qu’un ajustement brutal en une seule année.",
        impact: "Macroéconomique",
        horizon: "2026—29",
        confidence: "moyen",
      },
      {
        area: "Fiscalité",
        title: "Fusionner CSG et impôt sur le revenu",
        detail:
          "Le corpus propose une fiscalité des personnes plus lisible et progressive, avec révision du barème et du quotient familial.",
        impact: "Très direct",
        horizon: "1—3 ans",
        confidence: "faible",
      },
      {
        area: "Démocratie",
        title: "Introduire davantage de proportionnelle",
        detail:
          "Rendre les assemblées plus représentatives et compléter la démocratie représentative par de nouveaux outils citoyens.",
        impact: "Institutionnel",
        horizon: "1—3 ans",
        confidence: "moyen",
      },
      {
        area: "État",
        title: "Achever la décentralisation et supprimer les doublons",
        detail:
          "Clarifier les compétences entre État et collectivités pour améliorer l’efficacité des services publics.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un programme dépendant du candidat ou de la coalition",
        text: "Sans candidat propre désigné, les priorités MoDem seraient probablement négociées dans un accord de coalition ou de soutien.",
      },
      {
        year: "2028",
        title: "Fiscalité et organisation territoriale",
        text: "Les réformes de CSG-IR et de compétences locales exigeraient plusieurs lois et une transition administrative importante.",
      },
      {
        year: "2029",
        title: "Le rendez-vous des 3 %",
        text: "La trajectoire budgétaire récente vise un retour sous la norme européenne autour de la fin de la décennie.",
      },
      {
        year: "2030—32",
        title: "Un centrisme jugé sur l’efficacité",
        text: "Le résultat se mesurerait à la qualité des services publics, à la dette, à la représentation politique et à la capacité de compromis européen.",
      },
    ],
    daily: [
      {
        label: "Impôts",
        title: "Une fiche fiscale potentiellement plus simple",
        text: "La fusion CSG-IR modifierait profondément le prélèvement à la source et la lecture de l’impôt sur les revenus.",
        image:
          "/illustrations/daily/modem/daily-modem-01-une-fiche-fiscale-potentiellement-plus-simple.png",
      },
      {
        label: "Collectivité",
        title: "Moins de compétences imbriquées",
        text: "La décentralisation cherche à identifier plus clairement qui décide et qui paie pour chaque service.",
        image:
          "/illustrations/daily/modem/daily-modem-02-moins-de-competences-imbriquees.png",
      },
      {
        label: "Écologie",
        title: "Des règles adaptées aux territoires",
        text: "Le MoDem défend des objectifs écologiques différenciés selon les réalités urbaines, rurales et agricoles.",
        image:
          "/illustrations/daily/modem/daily-modem-03-des-regles-adaptees-aux-territoires.png",
      },
    ],
    brakes: [
      {
        title: "Pas de candidat ni de contrat 2027 propre",
        text: "Les propositions peuvent être reprises, amendées ou abandonnées selon la coalition présidentielle choisie.",
      },
      {
        title: "Réformes fiscales techniquement lourdes",
        text: "Fusionner deux grands prélèvements impose de gérer niches, familles, taux, redistribution et transitions sans créer de perdants non anticipés.",
      },
      {
        title: "Réduire le déficit sans dégrader les services",
        text: "La difficulté centrale consiste à produire des économies durables alors que santé, école, justice et collectivités sont déjà sous tension.",
      },
    ],
  },
  {
    slug: "pcf",
    dossierStatus: "published",
    logo: "/logos/pcf-diy.webp",
    short: "PCF",
    name: "Parti communiste français",
    family: "Gauche communiste",
    candidate: "Fabien Roussel",
    candidateStatus:
      "Candidature communiste portée par Fabien Roussel ; validation militante prévue à la rentrée 2026",
    thesis:
      "Reconstruire la France par le travail, les services publics, la production et une planification écologique socialement populaire.",
    color: "#df1b2f",
    soft: "#f3d8dc",
    ink: "#4a0811",
    programLabel: "40e Congrès + Jours heureux + Empreinte 2050",
    programDate:
      "corpus actualisé en juillet 2026 ; programme présidentiel encore à finaliser",
    sourceUrl: "https://congres2026.pcf.fr/",
    sourceName: "PCF — 40e Congrès",
    documentStatus:
      "Orientation 2026 adoptée ; plateforme présidentielle 2027 en construction",
    assemblyGroup: "GDR — votes des députés PCF isolés",
    extraSources: [
      {
        label: "Base commune « Un communisme de conquêtes »",
        url: "https://congres2026.pcf.fr/les_textes_soumis_aux_communistes",
      },
      {
        label: "Plan climat Empreinte 2050",
        url: "https://www.pcf.fr/plan_climat_empreinte_2050",
      },
    ],
    overview:
      "Le PCF sort de son 40e Congrès avec une ligne de reconquête du monde du travail, de la production et des pouvoirs économiques. Le programme présidentiel complet n’est pas encore publié ; la fiche s’appuie sur l’orientation 2026, le socle des Jours heureux et le plan climat Empreinte 2050. L’ensemble combine hausse des revenus, services publics, réindustrialisation, propriété publique dans des secteurs stratégiques et planification écologique avec nucléaire et renouvelables.",
    measures: [
      {
        area: "Travail",
        title: "Sécuriser l’emploi, les salaires et la formation",
        detail:
          "Renforcer les droits des travailleurs, la progression des salaires et la formation avec continuité de revenu, en donnant davantage de pouvoir dans l’entreprise.",
        impact: "Très direct",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Industrie",
        title: "Réindustrialiser et reprendre des pouvoirs économiques",
        detail:
          "Orienter le crédit, les aides et les investissements vers les productions utiles, avec davantage de propriété et de contrôle publics stratégiques.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Mettre en œuvre Empreinte 2050",
        detail:
          "Planifier énergie, transports, bâtiment, agriculture et industrie pour la neutralité carbone, avec nucléaire, hydraulique et renouvelables.",
        impact: "Structurel",
        horizon: "Long terme",
        confidence: "moyen",
      },
      {
        area: "Services publics",
        title: "Renforcer santé, école et proximité",
        detail:
          "Recruter, investir et réduire la logique de marché dans les services essentiels tout en luttant contre les déserts territoriaux.",
        impact: "Très visible",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Une plateforme communiste à transformer en lois",
        text: "La première étape serait de finaliser le contrat présidentiel puis d’engager salaires, services publics et planification industrielle.",
      },
      {
        year: "2028",
        title: "Le retour de l’État producteur",
        text: "Énergie, industrie, transports et crédit deviendraient des instruments plus directs de politique économique.",
      },
      {
        year: "2029",
        title: "Le coût de la transformation",
        text: "Les investissements publics seraient confrontés à la dette, aux recettes fiscales et aux règles européennes.",
      },
      {
        year: "2030—32",
        title: "Emploi et décarbonation comme juge de paix",
        text: "Le succès se mesurerait à la création d’emplois productifs, au recul des factures énergétiques et aux émissions réellement évitées.",
      },
    ],
    daily: [
      {
        label: "Travail",
        title: "Plus de droits et de négociation sur la production",
        text: "Les salariés seraient davantage associés aux décisions d’entreprise et les politiques publiques chercheraient à tirer les salaires vers le haut.",
        image:
          "/illustrations/daily/pcf/daily-pcf-01-plus-de-droits-et-de-negociation-sur-la-production.png",
      },
      {
        label: "Énergie",
        title: "Un système plus public et décarboné",
        text: "Nucléaire, hydraulique et renouvelables seraient coordonnés dans une stratégie nationale avec objectif de prix plus stables.",
        image:
          "/illustrations/daily/pcf/daily-pcf-02-un-systeme-plus-public-et-decarbone.png",
      },
      {
        label: "Services publics",
        title: "Davantage de présence humaine",
        text: "Le projet mise sur recrutements et investissements dans l’hôpital, l’école, le rail et les services de proximité.",
        image:
          "/illustrations/daily/pcf/daily-pcf-03-davantage-de-presence-humaine.png",
      },
    ],
    brakes: [
      {
        title: "Programme présidentiel final encore à écrire",
        text: "Le congrès fixe la ligne et consolide les travaux existants, mais le détail 2027 peut encore évoluer.",
      },
      {
        title: "Besoin massif de financement",
        text: "Industrie, climat et services publics demandent beaucoup de capital au moment où la dette publique est déjà élevée.",
      },
      {
        title:
          "Conflits avec la logique de marché et certaines règles européennes",
        text: "Contrôle public, aides ciblées, prix et planification pourraient ouvrir des négociations juridiques et économiques importantes.",
      },
    ],
  },
  {
    slug: "udr",
    dossierStatus: "published",
    logo: "/logos/udr-diy.webp",
    short: "UDR",
    name: "Union des droites pour la République",
    family: "Droite nationale et conservatrice",
    candidate: "Marine Le Pen (RN)",
    candidateStatus:
      "Pas de candidat propre annoncé ; l’UDR soutient la candidature RN",
    thesis:
      "Alléger fortement l’État, baisser les impôts, capitaliser une partie des retraites et durcir la politique régalienne.",
    color: "#143f77",
    soft: "#dae2ec",
    ink: "#071d39",
    programLabel: "Grand Forum des Libertés",
    programDate: "Actes I à IV, 2025—2026",
    sourceUrl: "https://www.udr.fr/grandforumlibertes",
    sourceName: "UDR — Grand Forum des Libertés",
    documentStatus:
      "Programme de parti détaillé ; contribution à une alliance présidentielle avec le RN",
    assemblyGroup: "Union des droites pour la République",
    extraSources: [
      {
        label: "Acte I — Simplifions et libérons la France",
        url: "https://www.udr.fr/livretactei",
      },
      {
        label: "Acte II — Révolution fiscale",
        url: "https://www.udr.fr/livretacteii",
      },
    ],
    overview:
      "L’UDR ne présente pas de candidat présidentiel propre mais a construit un programme très chiffré autour du Grand Forum des Libertés. Il propose un choc de simplification de l’État, une forte baisse de la fiscalité sur le travail et le patrimoine, un système de retraite hybride avec capitalisation et une orientation nationale-conservatrice sur immigration, sécurité et souveraineté. La fiche analyse ce corpus propre, pas le programme du RN qu’il soutient.",
    measures: [
      {
        area: "État",
        title: "Supprimer un tiers des agences et créer les Provinces",
        detail:
          "Réduire fortement opérateurs et normes, limiter les ministères et remplacer régions, départements et métropoles par une nouvelle collectivité provinciale.",
        impact: "Systémique",
        horizon: "5 ans",
        confidence: "faible",
      },
      {
        area: "Fiscalité",
        title: "Supprimer CSG-CRDS sur les salaires",
        detail:
          "L’UDR présente la mesure comme l’équivalent d’un treizième mois net, avec un impôt sur le revenu simplifié à 0 %, 5 % et 20 %.",
        impact: "Très direct",
        horizon: "An 1—2",
        confidence: "faible",
      },
      {
        area: "Retraites",
        title: "Créer un système hybride avec capitalisation",
        detail:
          "Maintenir un socle par répartition tout en orientant une partie des cotisations et de l’épargne vers la capitalisation productive.",
        impact: "Structurel",
        horizon: "Pluriannuel",
        confidence: "faible",
      },
      {
        area: "Économies",
        title: "Revendiquer jusqu’à 200 milliards d’économies annuelles",
        detail:
          "Le parti affirme pouvoir financer ses baisses d’impôts par simplification, réduction des gaspillages, niches et aides ; c’est le point le plus décisif du chiffrage.",
        impact: "Macroéconomique",
        horizon: "5 ans",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le choc fiscal et administratif",
        text: "Les premières lois chercheraient à enclencher suppression de prélèvements, normes et organismes tout en ouvrant la réforme territoriale.",
      },
      {
        year: "2028",
        title: "Une carte administrative entièrement redessinée",
        text: "La création des Provinces imposerait transferts de personnels, budgets, compétences et patrimoine entre niveaux publics.",
      },
      {
        year: "2029",
        title: "La retraite par capitalisation démarre",
        text: "Une partie de l’épargne et des cotisations serait progressivement orientée vers le financement d’actifs et d’entreprises.",
      },
      {
        year: "2030—32",
        title: "Le pari des économies vérifié",
        text: "Le succès dépendrait presque entièrement de la réalité des 200 milliards revendiqués et de l’absence de dégradation des missions supprimées ou transférées.",
      },
    ],
    daily: [
      {
        label: "Salaire",
        title: "Une fiche de paie nettement modifiée",
        text: "La suppression de CSG-CRDS sur les salaires augmenterait fortement le net si elle était appliquée sans compensation sur d’autres prélèvements.",
        image:
          "/illustrations/daily/udr/daily-udr-01-une-fiche-de-paie-nettement-modifiee.png",
      },
      {
        label: "Administration",
        title: "Moins d’agences, une nouvelle Province",
        text: "Les interlocuteurs administratifs et les compétences territoriales seraient profondément réorganisés.",
        image:
          "/illustrations/daily/udr/daily-udr-02-moins-dagences-une-nouvelle-province.png",
      },
      {
        label: "Épargne",
        title: "La retraite dépendrait aussi davantage des marchés",
        text: "Une part de capitalisation introduirait une relation plus directe entre pensions futures, rendement de l’épargne et économie productive.",
        image:
          "/illustrations/daily/udr/daily-udr-03-la-retraite-dependrait-aussi-davantage-des-marches.png",
      },
    ],
    brakes: [
      {
        title: "200 milliards d’économies très ambitieux",
        text: "Le chiffrage suppose des gains d’une ampleur exceptionnelle ; s’ils ne se matérialisent pas, le déficit augmenterait fortement après les baisses d’impôts.",
      },
      {
        title:
          "Réforme territoriale constitutionnellement et administrativement lourde",
        text: "Supprimer plusieurs niveaux de collectivités demanderait des majorités, des textes complexes et plusieurs années de transition.",
      },
      {
        title: "Programme partagé avec une candidature RN",
        text: "En cas de victoire du candidat soutenu, rien ne garantit que l’intégralité du corpus UDR serait retenue dans le contrat de majorité.",
      },
    ],
  },
  {
    slug: "debout",
    dossierStatus: "published",
    logo: "/logos/debout-diy.webp",
    short: "D!",
    name: "Debout !",
    family: "Gauche sociale et populaire",
    candidate: "François Ruffin",
    candidateStatus:
      "Candidature maintenue dans une démarche de rassemblement de la gauche",
    thesis:
      "Remettre le travail populaire, la démocratie et la bifurcation industrielle au centre du pouvoir.",
    color: "#d24b3f",
    soft: "#f2ddd8",
    ink: "#421611",
    programLabel: "Manifeste de Debout ! — « Nous président ! »",
    programDate: "corpus 2025—2026",
    sourceUrl: "https://debout.fr/notre-manifeste/",
    sourceName: "Debout ! — manifeste officiel",
    documentStatus:
      "Manifeste politique détaillé ; programme présidentiel en construction continue",
    assemblyGroup: "François Ruffin siège au groupe Écologiste et Social",
    extraSources: [
      {
        label: "Campagne « Nous président ! »",
        url: "https://debout.fr/",
      },
      {
        label: "Document cadre",
        url: "https://debout.fr/",
      },
    ],
    overview:
      "Debout ! construit autour de François Ruffin une gauche populaire qui veut réorganiser l’économie à partir du travail, du soin et de la transition climatique. Le manifeste articule démocratie directe, protection sociale, services publics, réindustrialisation, protectionnisme ciblé et “travaillisme climatique” : produire autrement plutôt que demander aux seuls ménages de consommer moins.",
    measures: [
      {
        area: "Travail",
        title: "Revaloriser le travail et les métiers du lien",
        detail:
          "Salaires, conditions de travail, emploi et reconnaissance des métiers de soin, d’éducation et d’accompagnement sont placés au cœur du projet.",
        impact: "Très direct",
        horizon: "1—3 ans",
        confidence: "moyen",
      },
      {
        area: "Retraites",
        title: "Abroger la retraite à 64 ans",
        detail:
          "Debout ! veut revenir sur la réforme et reconstruire une protection sociale davantage financée par le travail et la redistribution.",
        impact: "Très direct",
        horizon: "An 1",
        confidence: "moyen",
      },
      {
        area: "Climat",
        title: "Lancer un travaillisme climatique",
        detail:
          "Rénover les logements, transformer transports, agriculture et industrie tout en créant des emplois utiles et qualifiés.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Souveraineté",
        title: "Protéger des productions stratégiques",
        detail:
          "Identifier une centaine de produits et filières essentiels à relocaliser plutôt que mettre en place un protectionnisme uniforme.",
        impact: "Progressif",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le social avant les grands chantiers",
        text: "Retraites, revenus, services publics et mesures de démocratie seraient les premières batailles législatives.",
      },
      {
        year: "2028",
        title: "Le travaillisme climatique sur le terrain",
        text: "Rénovation, rail, industrie et agriculture mobiliseraient investissements, formation et main-d’œuvre.",
      },
      {
        year: "2029",
        title: "La relocalisation ciblée",
        text: "Les filières stratégiques seraient évaluées sur l’emploi réellement créé, les prix et les dépendances évitées.",
      },
      {
        year: "2030—32",
        title: "La “vie large” mesurée au quotidien",
        text: "Le projet serait jugé sur le temps libre, les services publics, les salaires et la capacité à réduire les émissions sans imposer la transition aux plus modestes.",
      },
    ],
    daily: [
      {
        label: "Travail",
        title: "Des métiers essentiels mieux reconnus",
        text: "Soignants, aides à domicile, enseignants et métiers du lien sont censés gagner en rémunération, effectifs et considération.",
        image:
          "/illustrations/daily/debout/daily-debout-01-des-metiers-essentiels-mieux-reconnus.png",
      },
      {
        label: "Logement",
        title: "Des rénovations thermiques visibles",
        text: "Les passoires énergétiques deviennent un chantier de politique industrielle, sociale et climatique.",
        image:
          "/illustrations/daily/debout/daily-debout-02-des-renovations-thermiques-visibles.png",
      },
      {
        label: "Démocratie",
        title: "Plus de conventions et de référendums",
        text: "Le manifeste veut multiplier les espaces de décision directe et redonner du poids aux citoyens hors des seules élections.",
        image:
          "/illustrations/daily/debout/daily-debout-03-plus-de-conventions-et-de-referendums.png",
      },
    ],
    brakes: [
      {
        title: "Coalition de gauche incertaine",
        text: "Une candidature commune imposerait des compromis sur l’Europe, le nucléaire, la fiscalité et la stratégie économique.",
      },
      {
        title: "Besoin de main-d’œuvre et de capacités industrielles",
        text: "Rénover et relocaliser vite suppose des travailleurs formés et des chaînes d’approvisionnement qui n’existent pas toujours encore.",
      },
      {
        title: "Financement des protections et investissements",
        text: "La hausse des services publics et le retour sur la retraite doivent être conciliés avec une dette élevée et des recettes nouvelles politiquement contestées.",
      },
    ],
  },
  {
    slug: "lapres",
    dossierStatus: "published",
    logo: "/logos/lapres-diy.webp",
    short: "APR",
    name: "L’Après",
    family: "Gauche écologiste et sociale",
    candidate: "Aucun candidat à ce stade",
    candidateStatus:
      "Clémentine Autain a renoncé à sa candidature le 11 juillet 2026",
    thesis:
      "Partager richesses, pouvoirs et savoirs dans une VIe République écologique, sociale et féministe.",
    color: "#875b8f",
    soft: "#eadfec",
    ink: "#321c37",
    programLabel: "Manifeste de L’APRÈS + « La vie meilleure »",
    programDate: "corpus 2025—2026 ; candidature Autain retirée",
    sourceUrl:
      "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
    sourceName: "L’APRÈS — manifeste officiel",
    documentStatus:
      "Programme de mouvement ; manifeste Autain conservé comme corpus malgré le retrait de candidature",
    assemblyGroup: "4 députés L’APRÈS siègent au groupe Écologiste et Social",
    extraSources: [
      {
        label: "La Vie Meilleure avec Clémentine Autain",
        url: "https://l-apres.fr/posts/7VLZWjO5Lef4GSAVWIix2n/la-vie-meilleure-avec-clementine-autain",
      },
      {
        label: "Annonce du retrait de candidature",
        url: "https://clementine-autain.fr/apres-le-dernier-clou-dans-le-cercueil-de-la-primaire-pose-par-le-ps/",
      },
    ],
    overview:
      "L’APRÈS n’a plus de candidature présidentielle propre depuis le retrait de Clémentine Autain en juillet 2026, mais son projet reste exploitable comme corpus politique. Il associe partage des richesses, planification écologique, services publics, VIe République, féminisme et réduction de la marchandisation. La fiche conserve aussi les propositions détaillées du manifeste « La vie meilleure », porté pendant la séquence de primaire.",
    measures: [
      {
        area: "Richesses",
        title:
          "Faire contribuer fortement hauts patrimoines et grandes entreprises",
        detail:
          "Financer services publics, protection sociale et bifurcation par une fiscalité plus progressive et une lutte renforcée contre l’évasion.",
        impact: "Redistributif",
        horizon: "An 1—3",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Planifier la bifurcation des besoins essentiels",
        detail:
          "Logement, alimentation, mobilité, énergie et industrie seraient réorganisés pour réduire émissions et dépendances.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Institutions",
        title: "Passer à une VIe République",
        detail:
          "Réduire le présidentialisme, introduire davantage de démocratie directe et rééquilibrer les pouvoirs.",
        impact: "Systémique",
        horizon: "Pluriannuel",
        confidence: "faible",
      },
      {
        area: "Social",
        title: "Dé-marchandiser davantage alimentation, soin et services",
        detail:
          "Créer ou renforcer des droits universels, avec notamment l’idée d’une Sécurité sociale de l’alimentation et de services publics plus larges.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "faible",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un programme sans candidate propre",
        text: "Le corpus ne pourrait être appliqué que s’il est repris par une autre candidature, une coalition ou une majorité parlementaire.",
      },
      {
        year: "2028",
        title: "Les besoins essentiels comme chantier public",
        text: "Alimentation, logement, santé, mobilité et services publics demanderaient de nouvelles institutions et financements.",
      },
      {
        year: "2029",
        title: "La bifurcation industrielle",
        text: "Relocalisations, réparation-réemploi, médicaments et transitions énergétiques entreraient dans la phase matérielle.",
      },
      {
        year: "2030—32",
        title: "Une transformation jugée sur les inégalités",
        text: "Le bilan se jouerait sur la pauvreté, le temps de vie, l’accès effectif aux services et les émissions de carbone.",
      },
    ],
    daily: [
      {
        label: "Alimentation",
        title: "Vers un droit plus universel à bien manger",
        text: "La Sécurité sociale de l’alimentation chercherait à réduire l’insécurité alimentaire tout en soutenant une production choisie.",
        image:
          "/illustrations/daily/lapres/daily-lapres-01-vers-un-droit-plus-universel-a-bien-manger.png",
      },
      {
        label: "Services publics",
        title: "Moins de recours au marché pour les besoins vitaux",
        text: "Soin, école, mobilité et protection seraient davantage financés et organisés collectivement.",
        image:
          "/illustrations/daily/lapres/daily-lapres-02-moins-de-recours-au-marche-pour-les-besoins-vitaux.png",
      },
      {
        label: "Institutions",
        title: "Une présidence moins dominante",
        text: "Le passage à une VIe République bouleverserait la façon dont les citoyens, le Parlement et l’exécutif se partagent le pouvoir.",
        image:
          "/illustrations/daily/lapres/daily-lapres-03-une-presidence-moins-dominante.png",
      },
    ],
    brakes: [
      {
        title: "Plus de candidature autonome",
        text: "Depuis le retrait de Clémentine Autain, ce programme est un corpus de mouvement et non un contrat présidentiel porté par une candidate.",
      },
      {
        title: "Coût et capacité administrative",
        text: "Créer de nouveaux droits universels tout en accélérant la transition exige recettes, personnels et structures opérationnelles.",
      },
      {
        title: "Réforme constitutionnelle difficile",
        text: "Une VIe République nécessite une majorité politique durable et un chemin constitutionnel accepté.",
      },
    ],
  },
  {
    slug: "udb",
    dossierStatus: "published",
    logo: "/logos/udb-diy.webp",
    short: "UDB",
    name: "Union démocratique bretonne",
    family: "Régionalisme, fédéralisme et écologie",
    candidate: "Lydie Massard",
    candidateStatus:
      "La candidature via la primaire de gauche n’a plus de débouché national confirmé",
    thesis:
      "Faire de la France une République fédérale et donner une autonomie politique à une Bretagne réunifiée.",
    color: "#2b7652",
    soft: "#dcebe3",
    ink: "#103724",
    programLabel:
      "« S’émanciper » + corpus autonomie, logement et municipales 2026",
    programDate: "corpus permanent actualisé en 2026",
    sourceUrl: "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
    sourceName: "UDB — Nos idées",
    documentStatus:
      "Programme de parti territorial et fédéraliste ; pas de programme présidentiel national chiffré",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Autonomie de la Bretagne réunifiée",
        url: "https://www.udb.bzh/naoned/production-intellectuelle-2/lautonomie-de-la-bretagne-reunifiee-notre-projet-politique/",
      },
      {
        label: "Programme législatif de référence",
        url: "https://www.udb.bzh/legislatives-2022/",
      },
    ],
    overview:
      "L’UDB est un parti de gauche, écologiste et autonomiste breton. Son projet national n’est pas un programme présidentiel classique : il veut transformer la France en République fédérale et donner à une Bretagne réunifiée des compétences législatives, réglementaires et fiscales importantes. Logement des résidents, langue bretonne et gallo, mobilités, agriculture, énergie et services publics sont ensuite pensés à l’échelle territoriale.",
    measures: [
      {
        area: "Institutions",
        title: "Passer à une République fédérale",
        detail:
          "Transférer compétences, budgets et pouvoir réglementaire ou législatif aux régions, avec une autonomie politique plus forte.",
        impact: "Systémique",
        horizon: "Pluriannuel",
        confidence: "faible",
      },
      {
        area: "Bretagne",
        title: "Réunifier la Bretagne et lui donner une autonomie",
        detail:
          "Réintégrer la Loire-Atlantique dans la Bretagne et permettre à une Assemblée de Bretagne de lever l’impôt sur ses compétences.",
        impact: "Territorial",
        horizon: "Pluriannuel",
        confidence: "faible",
      },
      {
        area: "Logement",
        title: "Prioriser les habitants à l’année",
        detail:
          "Limiter la pression des résidences secondaires et locations touristiques, avec un statut de résident et davantage de pouvoirs locaux sur le logement.",
        impact: "Très visible",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Langues",
        title: "Co-officialiser le breton en Bretagne",
        detail:
          "Développer école bilingue, services publics, signalétique et reconnaissance juridique du breton et du gallo.",
        impact: "Culturel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Ouvrir la négociation fédérale",
        text: "Une application nationale commencerait par une réforme constitutionnelle et un débat sur compétences, fiscalité et carte régionale.",
      },
      {
        year: "2028",
        title: "Consulter sur la réunification",
        text: "La Loire-Atlantique et la Bretagne seraient au cœur d’un processus démocratique spécifique avant tout changement territorial.",
      },
      {
        year: "2029",
        title: "Transférer les politiques de proximité",
        text: "Logement, agriculture, énergie, transport, formation et culture pourraient être progressivement pilotés au niveau breton.",
      },
      {
        year: "2030—32",
        title: "Une autonomie jugée sur les services",
        text: "Le bilan se mesurerait à la capacité du nouvel échelon à mieux traiter logement, mobilités, langue, économie et transition écologique.",
      },
    ],
    daily: [
      {
        label: "Logement",
        title: "Les résidences principales seraient favorisées",
        text: "Les règles locales pourraient limiter davantage meublés touristiques et résidences secondaires dans les zones tendues.",
        image:
          "/illustrations/daily/udb/daily-udb-01-les-residences-principales-seraient-favorisees.png",
      },
      {
        label: "Langue",
        title: "Davantage de breton dans l’école et les services",
        text: "Bilinguisme, signalétique et offre scolaire progresseraient dans les collectivités concernées.",
        image:
          "/illustrations/daily/udb/daily-udb-02-davantage-de-breton-dans-lecole-et-les-services.png",
      },
      {
        label: "Décision publique",
        title: "Rennes ou Nantes pèseraient plus que Paris",
        text: "Une partie plus importante des normes, budgets et politiques publiques serait décidée par l’échelon breton.",
        image:
          "/illustrations/daily/udb/daily-udb-03-rennes-ou-nantes-peseraient-plus-que-paris.png",
      },
    ],
    brakes: [
      {
        title: "Révision constitutionnelle indispensable",
        text: "Le fédéralisme, le pouvoir législatif régional et la fiscalité autonome exigent un changement majeur de la Constitution.",
      },
      {
        title: "Pas de chiffrage national consolidé",
        text: "Le corpus est territorial et sectoriel : il ne fournit pas une trajectoire de dette ou déficit pour l’ensemble de la France.",
      },
      {
        title: "Réunification politiquement sensible",
        text: "Le rattachement de la Loire-Atlantique suppose consultations, négociations et accord de multiples institutions.",
      },
    ],
  },
  {
    slug: "reconquete",
    dossierStatus: "published",
    logo: "/logos/reconquete-diy.webp",
    short: "REC",
    name: "Reconquête !",
    family: "Droite identitaire et nationaliste",
    candidate: "Éric Zemmour",
    candidateStatus: "Candidature envisagée, pas encore officialisée",
    thesis:
      "Réduire fortement l’immigration, réaffirmer l’identité nationale et libéraliser davantage l’économie productive.",
    color: "#1e3158",
    soft: "#dce1ea",
    ink: "#09152a",
    programLabel:
      "Programme présidentiel Éric Zemmour 2022 + huit priorités de Reconquête",
    programDate:
      "référence 2022, orientations maintenues en 2026 ; programme 2027 attendu",
    sourceUrl: "https://leprogrammepourlafrance.fr/",
    sourceName: "Reconquête — Le programme pour la France",
    documentStatus:
      "Dernier programme présidentiel complet ; mise à jour 2027 non encore publiée",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Reconquête — priorités du mouvement",
        url: "https://www.parti-reconquete.fr/",
      },
      {
        label: "Programme 2027 participatif",
        url: "https://leprogrammepourlafrance.fr/",
      },
    ],
    overview:
      "Reconquête ! continue de structurer sa ligne autour de l’identité, de l’immigration, de l’islam, de l’insécurité, de l’instruction, des impôts, de l’industrie et de l’indépendance. En l’absence d’un nouveau programme 2027 complet, la fiche utilise le programme présidentiel 2022 d’Éric Zemmour comme base détaillée et signale cette limite. Le projet associe restriction migratoire très forte, régalien, famille, baisse de fiscalité, nucléaire et réindustrialisation.",
    measures: [
      {
        area: "Immigration",
        title: "Réduire radicalement les flux migratoires",
        detail:
          "Durcir entrée, séjour, regroupement familial, droit du sol et accès à certaines prestations, avec davantage d’éloignements.",
        impact: "Très direct",
        horizon: "An 1—3",
        confidence: "faible",
      },
      {
        area: "Fiscalité",
        title: "Baisser impôts et charges pour entreprises et familles",
        detail:
          "Le corpus 2022 mise sur compétitivité, transmission, natalité et réduction de certains prélèvements, financées par économies et moindre immigration.",
        impact: "Très direct",
        horizon: "1—5 ans",
        confidence: "faible",
      },
      {
        area: "Énergie",
        title: "Relancer fortement le nucléaire",
        detail:
          "Prolonger le parc, construire de nouveaux réacteurs et réduire les politiques considérées comme pénalisantes pour l’énergie ou l’automobile.",
        impact: "Structurel",
        horizon: "Long terme",
        confidence: "moyen",
      },
      {
        area: "École",
        title: "Recentrer sur instruction, autorité et savoirs fondamentaux",
        detail:
          "Renforcer les programmes traditionnels, l’autorité des enseignants et une politique d’assimilation culturelle plus affirmée.",
        impact: "Très visible",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Un démarrage régalien",
        text: "Immigration, sécurité, justice, nationalité et école seraient parmi les premières réformes si le corpus 2022 est reconduit.",
      },
      {
        year: "2028",
        title: "Fiscalité et industrie",
        text: "Baisses de prélèvements et stratégie nucléaire-industrielle chercheraient à stimuler investissement et production.",
      },
      {
        year: "2029",
        title: "Le test juridique et européen",
        text: "Les règles migratoires, de préférence nationale et certains changements de droit pourraient multiplier contentieux constitutionnels et européens.",
      },
      {
        year: "2030—32",
        title: "Le bilan du pari identitaire-productif",
        text: "Emploi, finances publiques, natalité, intégration et sécurité serviraient de critères opposés pour juger le quinquennat.",
      },
    ],
    daily: [
      {
        label: "Frontières",
        title: "Des règles de séjour beaucoup plus strictes",
        text: "Titres de séjour, regroupement familial, naturalisation et expulsions seraient profondément modifiés.",
        image:
          "/illustrations/daily/reconquete/daily-reconquete-01-des-regles-de-sejour-beaucoup-plus-strictes.png",
      },
      {
        label: "École",
        title: "Plus d’autorité et de contenus traditionnels",
        text: "Les programmes et règles disciplinaires seraient recentrés sur les fondamentaux et le récit national.",
        image:
          "/illustrations/daily/reconquete/daily-reconquete-02-plus-dautorite-et-de-contenus-traditionnels.png",
      },
      {
        label: "Énergie",
        title: "Le nucléaire redeviendrait l’axe central",
        text: "Les investissements et la planification électrique privilégieraient fortement prolongation et construction de réacteurs.",
        image:
          "/illustrations/daily/reconquete/daily-reconquete-03-le-nucleaire-redeviendrait-laxe-central.png",
      },
    ],
    brakes: [
      {
        title: "Programme 2027 non publié",
        text: "Les chiffres et engagements 2022 ne peuvent pas être considérés comme définitivement reconduits sept mois avant le scrutin.",
      },
      {
        title: "Constitution et droit européen",
        text: "Plusieurs mesures sur nationalité, prestations ou immigration pourraient être censurées ou exiger des changements juridiques majeurs.",
      },
      {
        title: "Chiffrage dépendant des économies migratoires",
        text: "Une partie du financement 2022 repose sur des économies associées à la baisse de l’immigration, difficiles à mesurer ex ante.",
      },
    ],
  },
  {
    slug: "place-publique",
    dossierStatus: "published",
    logo: "/logos/placepublique-diy.webp",
    short: "PP",
    name: "Place publique",
    family: "Gauche sociale-démocrate et européenne",
    candidate: "Raphaël Glucksmann",
    candidateStatus:
      "Candidature envisagée ; décision annoncée pour la fin de l’été 2026",
    thesis:
      "Construire une France sociale, écologique et productive à l’intérieur d’une Europe souveraine.",
    color: "#e44f7e",
    soft: "#f5dce5",
    ink: "#401321",
    programLabel: "Acte I — Notre vision pour la France, 42 chantiers",
    programDate: "publié en 2025, enrichi par la campagne 2026",
    sourceUrl:
      "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
    sourceName: "Place publique — Acte I",
    documentStatus:
      "Vision programmatique très détaillée ; candidature présidentielle pas encore officialisée",
    assemblyGroup: "Députés Place publique suivis individuellement",
    extraSources: [
      {
        label: "Projet et méthode de co-construction",
        url: "https://place-publique.eu/pages/69jA2SKIG5udlNX7wI3dmc/le-projet",
      },
      {
        label: "Campagne « Gagner en 2027 »",
        url: "https://raphaelglucksmann.fr/",
      },
    ],
    overview:
      "Place publique a déjà publié un Acte I articulant 42 chantiers : puissance européenne, révolution énergétique et industrielle, science, travail, santé, démocratie, sécurité, école, égalité et financement. Raphaël Glucksmann organise parallèlement une campagne pour 2027 sans avoir encore officialisé sa candidature au 17 août 2026. Le projet combine social-démocratie, patriotisme économique européen, transition écologique et renforcement de l’Union européenne.",
    measures: [
      {
        area: "Europe",
        title: "Faire de l’Europe un outil de souveraineté",
        detail:
          "Mutualiser défense, énergie, industrie et achats stratégiques afin que la France pèse dans les rapports de force internationaux.",
        impact: "Structurel",
        horizon: "5 ans et plus",
        confidence: "moyen",
      },
      {
        area: "Industrie",
        title: "Mener une révolution énergétique, écologique et industrielle",
        detail:
          "Planifier investissements, production décarbonée, infrastructures et commande publique à l’échelle française et européenne.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Travail",
        title: "Remettre les travailleurs au cœur du contrat social",
        detail:
          "Améliorer rémunération, partage de valeur, qualité du travail et protections tout en soutenant innovation et production.",
        impact: "Direct",
        horizon: "1—5 ans",
        confidence: "moyen",
      },
      {
        area: "Services publics",
        title: "Reconstruire école, santé et protection",
        detail:
          "Rendre plus égal l’accès aux soins, à l’émancipation scolaire et aux protections face aux accidents de la vie.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "L’Acte I devient contrat de gouvernement",
        text: "Si Glucksmann se présente et l’emporte, les 42 chantiers devraient être hiérarchisés dans un budget et un accord parlementaire.",
      },
      {
        year: "2028",
        title: "Investissements européens et industriels",
        text: "Énergie, défense, technologies et industrie nécessiteraient des coalitions européennes et des financements communs.",
      },
      {
        year: "2029",
        title: "Le nouveau contrat social",
        text: "Travail, santé, école, sécurité et protections seraient évalués à partir de résultats concrets et d’inégalités territoriales.",
      },
      {
        year: "2030—32",
        title: "Une souveraineté européenne mesurée dans les crises",
        text: "Le projet serait jugé sur la capacité de l’Europe à protéger industrie, démocratie et climat face aux États-Unis, à la Chine et à la Russie.",
      },
    ],
    daily: [
      {
        label: "Emploi",
        title: "Plus de commandes et d’investissements européens",
        text: "Les filières industrielles françaises pourraient bénéficier d’une préférence européenne plus marquée dans les marchés stratégiques.",
        image:
          "/illustrations/daily/place-publique/daily-place-publique-01-plus-de-commandes-et-dinvestissements-europeens.png",
      },
      {
        label: "Services publics",
        title: "École et santé redeviendraient des priorités budgétaires",
        text: "Le projet cherche à réduire files d’attente, pénuries de personnels et inégalités territoriales.",
        image:
          "/illustrations/daily/place-publique/daily-place-publique-02-ecole-et-sante-redeviendraient-des-priorites-budgetaires.png",
      },
      {
        label: "Europe",
        title: "Plus de décisions françaises mutualisées",
        text: "Défense, industrie ou énergie seraient davantage négociées et financées au niveau européen.",
        image:
          "/illustrations/daily/place-publique/daily-place-publique-03-plus-de-decisions-francaises-mutualisees.png",
      },
    ],
    brakes: [
      {
        title: "Candidature non encore officialisée",
        text: "Le contrat présidentiel peut encore évoluer avant la décision annoncée pour la fin de l’été.",
      },
      {
        title: "Dépendance aux partenaires européens",
        text: "Une grande partie de la stratégie suppose que plusieurs États acceptent de mutualiser argent, règles et souveraineté.",
      },
      {
        title: "Financement du double investissement social et industriel",
        text: "Réarmer services publics et production décarbonée simultanément exige des recettes nouvelles, de la croissance et des arbitrages budgétaires.",
      },
    ],
  },
  {
    slug: "la-convention",
    dossierStatus: "published",
    logo: "/logos/laconvention-diy.webp",
    short: "LC",
    name: "La Convention",
    family: "Centre gauche républicain",
    candidate: "Bernard Cazeneuve",
    candidateStatus: "Candidature présentée publiquement en juillet 2026",
    thesis:
      "Réconcilier sérieux budgétaire, justice sociale, autorité républicaine et reconstruction des services publics.",
    color: "#8a3554",
    soft: "#eddde3",
    ink: "#3c1423",
    programLabel: "« Tenir la promesse de la France »",
    programDate: "lettre-programme publiée le 17 juillet 2026",
    sourceUrl: "https://bc2027.fr/",
    sourceName: "Bernard Cazeneuve — site 2027",
    documentStatus:
      "Projet présidentiel publié sous forme de lettre longue et appelé à être enrichi",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Ma démarche",
        url: "https://bc2027.fr/ma-demarche",
      },
      {
        label: "Discours de Cergy — La Convention",
        url: "https://www.la-convention.fr/discours_de_bernard_cazeneuve_cergy_pontoise_dimanche_16_novembre_2025",
      },
    ],
    overview:
      "Bernard Cazeneuve a publié en juillet 2026 une lettre de plus de 80 pages qui tient lieu de première plateforme présidentielle. Sa ligne sociale-démocrate veut restaurer la crédibilité de l’État et des finances publiques sans austérité aveugle, renforcer école, santé et sécurité, réindustrialiser, soutenir l’agriculture et mener une écologie populaire. Le projet insiste sur le compromis, les corps intermédiaires et une présidence moins verticale.",
    measures: [
      {
        area: "Finances",
        title: "Engager un redressement pluriannuel des comptes",
        detail:
          "Réduire dette et déficit par des choix de dépenses, une contribution accrue des revenus les plus élevés et une méthode pluriannuelle plutôt que des coupes indiscriminées.",
        impact: "Macroéconomique",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "École",
        title: "Revaloriser enseignants et adapter les savoirs à l’IA",
        detail:
          "Mieux former et rémunérer, renforcer humanités et esprit critique, former massivement les enseignants aux nouveaux outils numériques.",
        impact: "Très visible",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Industrie",
        title: "Reconstruire l’appareil productif et agricole",
        detail:
          "Réindustrialiser les bassins de vie, sécuriser les filières stratégiques et garantir aux agriculteurs un modèle productif durable.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Écologie",
        title: "Une transition planifiée mais non punitive",
        detail:
          "Prioriser rénovation, transports collectifs, industrie propre et agriculture en protégeant les ménages modestes des coûts de transition.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Reconstruire la crédibilité de l’État",
        text: "Le premier budget combinerait trajectoire de redressement, soutien ciblé au pouvoir d’achat et premières mesures pour école, santé et sécurité.",
      },
      {
        year: "2028",
        title: "Industrie, agriculture et services publics",
        text: "Les investissements productifs et humains commenceraient à produire des résultats dans les territoires.",
      },
      {
        year: "2029",
        title: "Le compromis comme méthode",
        text: "Les réformes sociales et budgétaires seraient ajustées avec syndicats, élus locaux et Parlement plutôt que par seule verticalité présidentielle.",
      },
      {
        year: "2030—32",
        title: "La promesse républicaine mise à l’épreuve",
        text: "Le bilan dépendrait de la baisse effective du déficit, de l’accès aux services publics et de la capacité à réindustrialiser sans accroître les inégalités.",
      },
    ],
    daily: [
      {
        label: "École",
        title: "Des enseignants mieux formés et mieux payés",
        text: "La réforme mettrait l’accent sur fondamentaux, humanités, esprit critique et maîtrise de l’intelligence artificielle.",
        image:
          "/illustrations/daily/la-convention/daily-la-convention-01-des-enseignants-mieux-formes-et-mieux-payes.png",
      },
      {
        label: "Pouvoir d’achat",
        title: "Des aides davantage concentrées sur les modestes",
        text: "Le projet cherche à préserver les ménages fragiles tout en réduisant progressivement le déficit.",
        image:
          "/illustrations/daily/la-convention/daily-la-convention-02-des-aides-davantage-concentrees-sur-les-modestes.png",
      },
      {
        label: "Territoires",
        title: "Plus de dialogue avec élus et corps intermédiaires",
        text: "La méthode revendique un pouvoir moins vertical et des compromis plus fréquents avant les grandes réformes.",
        image:
          "/illustrations/daily/la-convention/daily-la-convention-03-plus-de-dialogue-avec-elus-et-corps-intermediaires.png",
      },
    ],
    brakes: [
      {
        title: "Redresser les comptes tout en reconstruisant",
        text: "La difficulté est de financer école, santé, industrie et transition en réduisant simultanément le déficit.",
      },
      {
        title: "Majorité politique à construire",
        text: "Une candidature social-démocrate distincte du PS devrait obtenir une coalition parlementaire stable pour gouverner.",
      },
      {
        title: "Certaines propositions restent à préciser",
        text: "La lettre fixe une architecture et des premières mesures, mais la campagne doit encore transformer plusieurs orientations en chiffrage détaillé.",
      },
    ],
  },
  {
    slug: "france-humaniste",
    dossierStatus: "published",
    logo: "/logos/lafrancehumaniste-diy.webp",
    short: "FH",
    name: "La France humaniste",
    family: "Gaullisme social et républicain",
    candidate: "Dominique de Villepin",
    candidateStatus:
      "Candidature envisagée, annonce officielle encore attendue",
    thesis:
      "Refonder la souveraineté française par l’État, le travail, la protection sociale et une diplomatie européenne indépendante.",
    color: "#40516e",
    soft: "#e0e4ea",
    ink: "#182234",
    programLabel: "Doctrine et chroniques de La France Humaniste",
    programDate: "corpus 2025—2026 ; projet en construction",
    sourceUrl:
      "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
    sourceName: "La France Humaniste — « Le moment français »",
    documentStatus:
      "Corpus doctrinal très fourni ; programme présidentiel final non publié",
    assemblyGroup: "Aucun groupe parlementaire propre",
    extraSources: [
      {
        label: "Nouveau monde du travail",
        url: "https://lafrancehumaniste.fr/articles/un-nouveau-monde-du-travail.html",
      },
      {
        label: "Protection sociale rénovée",
        url: "https://lafrancehumaniste.fr/articles/protection-sociale.html",
      },
      {
        label: "Europe souveraine",
        url: "https://lafrancehumaniste.fr/articles/moment-europeen-europe-souveraine.html",
      },
    ],
    overview:
      "Dominique de Villepin et La France Humaniste publient depuis 2025 un corpus doctrinal de plus en plus proche d’un programme : finances publiques pluriannuelles, souveraineté industrielle et énergétique, fonds de souveraineté, travail, protection sociale, école, sécurité, Europe et diplomatie indépendante. La candidature 2027 n’est toutefois pas encore formellement annoncée, et plusieurs propositions restent présentées comme des pistes à débattre.",
    measures: [
      {
        area: "Finances",
        title: "Fixer une trajectoire organique quinquennale",
        detail:
          "Contraindre les budgets annuels par une trajectoire pluriannuelle de dette et déficit afin de retrouver une crédibilité financière durable.",
        impact: "Macroéconomique",
        horizon: "5 ans",
        confidence: "moyen",
      },
      {
        area: "Souveraineté",
        title: "Créer un fonds national de souveraineté et de solidarité",
        detail:
          "Regrouper des instruments publics et mobiliser l’épargne française, notamment via une épargne retraite publique, pour industrie, énergie et technologies.",
        impact: "Structurel",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Travail",
        title: "Un nouveau pacte entre État, entreprises et travailleurs",
        detail:
          "Conditionner davantage les avantages fiscaux à l’emploi, la formation, la parité ou l’inclusion et sécuriser les parcours dans un monde transformé par l’IA.",
        impact: "Progressif",
        horizon: "2—5 ans",
        confidence: "moyen",
      },
      {
        area: "Protection sociale",
        title: "Rénover les protections sans laisser dériver la dette sociale",
        detail:
          "Simplifier certains minima, conditionner des exonérations, lutter contre la fraude et fixer une programmation pluriannuelle de santé et de protection.",
        impact: "Structurel",
        horizon: "5 ans",
        confidence: "moyen",
      },
    ],
    timeline: [
      {
        year: "2027",
        title: "Le redressement par une règle pluriannuelle",
        text: "La première étape serait d’inscrire la trajectoire financière, puis de lancer le fonds de souveraineté et les pactes avec les entreprises.",
      },
      {
        year: "2028",
        title: "Industrie, énergie et IA",
        text: "L’épargne et les instruments publics seraient dirigés vers les secteurs considérés comme souverains et les transitions technologiques.",
      },
      {
        year: "2029",
        title: "Refonder protection sociale et travail",
        text: "Santé, minima, retraites, formation et obligations sociales des entreprises seraient réorganisés dans un cadre plus pluriannuel.",
      },
      {
        year: "2030—32",
        title: "Retrouver une puissance d’équilibre",
        text: "Le projet serait jugé à la fois sur dette, cohésion sociale, autonomie productive et capacité diplomatique de la France et de l’Europe.",
      },
    ],
    daily: [
      {
        label: "Épargne",
        title: "Une partie de l’épargne financerait davantage la souveraineté",
        text: "Les ménages pourraient être associés à un fonds public investissant dans industrie, énergie et technologies stratégiques.",
        image:
          "/illustrations/daily/france-humaniste/epargne-souverainete.png",
      },
      {
        label: "Travail",
        title: "Les aides aux entreprises deviendraient plus contractuelles",
        text: "Avantages fiscaux et sociaux pourraient être liés à des objectifs mesurables d’emploi, formation, parité et inclusion.",
        image:
          "/illustrations/daily/france-humaniste/aides-entreprises-contractuelles.png",
      },
      {
        label: "Services publics",
        title: "Un État stratège plus présent",
        text: "Fonction publique, école et planification retrouveraient un rôle central dans la continuité de l’État et les grandes transitions.",
        image:
          "/illustrations/daily/france-humaniste/etat-stratege.png",
      },
    ],
    brakes: [
      {
        title: "Candidature et programme final non officialisés",
        text: "Le corpus est dense mais demeure une doctrine en construction ; une candidature pourrait sélectionner ou modifier certaines pistes.",
      },
      {
        title: "Mobiliser l’épargne sans déplacer le risque",
        text: "Le fonds souverain et l’épargne retraite publique exigent gouvernance, rendement, garanties et choix d’investissement robustes.",
      },
      {
        title: "Réduction du déficit et nouveaux investissements",
        text: "Comme d’autres projets de reconstruction, il dépend de la capacité à dégager des économies sans dégrader les protections qu’il veut restaurer.",
      },
    ],
  },
];

export const publishedParties = parties.filter(
  (party): party is PublishedParty => party.dossierStatus === "published",
);

export const pendingParties = parties.filter(
  (party): party is PendingParty => party.dossierStatus === "in_preparation",
);

export function getParty(slug: string) {
  return parties.find((party) => party.slug === slug);
}

export function getPublishedParty(slug: string) {
  return publishedParties.find((party) => party.slug === slug);
}
