export type IllustrationKey =
  | "agriculture"
  | "commons"
  | "culture"
  | "democracy"
  | "digital"
  | "education"
  | "energy"
  | "equality"
  | "europe"
  | "family"
  | "finance"
  | "health"
  | "housing"
  | "immigration"
  | "industry"
  | "international"
  | "nature"
  | "planning"
  | "rights"
  | "security"
  | "solidarity"
  | "work";

export type ProgramChapter = {
  number?: string;
  title: string;
  summary: string;
  themes: string[];
  sourceUrl: string;
  illustration: IllustrationKey;
  icon?: string;
};

export type ProgramGroup = {
  title: string;
  chapters: ProgramChapter[];
};

export type PartyProgram = {
  coverageLabel: string;
  corpusNote: string;
  updated: string;
  groups: ProgramGroup[];
};

const lfi = "https://melenchon2027.fr/programme2025/livre";
const ps = "https://projet-socialiste.fr";
const eco = "https://projet.lesecologistes.fr";
const renaissanceEconomy = "https://doc.parti.re/Conventions-thematiques_Nouvelle-donne.pdf";
const renaissanceAuthority = "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf";
const lr = "https://republicains.fr/nos-propositions/";
const rn = "https://rassemblementnational.fr/livrets-thematiques";

export const partyPrograms: Record<string, PartyProgram> = {
  lfi: {
    coverageLabel: "18 / 18 chapitres officiels représentés",
    corpusNote: "L’Avenir en commun, édition 2025 : 831 mesures annoncées. Tous les chapitres et toutes leurs rubriques principales sont repris ici, sous forme de synthèse et non de reproduction intégrale.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "L’harmonie des êtres humains entre eux",
        chapters: [
          {
            number: "01",
            title: "Le pouvoir au peuple",
            summary: "Refonder le régime autour d’une Assemblée constituante, réduire les pouvoirs présidentiels et multiplier les moyens d’intervention directe des citoyens.",
            themes: ["Assemblée constituante et VIe République", "Fin de la monarchie présidentielle", "Lutte contre les privilèges et la corruption", "Référendums et intervention populaire", "Laïcité", "Pluralisme et indépendance des médias"],
            sourceUrl: `${lfi}/chapitre1/`,
            illustration: "democracy",
            icon: "/icons/lfi/lfi-01-pouvoir-au-peuple.svg",
          },
          {
            number: "02",
            title: "Par-delà la propriété privée",
            summary: "Sortir certains besoins essentiels de la logique marchande et reprendre le contrôle public des secteurs jugés stratégiques.",
            themes: ["Biens communs fondamentaux", "Eau, énergie, santé et alimentation", "Services et pôles publics", "Lutte contre le pillage économique", "Contrôle des infrastructures stratégiques"],
            sourceUrl: `${lfi}/chapitre2/`,
            illustration: "commons",
            icon: "/icons/lfi/lfi-02-par-dela-propriete-privee.svg",
          },
          {
            number: "03",
            title: "Citoyens dans l’entreprise et dans la ville",
            summary: "Étendre la démocratie au travail et renforcer la commune comme premier échelon de décision et de services publics.",
            themes: ["Droits nouveaux des salariés", "Intervention dans les décisions d’entreprise", "Pouvoir des représentants du personnel", "Rôle central des communes", "Services publics de proximité"],
            sourceUrl: `${lfi}/chapitre3/`,
            illustration: "work",
            icon: "/icons/lfi/lfi-03-citoyens-entreprise-ville.svg",
          },
          {
            number: "04",
            title: "Étendre le domaine de la liberté",
            summary: "Créer de nouveaux droits individuels, sortir de l’état d’urgence permanent et reconstruire une police républicaine contrôlée.",
            themes: ["Libertés et émancipation individuelle", "Droits nouveaux", "Fin de l’exception sécuritaire permanente", "Police républicaine", "Contrôle des pratiques policières"],
            sourceUrl: `${lfi}/chapitre4/`,
            illustration: "rights",
            icon: "/icons/lfi/lfi-04-etendre-liberte.svg",
          },
          {
            number: "05",
            title: "Élever le niveau d’instruction",
            summary: "Construire un parcours public de la petite enfance à l’université, combattre l’illettrisme et replacer la science au cœur de la société.",
            themes: ["Alphabétisation et lutte contre l’illettrisme", "Service public de la petite enfance", "École de l’égalité et de l’émancipation", "Qualification de toutes et tous", "Science et recherche", "Refonte de l’enseignement supérieur", "Conscription de secours collectif"],
            sourceUrl: `${lfi}/chapitre5/`,
            illustration: "education",
            icon: "/icons/lfi/lfi-05-elever-instruction.svg",
          },
          {
            number: "06",
            title: "Partage des richesses",
            summary: "Réduire le pouvoir de la finance, réorienter les banques, transformer la fiscalité et contester le poids de la dette publique.",
            themes: ["Régulation de la finance", "Banques au service de l’intérêt général", "Définanciarisation de l’économie", "Annulation ou réorganisation de la dette", "Révolution fiscale et progressivité"],
            sourceUrl: `${lfi}/chapitre6/`,
            illustration: "finance",
            icon: "/icons/lfi/lfi-06-partage-richesses.svg",
          },
          {
            number: "07",
            title: "La force de l’entraide",
            summary: "Renforcer les services publics, l’économie coopérative et les protections contre la pauvreté, le mal-logement, l’insécurité et l’abandon territorial.",
            themes: ["Égalité territoriale et services publics", "Outre-mer", "Économie sociale, solidaire et coopérative", "Éradication de la pauvreté", "Droit au logement", "Justice efficace", "Police de proximité", "Protection de l’enfance"],
            sourceUrl: `${lfi}/chapitre7/`,
            illustration: "solidarity",
            icon: "/icons/lfi/lfi-07-force-entraide.svg",
          },
          {
            number: "08",
            title: "Travailler tous, moins et mieux",
            summary: "Garantir l’accès à un emploi stable, réduire le temps de travail, augmenter les salaires et sécuriser les parcours jusqu’à la retraite.",
            themes: ["Garantie d’emploi", "Réduction du temps de travail", "Emploi stable", "Salaires et écarts de rémunération", "Assurance-chômage", "Sécurité sociale professionnelle", "Santé au travail", "Retraite digne"],
            sourceUrl: `${lfi}/chapitre8/`,
            illustration: "work",
            icon: "/icons/lfi/lfi-08-travailler-tous-moins-mieux.svg",
          },
          {
            number: "09",
            title: "Produire nous-mêmes pour répondre aux besoins",
            summary: "Faire de la commande et de l’investissement publics les leviers d’une réindustrialisation sociale et écologique.",
            themes: ["État d’urgence sociale", "Relocalisation et indépendance productive", "Réindustrialisation", "Grands chantiers écologiques", "Création d’emplois"],
            sourceUrl: `${lfi}/chapitre9/`,
            illustration: "industry",
            icon: "/icons/lfi/lfi-09-produire-nous-memes.svg",
          },
          {
            number: "10",
            title: "Faire place à la nouvelle France",
            summary: "Organiser l’égalité réelle et l’autonomie à tous les âges de la vie, face au sexisme, au racisme, au handicap et à la dépendance.",
            themes: ["Égalité femmes-hommes", "Lutte contre le racisme et les discriminations", "Autonomie des jeunes", "Perte d’autonomie", "Droits et accessibilité des personnes handicapées"],
            sourceUrl: `${lfi}/chapitre10/`,
            illustration: "equality",
            icon: "/icons/lfi/lfi-10-nouvelle-france.svg",
          },
          {
            number: "11",
            title: "Humaniser par la culture et le sport",
            summary: "Traiter les arts, la culture et le sport comme des services publics d’émancipation plutôt que comme de simples marchés.",
            themes: ["Service public de la culture", "Création et accès aux arts", "Droits des artistes", "Sport pour toutes et tous", "Libération du sport de l’argent"],
            sourceUrl: `${lfi}/chapitre11/`,
            illustration: "culture",
            icon: "/icons/lfi/lfi-11-culture-sport.svg",
          },
        ],
      },
      {
        title: "L’harmonie des êtres humains avec la nature",
        chapters: [
          {
            number: "12",
            title: "Planification écologique",
            summary: "Donner à l’État un calendrier, des moyens et une organisation transversale pour piloter la bifurcation écologique, y compris dans les Outre-mer.",
            themes: ["Objectifs écologiques planifiés", "Organisation de l’État", "Budgets et investissements cohérents", "Outre-mer comme avant-postes", "Articulation avec les territoires"],
            sourceUrl: `${lfi}/chapitre12/`,
            illustration: "planning",
            icon: "/icons/lfi/lfi-12-planification-ecologique.svg",
          },
          {
            number: "13",
            title: "Les grands chantiers de la bifurcation",
            summary: "Transformer concrètement transports, bâtiments, énergie, déchets et agriculture par l’investissement public et de nouvelles règles.",
            themes: ["Investissements de bifurcation", "Transports publics et mobilités", "100 % renouvelables en 2050", "Rénovation énergétique", "Zéro déchet", "Souveraineté alimentaire", "Agriculture écologique et paysanne"],
            sourceUrl: `${lfi}/chapitre13/`,
            illustration: "planning",
            icon: "/icons/lfi/lfi-13-grands-chantiers-bifurcation.svg",
          },
          {
            number: "14",
            title: "Biens communs et droits de l’espèce",
            summary: "Combattre les pollutions et protéger l’eau, les forêts, les animaux, les écosystèmes et la biodiversité.",
            themes: ["Dépollution", "Droit et gestion publique de l’eau", "Accès à l’eau en Outre-mer", "Protection des forêts", "Condition animale", "Écosystèmes et biodiversité"],
            sourceUrl: `${lfi}/chapitre14/`,
            illustration: "nature",
            icon: "/icons/lfi/lfi-14-biens-communs-espece.svg",
          },
          {
            number: "15",
            title: "Une approche de santé globale",
            summary: "Relier hôpital, prévention, alimentation, environnement et préparation aux pandémies dans une politique publique commune.",
            themes: ["Préparation aux pandémies", "Reconstruction de l’hôpital public", "Accès aux soins", "Nouvelle politique des addictions et drogues", "Lutte contre la malbouffe", "Prévention"],
            sourceUrl: `${lfi}/chapitre15/`,
            illustration: "health",
            icon: "/icons/lfi/lfi-15-sante-globale.svg",
          },
        ],
      },
      {
        title: "Ordonner le monde",
        chapters: [
          {
            number: "16",
            title: "Une diplomatie altermondialiste pour la paix",
            summary: "Affirmer une politique extérieure indépendante, fondée sur l’ONU, le droit international, la coopération et le protectionnisme écologique.",
            themes: ["Indépendance diplomatique", "Défense souveraine", "ONU et droit international", "Protectionnisme écologique", "Biens communs planétaires", "Migration humaniste", "Diplomatie ultramarine", "Coopérations avec l’Afrique et la Méditerranée", "Francophonie des peuples"],
            sourceUrl: `${lfi}/chapitre16/`,
            illustration: "international",
            icon: "/icons/lfi/lfi-16-diplomatie-paix.svg",
          },
          {
            number: "17",
            title: "Europe",
            summary: "Négocier une rupture concertée avec les règles européennes jugées incompatibles, tout en désobéissant unilatéralement aux blocages si nécessaire.",
            themes: ["Plan A de renégociation des traités", "Plan B de désobéissance", "Souveraineté budgétaire", "Réforme de la BCE", "Harmonisation sociale et écologique", "Protectionnisme", "Pôles publics", "Droit européen à l’eau"],
            sourceUrl: `${lfi}/chapitre17/`,
            illustration: "europe",
            icon: "/icons/lfi/lfi-17-europe.svg",
          },
          {
            number: "18",
            title: "Nouvelles frontières de l’humanité",
            summary: "Faire des océans, de l’espace et du numérique des domaines de souveraineté, de recherche et d’intérêt général.",
            themes: ["Protection des mers et océans", "Responsabilité maritime française", "Recherche spatiale", "Numérique d’intérêt général", "Souveraineté numérique"],
            sourceUrl: `${lfi}/chapitre18/`,
            illustration: "digital",
            icon: "/icons/lfi/lfi-18-frontieres-humanite.svg",
          },
        ],
      },
    ],
  },
  ps: {
    coverageLabel: "20 / 20 chapitres officiels représentés",
    corpusNote: "Le Projet socialiste adopté en 2026 est organisé en six engagements et vingt chapitres. Chaque chapitre est résumé ci-dessous avec ses principaux leviers concrets.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "Vivre libres",
        chapters: [
          { number: "01", title: "Mieux vivre au travail et de son travail", summary: "Revaloriser les revenus, partager le pouvoir dans l’entreprise et redonner du temps aux salariés.", themes: ["SMIC net annoncé à 1 690 €", "Revalorisation du public", "Écart de salaires plafonné de 1 à 20", "Salariés dans les conseils", "Conditions de travail", "Expérimentation de la semaine de quatre jours", "Compte épargne-temps universel", "Retraites"], sourceUrl: `${ps}/vivre-libres`, illustration: "work", icon: "/icons/ps/ps-01-mieux-vivre-au-travail-et-de-son-travail.svg" },
          { number: "02", title: "Coût de la vie : reprendre le contrôle", summary: "Agir sur le logement, l’alimentation, les transports et les dépenses contraintes pour rendre les besoins essentiels accessibles.", themes: ["Construction et régulation des loyers", "Foncier public", "Accession progressive à la propriété", "Rénovation", "Fiscalité alimentaire", "Nutri-Score", "Rail et autoroutes"], sourceUrl: `${ps}/vivre-libres`, illustration: "housing", icon: "/icons/ps/ps-02-cout-de-la-vie-reprendre-le-controle.svg" },
          { number: "03", title: "Réindustrialiser et créer les emplois de demain", summary: "Orienter financement, recherche, formation et commande publique vers la production et les filières stratégiques.", themes: ["Planification industrielle", "Conditionnalité des aides", "Commande publique", "Recherche et innovation", "Formation", "Relocalisations", "Décarbonation"], sourceUrl: `${ps}/vivre-libres`, illustration: "industry", icon: "/icons/ps/ps-03-reindustrialiser-et-creer-les-emplois-de-demain.svg" },
          { number: "04", title: "Construire la souveraineté européenne", summary: "Mutualiser la puissance industrielle, énergétique et financière au niveau européen tout en protégeant les standards sociaux.", themes: ["Industrie européenne", "Énergie", "Investissements communs", "Commerce loyal", "Autonomie stratégique", "Harmonisation sociale"], sourceUrl: `${ps}/vivre-libres`, illustration: "europe", icon: "/icons/ps/ps-04-construire-la-souverainete-europeenne.svg" },
          { number: "05", title: "Le progrès technique au service du progrès humain", summary: "Encadrer le numérique et l’intelligence artificielle pour qu’ils améliorent le travail, les services publics et les libertés.", themes: ["Intelligence artificielle", "Protection des données", "Souveraineté numérique", "Recherche publique", "Partage des gains de productivité", "Droits dans le numérique"], sourceUrl: `${ps}/vivre-libres`, illustration: "digital", icon: "/icons/ps/ps-05-le-progres-technique-au-service-du-progres-humain.svg" },
        ],
      },
      {
        title: "Être en sécurité(s)",
        chapters: [
          { number: "06", title: "Être en bonne santé", summary: "Réparer l’hôpital et les soins de proximité, combattre les déserts médicaux et renforcer la prévention.", themes: ["Hôpital public", "Accès territorial", "Professionnels de santé", "Santé mentale", "Prévention", "Médicaments", "Protection sociale"], sourceUrl: `${ps}/etre-en-securites`, illustration: "health", icon: "/icons/ps/ps-06-etre-en-bonne-sante.svg" },
          { number: "07", title: "Pour une sécurité environnementale", summary: "Préparer les territoires aux risques climatiques et sanitaires plutôt que gérer seulement les crises après coup.", themes: ["Adaptation climatique", "Canicules et inondations", "Pollutions", "Eau", "Risques industriels", "Protection civile", "Assurance"], sourceUrl: `${ps}/etre-en-securites`, illustration: "nature", icon: "/icons/ps/ps-07-pour-une-securite-environnementale.svg" },
          { number: "08", title: "Bien vieillir", summary: "Garantir l’autonomie, la dignité et l’accès aux soins à domicile comme en établissement.", themes: ["Prévention de la perte d’autonomie", "Aide à domicile", "EHPAD", "Proches aidants", "Habitat adapté", "Financement de la dépendance"], sourceUrl: `${ps}/etre-en-securites`, illustration: "solidarity", icon: "/icons/ps/ps-08-bien-vieillir.svg" },
          { number: "09", title: "Police, justice : un ordre juste", summary: "Augmenter l’efficacité de la police et de la justice tout en consolidant les garanties démocratiques et la prévention.", themes: ["Police de proximité", "Moyens de la justice", "Délais", "Prévention", "Prisons et réinsertion", "Contrôle démocratique", "Victimes"], sourceUrl: `${ps}/etre-en-securites`, illustration: "security", icon: "/icons/ps/ps-09-police-justice-un-ordre-juste.svg" },
        ],
      },
      {
        title: "S’épanouir à égalité",
        chapters: [
          { number: "10", title: "Pour un droit à l’enfance", summary: "Faire de la protection, de la santé et de l’émancipation des enfants une responsabilité publique continue.", themes: ["Petite enfance", "Aide sociale à l’enfance", "Santé", "Pauvreté infantile", "Violences", "Loisirs et culture"], sourceUrl: `${ps}/sepanouir-a-egalite`, illustration: "family", icon: "/icons/ps/ps-10-pour-un-droit-a-l-enfance.svg" },
          { number: "11", title: "Apprendre, se former, les mêmes chances", summary: "Renforcer l’école publique, la mixité, l’orientation et la formation tout au long de la vie.", themes: ["École publique", "Mixité sociale", "Enseignants", "Orientation", "Voie professionnelle", "Université", "Formation continue"], sourceUrl: `${ps}/sepanouir-a-egalite`, illustration: "education", icon: "/icons/ps/ps-11-apprendre-se-former-les-memes-chances.svg" },
          { number: "12", title: "Handicap : faire de l’inclusion un droit", summary: "Rendre effectifs l’accessibilité, l’accompagnement scolaire, l’emploi et l’autonomie des personnes handicapées.", themes: ["Accessibilité universelle", "École inclusive", "Accompagnement", "Emploi", "Logement", "Prestations et autonomie"], sourceUrl: `${ps}/sepanouir-a-egalite`, illustration: "rights", icon: "/icons/ps/ps-12-handicap-faire-de-l-inclusion-un-droit.svg" },
          { number: "13", title: "Abolir le patriarcat", summary: "Faire de l’égalité femmes-hommes et de la lutte contre les violences une politique interministérielle dotée de moyens.", themes: ["Égalité salariale", "Violences sexistes et sexuelles", "Santé des femmes", "Parité", "Éducation", "Droits sexuels et reproductifs"], sourceUrl: `${ps}/sepanouir-a-egalite`, illustration: "equality", icon: "/icons/ps/ps-13-abolir-le-patriarcat.svg" },
        ],
      },
      {
        title: "Vivre avec la nature",
        chapters: [
          { number: "14", title: "Agriculture durable, revenu digne", summary: "Réorienter les aides et les marchés vers l’agroécologie, le renouvellement des générations et une meilleure rémunération paysanne.", themes: ["Revenus agricoles", "Agroécologie", "Installation", "Eau et sols", "Alimentation", "Commerce et partage de la valeur", "PAC"], sourceUrl: `${ps}/vivre-avec-la-nature`, illustration: "agriculture", icon: "/icons/ps/ps-14-agriculture-durable-revenu-digne.svg" },
          { number: "15", title: "Pour une écologie populaire", summary: "Réduire les émissions et adapter le pays en protégeant d’abord les ménages modestes face au coût de la transition.", themes: ["Rénovation", "Transports", "Énergie", "Biodiversité", "Adaptation", "Accompagnement social", "Fiscalité écologique juste"], sourceUrl: `${ps}/vivre-avec-la-nature`, illustration: "planning", icon: "/icons/ps/ps-15-pour-une-ecologie-populaire.svg" },
        ],
      },
      {
        title: "Refaire société",
        chapters: [
          { number: "16", title: "Recréer du commun", summary: "Redonner de la place aux services publics, à la culture, au sport, aux associations et aux espaces de rencontre.", themes: ["Services publics", "Associations", "Culture", "Sport", "Médias", "Territoires", "Lien social"], sourceUrl: `${ps}/refaire-societe`, illustration: "culture", icon: "/icons/ps/ps-16-recreer-du-commun.svg" },
          { number: "17", title: "Faire peuple, reconstruire la cohésion", summary: "Lutter contre les séparations sociales et territoriales par l’égalité, la laïcité et une politique commune d’intégration.", themes: ["Laïcité", "Lutte contre le racisme", "Intégration", "Quartiers et ruralités", "Outre-mer", "Citoyenneté", "Mémoire commune"], sourceUrl: `${ps}/refaire-societe`, illustration: "solidarity", icon: "/icons/ps/ps-17-faire-peuple-reconstruire-la-cohesion.svg" },
          { number: "18", title: "La République démocratique du XXIe siècle", summary: "Rééquilibrer les institutions, rendre le Parlement et les citoyens plus puissants et protéger l’indépendance de l’information.", themes: ["Parlement", "Participation citoyenne", "Décentralisation", "Transparence", "Justice indépendante", "Pluralisme des médias", "Constitution"], sourceUrl: `${ps}/refaire-societe`, illustration: "democracy", icon: "/icons/ps/ps-18-la-republique-democratique-du-xxie-siecle.svg" },
        ],
      },
      {
        title: "Pacifier le monde",
        chapters: [
          { number: "19", title: "Un monde de coopération", summary: "Faire de l’Europe, du droit international, du climat et du développement les piliers d’une diplomatie de coopération.", themes: ["Union européenne", "Multilatéralisme", "Climat", "Développement", "Commerce", "Francophonie", "Diplomatie féministe"], sourceUrl: `${ps}/pacifier-le-monde`, illustration: "international", icon: "/icons/ps/ps-19-un-monde-de-cooperation.svg" },
          { number: "20", title: "Une nouvelle approche de la sécurité internationale", summary: "Articuler défense nationale, autonomie européenne, alliances et prévention des conflits dans un monde plus instable.", themes: ["Défense", "Europe de la sécurité", "OTAN", "Désarmement", "Cybersécurité", "Prévention des conflits", "Protection des populations"], sourceUrl: `${ps}/pacifier-le-monde`, illustration: "security", icon: "/icons/ps/ps-20-une-nouvelle-approche-de-la-securite-internationale.svg" },
        ],
      },
    ],
  },
  ecologistes: {
    coverageLabel: "4 / 4 chapitres · 13 sous-axes représentés",
    corpusNote: "La plateforme « Pour une prospérité écologique » annonce 557 mesures. Ses quatre chapitres et leurs grands sous-axes sont synthétisés ici ; les mesures détaillées restent consultables dans la source officielle.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "1 — Une prospérité écologique",
        chapters: [
          { number: "01", title: "Protéger les vivants", summary: "Faire de la santé des écosystèmes, de l’eau, de l’air et de l’alimentation le socle de la sécurité collective.", themes: ["Biodiversité", "Eau", "Air", "Sortie des toxiques", "Forêts et océans", "Condition animale", "Adaptation"], sourceUrl: eco, illustration: "nature", icon: "/icons/ecologistes/ecologistes-01-proteger-les-vivants.svg" },
          { number: "02", title: "Reprendre le contrôle de notre économie", summary: "Remplacer la croissance matérielle comme seule boussole par une économie mixte, circulaire et planifiée dans les limites planétaires.", themes: ["Indicateurs au-delà du PIB", "Agroécologie", "Industrie circulaire", "Banque et finance", "Souveraineté numérique", "Énergie", "Transports", "Rénovation"], sourceUrl: eco, illustration: "planning", icon: "/icons/ecologistes/ecologistes-02-reprendre-le-controle-de-notre-economie.svg" },
          { number: "03", title: "Améliorer la vie au travail", summary: "Augmenter les bas revenus, sécuriser l’emploi et partager les gains de productivité et le pouvoir dans l’entreprise.", themes: ["SMIC à 2 000 € brut", "Sécurité sociale professionnelle", "Conditions de travail", "Dialogue social", "Temps libre", "Formation", "Économie sociale et solidaire"], sourceUrl: eco, illustration: "work", icon: "/icons/ecologistes/ecologistes-03-ameliorer-la-vie-au-travail.svg" },
        ],
      },
      {
        title: "2 — Une nation solidaire et juste",
        chapters: [
          { number: "04", title: "Une sécurité sociale écologique", summary: "Élargir les protections collectives à la santé, à l’alimentation, au logement, à la dépendance et aux risques climatiques.", themes: ["Assurance maladie universelle", "Hôpital public", "2 000 centres de santé", "Retraites", "Pauvreté", "Autonomie", "Alimentation", "Protection climatique"], sourceUrl: eco, illustration: "health", icon: "/icons/ecologistes/ecologistes-04-une-securite-sociale-ecologique.svg" },
          { number: "05", title: "Faire de la jeunesse une priorité", summary: "Investir de la petite enfance à l’université et rendre l’autonomie possible par les droits, le logement et la formation.", themes: ["Petite enfance", "Éducation nationale", "Mixité", "Enseignement supérieur", "Logement des jeunes", "Autonomie", "Santé mentale"], sourceUrl: eco, illustration: "education", icon: "/icons/ecologistes/ecologistes-05-faire-de-la-jeunesse-une-priorite.svg" },
          { number: "06", title: "Développer la justice civile et pénale", summary: "Donner des moyens à la justice, humaniser la prison et privilégier prévention, réparation et réinsertion lorsque c’est possible.", themes: ["Moyens judiciaires", "Accès au droit", "Victimes", "Prison", "Réinsertion", "Justice des mineurs", "Adaptation climatique des lieux de détention"], sourceUrl: eco, illustration: "security", icon: "/icons/ecologistes/ecologistes-06-developper-la-justice-civile-et-penale.svg" },
          { number: "07", title: "Des services publics partout", summary: "Réduire les inégalités territoriales en garantissant l’accès aux droits, aux transports et aux services essentiels.", themes: ["Ruralités", "Quartiers populaires", "Outre-mer", "Services de proximité", "Transports", "Numérique accessible", "Décentralisation"], sourceUrl: eco, illustration: "solidarity", icon: "/icons/ecologistes/ecologistes-07-des-services-publics-partout.svg" },
        ],
      },
      {
        title: "3 — Une société d’émancipation et de libertés",
        chapters: [
          { number: "08", title: "Une République écologique et citoyenne", summary: "Moderniser les institutions, protéger l’État de droit et rapprocher les décisions de la souveraineté populaire et des territoires.", themes: ["Réforme institutionnelle", "Participation", "Décentralisation", "Lutte anticorruption", "Justice indépendante", "Pluralisme des médias"], sourceUrl: eco, illustration: "democracy", icon: "/icons/ecologistes/ecologistes-08-une-republique-ecologique-et-citoyenne.svg" },
          { number: "09", title: "Égalités et lutte contre les dominations", summary: "Combattre ensemble violences sexistes, racisme, validisme, discriminations et héritages coloniaux.", themes: ["Féminisme", "Violences faites aux femmes et aux enfants", "Antiracisme", "Handicap", "Droits LGBTQIA+", "Égalité économique", "Outre-mer"], sourceUrl: eco, illustration: "equality", icon: "/icons/ecologistes/ecologistes-09-egalites-et-lutte-contre-les-dominations.svg" },
          { number: "10", title: "Culture, information et libertés numériques", summary: "Défendre la création, des médias indépendants et un numérique ouvert qui ne transforme pas les citoyens en produits.", themes: ["Culture", "Artistes", "Éducation populaire", "Indépendance des médias", "Données personnelles", "Communs numériques", "Intelligence artificielle"], sourceUrl: eco, illustration: "culture", icon: "/icons/ecologistes/ecologistes-10-culture-information-et-libertes-numeriques.svg" },
        ],
      },
      {
        title: "4 — Une Europe démocratique dans un monde en paix",
        chapters: [
          { number: "11", title: "Vers une Europe fédérale", summary: "Donner à l’Union des institutions plus démocratiques et des moyens communs pour le climat, la solidarité et la souveraineté.", themes: ["Fédéralisme", "Parlement européen", "Budget commun", "Limites planétaires dans les traités", "Fiscalité", "Industrie et énergie", "État de droit"], sourceUrl: eco, illustration: "europe", icon: "/icons/ecologistes/ecologistes-11-vers-une-europe-federale.svg" },
          { number: "12", title: "Défendre le droit international", summary: "Faire de la paix, du multilatéralisme et des droits humains les critères d’une diplomatie féministe et postcoloniale.", themes: ["ONU", "Paix", "Proche-Orient", "Ukraine", "Désarmement nucléaire", "Diplomatie féministe", "Relations postcoloniales"], sourceUrl: eco, illustration: "international", icon: "/icons/ecologistes/ecologistes-12-defendre-le-droit-international.svg" },
          { number: "13", title: "Garantir les libertés de migration", summary: "Organiser des voies légales, un accueil digne et un examen impartial de l’asile dans un cadre européen commun.", themes: ["Droit d’asile", "Accueil", "Voies légales", "Sauvetage", "Intégration", "Droits sociaux", "Coopération européenne"], sourceUrl: eco, illustration: "immigration", icon: "/icons/ecologistes/ecologistes-13-garantir-les-libertes-de-migration.svg" },
        ],
      },
    ],
  },
  renaissance: {
    coverageLabel: "2 conventions · 10 dossiers représentés",
    corpusNote: "Renaissance n’a pas encore publié de programme présidentiel 2027 unique. Cette synthèse couvre intégralement le sommaire des deux conventions nationales disponibles, sans les présenter comme un programme final.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "Nouvelle donne économique et climatique — 2025",
        chapters: [
          { number: "01", title: "Libérer compétitivité, croissance et innovation", summary: "Accélérer l’investissement, la productivité, l’IA et la création d’entreprises par la simplification et une fiscalité de l’offre.", themes: ["Baisse des impôts de production", "Simplification", "Zones d’innovation", "Épargne investie", "Intelligence artificielle", "Industrie", "État investisseur"], sourceUrl: renaissanceEconomy, illustration: "industry", icon: "/icons/renaissance/renaissance-01-liberer-competitivite-croissance-et-innovation.svg" },
          { number: "02", title: "Un choc des savoirs dans le supérieur", summary: "Orienter universités et formations vers les compétences scientifiques, numériques, industrielles et climatiques.", themes: ["Orientation", "Filières d’avenir", "Ingénieurs", "IA", "Transition climatique", "Formation professionnelle", "Lien avec les entreprises"], sourceUrl: renaissanceEconomy, illustration: "education", icon: "/icons/renaissance/renaissance-02-un-choc-des-savoirs-dans-le-superieur.svg" },
          { number: "03", title: "Pour la qualité de vie au travail", summary: "Adapter l’organisation du travail et les protections à la diversité des métiers et des vies familiales.", themes: ["Semaine de quatre jours pour certains métiers", "Garde d’enfant", "Organisation du travail", "Santé", "Télétravail", "Salaire médian", "Dialogue social"], sourceUrl: renaissanceEconomy, illustration: "work", icon: "/icons/renaissance/renaissance-03-pour-la-qualite-de-vie-au-travail.svg" },
          { number: "04", title: "Construire une souveraineté verte", summary: "Produire davantage d’énergie en France et sécuriser les technologies et matières nécessaires à la décarbonation.", themes: ["Nucléaire et renouvelables", "75 % d’énergie produite en France", "Industrie verte", "Matières critiques", "Réseaux", "Innovation", "Indépendance"], sourceUrl: renaissanceEconomy, illustration: "energy", icon: "/icons/renaissance/renaissance-04-construire-une-souverainete-verte.svg" },
          { number: "05", title: "Résister au recul climatique", summary: "Maintenir les objectifs climatiques par une écologie négociée avec entreprises, collectivités et citoyens.", themes: ["Planification", "Loi de programmation", "Écologie du contrat", "Entreprises", "Adaptation", "Science", "ZFE"], sourceUrl: renaissanceEconomy, illustration: "planning", icon: "/icons/renaissance/renaissance-05-resister-au-recul-climatique.svg" },
          { number: "06", title: "L’écologie pour toutes et tous", summary: "Rendre les équipements décarbonés accessibles pour éviter que la transition repose surtout sur les ménages modestes.", themes: ["Leasing social d’occasion", "TVA sur les véhicules propres", "Rénovation", "Mobilités", "Factures", "Adaptation aux chocs climatiques"], sourceUrl: renaissanceEconomy, illustration: "housing", icon: "/icons/renaissance/renaissance-06-l-ecologie-pour-toutes-et-tous.svg" },
        ],
      },
      {
        title: "Une République ferme, une France apaisée — 2025",
        chapters: [
          { number: "07", title: "Sécurité : dissuader et prévenir", summary: "Renforcer la présence sur le terrain, l’équipement technologique et la coopération des forces de sécurité, avec une attention aux mineurs.", themes: ["Police et gendarmerie", "Polices municipales", "Technologies", "Cybercriminalité", "Narcotrafic", "Prévention", "Protection de la jeunesse"], sourceUrl: renaissanceAuthority, illustration: "security", icon: "/icons/renaissance/renaissance-07-securite-dissuader-et-prevenir.svg" },
          { number: "08", title: "Justice : confiance, récidive et réinsertion", summary: "Accélérer les décisions, renforcer les moyens et faire du travail et de la réinsertion des outils centraux contre la récidive.", themes: ["Délais", "Moyens", "Sanctions", "Prison", "Travail des détenus", "Réinsertion", "Victimes"], sourceUrl: renaissanceAuthority, illustration: "rights", icon: "/icons/renaissance/renaissance-08-justice-confiance-recidive-et-reinsertion.svg" },
          { number: "09", title: "Immigration : le travail comme condition", summary: "Piloter davantage l’immigration selon l’emploi, renforcer l’intégration et suivre le respect des règles dans le temps.", themes: ["Immigration de travail", "Critères pilotés", "Permis à points", "Intégration", "Langue", "Frontières", "Éloignement"], sourceUrl: renaissanceAuthority, illustration: "immigration", icon: "/icons/renaissance/renaissance-09-immigration-le-travail-comme-condition.svg" },
          { number: "10", title: "Valeurs républicaines et discriminations", summary: "Combattre séparatismes et entrisme tout en renforçant l’égalité, notamment entre femmes et hommes, et la lutte contre les discriminations.", themes: ["Laïcité", "Séparatisme", "Égalité femmes-hommes", "Discriminations", "Méritocratie", "Protection de l’enfance", "Services publics"], sourceUrl: renaissanceAuthority, illustration: "democracy", icon: "/icons/renaissance/renaissance-10-valeurs-republicaines-et-discriminations.svg" },
        ],
      },
    ],
  },
  lr: {
    coverageLabel: "7 / 7 dossiers nationaux actuels représentés",
    corpusNote: "Les Républicains n’ont pas encore publié de programme présidentiel 2027 unique. La page reprend tous les dossiers actuellement réunis dans « Nos propositions », complétés par les orientations générales du parti.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "Dossiers de propositions publiés",
        chapters: [
          { number: "01", title: "Compétitivité et pouvoir d’achat", summary: "Creuser l’écart entre activité et inactivité et alléger le coût du travail par une refonte coordonnée des cotisations et prestations.", themes: ["Seuil zéro cotisation", "Revenu d’incitation à l’activité", "Travail des seniors", "Compte social unique", "Assurance-chômage"], sourceUrl: lr, illustration: "work", icon: "/icons/lr/lr-01-competitivite-et-pouvoir-d-achat.svg" },
          { number: "02", title: "Produire plus pour vivre mieux", summary: "Réindustrialiser par un choc de normes, de fiscalité, de formation, d’énergie et d’investissement productif.", themes: ["Abrogation de 50 normes", "Code du travail recentré", "Baisse des prélèvements", "Électricité industrielle", "Concurrence équitable", "Fonds France Production", "Formation", "Capital et épargne"], sourceUrl: lr, illustration: "industry", icon: "/icons/lr/lr-02-produire-plus-pour-vivre-mieux.svg" },
          { number: "03", title: "Réarmer notre agriculture", summary: "Desserrer les règles, moderniser les exploitations et protéger revenu, eau, débouchés et transmission.", themes: ["Normes", "Agences de l’État", "Pas de surtransposition", "Eau stratégique", "Productivité", "Installation", "PAC", "Prix et réciprocité commerciale"], sourceUrl: lr, illustration: "agriculture", icon: "/icons/lr/lr-03-rearmer-notre-agriculture.svg" },
          { number: "04", title: "Retrouver une vraie politique familiale", summary: "Remplacer plusieurs aides par un revenu familial et soutenir natalité, garde d’enfant, logement et accession à la propriété.", themes: ["Revenu familial", "Troisième enfant", "Logement social lié au travail", "Accession", "Six premiers mois", "Modes de garde privés"], sourceUrl: lr, illustration: "family", icon: "/icons/lr/lr-04-retrouver-une-vraie-politique-familiale.svg" },
          { number: "05", title: "Baisser la facture d’électricité", summary: "Faire du nucléaire ancien et nouveau la base d’un prix stable, avec hydroélectricité, électrification et arrêt des nouvelles subventions éoliennes et solaires.", themes: ["Parc nucléaire à 80 ans", "EPR2", "Hydroélectricité", "Fin des nouvelles subventions intermittentes", "Électrification", "Réacteurs de quatrième génération", "Souveraineté du mix"], sourceUrl: lr, illustration: "energy", icon: "/icons/lr/lr-05-baisser-la-facture-d-electricite.svg" },
          { number: "06", title: "Se loger mieux et moins cher", summary: "Créer un choc d’offre par la simplification de l’urbanisme, la mobilisation du foncier et la protection des propriétaires.", themes: ["Pouvoir des maires", "Transformation du bâti", "Accession", "Fin des interdictions de louer DPE", "Marché locatif", "Statut du bailleur", "Squats et impayés", "Loi SRU", "Logement social"], sourceUrl: lr, illustration: "housing", icon: "/icons/lr/lr-06-se-loger-mieux-et-moins-cher.svg" },
          { number: "07", title: "L’IA au service des Français", summary: "Traiter l’intelligence artificielle comme une infrastructure souveraine pour l’économie, l’État et la défense.", themes: ["Données souveraines", "Formation", "Talents", "Allégement réglementaire", "Champions européens", "PME", "Services publics", "Commande européenne", "Défense et résilience"], sourceUrl: lr, illustration: "digital", icon: "/icons/lr/lr-07-l-ia-au-service-des-francais.svg" },
        ],
      },
      {
        title: "Orientations générales — non encore transformées en programme final",
        chapters: [
          { number: "08", title: "Autorité, immigration et sécurité", summary: "Les textes de doctrine du parti défendent une politique migratoire et pénale plus restrictive, mais le dossier présidentiel détaillé reste à publier.", themes: ["Contrôle migratoire", "Ordre public", "Justice", "Laïcité", "Autorité de l’État", "Conditionnalité des aides"], sourceUrl: "https://republicains.fr/nos-idees/", illustration: "security", icon: "/icons/lr/lr-08-autorite-immigration-et-securite.svg" },
          { number: "09", title: "Services publics, dépenses et territoires", summary: "L’orientation associe réduction de la dépense nationale, autonomie locale et priorités pour l’école, la santé et les ruralités.", themes: ["Dépense publique", "École", "Santé", "Retraites", "Collectivités", "Ruralité", "Écologie d’innovation"], sourceUrl: "https://republicains.fr/nos-idees/", illustration: "solidarity", icon: "/icons/lr/lr-09-services-publics-depenses-et-territoires.svg" },
        ],
      },
    ],
  },
  horizons: {
    coverageLabel: "4 / 4 priorités 2027 actuellement publiées",
    corpusNote: "Le site de campagne présente ces textes comme les premières orientations d’un programme encore appelé à s’enrichir. La synthèse reprend le corpus officiel disponible au 17 août 2026 sans lui attribuer des mesures non publiées.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Pour une France plus sûre",
        chapters: [
          { number: "01", title: "Refonder la justice", summary: "Rendre la sanction plus rapide et plus certaine, avec peines courtes, peines planchers ciblées et réforme de la chaîne judiciaire.", themes: ["Peines courtes", "Peines planchers", "Juge d’application des peines", "Magistrats", "CSM", "Parquet", "Pouvoirs des maires"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure", illustration: "security" },
          { number: "02", title: "État d’urgence contre le narcotrafic", summary: "Utiliser des moyens judiciaires, financiers, de renseignement et de lutte anticorruption plus exceptionnels contre les réseaux de drogue.", themes: ["État d’urgence narco", "Renseignement financier", "Saisie des avoirs", "Mineurs", "Anticorruption", "Consommateurs", "Coopération européenne"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure", illustration: "security" },
          { number: "03", title: "Reprendre le contrôle de l’immigration", summary: "Restreindre l’immigration familiale, choisir davantage l’immigration économique et accélérer le retour des étrangers délinquants.", themes: ["Accord franco-algérien de 1968", "Pays sûrs", "Immigration familiale", "Quotas économiques", "Expulsions", "Centres de retour", "Intégration"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure", illustration: "immigration" },
          { number: "04", title: "Massifier la défense", summary: "Augmenter fortement réserves, service militaire volontaire, drones, munitions et capacités navales.", themes: ["250 000 réservistes", "50 000 volontaires par an", "Drones", "Munitions", "Marine", "Nouvelle LPM"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure", illustration: "international" },
        ],
      },
      {
        title: "Pour une France plus attentive à ses enfants",
        chapters: [
          { number: "05", title: "Protéger les mineurs", summary: "Déclencher plus vite des protections, renforcer l’information des familles et durcir la réponse aux crimes et à l’exploitation sexuelle des mineurs.", themes: ["Principe de précaution pénal", "Droit de savoir", "Proxénétisme en ligne", "Imprescriptibilité", "Périscolaire", "Honorabilité"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants", illustration: "family" },
          { number: "06", title: "Une école plus autonome et exigeante", summary: "Renforcer le chef d’établissement, revaloriser les professeurs, recentrer le primaire sur les fondamentaux et créer un soutien scolaire universel.", themes: ["Autonomie des établissements", "Rémunération des enseignants", "Recrutement", "Rythmes scolaires", "Fondamentaux", "Sport et culture", "Soutien scolaire", "IA éducative"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants", illustration: "education" },
          { number: "07", title: "Relancer la politique familiale", summary: "Simplifier les aides et utiliser fiscalité, logement et temps partiel parental pour soutenir les familles dès le deuxième enfant.", themes: ["Part fiscale dès le deuxième enfant", "Aide familiale unique", "Prêt à taux zéro", "Déménagement", "Temps partiel parental"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants", illustration: "family" },
        ],
      },
      {
        title: "Pour une France plus prospère",
        chapters: [
          { number: "08", title: "Un choc de compétitivité et de simplification", summary: "Échanger une forte baisse des impôts de production contre la suppression d’aides jugées improductives, avec moratoire normatif et fiscal.", themes: ["50 Md€ d’impôts de production", "50 Md€ d’aides", "Agences et opérateurs", "Privatisations", "Moratoire normatif", "Agriculture"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere", illustration: "industry" },
          { number: "09", title: "Ramener le déficit à 2 %", summary: "Constitutionnaliser une règle d’or budgétaire et stabiliser notamment la dépense de santé par prévention et transformation technologique.", themes: ["Règle d’or", "Déficit à 2 %", "Dépense de santé", "Prévention", "Technologie", "Souveraineté financière"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere", illustration: "finance" },
          { number: "10", title: "Retraites, travail et salaire net", summary: "Faire travailler davantage, introduire une part de capitalisation et déplacer une partie du financement social hors du travail.", themes: ["Durée d’activité", "Capitalisation 10–15 %", "Partenaires sociaux", "Financement social", "Salaire net"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere", illustration: "work" },
          { number: "11", title: "Protéger et approfondir le marché européen", summary: "Répondre à la concurrence chinoise, achever le marché unique et construire une véritable union européenne des marchés de capitaux.", themes: ["Concurrence chinoise", "Transferts technologiques", "Marché unique", "Industries stratégiques", "Marchés de capitaux"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere", illustration: "europe" },
        ],
      },
      {
        title: "Pour une France plus conquérante",
        chapters: [
          { number: "12", title: "Souveraineté européenne en intelligence artificielle", summary: "Doubler la capacité de calcul, soutenir les champions technologiques européens et utiliser davantage la commande publique.", themes: ["Infrastructure IA", "Capacité de calcul", "Buy European Tech Act", "Énergie décarbonée", "Régulation IA"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante", illustration: "digital" },
          { number: "13", title: "Financer et former pour la course technologique", summary: "Mobiliser l’épargne vers la tech, créer un droit à la reconversion et porter la formation d’ingénieurs de 40 000 à 100 000 par an.", themes: ["Livret capital France", "Capitalisation retraite", "Reconversion", "100 000 ingénieurs par an", "Formation IA"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante", illustration: "education" },
          { number: "14", title: "Une écologie de décarbonation industrielle", summary: "Combiner nucléaire, renouvelables, électrification, rénovation, fret, industrie et prix carbone européen.", themes: ["Nucléaire", "Renouvelables", "Électrification", "Fret", "Rénovation", "Industrie", "Carbone aux frontières", "Capture de carbone"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante", illustration: "energy" },
          { number: "15", title: "Adapter les villes au réchauffement", summary: "Renforcer la climatisation des lieux fragiles, l’ombre, les arbres, les équipements d’eau et la coordination nationale de l’adaptation.", themes: ["Climatisation", "Fonds vert", "Rivières baignables", "Piscines", "Arbres", "Urbanisme", "DATAR 2.0"], sourceUrl: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante", illustration: "planning" },
        ],
      },
    ],
  },
  "nouvelle-energie": {
    coverageLabel: "3 axes de refondation + fiches thématiques 2026",
    corpusNote: "Le site officiel annonce neuf thématiques principales. Cette fiche reprend les trois axes structurants et les fiches publiques actuellement accessibles, sans compléter artificiellement les thèmes encore moins détaillés.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Être maître de notre destin",
        chapters: [
          { number: "01", title: "Rétablir la souveraineté financière", summary: "Réduire dette et déficit en limitant la dépense et en réorganisant l’action publique plutôt qu’en augmentant les prélèvements.", themes: ["Dette", "Déficit", "Dépense publique", "Performance", "Responsabilité budgétaire"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/", illustration: "finance" },
          { number: "02", title: "Un État recentré et un Parlement renforcé", summary: "Limiter la loi aux principes essentiels, recentrer la présidence sur la stratégie et faire du contrôle de l’exécutif une fonction parlementaire plus forte.", themes: ["Rôle de la loi", "Parlement", "Présidence", "Stratégie", "Contrôle", "Réforme de l’État"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/", illustration: "democracy" },
          { number: "03", title: "Une Europe comme levier de puissance", summary: "Refuser à la fois le retrait national et une Europe bureaucratique, pour concentrer l’Union sur les domaines où l’échelle européenne apporte une valeur stratégique.", themes: ["Souveraineté", "Subsidiarité", "Europe", "Compétitivité", "Puissance"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/", illustration: "europe" },
        ],
      },
      {
        title: "Réussir une nouvelle ambition française",
        chapters: [
          { number: "04", title: "Libérer l’économie et la production", summary: "Baisser les impôts de production, simplifier le droit et donner plus de liberté aux entreprises pour réindustrialiser.", themes: ["Impôts de production", "Droit du travail", "Simplification", "Réindustrialisation", "Infrastructures", "Entreprises"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/", illustration: "industry" },
          { number: "05", title: "Refonder l’école autour des savoirs", summary: "Conditionner l’entrée au collège à un certificat de fin de primaire, restaurer l’autorité et revaloriser les enseignants avec davantage d’évaluation et d’autonomie.", themes: ["Certificat de primaire", "Lire, écrire, compter", "Autorité", "Humanités", "Rémunération des enseignants", "Formation", "Apprentissage"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/education/", illustration: "education" },
          { number: "06", title: "Un État plus ferme sur la sécurité", summary: "Réorganiser la chaîne de sécurité et de justice autour d’une logique d’autorité, d’efficacité opérationnelle et de sanction plus certaine.", themes: ["Police", "Justice", "Autorité", "Chaîne pénale", "Incivilités", "Narcotrafic"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/securite/", illustration: "security" },
          { number: "07", title: "Réduire fortement l’immigration", summary: "Durcir asile, titres de séjour, regroupement familial et expulsions, jusqu’à envisager un rapport de force avec les juridictions européennes.", themes: ["Accord de 1968", "Asile à l’étranger", "Quotas qualifiés", "Droit du sol", "Rétention", "CEDH", "AME", "Prestations sociales"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/immigration/", illustration: "immigration" },
          { number: "08", title: "Débureaucratiser la santé", summary: "Organiser davantage l’offre de soins au niveau territorial, favoriser les maisons de santé et adapter les incitations dans les déserts médicaux.", themes: ["Déserts médicaux", "Conventionnement différencié", "Maisons de santé", "Accès direct", "Soignants", "Territoires", "Bureaucratie sanitaire"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/sante/", illustration: "health" },
          { number: "09", title: "Une agriculture productive et technologique", summary: "Réduire les surtranspositions, réorienter la PAC vers la production, autoriser davantage l’innovation et relocaliser la transformation agroalimentaire.", themes: ["Surtranspositions", "Clauses miroir", "PAC", "NTG", "Phytosanitaires", "Rémunération", "Agroalimentaire", "Agriculture de précision"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/agriculture/", illustration: "agriculture" },
        ],
      },
      {
        title: "Générer un renouveau civique",
        chapters: [
          { number: "10", title: "Une décentralisation radicale", summary: "Transférer davantage de compétences et de responsabilité aux territoires, jusqu’à une organisation en grandes provinces.", themes: ["Subsidiarité", "Provinces", "Compétences locales", "Autonomie réglementaire", "Finances locales", "Services publics"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/", illustration: "democracy" },
          { number: "11", title: "Liberté, ordre et dignité", summary: "Faire de la liberté individuelle, de la responsabilité et d’un État régalien fort les principes transversaux du projet.", themes: ["Liberté", "Responsabilité", "Autorité", "Performance publique", "Initiative privée", "Initiative locale"], sourceUrl: "https://www.unenouvelleenergie.fr/decouvrir-notre-parti/notre-credo/", illustration: "rights" },
          { number: "12", title: "Transformer l’écologie par l’innovation et la responsabilité", summary: "Privilégier une écologie compatible avec production, innovation et décisions locales plutôt qu’une logique de décroissance administrée.", themes: ["Innovation", "Économie écologique de marché", "Technologie", "Responsabilité", "Adaptation", "Territoires"], sourceUrl: "https://www.unenouvelleenergie.fr/notre-programme/", illustration: "nature" },
        ],
      },
    ],
  },
  "nous-france": {
    coverageLabel: "8 / 8 axes participatifs affichés sur le site officiel",
    corpusNote: "Nous France recueille encore des contributions et ne présente pas ces huit axes comme un programme présidentiel final. Xavier Bertrand a indiqué début août 2026 se préparer à 2027 sans être encore officiellement candidat : les formulations détaillées pourront donc évoluer.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Autorité et cohésion nationale",
        chapters: [
          { number: "01", title: "Rétablir l’autorité", summary: "Recentrer l’État sur la sécurité, la justice, la lutte contre le terrorisme et les grandes fonctions qu’il est seul à pouvoir assurer.", themes: ["Sécurité", "Justice", "Terrorisme", "Autorité de l’État", "Services essentiels"], sourceUrl: "https://www.nousfrance.fr/programme/autorite/", illustration: "security" },
          { number: "02", title: "Reprendre le contrôle de l’immigration", summary: "Faire de la politique migratoire une responsabilité régalienne prioritaire, avec une ligne plus restrictive que le statu quo.", themes: ["Immigration", "Frontières", "Séjour", "Intégration", "Autorité", "Souveraineté"], sourceUrl: "https://www.nousfrance.fr/programme/immigration/", illustration: "immigration" },
          { number: "03", title: "Agir pour notre jeunesse", summary: "Faire de l’école, de l’insertion, de la culture et de l’accès aux opportunités des leviers de cohésion et d’ascension sociale.", themes: ["Éducation", "Insertion", "Orientation", "Culture", "Égalité des chances", "Jeunesse"], sourceUrl: "https://www.nousfrance.fr/programme/jeunesse/", illustration: "education" },
        ],
      },
      {
        title: "Travail, pouvoir d’achat et territoires",
        chapters: [
          { number: "04", title: "Instaurer la République des territoires", summary: "Concentrer l’État national sur les sujets essentiels et confier davantage de décisions quotidiennes aux collectivités et acteurs locaux.", themes: ["Décentralisation", "Emploi", "Formation", "Santé", "Logement", "Énergie", "Collectivités", "Proximité"], sourceUrl: "https://www.nousfrance.fr/programme/territoires/", illustration: "democracy" },
          { number: "05", title: "Instaurer une société du travail", summary: "Faire du travail, de la responsabilité et de la rémunération de l’activité un pilier de la protection et de la dignité sociales.", themes: ["Travail", "Salaire", "Emploi", "Formation", "Responsabilité", "Protection sociale"], sourceUrl: "https://www.nousfrance.fr/programme/travail/", illustration: "work" },
          { number: "06", title: "Défendre le pouvoir d’achat", summary: "Construire le projet autour du revenu disponible des ménages, avec des propositions encore en cours de consolidation dans la démarche participative.", themes: ["Pouvoir d’achat", "Revenus", "Prix", "Travail", "Classes moyennes", "Vie quotidienne"], sourceUrl: "https://www.nousfrance.fr/programme/pouvoir-achat/", illustration: "finance" },
        ],
      },
      {
        title: "Environnement, Europe et culture",
        chapters: [
          { number: "07", title: "Protéger l’environnement", summary: "Associer transition écologique et décisions territoriales, avec une attention aux réalités industrielles, agricoles et sociales locales.", themes: ["Transition", "Territoires", "Énergie", "Agriculture", "Adaptation", "Industrie"], sourceUrl: "https://www.nousfrance.fr/programme/environnement/", illustration: "nature" },
          { number: "08", title: "Réfléchir à l’Europe de demain", summary: "Maintenir l’ancrage européen tout en redéfinissant les domaines où la France veut agir davantage avec ses partenaires.", themes: ["Europe", "Souveraineté", "Défense", "Économie", "Coopération", "Frontières"], sourceUrl: "https://www.nousfrance.fr/programme/europe/", illustration: "europe" },
          { number: "09", title: "La culture comme outil de réconciliation", summary: "Porter progressivement la culture à 1 % du budget de l’État d’ici 2032, développer le mécénat, la décentralisation culturelle et son rôle à l’école.", themes: ["1 % culture", "Mécénat", "Décentralisation culturelle", "École", "Accès aux œuvres", "Cohésion"], sourceUrl: "https://www.nousfrance.fr/2026/08/je-my-prepare-pas-encore-officiellement-candidat-xavier-bertrand-pose-les-bases-de-son-projet-pour-la-presidentielle-avec-la-culture-en-toile-de-fond-var-matin/", illustration: "culture" },
        ],
      },
    ],
  },
  "generation-ecologie": {
    coverageLabel: "Socle Vivre autrement ! + textes de référence 2023–2026",
    corpusNote: "Génération Écologie a investi officiellement Delphine Batho en juin 2026, mais indique encore construire le programme de gouvernement qui sera porté en 2027. La fiche couvre donc le socle officiel déjà adopté, les travaux sur l’État-résilience et les orientations de campagne, sans inventer les arbitrages encore à venir.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Décroissance et émancipation",
        chapters: [
          { number: "01", title: "Sortir de l’obsession de la croissance", summary: "Réduire volontairement l’empreinte énergétique et matérielle tout en garantissant à chacun les besoins essentiels et une vie digne.", themes: ["Décroissance", "Limites planétaires", "Énergie", "Matières premières", "Besoins essentiels", "Bien-vivre", "Empreinte écologique"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "commons" },
          { number: "02", title: "Retrouver du temps pour vivre", summary: "Rééquilibrer travail et vie personnelle, valoriser les métiers essentiels, les activités non marchandes et une démocratie plus forte dans l’entreprise.", themes: ["Temps libéré", "Conditions de travail", "Métiers essentiels", "Démocratie dans l’entreprise", "Activités non marchandes", "Partage des tâches"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "work" },
          { number: "03", title: "Réduire les inégalités et la vie chère", summary: "Faire de la décroissance un projet de justice sociale, avec partage des richesses, lutte contre la profitation et justice climatique.", themes: ["Inégalités", "Vie chère", "Partage", "Justice climatique", "Empreinte carbone", "Services publics"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "solidarity" },
        ],
      },
      {
        title: "État-résilience, santé et vivant",
        chapters: [
          { number: "04", title: "Sécuriser l’eau, l’alimentation et les infrastructures", summary: "Préparer les territoires aux chocs climatiques en assurant continuité des besoins vitaux, adaptation des équipements et autonomie locale.", themes: ["Eau", "Sécurité alimentaire", "Sécurité civile", "Infrastructures", "Aménagement", "Autonomie", "Adaptation"], sourceUrl: "https://www.generationecologie.fr/app/uploads/2025/06/POUR-UN-ETAT-RESILIENCE-cahier-dacteur-de-Generation-Ecologie.pdf", illustration: "planning" },
          { number: "05", title: "Régénérer le vivant", summary: "Placer la diversité biologique et la régénération des écosystèmes terrestres et marins au centre de la sécurité collective.", themes: ["Biodiversité", "Écosystèmes", "Sols", "Milieux marins", "Régénération", "Biens communs"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "nature" },
          { number: "06", title: "Une seule santé", summary: "Relier santé humaine, environnement, alimentation et état du vivant plutôt que traiter la prévention comme un sujet séparé.", themes: ["Santé environnementale", "Pollutions", "Alimentation", "Prévention", "Vivants", "Conditions de vie"], sourceUrl: "https://www.generationecologie.fr/agenda/15e-convention-nationale-de-generation-ecologie/", illustration: "health" },
          { number: "07", title: "Une sécurité compatible avec le chaos climatique", summary: "Faire de la protection physique des populations, de la résilience et de l’anticipation des crises une fonction régalienne centrale.", themes: ["Sécurité nationale", "Sécurité civile", "Climat", "Catastrophes", "Résilience", "Paix"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "security" },
        ],
      },
      {
        title: "République, démocratie et écoféminisme",
        chapters: [
          { number: "08", title: "Abolir le présidentialisme", summary: "Rompre avec la concentration du pouvoir et aller vers des institutions plus parlementaires, collégiales et citoyennes.", themes: ["Présidentialisme", "Parlement", "Collégialité", "Citoyens", "Séparation des intérêts privés", "Éthique publique"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "democracy" },
          { number: "09", title: "Une écologie républicaine, laïque et scientifique", summary: "Ancrer la transformation écologique dans la science, la République, la laïcité et le refus des totalitarismes et de l’obscurantisme.", themes: ["Science", "République", "Laïcité", "Démocratie", "Non-violence", "Éducation populaire"], sourceUrl: "https://www.generationecologie.fr/a-propos/generation-ecologie/notre-projet/", illustration: "rights" },
          { number: "10", title: "L’écoféminisme comme projet d’émancipation", summary: "Relier destruction de la nature, patriarcat et autres formes de domination dans une même politique d’égalité et de partage du pouvoir.", themes: ["Écoféminisme", "Égalité femmes-hommes", "Patriarcat", "Domination", "Émancipation", "Partage du pouvoir"], sourceUrl: "https://www.generationecologie.fr/vivre-autrement/", illustration: "equality" },
          { number: "11", title: "Construire le programme 2027 avec la société", summary: "Poursuivre l’élaboration participative du programme Vivre autrement par commissions, groupes locaux et forces de la société civile.", themes: ["Participation", "Commissions thématiques", "Groupes locaux", "Société civile", "Programme 2027", "Éducation populaire"], sourceUrl: "https://www.generationecologie.fr/publication/investiture-de-delphine-batho-a-lelection-presidentielle/", illustration: "democracy" },
        ],
      },
    ],
  },
  rn: {
    coverageLabel: "16 / 16 livrets · corpus 2022–2026 représenté",
    corpusNote: "Il n’existe pas encore de programme présidentiel RN 2027 unique. La synthèse couvre les seize livrets officiels de 2022, les 22 mesures, le programme législatif 2024, le contre-budget 2026 et « La France entreprend » — en indiquant leurs dates.",
    updated: "Corpus vérifié le 16 août 2026",
    groups: [
      {
        title: "Souveraineté, ordre et identité",
        chapters: [
          { number: "01", title: "Contrôle de l’immigration", summary: "Réduire fortement l’immigration légale et irrégulière et introduire la priorité nationale dans plusieurs droits sociaux.", themes: ["Référendum", "Regroupement familial", "Asile traité à l’étranger", "Prestations après cinq ans de travail", "Priorité nationale", "Expulsions", "Fin du droit du sol"], sourceUrl: rn, illustration: "immigration", icon: "/icons/rn/rn-01-controle-de-l-immigration.svg" },
          { number: "02", title: "Sécurité", summary: "Durcir les peines et augmenter les moyens policiers, judiciaires et pénitentiaires.", themes: ["Peines planchers", "Aménagements de peine", "Présomption de légitime défense", "Magistrats", "85 000 places de prison", "Perpétuité réelle", "Police"], sourceUrl: rn, illustration: "security", icon: "/icons/rn/rn-02-securite.svg" },
          { number: "03", title: "Lutte contre la fraude", summary: "Centraliser la lutte contre les fraudes fiscales, sociales, douanières et économiques dans un ministère dédié.", themes: ["Prestations sociales", "Cotisations", "Fiscalité", "Importations", "Ententes", "Contrôles", "Échanges de données"], sourceUrl: rn, illustration: "finance", icon: "/icons/rn/rn-03-lutte-contre-la-fraude.svg" },
          { number: "04", title: "Patrimoine", summary: "Renforcer la protection, la transmission et la valorisation du patrimoine historique et culturel français.", themes: ["Monuments", "Transmission", "Patrimoine local", "Métiers", "Financement", "Identité culturelle"], sourceUrl: rn, illustration: "culture", icon: "/icons/rn/rn-04-patrimoine.svg" },
        ],
      },
      {
        title: "Économie, production et territoires",
        chapters: [
          { number: "05", title: "Agriculture", summary: "Protéger les prix et normes français, soutenir la souveraineté alimentaire et limiter la concurrence jugée déloyale.", themes: ["Prix agricoles", "Marges de la distribution", "Normes aux importations", "80 % français dans les cantines", "Étiquetage", "Abattoirs", "PAC"], sourceUrl: rn, illustration: "agriculture", icon: "/icons/rn/rn-05-agriculture.svg" },
          { number: "06", title: "Tourisme", summary: "Faire du tourisme un outil de souveraineté économique, d’emploi local et de valorisation des territoires.", themes: ["Entreprises touristiques", "Patrimoine", "Formation", "Saisonnalité", "Outre-mer", "Attractivité", "Infrastructures"], sourceUrl: rn, illustration: "housing", icon: "/icons/rn/rn-06-tourisme.svg" },
          { number: "07", title: "Numérique", summary: "Renforcer la souveraineté technologique, la sécurité et la protection des données tout en soutenant les entreprises françaises.", themes: ["Données", "Cloud", "Cybersécurité", "Infrastructures", "Entreprises françaises", "Services publics", "Protection des mineurs"], sourceUrl: rn, illustration: "digital", icon: "/icons/rn/rn-07-numerique.svg" },
          { number: "08", title: "Écologie", summary: "Privilégier nucléaire, souveraineté énergétique et écologie locale, en s’opposant à l’éolien et à plusieurs contraintes européennes.", themes: ["Relance nucléaire", "Hydroélectricité", "Hydrogène", "Arrêt des projets éoliens", "Marché européen de l’électricité", "Biodiversité locale", "Adaptation"], sourceUrl: rn, illustration: "energy", icon: "/icons/rn/rn-08-ecologie.svg" },
          { number: "09", title: "Outre-mer", summary: "Adapter les politiques de sécurité, d’énergie, de santé, de logement et de développement aux territoires ultramarins.", themes: ["Vie chère", "Infrastructures", "Continuité territoriale", "Sécurité", "Santé", "Énergie", "Économie locale"], sourceUrl: rn, illustration: "international", icon: "/icons/rn/rn-09-outre-mer.svg" },
        ],
      },
      {
        title: "École, famille et protections",
        chapters: [
          { number: "10", title: "École", summary: "Recentrer l’enseignement sur les fondamentaux et restaurer l’autorité, avec uniforme et réforme de l’administration éducative.", themes: ["Français, mathématiques, histoire", "Salaire et formation des enseignants", "Uniforme", "Sanctions", "Taille des classes", "Bureaucratie", "Écoles rurales"], sourceUrl: rn, illustration: "education", icon: "/icons/rn/rn-10-ecole.svg" },
          { number: "11", title: "Famille", summary: "Utiliser fiscalité, prêts et prestations pour soutenir natalité, transmission et familles françaises.", themes: ["Part fiscale dès le deuxième enfant", "Mères isolées", "Prêt à taux zéro", "Troisième enfant", "Héritage et donations", "Logement étudiant"], sourceUrl: rn, illustration: "family", icon: "/icons/rn/rn-11-famille.svg" },
          { number: "12", title: "Jeunes", summary: "Alléger impôts et charges pour l’entrée dans l’emploi, l’apprentissage et la création d’entreprise avant 30 ans.", themes: ["Chèque-formation", "Apprentissage", "Exonération d’impôt sur le revenu", "Entrepreneurs de moins de 30 ans", "Logement", "Installation"], sourceUrl: rn, illustration: "work", icon: "/icons/rn/rn-12-jeunes.svg" },
          { number: "13", title: "Protection de l’enfance", summary: "Renforcer prévention, sanctions et accompagnement face aux violences, à la délinquance et aux risques numériques.", themes: ["Aide sociale à l’enfance", "Violences", "Mineurs délinquants", "Responsabilité parentale", "Pornographie", "Réseaux sociaux", "Placement"], sourceUrl: rn, illustration: "family", icon: "/icons/rn/rn-13-protection-de-l-enfance.svg" },
          { number: "14", title: "Protection des animaux", summary: "Améliorer les conditions de détention, d’élevage et d’abattage tout en maintenant la chasse et les activités rurales défendues par le parti.", themes: ["Maltraitance", "Élevage", "Abattage avec étourdissement", "Animaux domestiques", "Trafic", "Chasse", "Expérimentation"], sourceUrl: rn, illustration: "nature", icon: "/icons/rn/rn-14-protection-des-animaux.svg" },
          { number: "15", title: "Santé", summary: "Investir dans l’hôpital, les soignants, les médicaments et les soins de proximité en réduisant l’administration sanitaire.", themes: ["Plan de 20 milliards annoncé en 2022", "Lits et maternités", "Salaires", "Production de médicaments", "Urgences gériatriques", "Suppression des ARS", "Déserts médicaux", "Prévention"], sourceUrl: rn, illustration: "health", icon: "/icons/rn/rn-15-sante.svg" },
          { number: "16", title: "Handicap", summary: "Rendre effectifs revenus, scolarisation, accessibilité et soutien aux proches aidants.", themes: ["AAH déconjugalisée et revalorisée", "École", "Transports", "Bâtiments", "Aidants", "Emploi", "Autonomie"], sourceUrl: rn, illustration: "rights", icon: "/icons/rn/rn-16-handicap.svg" },
        ],
      },
      {
        title: "Documents plus récents qui complètent les livrets",
        chapters: [
          { number: "17", title: "La France entreprend", summary: "Mettre à jour le volet économique autour de trois verbes : produire, protéger et permettre.", themes: ["Baisse des impôts de production", "Énergie compétitive", "Fonds souverain", "Revalorisation du travail", "Réciprocité commerciale", "Commande publique nationale", "Sobriété normative", "IA et formation"], sourceUrl: "https://rassemblementnational.fr/documents/WEB-GRN-LIVRET-ENTREPRISE.pdf", illustration: "industry", icon: "/icons/rn/rn-17-la-france-entreprend.svg" },
          { number: "18", title: "Contre-budget 2026", summary: "Financer des baisses de taxes et des dépenses ciblées par des économies sur l’Union européenne, l’immigration, les agences, l’aide au développement et par de nouvelles taxes financières.", themes: ["TVA énergie et produits essentiels", "Impôts de production", "Prestations après cinq ans de travail", "AME remplacée", "Baisse de contribution à l’UE", "IFF", "Transactions et rachats d’actions", "Retraites et Outre-mer"], sourceUrl: "https://rassemblementnational.fr/documents/GRN-CONTRE-BUDGET-2026.pdf", illustration: "finance", icon: "/icons/rn/rn-18-contre-budget-2026.svg" },
          { number: "19", title: "Programmes législatif et européen 2024", summary: "Les textes 2024 reprennent pouvoir d’achat, sécurité, immigration, énergie, agriculture et opposition à l’approfondissement fédéral européen.", themes: ["Pouvoir d’achat", "Ordre", "Immigration", "Nucléaire", "Agriculture", "Frontières européennes", "Souveraineté nationale"], sourceUrl: "https://rassemblementnational.fr/documents/202406-programme.pdf", illustration: "europe", icon: "/icons/rn/rn-19-programmes-legislatif-et-europeen-2024.svg" },
        ],
      },
    ],
  },
  "lutte-ouvriere": {
    coverageLabel: "8 axes de la campagne présidentielle 2027 représentés",
    corpusNote: "Lutte ouvrière revendique explicitement un programme communiste révolutionnaire plutôt qu’un programme gouvernemental classique. Cette synthèse combine la brochure de campagne publiée en juin 2026 et les textes programmatiques récents de Nathalie Arthaud.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Revendications immédiates du monde du travail",
        chapters: [
          { number: "01", title: "Salaires, pensions et allocations", summary: "Imposer une forte hausse générale des revenus populaires et les indexer automatiquement sur l’évolution réelle des prix.", themes: ["Au moins 2 200 € nets comme repère salarial", "Hausse générale des salaires", "Pensions", "Allocations", "Indexation sur les prix", "Pouvoir d’achat"], sourceUrl: "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf", illustration: "work" },
          { number: "02", title: "Répartir le travail entre tous", summary: "Combattre chômage, licenciements et intensification du travail par une réduction du temps et de la charge de travail sans perte de salaire.", themes: ["Interdiction des licenciements", "Partage du travail", "Réduction du temps de travail", "Pas de baisse de salaire", "Cadences", "Embauches"], sourceUrl: "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf", illustration: "work" },
          { number: "03", title: "Embaucher dans les services utiles", summary: "Créer les centaines de milliers d’emplois jugés nécessaires dans les hôpitaux, les Ehpad, l’éducation et les transports publics.", themes: ["Hôpital", "Ehpad", "Éducation", "Transports publics", "Emploi public", "Besoins sociaux"], sourceUrl: "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf", illustration: "solidarity" },
          { number: "04", title: "Ouvrir les comptes des grandes entreprises", summary: "Lever le secret des affaires pour rendre visibles profits, prix, investissements, aides et décisions des grands groupes.", themes: ["Comptes publics", "Secret des affaires", "Profits", "Aides publiques", "Contrôle des travailleurs", "Transparence"], sourceUrl: "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf", illustration: "finance" },
        ],
      },
      {
        title: "Rupture avec l’ordre capitaliste",
        chapters: [
          { number: "05", title: "Exproprier la grande bourgeoisie", summary: "Remplacer la propriété capitaliste des principaux moyens de production par une propriété collective, sans indemnité ni rachat des grands actionnaires.", themes: ["Expropriation", "Propriété collective", "Grande bourgeoisie", "Banques et grands groupes", "Industrie pétrolière", "Armement", "Communisme"], sourceUrl: "https://www.lutte-ouvriere.org/journal/article/nathalie-arthaud-24nbspmai-le-manifeste-communiste-notreprogramme-194603.html", illustration: "industry" },
          { number: "06", title: "Internationalisme et droits des travailleurs immigrés", summary: "Refuser de diviser les travailleurs selon leur nationalité, régulariser les sans-papiers et défendre la liberté de circulation et d’installation.", themes: ["Régularisation des sans-papiers", "Liberté de circulation", "Liberté d’installation", "Égalité des travailleurs", "Internationalisme", "Antiracisme"], sourceUrl: "https://www.lutte-ouvriere.org/portail/brochures/fete-lutte-ouvriere-2026-discours-nathalie-arthaud-dimanche-194655.html", illustration: "rights" },
          { number: "07", title: "Refuser protectionnisme et souverainisme", summary: "LO considère que la concurrence entre États ne protège pas les travailleurs et oppose à la souveraineté nationale l’unité internationale de la classe ouvrière.", themes: ["Anti-protectionnisme", "Nationalisme", "Frontières", "Concurrence internationale", "Intérêts de classe", "Internationalisme"], sourceUrl: "https://www.lutte-ouvriere.org/medias/document/fichiers/2026/06/brochure-ete-2026.pdf", illustration: "international" },
          { number: "08", title: "Combattre la guerre et renverser le capitalisme", summary: "Relier crises, impérialismes et marche à la guerre au fonctionnement du capitalisme et défendre une transformation révolutionnaire internationale de la société.", themes: ["Guerres impérialistes", "Militarisme", "Capitalisme", "Pouvoir des travailleurs", "Révolution sociale", "Internationale communiste"], sourceUrl: "https://journal.lutte-ouvriere.org/mensuel/article/france-vers-lelection-presidentielle-2027-195201.html", illustration: "international" },
        ],
      },
    ],
  },
  "debout-la-france": {
    coverageLabel: "32 / 32 thèmes du projet officiel représentés",
    corpusNote: "Debout la France indique mettre actuellement son programme à jour pour la présidentielle 2027. Le site mélange donc des fiches déjà réécrites comme « Projet 2027 » et des pages plus anciennes encore maintenues dans le corpus officiel. Les 32 thèmes visibles au 17 août 2026 sont tous représentés.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Indépendance, démocratie et puissance",
        chapters: [
          { number: "01", title: "Refonder et moraliser notre démocratie", summary: "Rendre plus directement le pouvoir de décision aux citoyens, développer le référendum et renforcer la responsabilité des élus.", themes: ["Référendums", "RIC", "Moralisation", "Responsabilité des élus", "Souveraineté populaire", "Institutions"], sourceUrl: "https://www.debout-la-france.fr/projet/refonder-et-moraliser-notre-democratie/", illustration: "democracy" },
          { number: "02", title: "Affaires européennes", summary: "Retrouver la souveraineté nationale en sortant de l’Union européenne et reconstruire des coopérations librement choisies entre États.", themes: ["Sortie de l’Union européenne", "Souveraineté", "Coopération européenne", "Frontières", "Droit national", "Référendum"], sourceUrl: "https://www.debout-la-france.fr/projet/affaires-europeennes/", illustration: "europe" },
          { number: "03", title: "Affaires étrangères", summary: "Défendre une diplomatie française indépendante, organisée autour des intérêts nationaux et de relations équilibrées entre puissances.", themes: ["Indépendance diplomatique", "Paix", "Intérêts français", "Multilatéralisme", "Souveraineté", "Relations internationales"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "international" },
          { number: "04", title: "Partenariat France-Afrique", summary: "Refonder les relations avec les pays africains autour de partenariats d’État à État, de développement et de maîtrise des flux migratoires.", themes: ["Afrique", "Coopération", "Développement", "Migration", "Souveraineté", "Partenariats"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "international" },
          { number: "05", title: "Français de l’étranger", summary: "Mieux protéger les droits, les services consulaires et la représentation des Français établis hors du territoire.", themes: ["Consulats", "Éducation française", "Protection", "Fiscalité", "Représentation", "Expatriés"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "international" },
          { number: "06", title: "Défense nationale", summary: "Maintenir une défense souveraine, la dissuasion nucléaire et des capacités militaires décidées indépendamment par la France.", themes: ["Dissuasion nucléaire", "Armée", "Souveraineté", "Industrie de défense", "Budget militaire", "Indépendance stratégique"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "security" },
        ],
      },
      {
        title: "Ordre républicain et cohésion",
        chapters: [
          { number: "07", title: "Sécurité", summary: "Augmenter les effectifs de terrain, rétablir des contrôles aux frontières et accroître fortement les capacités carcérales.", themes: ["Police et gendarmerie", "Douanes", "Frontières", "40 000 places de prison", "Personnel pénitentiaire", "Délinquance"], sourceUrl: "https://www.debout-la-france.fr/projet/securite/", illustration: "security" },
          { number: "08", title: "Justice", summary: "Donner davantage de moyens humains et matériels à la justice et accélérer l’exécution des peines.", themes: ["Magistrats", "Greffiers", "Délais", "Exécution des peines", "Prisons", "Justice de proximité"], sourceUrl: "https://www.debout-la-france.fr/projet/justice/", illustration: "security" },
          { number: "09", title: "Immigration et assimilation", summary: "Réduire les flux migratoires, reprendre le contrôle national des frontières et conditionner davantage l’installation durable à l’assimilation.", themes: ["Contrôle des frontières", "Immigration légale", "Immigration clandestine", "Assimilation", "Nationalité", "Éloignements"], sourceUrl: "https://www.debout-la-france.fr/projet/immigration-et-assimilation/", illustration: "immigration" },
          { number: "10", title: "Combat pour les femmes", summary: "Agir contre les violences, les discriminations et les atteintes aux droits des femmes tout en renforçant la sécurité et l’accompagnement des victimes.", themes: ["Violences faites aux femmes", "Égalité", "Protection", "Justice", "Santé", "Autonomie"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "equality" },
          { number: "11", title: "Famille", summary: "Soutenir davantage les familles, la natalité et la transmission par les politiques sociales et fiscales.", themes: ["Natalité", "Allocations", "Fiscalité familiale", "Parentalité", "Transmission", "Enfance"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "family" },
        ],
      },
      {
        title: "Production, technologie et souveraineté économique",
        chapters: [
          { number: "12", title: "Intelligence artificielle", summary: "Construire une filière française d’IA et de cloud avec fonds souverain, préférence nationale et soutien aux entreprises technologiques.", themes: ["Fonds souverain IA", "Cloud souverain", "Données", "Made in France", "Commande publique", "Formation", "Recherche"], sourceUrl: "https://www.debout-la-france.fr/projet/intelligence-artificielle/", illustration: "digital" },
          { number: "13", title: "Produire en France", summary: "Réorienter fiscalité, commandes, normes et financement vers la relocalisation des productions stratégiques.", themes: ["Relocalisation", "Made in France", "Commande publique", "Fiscalité", "PME", "Souveraineté productive"], sourceUrl: "https://www.debout-la-france.fr/projet/produire-en-france/", illustration: "industry" },
          { number: "14", title: "Économie, Travail", summary: "Favoriser l’activité, la rémunération du travail et l’investissement productif avec moins de prélèvements et de contraintes administratives.", themes: ["Travail", "Entreprises", "Fiscalité", "Pouvoir d’achat", "Investissement", "Simplification"], sourceUrl: "https://www.debout-la-france.fr/projet/economie-travail/", illustration: "work" },
          { number: "15", title: "Sciences, souveraineté industrielle et numérique", summary: "Réinvestir dans la recherche, les technologies critiques et les capacités industrielles que le mouvement juge indispensables à l’indépendance nationale.", themes: ["Recherche", "Industrie", "Numérique", "Technologies critiques", "Brevets", "Financement"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "digital" },
          { number: "16", title: "Agriculture", summary: "Protéger les revenus agricoles, alléger les normes et défendre la production française face à la concurrence internationale.", themes: ["Revenus agricoles", "Normes", "Prix", "Importations", "Souveraineté alimentaire", "Transmission"], sourceUrl: "https://www.debout-la-france.fr/projet/agriculture/", illustration: "agriculture" },
          { number: "17", title: "Environnement et Énergie", summary: "Concilier protection de l’environnement, indépendance énergétique et compétitivité en donnant une place centrale au nucléaire.", themes: ["Nucléaire", "Indépendance énergétique", "Prix de l’électricité", "Biodiversité", "Décarbonation", "Rénovation"], sourceUrl: "https://www.debout-la-france.fr/projet/environnement-energie/", illustration: "energy" },
          { number: "18", title: "Politique de la mer", summary: "Faire des espaces maritimes, des ports, de la pêche et des industries navales un levier de souveraineté et de développement.", themes: ["Ports", "Pêche", "Marine marchande", "Industrie navale", "Outre-mer", "Souveraineté maritime"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "industry" },
        ],
      },
      {
        title: "Transmission et culture",
        chapters: [
          { number: "19", title: "Sport et associations", summary: "Soutenir le bénévolat, les clubs et l’accès au sport comme facteurs de santé et de cohésion locale.", themes: ["Clubs", "Bénévolat", "Équipements", "Jeunesse", "Santé", "Vie associative"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "culture" },
          { number: "20", title: "Culture et patrimoine", summary: "Renforcer la transmission culturelle, la langue française et la protection du patrimoine dans tout le territoire.", themes: ["Patrimoine", "Culture", "Langue française", "Création", "Territoires", "Transmission"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "culture" },
          { number: "21", title: "Repenser l’école", summary: "Recentrer l’école sur les savoirs fondamentaux, l’autorité, l’orientation et la transmission des connaissances.", themes: ["Français", "Mathématiques", "Autorité", "Enseignants", "Orientation", "Mérite"], sourceUrl: "https://www.debout-la-france.fr/projet/instruction-publique/", illustration: "education" },
          { number: "22", title: "Enseignement supérieur", summary: "Améliorer orientation, autonomie, recherche et insertion professionnelle des étudiants sans abandonner l’accès national aux formations.", themes: ["Universités", "Grandes écoles", "Recherche", "Orientation", "Insertion", "Étudiants"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "education" },
        ],
      },
      {
        title: "Protections et territoires",
        chapters: [
          { number: "23", title: "Logement", summary: "Augmenter l’offre, faciliter l’accès au logement et adapter construction et rénovation aux besoins des territoires.", themes: ["Construction", "Accession", "Logement social", "Rénovation", "Foncier", "Territoires"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "housing" },
          { number: "24", title: "Retraites", summary: "Revoir la réforme des retraites en articulant durée de carrière, pénibilité, emploi des seniors et financement du système.", themes: ["Âge de départ", "Pénibilité", "Carrières longues", "Emploi des seniors", "Pensions", "Financement"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "solidarity" },
          { number: "25", title: "Santé", summary: "Réinvestir dans l’hôpital, les soignants, la médecine de proximité et la production de médicaments.", themes: ["Hôpital", "Soignants", "Déserts médicaux", "Médicaments", "Prévention", "Urgences"], sourceUrl: "https://www.debout-la-france.fr/projet/sante/", illustration: "health" },
          { number: "26", title: "Dépendance et fin de vie", summary: "Mieux accompagner la perte d’autonomie, les aidants et les parcours de fin de vie en renforçant l’offre de soins et d’hébergement.", themes: ["Dépendance", "Ehpad", "Aide à domicile", "Aidants", "Soins palliatifs", "Fin de vie"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "health" },
          { number: "27", title: "Handicap", summary: "Améliorer accessibilité, accompagnement, emploi et autonomie des personnes handicapées et soutenir les aidants.", themes: ["Accessibilité", "AAH", "Emploi", "École", "Aidants", "Autonomie"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "rights" },
          { number: "28", title: "Équilibre du territoire", summary: "Rééquilibrer investissements, services publics et développement entre métropoles, villes moyennes et espaces ruraux.", themes: ["Ruralité", "Services publics", "Décentralisation", "Transports", "Aménagement", "Villes moyennes"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "planning" },
          { number: "29", title: "Outre-mer", summary: "Adapter développement économique, sécurité, énergie, santé et continuité territoriale aux réalités ultramarines.", themes: ["Vie chère", "Continuité territoriale", "Santé", "Énergie", "Sécurité", "Développement local"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "international" },
          { number: "30", title: "Automobilistes et motards", summary: "Réduire les contraintes jugées excessives sur les mobilités individuelles et défendre la liberté d’usage de la voiture et de la moto.", themes: ["Automobile", "Moto", "ZFE", "Carburants", "Sécurité routière", "Mobilité rurale"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "rights" },
          { number: "31", title: "Tourisme", summary: "Soutenir l’attractivité, les professionnels, les patrimoines et les destinations françaises sur l’ensemble du territoire.", themes: ["Hôtellerie", "Restauration", "Patrimoine", "Territoires", "Attractivité", "Emploi"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "culture" },
          { number: "32", title: "Bien-être animal", summary: "Renforcer la lutte contre la maltraitance et améliorer les conditions de vie des animaux sans opposer systématiquement protection animale et monde rural.", themes: ["Maltraitance", "Élevage", "Animaux domestiques", "Abandon", "Monde rural", "Contrôles"], sourceUrl: "https://www.debout-la-france.fr/notre-projet/", illustration: "nature" },
        ],
      },
    ],
  },
  "les-patriotes": {
    coverageLabel: "17 / 17 chapitres du Projet pour la France représentés",
    corpusNote: "Le dernier projet détaillé disponible sur le site des Patriotes est l’édition de septembre 2025. Il constitue ici le socle officiel actuel de la campagne 2027 ; le mouvement pourra encore le compléter ou le modifier avant l’élection.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Souveraineté et démocratie",
        chapters: [
          { number: "01", title: "Démocratie, institutions, corruption", summary: "Retrouver la souveraineté populaire par le Frexit, inscrire le RIC dans la Constitution et durcir les sanctions contre la corruption publique.", themes: ["Frexit", "RIC sur tout sujet", "Référendum constitutionnel", "Inéligibilité à vie pour corruption", "Lobbies", "Commission européenne"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "democracy" },
          { number: "11", title: "Coût de l’Europe", summary: "Mettre fin aux contributions et aux politiques européennes jugées coûteuses pour réallouer les moyens aux priorités nationales.", themes: ["Contribution à l’UE", "Budget", "Frexit", "Politiques européennes", "Économies", "Souveraineté"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "europe" },
          { number: "12", title: "Redresser les finances publiques", summary: "Réorganiser la dépense et le financement de l’État après la sortie du cadre européen et monétaire actuel.", themes: ["Dépenses publiques", "Dette", "Déficit", "Euro", "Banque de France", "Priorités nationales"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "finance" },
          { number: "17", title: "Libertés individuelles et publiques", summary: "Renforcer les libertés publiques, la liberté d’expression et le contrôle des décisions administratives que le mouvement juge liberticides.", themes: ["Liberté d’expression", "Libertés publiques", "Numérique", "Vie privée", "Référendum", "État de droit"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "rights" },
        ],
      },
      {
        title: "Production et modèle social",
        chapters: [
          { number: "02", title: "Énergie", summary: "Sortir du marché européen de l’électricité, rétablir le monopole public national d’EDF, investir massivement dans le nucléaire et arrêter l’éolien.", themes: ["EDF public", "Nucléaire", "Sortie du marché européen", "Moratoire éolien", "Barrages", "Prix de l’électricité", "Voiture thermique"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "energy" },
          { number: "03", title: "Industrie, commerce et emploi", summary: "Réindustrialiser en protégeant les productions françaises, en utilisant la monnaie, les frontières commerciales et la commande publique.", themes: ["Réindustrialisation", "Protection commerciale", "Commande publique", "Franc", "PME", "Emploi", "Relocalisation"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "industry" },
          { number: "04", title: "Agriculture", summary: "Protéger les agriculteurs de la concurrence internationale, assurer des prix rémunérateurs et retrouver la maîtrise des normes et de la politique agricole.", themes: ["Prix agricoles", "PAC", "Normes", "Importations", "Souveraineté alimentaire", "Transmission"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "agriculture" },
          { number: "05", title: "Modèle social et services publics", summary: "Préserver les protections sociales et reconstruire des services publics nationaux de proximité après la rupture avec les politiques européennes.", themes: ["Services publics", "Protection sociale", "Territoires", "Nationalisations", "Pouvoir d’achat", "Égalité d’accès"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "solidarity" },
          { number: "06", title: "Santé", summary: "Réarmer l’hôpital et la médecine de proximité, renforcer l’indépendance sanitaire et rompre avec l’influence jugée excessive des institutions internationales.", themes: ["Hôpital", "Soignants", "Médicaments", "Déserts médicaux", "Souveraineté sanitaire", "OMS"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "health" },
          { number: "07", title: "Handicap", summary: "Renforcer les moyens consacrés à l’autonomie, à l’accessibilité, à l’école et à l’emploi des personnes handicapées.", themes: ["Accessibilité", "Autonomie", "École", "Emploi", "Aidants", "Revenus"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "rights" },
          { number: "08", title: "Écologie et protection animale", summary: "Privilégier une écologie nationale fondée sur le nucléaire, la relocalisation, la protection des paysages et le bien-être animal.", themes: ["Nucléaire", "Relocalisation", "Biodiversité", "Protection animale", "Éoliennes", "Agriculture"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "nature" },
          { number: "09", title: "Souveraineté numérique", summary: "Réduire les dépendances technologiques et garantir que données, infrastructures et services numériques stratégiques restent sous contrôle français.", themes: ["Données", "Cloud", "Cybersécurité", "Logiciels", "Plateformes", "Indépendance numérique"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "digital" },
          { number: "10", title: "École", summary: "Restaurer transmission des savoirs, autorité et indépendance nationale des programmes scolaires.", themes: ["Fondamentaux", "Autorité", "Enseignants", "Programmes", "Laïcité", "Transmission"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "education" },
        ],
      },
      {
        title: "Ordre, frontières et culture",
        chapters: [
          { number: "14", title: "Immigration", summary: "Sortir de Schengen et reprendre le contrôle des frontières afin de réduire fortement l’immigration et l’entrée irrégulière.", themes: ["Sortie de Schengen", "Frontières", "Immigration légale", "Clandestinité", "Nationalité", "Éloignements"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "immigration" },
          { number: "15", title: "Police, justice", summary: "Renforcer moyens, autorité et rapidité de la police et de la justice pour faire appliquer les décisions et les peines.", themes: ["Police", "Justice", "Prisons", "Peines", "Effectifs", "Délinquance"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "security" },
          { number: "16", title: "Culture et patrimoine", summary: "Protéger patrimoine, langue et création française comme éléments de continuité nationale et de transmission.", themes: ["Patrimoine", "Langue française", "Création", "Histoire", "Territoires", "Transmission"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "culture" },
        ],
      },
      {
        title: "Paix et indépendance internationale",
        chapters: [
          { number: "13", title: "Guerre et paix", summary: "Sortir de l’OTAN, rechercher une diplomatie indépendante et éviter l’engagement de la France dans les conflits décidés par des alliances extérieures.", themes: ["Sortie de l’OTAN", "Paix", "Indépendance diplomatique", "Dissuasion", "Ukraine", "Non-alignement", "Armée"], sourceUrl: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf", illustration: "international" },
        ],
      },
    ],
  },
  upr: {
    coverageLabel: "28 / 28 engagements du programme 2022 représentés",
    corpusNote: "Le site de l’UPR indique que le programme présidentiel 2027 est encore en cours d’élaboration. En attendant sa publication, cette fiche utilise comme référence provisoire le dernier programme présidentiel complet de François Asselineau, celui de 2022. Il ne faut donc pas lire chaque mesure ci-dessous comme déjà confirmée pour 2027.",
    updated: "Corpus vérifié le 17 août 2026",
    groups: [
      {
        title: "Pouvoir d’achat, travail et production",
        chapters: [
          { number: "01", title: "Pouvoir d’achat pour tous — SMIC +24 %", summary: "Augmenter le SMIC brut de 24 % sur cinq ans et entraîner une revalorisation plus large des revenus du travail et des fonctions publiques de terrain.", themes: ["SMIC +24 %", "Salaires", "Fonction publique", "Pouvoir d’achat", "Indexation politique", "Quinquennat"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "work" },
          { number: "02", title: "Charges patronales des PME -50 %", summary: "Réduire fortement les charges sur les petites et moyennes entreprises afin de soutenir emploi et investissement.", themes: ["PME", "Charges patronales", "Emploi", "Compétitivité", "Investissement", "Entrepreneuriat"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "industry" },
          { number: "03", title: "Un million d’emplois", summary: "Mobiliser réindustrialisation, services publics, PME et relocalisations pour réduire massivement le chômage.", themes: ["Un million d’emplois", "Réindustrialisation", "PME", "Services publics", "Relocalisation", "Chômage"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "work" },
          { number: "04", title: "Plus de 27 milliards d’économies par an", summary: "Réduire certaines dépenses et contributions supranationales pour redéployer les moyens vers les priorités nationales.", themes: ["Économies budgétaires", "Union européenne", "OTAN", "Dépenses publiques", "Redéploiement", "Budget"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "finance" },
          { number: "05", title: "Fin de l’évasion fiscale et des délocalisations", summary: "Renforcer la lutte contre l’optimisation et l’évasion fiscales et utiliser les nouveaux leviers commerciaux pour décourager les délocalisations.", themes: ["Évasion fiscale", "Délocalisations", "Contrôle des capitaux", "Fiscalité", "Douanes", "Relocalisation"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "finance" },
          { number: "06", title: "Fiscalité : soulager les classes moyennes", summary: "Rééquilibrer les prélèvements pour alléger la charge fiscale des classes moyennes dans le nouveau cadre national proposé.", themes: ["Impôt sur le revenu", "Classes moyennes", "Fiscalité", "Pouvoir d’achat", "Justice fiscale", "Prélèvements"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "finance" },
        ],
      },
      {
        title: "Services publics, transmission et recherche",
        chapters: [
          { number: "07", title: "Retour des services publics", summary: "Réimplanter des services publics sur le territoire et revenir sur les privatisations que l’UPR juge contraires à l’intérêt général.", themes: ["Services publics", "Nationalisations", "Territoires", "Proximité", "Énergie", "Transports"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "commons" },
          { number: "08", title: "Reconstruire l’école", summary: "Recentrer l’école sur transmission, fondamentaux, autorité et égalité nationale d’accès aux savoirs.", themes: ["Fondamentaux", "Enseignants", "Autorité", "Programmes", "Égalité", "Orientation"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "education" },
          { number: "09", title: "Culture : priorité au patrimoine", summary: "Faire du patrimoine, de la langue et de la transmission culturelle une priorité de la politique nationale.", themes: ["Patrimoine", "Langue française", "Musées", "Monuments", "Création", "Transmission"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "culture" },
          { number: "10", title: "Investir dans la recherche", summary: "Augmenter les moyens de la recherche publique et renforcer l’indépendance scientifique et technologique française.", themes: ["Recherche publique", "Innovation", "Chercheurs", "Financement", "Sciences", "Souveraineté"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "digital" },
          { number: "11", title: "Hôpital : +30 000 lits", summary: "Créer 30 000 lits hospitaliers supplémentaires et réinvestir dans les personnels et les capacités de soins.", themes: ["30 000 lits", "Hôpital", "Soignants", "Urgences", "Maternités", "Financement"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "health" },
          { number: "12", title: "Retour aux libertés", summary: "Renforcer les libertés publiques et remettre en cause les dispositifs jugés disproportionnés ou liberticides.", themes: ["Libertés publiques", "Vie privée", "Expression", "Contrôle démocratique", "Droits", "État"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "rights" },
          { number: "13", title: "Le RIC et la démocratisation", summary: "Introduire le référendum d’initiative citoyenne et renforcer l’intervention directe des citoyens dans les grandes décisions.", themes: ["RIC", "Référendum", "Constitution", "Démocratie directe", "Citoyens", "Institutions"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "democracy" },
        ],
      },
      {
        title: "Relocalisation, agriculture et protections",
        chapters: [
          { number: "14", title: "La relocalisation écologique", summary: "Réduire les transports inutiles et les dépendances en relocalisant la production grâce aux marges commerciales retrouvées après la sortie de l’UE.", themes: ["Relocalisation", "Écologie", "Commerce", "Douanes", "Circuits courts", "Industrie"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "nature" },
          { number: "15", title: "Revenus des agriculteurs +25 %", summary: "Augmenter le revenu agricole et reprendre une politique nationale des prix, des importations et de la production alimentaire.", themes: ["Revenus +25 %", "Agriculture", "Prix", "Importations", "PAC", "Souveraineté alimentaire"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "agriculture" },
          { number: "16", title: "Préserver l’identité nationale", summary: "Renforcer langue, patrimoine, institutions et continuité historique de la France dans le cadre d’un État souverain.", themes: ["Identité nationale", "Langue", "Patrimoine", "Nation", "Histoire", "Laïcité"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "culture" },
          { number: "17", title: "Famille : assurer l’avenir", summary: "Soutenir les familles et la natalité par les politiques fiscales, sociales et de services publics.", themes: ["Famille", "Natalité", "Allocations", "Fiscalité", "Enfance", "Parentalité"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "family" },
          { number: "18", title: "Garantir les retraites", summary: "Préserver le système de retraite et son niveau de pensions en articulant financement, emploi et souveraineté budgétaire.", themes: ["Retraites", "Pensions", "Financement", "Âge de départ", "Solidarité", "Emploi"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "solidarity" },
          { number: "19", title: "Plan handicap et autonomie", summary: "Renforcer revenus, accessibilité, accompagnement et autonomie des personnes handicapées.", themes: ["Handicap", "Autonomie", "Accessibilité", "Aidants", "Emploi", "École"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "rights" },
          { number: "20", title: "Plus de 400 000 logements", summary: "Relancer massivement la construction et la rénovation pour répondre aux besoins de logement et réduire la tension immobilière.", themes: ["400 000 logements", "Construction", "Logement social", "Rénovation", "Accession", "Foncier"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "housing" },
          { number: "21", title: "Outre-mer : +15 milliards", summary: "Consacrer un effort supplémentaire aux infrastructures, services publics et développement économique ultramarins.", themes: ["15 milliards", "Outre-mer", "Infrastructures", "Services publics", "Vie chère", "Développement"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "international" },
        ],
      },
      {
        title: "Frontières, sécurité et souveraineté numérique",
        chapters: [
          { number: "22", title: "Contrôler l’immigration", summary: "Sortir du cadre européen afin de reprendre un contrôle national complet sur les conditions d’entrée, de séjour et d’éloignement.", themes: ["Immigration", "Frontières", "Schengen", "Séjour", "Éloignements", "Nationalité"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "immigration" },
          { number: "23", title: "Sécurité : renforcement police et justice", summary: "Accroître moyens humains et matériels de police, gendarmerie et justice pour améliorer présence, enquêtes et exécution des décisions.", themes: ["Police", "Gendarmerie", "Justice", "Effectifs", "Prisons", "Délinquance"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "security" },
          { number: "24", title: "Lutter vraiment contre le terrorisme", summary: "Renforcer renseignement, coopération et moyens nationaux contre les réseaux terroristes et leur financement.", themes: ["Terrorisme", "Renseignement", "Financement", "Frontières", "Justice", "Sécurité"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "security" },
          { number: "25", title: "L’internet libre et souverain", summary: "Protéger liberté en ligne, données et infrastructures numériques en réduisant les dépendances stratégiques étrangères.", themes: ["Internet libre", "Données", "Souveraineté numérique", "Vie privée", "Plateformes", "Cybersécurité"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "digital" },
        ],
      },
      {
        title: "Défense et politique internationale",
        chapters: [
          { number: "26", title: "La France et son armée", summary: "Retrouver une défense pleinement nationale, renforcer les armées et sortir du commandement et de l’alliance intégrée de l’OTAN.", themes: ["Sortie de l’OTAN", "Armée", "Dissuasion", "Industrie de défense", "Budget", "Indépendance"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "security" },
          { number: "27", title: "Être une puissance d’équilibre", summary: "Mener une diplomatie indépendante, non alignée et ouverte à toutes les puissances sans dépendance stratégique envers un bloc.", themes: ["Non-alignement", "Diplomatie", "ONU", "Paix", "Coopération", "Indépendance"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "international" },
          { number: "28", title: "L’ultime engagement", summary: "Remettre en jeu le mandat présidentiel à mi-parcours si au moins 14 des 27 engagements précédents ne sont ni tenus ni en cours de réalisation.", themes: ["Responsabilité présidentielle", "Mi-mandat", "14 engagements sur 27", "Mandat", "Contrôle citoyen", "Engagement"], sourceUrl: "https://upr.fr/actualites/programme-presidentiel-2022", illustration: "democracy" },
        ],
      },
    ],
  },

  "solution-democratique": {
  "coverageLabel": "2 / 2 réformes officielles représentées",
  "corpusNote": "Le programme est volontairement minimal : Solution Démocratique ne tranche pas les politiques économiques ou sociales et fait de la démocratie directe son unique programme présidentiel. Les deux réformes et leur calendrier sont repris ici.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Changer les règles avant de choisir les politiques",
      "chapters": [
        {
          "number": "01",
          "title": "Référendum d’initiative citoyenne constituant",
          "summary": "Permettre à des citoyens de déclencher une proposition de révision constitutionnelle et soumettre obligatoirement toute modification de la Constitution au référendum.",
          "themes": [
            "RIC constituant",
            "Référendum obligatoire",
            "Initiative citoyenne",
            "Constitution",
            "Démocratie directe"
          ],
          "sourceUrl": "https://solutiondemocratique.fr/notre-solution/",
          "illustration": "democracy"
        },
        {
          "number": "02",
          "title": "Décentralisation ascendante",
          "summary": "Permettre aux communes de réclamer des compétences et de faire évoluer leurs règles démocratiques locales plutôt que d’attendre un transfert décidé depuis le sommet.",
          "themes": [
            "Communes",
            "Subsidiarité ascendante",
            "Décentralisation",
            "Démocratie locale",
            "Compétences"
          ],
          "sourceUrl": "https://solutiondemocratique.fr/notre-solution/",
          "illustration": "democracy"
        }
      ]
    },
    {
      "title": "Un calendrier présidentiel explicitement annoncé",
      "chapters": [
        {
          "title": "De l’élection aux référendums d’octobre 2027",
          "summary": "Le mouvement annonce une séquence très rapide : gouvernement de transition, dépôt de deux textes, calendrier référendaire puis référendums à l’automne si le chemin juridique aboutit.",
          "themes": [
            "2 mai 2027",
            "Gouvernement de transition",
            "Article 11",
            "Référendums",
            "9 octobre 2027"
          ],
          "sourceUrl": "https://solutiondemocratique.fr/notre-solution/calendrier-president/",
          "illustration": "planning"
        }
      ]
    }
  ]
},
  "equinoxe": {
  "coverageLabel": "3 priorités présidentielles + 6 blocs du corpus public",
  "corpusNote": "Équinoxe annonce que le programme officiel 2027 arrive prochainement. Cette fiche ne le remplace pas : elle synthétise les trois priorités déjà officialisées, le contre-budget 2026 et les positions publiques du parti. Elle devra être mise à jour lorsque le document final sera publié.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Les trois priorités de la campagne 2027",
      "chapters": [
        {
          "number": "01",
          "title": "Décider collectivement",
          "summary": "Rénover la démocratie, simplifier les règles, donner davantage de pouvoirs et de moyens aux territoires et créer de nouveaux espaces de participation citoyenne.",
          "themes": [
            "Décentralisation",
            "Participation citoyenne",
            "Simplification",
            "Territoires",
            "Démocratie"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/qui-est-antoine-mikolajczak/",
          "illustration": "democracy"
        },
        {
          "number": "02",
          "title": "Produire en France",
          "summary": "Relocaliser les productions agricoles et industrielles jugées essentielles afin de réduire dépendances et empreinte environnementale.",
          "themes": [
            "Relocalisation",
            "Industrie",
            "Agriculture",
            "Souveraineté",
            "Limites planétaires"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/qui-est-antoine-mikolajczak/",
          "illustration": "industry"
        },
        {
          "number": "03",
          "title": "Vivre en bonne santé",
          "summary": "Relier l’accès aux soins, l’alimentation, la pollution, les conditions de travail et le climat dans une politique de prévention et de santé territoriale.",
          "themes": [
            "Déserts médicaux",
            "Alimentation",
            "Pollution",
            "Prévention",
            "Santé"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/qui-est-antoine-mikolajczak/",
          "illustration": "health"
        }
      ]
    },
    {
      "title": "Finances, énergie et adaptation",
      "chapters": [
        {
          "number": "04",
          "title": "Un contre-budget de responsabilité",
          "summary": "Réduire plus vite le déficit en réallouant dépenses et recettes, tout en préparant des réformes structurelles pour les années suivantes.",
          "themes": [
            "Déficit",
            "Dette",
            "Dépenses publiques",
            "Recettes",
            "Responsabilité budgétaire"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/contre-budget-2026/",
          "illustration": "finance"
        },
        {
          "number": "05",
          "title": "Décarboner avec nucléaire et renouvelables",
          "summary": "Sortir des oppositions de principe et combiner moyens de production bas-carbone, réseaux, sobriété et électrification selon les contraintes physiques.",
          "themes": [
            "Nucléaire",
            "Renouvelables",
            "Réseaux",
            "Électrification",
            "Neutralité carbone"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/actualites/",
          "illustration": "energy"
        },
        {
          "number": "06",
          "title": "Transformer les mobilités",
          "summary": "Donner davantage de place au rail, aux transports collectifs, au vélo et à une automobile compatible avec les contraintes écologiques et territoriales.",
          "themes": [
            "Rail",
            "Transports collectifs",
            "Vélo",
            "Voiture électrique",
            "Territoires"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/actualites/",
          "illustration": "planning"
        },
        {
          "number": "07",
          "title": "Adapter le pays aux effets déjà présents du climat",
          "summary": "Préparer villes, logements, forêts, eau et infrastructures aux canicules, incendies et événements extrêmes plutôt que compter uniquement sur la réduction future des émissions.",
          "themes": [
            "Canicules",
            "Incendies",
            "Adaptation",
            "Eau",
            "Résilience"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/actualites/",
          "illustration": "nature"
        }
      ]
    },
    {
      "title": "Connaissances et règles du jeu",
      "chapters": [
        {
          "number": "08",
          "title": "Science, numérique et intelligence artificielle",
          "summary": "S’appuyer sur l’expertise scientifique, débattre des usages de l’IA et préserver des solutions accessibles hors numérique pour les services essentiels.",
          "themes": [
            "Science",
            "IA",
            "Numérique",
            "Services publics",
            "Débat"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/actualites/",
          "illustration": "digital"
        },
        {
          "number": "09",
          "title": "Éducation, retraites et simplification : travaux en cours",
          "summary": "Le parti indique que plusieurs réformes structurelles sont encore en élaboration pour le programme 2027 ; elles ne sont donc pas présentées ici comme des promesses finalisées.",
          "themes": [
            "Éducation",
            "Retraites",
            "Administration",
            "Fiscalité",
            "Programme en construction"
          ],
          "sourceUrl": "https://parti-equinoxe.fr/qui-est-antoine-mikolajczak/",
          "illustration": "education"
        }
      ]
    }
  ]
},
  "modem": {
  "coverageLabel": "6 / 6 priorités officielles représentées",
  "corpusNote": "Le MoDem n’a pas de candidat présidentiel désigné. La fiche reprend son corpus officiel « Nos priorités pour la France et l’Europe » et le replace dans la ligne budgétaire récente du mouvement. Il s’agit d’un programme de parti, pas encore d’un contrat présidentiel 2027.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Les six priorités officielles",
      "chapters": [
        {
          "number": "01",
          "title": "Europe",
          "summary": "Renforcer la capacité d’action commune européenne, réduire les blocages institutionnels et défendre une Europe démocratique capable de protéger ses intérêts.",
          "themes": [
            "Europe",
            "Souveraineté européenne",
            "Institutions",
            "Coopération",
            "Majorité"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme",
          "illustration": "europe"
        },
        {
          "number": "02",
          "title": "Démocratie et citoyenneté",
          "summary": "Introduire une dose significative de proportionnelle, mieux prendre en compte le vote blanc et renforcer la participation citoyenne.",
          "themes": [
            "Proportionnelle",
            "Vote blanc",
            "Participation",
            "Représentation",
            "Citoyenneté"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme/democratie-et-citoyennete-2424",
          "illustration": "democracy"
        },
        {
          "number": "03",
          "title": "Transition écologique",
          "summary": "Réduire les émissions, préserver la biodiversité, adapter les politiques aux territoires et accélérer économie circulaire et renouvelables.",
          "themes": [
            "Climat",
            "Biodiversité",
            "Économie circulaire",
            "Agriculture",
            "Territoires"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme/transition-ecologique-2432",
          "illustration": "nature"
        },
        {
          "number": "04",
          "title": "Fiscalité et dépenses publiques",
          "summary": "Fusionner CSG et impôt sur le revenu pour une fiscalité plus lisible et progressive tout en recherchant une meilleure efficacité de la dépense.",
          "themes": [
            "CSG",
            "Impôt sur le revenu",
            "Progressivité",
            "Quotient familial",
            "Dépense publique"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme/fiscalite-et-depenses-publiques-2439",
          "illustration": "finance"
        },
        {
          "number": "05",
          "title": "État et services publics",
          "summary": "Poursuivre la décentralisation, clarifier les compétences et supprimer les doublons administratifs entre niveaux de collectivités.",
          "themes": [
            "Décentralisation",
            "Services publics",
            "Collectivités",
            "Simplification",
            "État"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme/propositions-2445",
          "illustration": "commons"
        },
        {
          "number": "06",
          "title": "Société et solidarités",
          "summary": "Protéger les plus fragiles, lutter contre l’isolement et renforcer les solidarités locales dans une société vieillissante.",
          "themes": [
            "Solidarité",
            "Isolement",
            "Familles",
            "Handicap",
            "Vieillissement"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme/societe-et-solidarites-2449",
          "illustration": "solidarity"
        }
      ]
    },
    {
      "title": "Le contexte budgétaire actuel",
      "chapters": [
        {
          "number": "07",
          "title": "Réduire la dette dans la durée",
          "summary": "La ligne récente portée par les centristes vise une réduction graduelle du déficit avec des économies structurelles plutôt qu’une succession de budgets d’urgence.",
          "themes": [
            "Dette",
            "Déficit",
            "Trajectoire pluriannuelle",
            "Économies",
            "Investissement"
          ],
          "sourceUrl": "https://www.mouvementdemocrate.fr/programme",
          "illustration": "finance"
        }
      ]
    }
  ]
},
  "pcf": {
  "coverageLabel": "8 grands blocs du corpus 2026 représentés",
  "corpusNote": "Le 40e Congrès ne constitue pas encore un programme présidentiel exhaustif. Il fixe l’orientation et s’appuie sur les acquis des précédents congrès, « Les Jours heureux » et le plan climat Empreinte 2050. Les propositions ci-dessous sont donc le socle politique disponible avant la finalisation de la plateforme 2027.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Travail, production et pouvoirs économiques",
      "chapters": [
        {
          "number": "01",
          "title": "Conquérir de nouveaux pouvoirs pour le monde du travail",
          "summary": "Donner davantage de droits aux salariés dans l’entreprise et la cité, sécuriser les parcours et permettre la formation avec continuité de revenu.",
          "themes": [
            "Salariés",
            "Pouvoirs économiques",
            "Formation",
            "Sécurité emploi-formation",
            "Coopératives"
          ],
          "sourceUrl": "https://congres2026.pcf.fr/les_textes_soumis_aux_communistes",
          "illustration": "work"
        },
        {
          "number": "02",
          "title": "Réindustrialiser la France",
          "summary": "Réorienter capital, crédit et aides publiques vers une production utile, relocalisée et créatrice d’emplois qualifiés.",
          "themes": [
            "Industrie",
            "Relocalisation",
            "Crédit",
            "Aides publiques",
            "Emploi"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "industry"
        },
        {
          "number": "03",
          "title": "Augmenter salaires et pouvoir d’achat",
          "summary": "Faire progresser rémunérations, pensions et minima en agissant sur le partage de la valeur ajoutée et le coût de services essentiels.",
          "themes": [
            "Salaires",
            "Pensions",
            "SMIC",
            "Prix",
            "Pouvoir d’achat"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "work"
        }
      ]
    },
    {
      "title": "Services publics et protection",
      "chapters": [
        {
          "number": "04",
          "title": "Reconstruire santé et services publics",
          "summary": "Sortir des logiques de rentabilité dans l’hôpital et renforcer les effectifs, l’accès aux soins et les services de proximité.",
          "themes": [
            "Hôpital",
            "Soins",
            "Effectifs",
            "Services publics",
            "Territoires"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "health"
        },
        {
          "number": "05",
          "title": "École, recherche et émancipation",
          "summary": "Investir dans l’éducation, la recherche et la qualification pour garantir une haute ambition scolaire et scientifique à tous les territoires.",
          "themes": [
            "École",
            "Recherche",
            "Enseignants",
            "Qualification",
            "Culture"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "education"
        }
      ]
    },
    {
      "title": "Planification écologique et souveraineté",
      "chapters": [
        {
          "number": "06",
          "title": "Empreinte 2050",
          "summary": "Atteindre la neutralité carbone en combinant baisse des consommations, production électrique décarbonée, rénovation, rail, fret et planification publique.",
          "themes": [
            "Neutralité carbone",
            "Rénovation",
            "Rail",
            "Fret",
            "Planification"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "planning"
        },
        {
          "number": "07",
          "title": "Pôle public de l’énergie",
          "summary": "Combiner nucléaire, hydraulique et renouvelables dans un système davantage public afin de garantir approvisionnement et prix.",
          "themes": [
            "Nucléaire",
            "Hydraulique",
            "Renouvelables",
            "Pôle public",
            "Prix de l’énergie"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "energy"
        },
        {
          "number": "08",
          "title": "Agriculture, eau et biodiversité",
          "summary": "Faire évoluer production alimentaire, eau et usage des pesticides en articulant revenus agricoles, santé et objectifs écologiques.",
          "themes": [
            "Agriculture",
            "Eau",
            "Pesticides",
            "Biodiversité",
            "Revenus agricoles"
          ],
          "sourceUrl": "https://po.pcf.fr/wp-content/uploads/sites/40/2026/05/brochure_congres_2026_complete.pdf",
          "illustration": "agriculture"
        }
      ]
    },
    {
      "title": "Démocratie, paix et égalité",
      "chapters": [
        {
          "number": "09",
          "title": "Une République sociale plus démocratique",
          "summary": "Renforcer droits citoyens et syndicaux, services publics et contrôle démocratique des décisions économiques.",
          "themes": [
            "République",
            "Citoyens",
            "Syndicats",
            "Démocratie économique",
            "Libertés"
          ],
          "sourceUrl": "https://congres2026.pcf.fr/les_textes_soumis_aux_communistes",
          "illustration": "democracy"
        },
        {
          "number": "10",
          "title": "Paix, coopération et indépendance",
          "summary": "Porter une politique internationale pacifiste, multilatérale et opposée aux logiques de blocs et de guerre.",
          "themes": [
            "Paix",
            "ONU",
            "Désarmement",
            "Coopération",
            "Europe"
          ],
          "sourceUrl": "https://congres2026.pcf.fr/les_textes_soumis_aux_communistes",
          "illustration": "international"
        }
      ]
    }
  ]
},
  "udr": {
  "coverageLabel": "4 actes du Grand Forum + 4 priorités régaliennes représentés",
  "corpusNote": "L’UDR n’a pas de candidat présidentiel propre et soutient le RN. La fiche analyse cependant son corpus autonome : les actes du Grand Forum des Libertés et les priorités régaliennes du parti. Elle ne suppose pas que toutes ces mesures seraient reprises par le candidat soutenu.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Le Grand Forum des Libertés",
      "chapters": [
        {
          "number": "01",
          "title": "Acte I — Simplifier et libérer l’État",
          "summary": "Supprimer un tiers des agences et opérateurs, réduire les normes et remplacer régions, départements et métropoles par des Provinces.",
          "themes": [
            "Agences de l’État",
            "Provinces",
            "Normes",
            "Simplification",
            "Collectivités"
          ],
          "sourceUrl": "https://www.udr.fr/livretactei",
          "illustration": "commons"
        },
        {
          "number": "02",
          "title": "Acte II — Révolution fiscale",
          "summary": "Supprimer CSG et CRDS sur les salaires, simplifier l’impôt sur le revenu et supprimer plusieurs impôts de production et de patrimoine.",
          "themes": [
            "CSG",
            "CRDS",
            "Impôt sur le revenu",
            "Impôts de production",
            "Succession"
          ],
          "sourceUrl": "https://www.udr.fr/livretacteii",
          "illustration": "finance"
        },
        {
          "number": "03",
          "title": "Acte III — Retraites avec capitalisation",
          "summary": "Conserver un socle de répartition, introduire une part de capitalisation obligatoire et encourager une épargne retraite volontaire.",
          "themes": [
            "Retraites",
            "Répartition",
            "Capitalisation",
            "Épargne",
            "Pensions"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "solidarity"
        },
        {
          "number": "04",
          "title": "Acte IV — Libérer l’épargne",
          "summary": "Déplafonner et simplifier le PEA, faciliter sa transmission et orienter davantage l’épargne des ménages vers les entreprises françaises.",
          "themes": [
            "PEA",
            "Épargne",
            "Capitalisme populaire",
            "Transmission",
            "Entreprises"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "finance"
        }
      ]
    },
    {
      "title": "Ordre, frontières et souveraineté",
      "chapters": [
        {
          "number": "05",
          "title": "Immigration et préférence nationale",
          "summary": "Réduire fortement immigration légale et irrégulière, supprimer ou limiter plusieurs droits automatiques et réserver davantage de prestations.",
          "themes": [
            "Immigration",
            "Droit du sol",
            "Regroupement familial",
            "Préférence nationale",
            "AME"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "immigration"
        },
        {
          "number": "06",
          "title": "Police, justice et prisons",
          "summary": "Renforcer sanctions, expulsions des étrangers condamnés, lutte antidrogue et capacités carcérales.",
          "themes": [
            "Police",
            "Justice",
            "Prisons",
            "Narcotrafic",
            "Expulsions"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "security"
        },
        {
          "number": "07",
          "title": "Produire et investir en France",
          "summary": "Utiliser baisse des impôts de production et épargne nationale pour restaurer compétitivité, industrie et indépendance économique.",
          "themes": [
            "Industrie",
            "Compétitivité",
            "Capital",
            "Production",
            "Souveraineté"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "industry"
        },
        {
          "number": "08",
          "title": "Un État recentré sur ses fonctions régaliennes",
          "summary": "Réduire le périmètre administratif et concentrer les moyens de l’État sur sécurité, justice, frontières, défense et infrastructures jugées essentielles.",
          "themes": [
            "État",
            "Régalien",
            "Sécurité",
            "Défense",
            "Dépenses"
          ],
          "sourceUrl": "https://www.udr.fr/grandforumlibertes",
          "illustration": "security"
        }
      ]
    }
  ]
},
  "debout": {
  "coverageLabel": "8 axes majeurs du manifeste représentés",
  "corpusNote": "Le manifeste de Debout ! est un document idéologique et programmatique dense. Il alimente la campagne de François Ruffin « Nous président ! », mais certaines mesures précises peuvent encore évoluer dans une éventuelle plateforme commune de gauche.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Travail, revenus et protection",
      "chapters": [
        {
          "number": "01",
          "title": "Le travail au centre",
          "summary": "Revaloriser le travail populaire, les salaires et les métiers du lien, avec davantage de sécurité et de pouvoir dans l’entreprise.",
          "themes": [
            "Salaires",
            "Travail",
            "Métiers du lien",
            "Pouvoir salarié",
            "Dignité"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "work"
        },
        {
          "number": "02",
          "title": "Abroger la retraite à 64 ans",
          "summary": "Revenir sur la réforme et reconstruire une retraite financée dans un projet plus large de protection sociale.",
          "themes": [
            "Retraites",
            "64 ans",
            "Cotisations",
            "Pensions",
            "Protection sociale"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "solidarity"
        },
        {
          "number": "03",
          "title": "Une vie large au-delà de la consommation",
          "summary": "Réduire la marchandisation de besoins essentiels et libérer du temps pour la famille, la culture, les relations et la vie démocratique.",
          "themes": [
            "Temps de vie",
            "Services publics",
            "Culture",
            "Famille",
            "Dé-marchandisation"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "culture"
        }
      ]
    },
    {
      "title": "Travaillisme climatique et souveraineté",
      "chapters": [
        {
          "number": "04",
          "title": "Rénovation massive des logements",
          "summary": "Faire de l’isolation et de la rénovation thermique une grande politique d’emploi, de pouvoir d’achat et de climat.",
          "themes": [
            "Rénovation",
            "Passoires thermiques",
            "Emploi",
            "Énergie",
            "Factures"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "housing"
        },
        {
          "number": "05",
          "title": "Transformer agriculture, transport et industrie",
          "summary": "Créer des emplois en décarbonant les grands systèmes matériels plutôt que faire reposer l’effort principal sur les gestes individuels.",
          "themes": [
            "Agriculture",
            "Rail",
            "Industrie",
            "Climat",
            "Emplois verts"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "planning"
        },
        {
          "number": "06",
          "title": "Protéger les productions stratégiques",
          "summary": "Identifier une centaine de produits et filières à sécuriser par commande publique, normes ou protection commerciale ciblée.",
          "themes": [
            "100 produits",
            "Relocalisation",
            "Commande publique",
            "Protectionnisme",
            "Industrie"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "industry"
        }
      ]
    },
    {
      "title": "Pouvoir populaire et égalité",
      "chapters": [
        {
          "number": "07",
          "title": "RIC, conventions citoyennes et tirage au sort",
          "summary": "Multiplier les moyens d’intervention populaire en dehors des élections et associer plus directement les citoyens aux décisions.",
          "themes": [
            "RIC",
            "Conventions citoyennes",
            "Tirage au sort",
            "Délibération",
            "Démocratie directe"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "democracy"
        },
        {
          "number": "08",
          "title": "Féminisme, antiracisme et République sociale",
          "summary": "Combattre discriminations, violences sexistes et racisme tout en défendant laïcité, services publics et égalité réelle.",
          "themes": [
            "Féminisme",
            "Antiracisme",
            "VSS",
            "Laïcité",
            "Égalité"
          ],
          "sourceUrl": "https://debout.fr/notre-manifeste/",
          "illustration": "equality"
        }
      ]
    }
  ]
},
  "lapres": {
  "coverageLabel": "8 blocs synthétisant le manifeste de L’APRÈS et « La vie meilleure »",
  "corpusNote": "Clémentine Autain a retiré sa candidature le 11 juillet 2026. Cette page reste donc la fiche du mouvement L’APRÈS : elle synthétise son manifeste et le document « La vie meilleure » porté pendant la séquence de primaire, sans prétendre qu’il existe encore une candidature autonome.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Partager richesses, pouvoirs et savoirs",
      "chapters": [
        {
          "number": "01",
          "title": "Redistribuer les richesses",
          "summary": "Mettre davantage à contribution hauts patrimoines et grandes entreprises pour financer droits sociaux, services publics et transition écologique.",
          "themes": [
            "Patrimoines",
            "Grandes entreprises",
            "Fiscalité",
            "Redistribution",
            "Évasion fiscale"
          ],
          "sourceUrl": "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
          "illustration": "finance"
        },
        {
          "number": "02",
          "title": "Redonner du pouvoir aux travailleurs et citoyens",
          "summary": "Renforcer démocratie dans l’entreprise, participation populaire et contrôle collectif des choix économiques.",
          "themes": [
            "Pouvoir salarié",
            "Citoyens",
            "Entreprise",
            "Démocratie économique",
            "Participation"
          ],
          "sourceUrl": "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
          "illustration": "democracy"
        },
        {
          "number": "03",
          "title": "Étendre l’accès aux savoirs",
          "summary": "Renforcer école, université, culture, médias indépendants et accès au numérique comme conditions d’émancipation.",
          "themes": [
            "École",
            "Culture",
            "Université",
            "Médias",
            "Numérique"
          ],
          "sourceUrl": "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
          "illustration": "education"
        }
      ]
    },
    {
      "title": "Besoins essentiels et bifurcation",
      "chapters": [
        {
          "number": "04",
          "title": "Planification écologique urgente",
          "summary": "Organiser par la puissance publique les transformations de l’énergie, du bâtiment, de l’industrie, des transports et de l’agriculture.",
          "themes": [
            "Planification",
            "Climat",
            "Énergie",
            "Transport",
            "Industrie"
          ],
          "sourceUrl": "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
          "illustration": "planning"
        },
        {
          "number": "05",
          "title": "Sécurité sociale de l’alimentation",
          "summary": "Expérimenter puis généraliser un droit organisé collectivement à une alimentation saine et choisie, en soutenant une agriculture compatible.",
          "themes": [
            "Alimentation",
            "Sécurité sociale",
            "Agriculture",
            "Santé",
            "Droit universel"
          ],
          "sourceUrl": "https://l-apres.fr/posts/7VLZWjO5Lef4GSAVWIix2n/la-vie-meilleure-avec-clementine-autain",
          "illustration": "agriculture"
        },
        {
          "number": "06",
          "title": "Soins, logement et mobilité moins marchands",
          "summary": "Renforcer services publics, droits sociaux et régulations pour que les besoins vitaux dépendent moins du revenu et du marché.",
          "themes": [
            "Santé",
            "Logement",
            "Transport",
            "Services publics",
            "Dé-marchandisation"
          ],
          "sourceUrl": "https://l-apres.fr/posts/7VLZWjO5Lef4GSAVWIix2n/la-vie-meilleure-avec-clementine-autain",
          "illustration": "commons"
        }
      ]
    },
    {
      "title": "Une République féministe et démocratique",
      "chapters": [
        {
          "number": "07",
          "title": "Passer à une VIe République",
          "summary": "Rompre avec le présidentialisme, renforcer Parlement et contrôle citoyen et installer davantage de démocratie directe.",
          "themes": [
            "VIe République",
            "Présidentialisme",
            "Parlement",
            "RIC",
            "Constitution"
          ],
          "sourceUrl": "https://l-apres.fr/pages/6HGzKMlzlC5zA1NDrKD464/notre-manifeste",
          "illustration": "democracy"
        },
        {
          "number": "08",
          "title": "Féminisme, protection de l’enfance et lutte contre les violences",
          "summary": "Faire de l’égalité de genre et de la lutte contre les violences sexistes et sexuelles une politique transversale dotée de moyens.",
          "themes": [
            "Féminisme",
            "VSS",
            "Enfance",
            "Égalité",
            "Justice"
          ],
          "sourceUrl": "https://l-apres.fr/posts/7VLZWjO5Lef4GSAVWIix2n/la-vie-meilleure-avec-clementine-autain",
          "illustration": "equality"
        }
      ]
    }
  ]
},
  "udb": {
  "coverageLabel": "10 blocs parmi le corpus politique permanent représentés",
  "corpusNote": "L’UDB publie un livre-projet et des positions thématiques plutôt qu’un programme présidentiel national chiffré. La fiche met l’accent sur son cœur de doctrine — autonomie d’une Bretagne réunifiée, fédéralisme, écologie et solidarité — et sur ses propositions récentes de logement, langue, agriculture et mobilités.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Autonomie et fédéralisme",
      "chapters": [
        {
          "number": "01",
          "title": "Une République fédérale",
          "summary": "Réformer la Constitution pour transférer davantage de pouvoir législatif, réglementaire, financier et fiscal aux régions.",
          "themes": [
            "Fédéralisme",
            "Constitution",
            "Régions",
            "Fiscalité",
            "Décentralisation"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "democracy"
        },
        {
          "number": "02",
          "title": "Réunifier la Bretagne",
          "summary": "Organiser une solution démocratique pour la Loire-Atlantique et réunifier les cinq départements historiques au sein d’un même territoire politique.",
          "themes": [
            "Loire-Atlantique",
            "Réunification",
            "Bretagne",
            "Consultation",
            "Territoire"
          ],
          "sourceUrl": "https://www.udb.bzh/naoned/production-intellectuelle-2/lautonomie-de-la-bretagne-reunifiee-notre-projet-politique/",
          "illustration": "democracy"
        },
        {
          "number": "03",
          "title": "Une Assemblée de Bretagne autonome",
          "summary": "Donner à l’échelon breton la capacité de lever l’impôt et de légiférer dans ses domaines de compétence hors régalien.",
          "themes": [
            "Assemblée de Bretagne",
            "Pouvoir législatif",
            "Impôt régional",
            "Autonomie",
            "Subsidiarité"
          ],
          "sourceUrl": "https://www.udb.bzh/naoned/production-intellectuelle-2/lautonomie-de-la-bretagne-reunifiee-notre-projet-politique/",
          "illustration": "commons"
        }
      ]
    },
    {
      "title": "Vivre et travailler en Bretagne",
      "chapters": [
        {
          "number": "04",
          "title": "Un statut de résident pour le logement",
          "summary": "Donner la priorité aux habitants à l’année et davantage de pouvoirs locaux pour réguler résidences secondaires, locations touristiques et foncier.",
          "themes": [
            "Statut de résident",
            "Résidences secondaires",
            "Airbnb",
            "Foncier",
            "Logement"
          ],
          "sourceUrl": "https://www.udb.bzh/fr/non-classifiee/communiques/motion-garantir-le-droit-au-logement-en-bretagne/",
          "illustration": "housing"
        },
        {
          "number": "05",
          "title": "Une agriculture davantage vivrière",
          "summary": "Favoriser les revenus agricoles, les circuits territoriaux et un modèle moins intensif et spéculatif, mieux adapté aux enjeux écologiques.",
          "themes": [
            "Agriculture vivrière",
            "Revenus",
            "Circuits courts",
            "Écologie",
            "Foncier"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "agriculture"
        },
        {
          "number": "06",
          "title": "Autonomie énergétique renouvelable",
          "summary": "Développer les énergies renouvelables selon les ressources et décisions du territoire, avec maîtrise locale des projets.",
          "themes": [
            "Énergies renouvelables",
            "Autonomie énergétique",
            "Territoire",
            "Sobriété",
            "Planification"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "energy"
        },
        {
          "number": "07",
          "title": "Rail, transports collectifs et mobilités actives",
          "summary": "Renforcer liaisons ferroviaires bretonnes, fret, transports publics, vélo et continuités Nantes-Rennes et nord-sud.",
          "themes": [
            "Rail",
            "Fret",
            "Vélo",
            "Nantes-Rennes",
            "Transports collectifs"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "planning"
        }
      ]
    },
    {
      "title": "Langue, solidarité et Europe",
      "chapters": [
        {
          "number": "08",
          "title": "Co-officialiser breton et développer le gallo",
          "summary": "Développer enseignement bilingue, signalétique, services publics et reconnaissance juridique des langues de Bretagne.",
          "themes": [
            "Breton",
            "Gallo",
            "Co-officialité",
            "Écoles bilingues",
            "Culture"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "culture"
        },
        {
          "number": "09",
          "title": "Services publics et justice sociale",
          "summary": "Maintenir écoles, poste, santé et services de proximité tout en revalorisant métiers du lien et revenus modestes.",
          "themes": [
            "Services publics",
            "SMIC",
            "Métiers du lien",
            "Santé",
            "Proximité"
          ],
          "sourceUrl": "https://www.udb.bzh/legislatives-2022/",
          "illustration": "solidarity"
        },
        {
          "number": "10",
          "title": "Une Europe des peuples et des régions",
          "summary": "Articuler fédéralisme français et intégration européenne plus démocratique, en reconnaissant davantage les peuples et territoires sans État.",
          "themes": [
            "Europe",
            "Régions",
            "Fédéralisme",
            "Peuples",
            "Coopération"
          ],
          "sourceUrl": "https://www.udb.bzh/qui-sommes-nous/nos-idees/",
          "illustration": "europe"
        }
      ]
    }
  ]
},
  "reconquete": {
  "coverageLabel": "12 blocs du programme présidentiel 2022 représentés",
  "corpusNote": "Reconquête ! n’a pas encore publié de programme présidentiel 2027 complet. La dernière base exhaustive est le programme d’Éric Zemmour en 2022, complétée par les huit priorités actuelles du mouvement. La fiche est explicitement provisoire et devra être remplacée par le corpus 2027 lorsqu’il sera publié.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Identité, immigration et sécurité",
      "chapters": [
        {
          "number": "01",
          "title": "Immigration",
          "summary": "Réduire fortement immigration légale et clandestine, durcir regroupement familial, asile, titres de séjour, nationalité et expulsions.",
          "themes": [
            "Immigration",
            "Asile",
            "Regroupement familial",
            "Expulsions",
            "Nationalité"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "immigration"
        },
        {
          "number": "02",
          "title": "Identité et assimilation",
          "summary": "Réaffirmer une identité nationale commune, l’assimilation et la primauté de la culture française dans l’école et les institutions.",
          "themes": [
            "Assimilation",
            "Identité nationale",
            "Culture",
            "Laïcité",
            "Patrimoine"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "culture"
        },
        {
          "number": "03",
          "title": "Sécurité et justice",
          "summary": "Augmenter moyens et sanctions, construire des places de prison et renforcer l’exécution des peines.",
          "themes": [
            "Police",
            "Justice",
            "Prisons",
            "Peines",
            "Délinquance"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "security"
        }
      ]
    },
    {
      "title": "Économie, travail et production",
      "chapters": [
        {
          "number": "04",
          "title": "Impôts et pouvoir d’achat",
          "summary": "Baisser certains prélèvements sur travail, entreprises, patrimoine et familles afin de stimuler revenu disponible et investissement.",
          "themes": [
            "Impôts",
            "Charges",
            "Pouvoir d’achat",
            "Patrimoine",
            "Famille"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "finance"
        },
        {
          "number": "05",
          "title": "Travail et entreprises",
          "summary": "Réduire normes et prélèvements, soutenir entrepreneurs et augmenter la participation au travail des actifs et seniors.",
          "themes": [
            "Travail",
            "Entreprises",
            "Normes",
            "Seniors",
            "Compétitivité"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "work"
        },
        {
          "number": "06",
          "title": "Industrie et commande nationale",
          "summary": "Réindustrialiser, sécuriser filières stratégiques et favoriser la production française dans les achats et politiques publiques.",
          "themes": [
            "Réindustrialisation",
            "Commande publique",
            "Filières",
            "Souveraineté",
            "Innovation"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "industry"
        },
        {
          "number": "07",
          "title": "Agriculture et ruralité",
          "summary": "Protéger agriculteurs français, simplifier normes et défendre une souveraineté alimentaire nationale.",
          "themes": [
            "Agriculture",
            "Ruralité",
            "Normes",
            "Importations",
            "Souveraineté alimentaire"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "agriculture"
        }
      ]
    },
    {
      "title": "Énergie, État et société",
      "chapters": [
        {
          "number": "08",
          "title": "Nucléaire et indépendance énergétique",
          "summary": "Relancer le nucléaire, prolonger les centrales compatibles avec la sûreté et construire de nouvelles capacités pilotables.",
          "themes": [
            "Nucléaire",
            "EPR",
            "Indépendance énergétique",
            "Électricité",
            "Industrie"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "energy"
        },
        {
          "number": "09",
          "title": "École et instruction",
          "summary": "Recentrer l’école sur savoirs fondamentaux, discipline, mérite et transmission du patrimoine culturel français.",
          "themes": [
            "École",
            "Fondamentaux",
            "Discipline",
            "Mérite",
            "Histoire"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "education"
        },
        {
          "number": "10",
          "title": "Famille et natalité",
          "summary": "Déployer une politique familiale et fiscale favorable à la natalité et aux transmissions entre générations.",
          "themes": [
            "Famille",
            "Natalité",
            "Allocations",
            "Succession",
            "Enfance"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "family"
        }
      ]
    },
    {
      "title": "Souveraineté extérieure",
      "chapters": [
        {
          "number": "11",
          "title": "Europe des nations",
          "summary": "Réduire les transferts de souveraineté et défendre la primauté des intérêts nationaux dans l’Union européenne.",
          "themes": [
            "Union européenne",
            "Souveraineté",
            "Frontières",
            "Droit national",
            "Nations"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "europe"
        },
        {
          "number": "12",
          "title": "Défense et politique étrangère",
          "summary": "Renforcer armées, autonomie stratégique et liberté diplomatique de la France.",
          "themes": [
            "Armées",
            "Défense",
            "Dissuasion",
            "Diplomatie",
            "Indépendance"
          ],
          "sourceUrl": "https://leprogrammepourlafrance.fr/",
          "illustration": "international"
        }
      ]
    }
  ]
},
  "place-publique": {
  "coverageLabel": "12 blocs synthétisant les 42 chantiers de l’Acte I",
  "corpusNote": "L’Acte I est un document de vision très dense, organisé en 42 chantiers et destiné à être enrichi par la co-construction. Raphaël Glucksmann n’a pas encore officiellement annoncé sa candidature au 17 août 2026. Cette fiche décrit donc le projet du mouvement et la campagne en cours, pas encore un programme présidentiel définitivement figé.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Une France puissante dans une Europe souveraine",
      "chapters": [
        {
          "number": "01",
          "title": "Défendre la France et l’Europe",
          "summary": "Renforcer défense, sécurité économique et capacité stratégique de l’Union face aux puissances autoritaires et aux dépendances extérieures.",
          "themes": [
            "Défense",
            "Europe",
            "Souveraineté",
            "Ukraine",
            "Sécurité économique"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "europe"
        },
        {
          "number": "02",
          "title": "Révolution énergétique, écologique et industrielle",
          "summary": "Investir massivement dans les filières décarbonées, l’énergie, les infrastructures et une commande publique favorisant les productions européennes.",
          "themes": [
            "Industrie verte",
            "Énergie",
            "Commande européenne",
            "Décarbonation",
            "Investissement"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "industry"
        },
        {
          "number": "03",
          "title": "Maîtriser la révolution technologique",
          "summary": "Développer capacités numériques et intelligence artificielle européennes tout en régulant plateformes et concentrations de pouvoir.",
          "themes": [
            "IA",
            "Numérique",
            "Plateformes",
            "Souveraineté technologique",
            "Régulation"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "digital"
        },
        {
          "number": "04",
          "title": "Science et recherche",
          "summary": "Réinvestir dans la recherche publique, les universités et les technologies stratégiques afin de regagner autonomie et innovation.",
          "themes": [
            "Recherche",
            "Université",
            "Innovation",
            "Science",
            "Investissement"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "education"
        },
        {
          "number": "05",
          "title": "Transformer les territoires",
          "summary": "Articuler adaptation climatique, logement, mobilités, industrie et services publics dans les villes, campagnes et outre-mer.",
          "themes": [
            "Territoires",
            "Adaptation",
            "Mobilités",
            "Logement",
            "Outre-mer"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "planning"
        },
        {
          "number": "06",
          "title": "Une agriculture forte au service du vivant",
          "summary": "Garantir revenu agricole, souveraineté alimentaire et transition des pratiques en protégeant sols, eau et biodiversité.",
          "themes": [
            "Agriculture",
            "Revenus",
            "Biodiversité",
            "Eau",
            "Souveraineté alimentaire"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "agriculture"
        }
      ]
    },
    {
      "title": "Un nouveau contrat social et démocratique",
      "chapters": [
        {
          "number": "07",
          "title": "Remettre les travailleurs au cœur du contrat social",
          "summary": "Mieux partager valeur et pouvoir, renforcer dialogue social et reconnaissance des métiers et protéger les parcours professionnels.",
          "themes": [
            "Travail",
            "Salaires",
            "Dialogue social",
            "Partage de valeur",
            "Formation"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "work"
        },
        {
          "number": "08",
          "title": "Régénérer la démocratie",
          "summary": "Rendre la décision plus participative, renforcer contre-pouvoirs, pluralisme et confiance dans les institutions.",
          "themes": [
            "Démocratie",
            "Participation",
            "Contre-pouvoirs",
            "Médias",
            "Institutions"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "democracy"
        },
        {
          "number": "09",
          "title": "Garantir les droits à la santé et à la protection",
          "summary": "Réduire les déserts médicaux, reconstruire l’hôpital et mieux couvrir les accidents de la vie.",
          "themes": [
            "Santé",
            "Hôpital",
            "Déserts médicaux",
            "Protection sociale",
            "Prévention"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "health"
        },
        {
          "number": "10",
          "title": "Sécurité, justice et État de droit",
          "summary": "Renforcer les capacités régaliennes tout en maintenant indépendance de la justice et garanties des libertés publiques.",
          "themes": [
            "Sécurité",
            "Justice",
            "Police",
            "État de droit",
            "Libertés"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "security"
        },
        {
          "number": "11",
          "title": "Sauver l’École de la République",
          "summary": "Réduire les inégalités scolaires, revaloriser les personnels et reconstruire une promesse d’émancipation commune.",
          "themes": [
            "École",
            "Enseignants",
            "Inégalités",
            "Jeunesse",
            "Émancipation"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "education"
        },
        {
          "number": "12",
          "title": "Égalité, féminisme et République humaniste",
          "summary": "Combattre discriminations, violences sexistes et fractures civiques autour d’un projet républicain, laïque et inclusif.",
          "themes": [
            "Égalité",
            "Féminisme",
            "Discriminations",
            "Laïcité",
            "Citoyenneté"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "equality"
        }
      ]
    },
    {
      "title": "Le chantier cadre",
      "chapters": [
        {
          "number": "13",
          "title": "Retrouver les moyens d’agir",
          "summary": "Financer investissements sociaux, écologiques et productifs par une fiscalité plus juste, une stratégie européenne et une réorientation des dépenses.",
          "themes": [
            "Financement",
            "Fiscalité",
            "Dette",
            "Investissements",
            "Europe"
          ],
          "sourceUrl": "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
          "illustration": "finance"
        }
      ]
    }
  ]
},
  "la-convention": {
  "coverageLabel": "8 grands chantiers de la lettre-programme représentés",
  "corpusNote": "Bernard Cazeneuve a publié en juillet 2026 « Tenir la promesse de la France », une lettre-programme de plus de 80 pages. Cette fiche synthétise les principaux chantiers et le discours de La Convention. La campagne précise encore certains chiffrages et mesures.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Reconstruire la République concrète",
      "chapters": [
        {
          "number": "01",
          "title": "Redresser les finances sans austérité aveugle",
          "summary": "Installer une trajectoire crédible de baisse des déficits, rationaliser les dépenses et faire davantage contribuer les hauts revenus sans casser l’investissement.",
          "themes": [
            "Dette",
            "Déficit",
            "Hauts revenus",
            "Dépenses",
            "Investissement"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "finance"
        },
        {
          "number": "02",
          "title": "Reconstruire l’école",
          "summary": "Revaloriser et former les enseignants, renforcer humanités, fondamentaux et esprit critique et intégrer le numérique et l’IA sans abandonner l’exigence.",
          "themes": [
            "Enseignants",
            "Humanités",
            "IA",
            "Fondamentaux",
            "Égalité scolaire"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "education"
        },
        {
          "number": "03",
          "title": "Réparer la santé et les services publics",
          "summary": "Réduire inégalités territoriales d’accès aux soins et restaurer les capacités de l’hôpital et des services de proximité.",
          "themes": [
            "Hôpital",
            "Déserts médicaux",
            "Services publics",
            "Territoires",
            "Soignants"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "health"
        },
        {
          "number": "04",
          "title": "Autorité, sécurité et justice",
          "summary": "Renforcer l’autorité républicaine et l’efficacité des forces de sécurité et de justice dans le respect de l’État de droit.",
          "themes": [
            "Police",
            "Justice",
            "Autorité",
            "Narcotrafic",
            "État de droit"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "security"
        }
      ]
    },
    {
      "title": "Produire, travailler et protéger",
      "chapters": [
        {
          "number": "05",
          "title": "Réindustrialiser les bassins de vie",
          "summary": "Reconstruire l’appareil productif et les filières stratégiques afin de restaurer emploi, souveraineté et équilibre territorial.",
          "themes": [
            "Industrie",
            "Emploi",
            "Filières stratégiques",
            "Territoires",
            "Souveraineté"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "industry"
        },
        {
          "number": "06",
          "title": "Agriculture : produire et vivre de son travail",
          "summary": "Préserver une agriculture productive et durable, mieux rémunérée et moins dépendante des crises de marché et des importations.",
          "themes": [
            "Agriculture",
            "Revenus",
            "Souveraineté alimentaire",
            "Transition",
            "Territoires"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "agriculture"
        },
        {
          "number": "07",
          "title": "Une écologie populaire et planifiée",
          "summary": "Prioriser rénovation, transports collectifs, adaptation, industrie propre et agriculture sans faire supporter la transition aux plus modestes.",
          "themes": [
            "Rénovation",
            "Transports",
            "Adaptation",
            "Justice sociale",
            "Climat"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "nature"
        },
        {
          "number": "08",
          "title": "Pouvoir d’achat et modèle social",
          "summary": "Concentrer les protections sur les ménages modestes, réhabiliter dialogue social et corps intermédiaires et préserver les protections sur une base financière soutenable.",
          "themes": [
            "Pouvoir d’achat",
            "Syndicats",
            "Protection sociale",
            "Compromis",
            "Solidarité"
          ],
          "sourceUrl": "https://bc2027.fr/",
          "illustration": "solidarity"
        }
      ]
    },
    {
      "title": "Méthode de gouvernement",
      "chapters": [
        {
          "number": "09",
          "title": "Sortir de la verticalité",
          "summary": "Associer élus locaux, syndicats, associations et Parlement à une méthode de compromis plutôt que gouverner uniquement depuis l’exécutif.",
          "themes": [
            "Corps intermédiaires",
            "Élus locaux",
            "Parlement",
            "Dialogue",
            "Compromis"
          ],
          "sourceUrl": "https://bc2027.fr/ma-demarche",
          "illustration": "democracy"
        }
      ]
    }
  ]
},
  "france-humaniste": {
  "coverageLabel": "10 chantiers du corpus doctrinal 2025—2026 représentés",
  "corpusNote": "La France Humaniste ne publie pas encore un programme présidentiel final ni une candidature officiellement déclarée. Dominique de Villepin développe toutefois un corpus très détaillé de doctrines et chroniques. La fiche transforme ces propositions déjà écrites en chapitres, en distinguant clairement la doctrine du futur contrat électoral.",
  "updated": "Corpus vérifié le 17 août 2026",
  "groups": [
    {
      "title": "Refaire de l’État un stratège",
      "chapters": [
        {
          "number": "01",
          "title": "Une trajectoire organique pour dette et déficit",
          "summary": "Fixer une trajectoire quinquennale des finances publiques qui s’impose ensuite aux budgets annuels afin d’éviter les ajustements improvisés.",
          "themes": [
            "Dette",
            "Déficit",
            "Loi organique",
            "Trajectoire quinquennale",
            "Crédibilité"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "finance"
        },
        {
          "number": "02",
          "title": "Restaurer la continuité de l’État",
          "summary": "Reconstituer une haute fonction publique de long terme, avec notamment le rétablissement de l’ENA et des grands corps dans une logique ouverte sur la société.",
          "themes": [
            "Fonction publique",
            "ENA",
            "Grands corps",
            "État stratège",
            "Continuité"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "commons"
        },
        {
          "number": "03",
          "title": "Fonds de souveraineté et de solidarité",
          "summary": "Regrouper des instruments publics et mobiliser l’épargne nationale pour financer industrie, énergie, technologies et indépendance stratégique.",
          "themes": [
            "Fonds souverain",
            "Épargne",
            "Industrie",
            "Énergie",
            "Investissement"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "finance"
        }
      ]
    },
    {
      "title": "Travail et protections au XXIe siècle",
      "chapters": [
        {
          "number": "04",
          "title": "Un pacte État-entreprises-travailleurs",
          "summary": "Conditionner davantage avantages fiscaux des entreprises à des engagements d’emploi, formation, salaires, parité et inclusion.",
          "themes": [
            "Entreprises",
            "Aides publiques",
            "Emploi",
            "Formation",
            "Parité"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/un-nouveau-monde-du-travail.html",
          "illustration": "work"
        },
        {
          "number": "05",
          "title": "Une protection sociale rénovée",
          "summary": "Rendre le système plus lisible, pluriannuel et soutenable, lutter contre fraude et doublons et adapter les droits aux nouvelles formes d’emploi et de famille.",
          "themes": [
            "Protection sociale",
            "Santé",
            "Minima sociaux",
            "Fraude",
            "Financement"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/protection-sociale.html",
          "illustration": "solidarity"
        },
        {
          "number": "06",
          "title": "Anticiper l’intelligence artificielle",
          "summary": "Protéger l’humain, le travail et les libertés dans la transition technologique et développer une souveraineté numérique.",
          "themes": [
            "Intelligence artificielle",
            "Travail",
            "Données",
            "Souveraineté numérique",
            "Éthique"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/humanisme-intelligence-artificielle.html",
          "illustration": "digital"
        }
      ]
    },
    {
      "title": "Souverainetés réelles",
      "chapters": [
        {
          "number": "07",
          "title": "Reconstruire les souverainetés industrielle et énergétique",
          "summary": "Investir dans les filières essentielles, la décarbonation, la production nationale et une énergie sûre et sobre.",
          "themes": [
            "Industrie",
            "Énergie",
            "Décarbonation",
            "Production",
            "Souveraineté"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "industry"
        },
        {
          "number": "08",
          "title": "Agriculture et alimentation",
          "summary": "Préserver agriculture familiale et compétitive, qualité alimentaire, sols et indépendance face aux dépendances extérieures.",
          "themes": [
            "Agriculture familiale",
            "Alimentation",
            "Qualité",
            "Pesticides",
            "Souveraineté"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "agriculture"
        },
        {
          "number": "09",
          "title": "Une Europe souveraine",
          "summary": "Créer des mécanismes européens de sécurité et de coopération capables d’harmoniser défense, industrie et politiques stratégiques sans effacer les nations.",
          "themes": [
            "Europe",
            "Conseil de sécurité européen",
            "Défense",
            "Coopération",
            "Souveraineté"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/moment-europeen-europe-souveraine.html",
          "illustration": "europe"
        },
        {
          "number": "10",
          "title": "Une diplomatie de puissance d’équilibre",
          "summary": "Retrouver une voix française indépendante, multilatérale et capable de médiation dans un monde de blocs et d’empires concurrents.",
          "themes": [
            "Diplomatie",
            "ONU",
            "Indépendance",
            "Médiation",
            "Multilatéralisme"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html",
          "illustration": "international"
        }
      ]
    },
    {
      "title": "Recoudre la France",
      "chapters": [
        {
          "number": "11",
          "title": "École, banlieues et égalité territoriale",
          "summary": "Réinvestir dans école, services publics, sécurité, logement et mobilité pour réduire le sentiment d’une République à deux vitesses.",
          "themes": [
            "École",
            "Banlieues",
            "Services publics",
            "Mobilité",
            "Égalité territoriale"
          ],
          "sourceUrl": "https://lafrancehumaniste.fr/articles/recoudre-la-france.html",
          "illustration": "equality"
        }
      ]
    }
  ]
},

};

export function getPartyProgram(slug: string) {
  return partyPrograms[slug];
}
