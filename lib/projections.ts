export type ProjectionMetric = {
  label: string;
  start: string;
  end: string;
  note: string;
};

export type PartyProjection = {
  summary: string;
  metrics: ProjectionMetric[];
};

const sharedStart = {
  population: "69,08 M",
  unemployment: "8,3 %",
  debt: "115,6 %",
  deficit: "5,1 %",
};

export const partyProjections: Record<string, PartyProjection> = {
  lfi: {
    summary:
      "La hausse de la demande, les créations d’emplois publics et la planification produisent l’effet attendu ; les recettes nouvelles compensent une grande partie des dépenses.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,8 M",
        note: "Trajectoire démographique Insee légèrement relevée par une politique migratoire plus ouverte.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 4,5 %",
        note: "Hypothèse haute : relance, garantie d’emploi et investissements absorbent fortement le chômage.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 112 %",
        note: "La croissance et les recettes fiscales permettent au ratio de baisser malgré l’investissement public.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 2,8 %",
        note: "Après le choc de départ, les recettes prévues et l’activité ramènent le déficit sous 3 %.",
      },
    ],
  },
  ps: {
    summary:
      "La réindustrialisation, la négociation salariale et les services publics soutiennent l’activité sans rupture financière avec le cadre européen.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,7 M",
        note: "Projection démographique centrale de l’Insee, avec un solde migratoire proche de sa tendance.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 5,0 %",
        note: "Les emplois industriels, la formation et la demande soutenue rapprochent le pays du plein emploi.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 108 %",
        note: "Une croissance plus riche en emplois et une consolidation graduelle réduisent le poids de la dette.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 2,5 %",
        note: "Les dépenses nouvelles sont étalées et financées dans une trajectoire européenne favorable.",
      },
    ],
  },
  ecologistes: {
    summary:
      "La rénovation, les transports et l’énergie deviennent un moteur d’emplois ; les économies d’énergie apparaissent avant la fin du mandat.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,7 M",
        note: "Projection démographique centrale de l’Insee, peu modifiée par les mesures du programme.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 5,2 %",
        note: "Les chantiers de transition créent assez d’emplois pour compenser les reconversions sectorielles.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 111 %",
        note: "L’investissement reste élevé, mais l’activité et la baisse des importations d’énergie améliorent le ratio.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 2,8 %",
        note: "La montée en charge des travaux est financée et les gains énergétiques allègent la fin de mandat.",
      },
    ],
  },
  renaissance: {
    summary:
      "L’investissement privé, le taux d’emploi et les projets européens progressent ; les économies publiques ne cassent pas la croissance.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,6 M",
        note: "Projection démographique centrale de l’Insee, sans inflexion majeure attribuée au programme.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 4,8 %",
        note: "L’investissement et les incitations à l’activité atteignent l’objectif de quasi-plein emploi.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 104 %",
        note: "La croissance nominale, les réformes et la maîtrise graduelle des dépenses font baisser le ratio.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 2,2 %",
        note: "La consolidation se poursuit sans récession ni forte dégradation des services publics.",
      },
    ],
  },
  lr: {
    summary:
      "La baisse de la dépense est réellement exécutée, le travail progresse et les économies n’entraînent pas de récession ni de crise sociale durable.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,3 M",
        note: "La tendance Insee est légèrement abaissée pour tenir compte d’une immigration durablement réduite.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 4,6 %",
        note: "Le revenu d’activité, la formation et la compétitivité produisent l’effet recherché sur l’emploi.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 98 %",
        note: "Le scénario retient des économies fortes, continues et compatibles avec une croissance positive.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 1,5 %",
        note: "La réduction de la dépense atteint son objectif sans baisse durable des recettes.",
      },
    ],
  },
  rn: {
    summary:
      "La souveraineté énergétique, les baisses ciblées et la préférence nationale soutiennent l’activité ; les obstacles juridiques sont supposés levés.",
    metrics: [
      {
        label: "Habitants",
        start: sharedStart.population,
        end: "≈ 69,0 M",
        note: "La croissance démographique ralentit davantage sous l’hypothèse d’une forte baisse de l’immigration.",
      },
      {
        label: "Chômage",
        start: sharedStart.unemployment,
        end: "≈ 5,0 %",
        note: "L’activité nationale progresse et les pénuries de main-d’œuvre restent limitées dans ce cas favorable.",
      },
      {
        label: "Dette / PIB",
        start: sharedStart.debt,
        end: "≈ 103 %",
        note: "Les économies annoncées et la croissance compensent les baisses de prélèvements et les nouvelles dépenses.",
      },
      {
        label: "Déficit / PIB",
        start: sharedStart.deficit,
        end: "≈ 2,6 %",
        note: "La trajectoire favorable prolonge l’effort du contre-budget sans choc européen ni financier.",
      },
    ],
  },
  horizons: {
    summary:
      "Cas favorable : les économies annoncées sont réellement exécutées, le choc de compétitivité soutient l’investissement et les nouvelles dépenses de défense, d’école et d’adaptation restent financées.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,4 M", note: "Trajectoire démographique légèrement inférieure à la projection centrale sous une politique migratoire plus restrictive." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,6 %", note: "Le scénario suppose que baisse des impôts de production, innovation et formation produisent une forte hausse du taux d’emploi." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 102 %", note: "Les économies sur les aides et opérateurs, la croissance nominale et la maîtrise du déficit font baisser le ratio." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,0 %", note: "C’est l’objectif explicitement affiché à la fin du quinquennat ; le scénario favorable suppose qu’il soit atteint sans récession." },
    ],
  },
  "nouvelle-energie": {
    summary:
      "Cas favorable : la baisse de la bureaucratie et des prélèvements relance suffisamment l’offre et l’emploi pour accompagner une réduction forte de la dépense sans dégradation durable des services essentiels.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,2 M", note: "La trajectoire est abaissée sous l’hypothèse d’une immigration légale et familiale fortement réduite." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,3 %", note: "Le scénario retient l’effet maximal recherché de la libéralisation du travail, de l’investissement et de la réindustrialisation." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 97 %", note: "Réduction de la dépense, simplification et croissance permettent une baisse rapide du ratio dans ce cas favorable." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 1,7 %", note: "Le scénario suppose que les économies structurelles compensent les baisses de prélèvements et le coût des transitions." },
    ],
  },
  "nous-france": {
    summary:
      "Cas favorable et très incertain : la décentralisation améliore l’efficacité locale, le travail progresse et les mesures de pouvoir d’achat sont calibrées sans choc sur les finances publiques.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,4 M", note: "Projection prudente : la politique migratoire n’est pas encore assez détaillée pour justifier un écart plus important." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,9 %", note: "L’emploi bénéficie d’une politique du travail et de compétences plus territorialisée, mais les outils exacts restent à préciser." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 106 %", note: "Le scénario suppose des gains d’efficacité de la décentralisation sans transferts de coûts non financés." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,6 %", note: "La trajectoire est volontairement prudente car le programme budgétaire 2027 complet n’est pas encore publié." },
    ],
  },
  "generation-ecologie": {
    summary:
      "Cas favorable spécifique à un projet de décroissance : la baisse des flux matériels est organisée sans chômage de masse, les besoins essentiels restent financés et la résilience réduit le coût des crises climatiques.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,6 M", note: "Aucune inflexion démographique chiffrée assez précise n’est intégrée ; on conserve une trajectoire proche de l’Insee." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 5,4 %", note: "Le scénario favorable suppose partage du travail, métiers essentiels et activités de résilience capables d’absorber les reconversions." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 114 %", note: "Le ratio baisse peu : avec une croissance du PIB volontairement non prioritaire, le dénominateur rend l’indicateur particulièrement délicat à réduire." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,9 %", note: "La montée des investissements d’adaptation est supposée financée progressivement par réallocation, sobriété matérielle et nouvelles priorités." },
    ],
  },

  "lutte-ouvriere": {
    summary:
      "Cas analytique très particulier : Lutte ouvrière ne présente pas ce projet comme un programme présidentiel à exécuter par l’État. Les chiffres ci-dessous illustrent seulement ce qui pourrait se produire si les revendications immédiates étaient imposées et si une transformation du système de propriété s’engageait effectivement.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,8 M", note: "Une politique de régularisation et de libre circulation pourrait relever légèrement la population par rapport à la trajectoire centrale." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 3,5 %", note: "Hypothèse volontairement favorable : partage du travail, interdiction des licenciements et embauches massives absorbent une grande partie du chômage." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "Non comparable", note: "Une expropriation généralisée et une propriété collective des grands moyens de production modifieraient trop profondément le système financier et comptable pour prolonger honnêtement le ratio actuel." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "Non comparable", note: "Même limite : LO ne propose pas une trajectoire budgétaire gouvernementale classique et son objectif systémique rend ce ratio spéculatif." },
    ],
  },
  "debout-la-france": {
    summary:
      "Cas favorable : la sortie de l’Union européenne se déroule sans crise monétaire ou commerciale, les nouvelles règles nationales soutiennent rapidement la production et les économies financent le renforcement régalien et les services publics.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,1 M", note: "La trajectoire est légèrement abaissée en raison d’une politique migratoire plus restrictive, sans supposer de rupture démographique brutale." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,5 %", note: "Le scénario suppose que relocalisation, énergie compétitive, baisse des contraintes et commande nationale soutiennent fortement l’emploi." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 101 %", note: "Le ratio baisse si la transition européenne reste ordonnée, si les économies sont exécutées et si le PIB nominal continue de progresser." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,2 %", note: "Hypothèse favorable : nouvelles dépenses de sécurité et d’investissement sont compensées par économies et retour de croissance." },
    ],
  },
  "les-patriotes": {
    summary:
      "Cas favorable et très incertain : Frexit, retour au franc et sorties institutionnelles sont ordonnés, sans crise bancaire ni choc commercial durable ; énergie publique et protection de la production soutiennent ensuite l’activité.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 68,9 M", note: "Le solde migratoire est supposé nettement inférieur à la tendance du fait de la sortie de Schengen et d’un contrôle renforcé des frontières." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,2 %", note: "Réindustrialisation, protection commerciale et baisse du coût de l’électricité produisent ici l’effet maximal recherché sur l’emploi." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 100 %", note: "Projection hautement conditionnelle : elle suppose une transition monétaire stable, des taux maîtrisés et une croissance nominale suffisante après le Frexit." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,0 %", note: "Les économies de contribution européenne et les nouvelles marges nationales compensent les dépenses publiques dans ce scénario favorable." },
    ],
  },
  upr: {
    summary:
      "Projection provisoire fondée sur le programme 2022, puisque l’UPR n’a pas encore publié son programme présidentiel 2027. Elle suppose une transition UE-euro-OTAN ordonnée et la reprise d’une grande partie des 27 engagements sociaux et économiques de 2022.",
    metrics: [
      { label: "Habitants", start: sharedStart.population, end: "≈ 69,0 M", note: "Hypothèse prudente d’une immigration plus basse après reprise du contrôle national, sans reprendre un chiffre que le programme 2027 n’a pas encore fixé." },
      { label: "Chômage", start: sharedStart.unemployment, end: "≈ 4,6 %", note: "Le scénario combine l’objectif d’un million d’emplois, la réindustrialisation et les baisses de charges des PME ; il va au-delà du seul effet mécanique de la promesse de 2022." },
      { label: "Dette / PIB", start: sharedStart.debt, end: "≈ 101 %", note: "La baisse suppose économies annoncées, retour de croissance et transition monétaire sans envolée des taux ni crise bancaire." },
      { label: "Déficit / PIB", start: sharedStart.deficit, end: "≈ 2,2 %", note: "Trajectoire indicative uniquement : le chiffrage du futur programme 2027 peut modifier fortement cette estimation." },
    ],
  },

  "solution-democratique": {
  "summary": "Projection institutionnelle uniquement : Solution Démocratique refuse volontairement de fixer une politique économique présidentielle. Il serait trompeur d’attribuer à Clara Egger une trajectoire de chômage, dette ou déficit que son programme veut laisser aux choix citoyens futurs.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,6 M",
      "note": "On conserve la trajectoire démographique centrale faute de politique migratoire ou familiale programmatique."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "Non comparable",
      "note": "Aucune politique de l’emploi n’est prescrite : elle dépendrait des décisions adoptées ensuite par les citoyens et gouvernements."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "Non comparable",
      "note": "Le programme ne fixe ni dépenses, ni recettes, ni trajectoire budgétaire."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "Non comparable",
      "note": "Même limite : la réforme porte sur les institutions, pas sur le budget de l’État."
    }
  ]
},
  "equinoxe": {
  "summary": "Cas favorable et provisoire : le futur programme 2027 reprend la discipline du contre-budget, la relocalisation réussit sans choc de prix durable et les investissements climatiques sont priorisés sans dérapage budgétaire.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,5 M",
      "note": "Le corpus ne justifie pas une rupture démographique forte ; la projection reste proche de la tendance centrale."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,8 %",
      "note": "Relocalisations, industrie et formation absorbent une part importante du chômage dans le scénario favorable."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 103 %",
      "note": "Le retour du déficit vers 3 %, puis en dessous, stabilise et réduit progressivement le ratio si la croissance nominale reste positive."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,5 %",
      "note": "La projection prolonge la logique du contre-budget au-delà de 2027 ; le programme final pourra modifier ce chiffre."
    }
  ]
},
  "modem": {
  "summary": "Cas favorable : une coalition reprend la ligne MoDem, les économies sont graduelles, la décentralisation améliore l’efficacité et la trajectoire budgétaire récente est tenue sans récession.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,6 M",
      "note": "Aucune inflexion démographique majeure n’est retenue dans le corpus central du mouvement."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 5,0 %",
      "note": "Le scénario suppose stabilité macroéconomique, investissement européen et amélioration progressive du taux d’emploi."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 102 %",
      "note": "La baisse suppose plusieurs années de déficits décroissants et une croissance nominale supérieure au coût moyen de la dette."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 1,8 %",
      "note": "Le scénario prolonge après 2029 le retour sous 3 % défendu dans la trajectoire centriste récente."
    }
  ]
},
  "pcf": {
  "summary": "Cas favorable : les investissements publics relancent production et emploi, les nouvelles recettes fiscales et sociales suivent, et la planification écologique évite une hausse durable des coûts énergétiques.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,7 M",
      "note": "Le corpus n’affiche pas de réduction démographique ; la trajectoire est légèrement supérieure à la centrale par hypothèse sociale et migratoire."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,2 %",
      "note": "Réindustrialisation, services publics et sécurité emploi-formation produisent ici un effet fort sur l’emploi."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 111 %",
      "note": "La dette baisse lentement car les investissements restent élevés ; le scénario suppose cependant plus de croissance et de recettes."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,8 %",
      "note": "Fiscalité, emploi et activité compensent progressivement le coût des investissements, sans supposer un retour rapide à l’excédent."
    }
  ]
},
  "udr": {
  "summary": "Cas très favorable et fortement dépendant du chiffrage UDR : les 200 milliards d’euros d’économies revendiqués se matérialisent largement, les baisses d’impôts relancent la croissance et la transition administrative ne dégrade pas les services essentiels.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 68,9 M",
      "note": "Une politique migratoire très restrictive abaisse le solde migratoire par rapport à la tendance centrale."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,1 %",
      "note": "Le scénario retient l’effet maximal recherché des baisses de prélèvements et de l’investissement productif."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 94 %",
      "note": "Cette forte baisse n’est possible que si une grande partie des économies annoncées est réellement récurrente et si les taux restent maîtrisés."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 1,2 %",
      "note": "Projection volontairement favorable cohérente avec le chiffrage revendiqué ; un écart sur les économies ferait remonter très vite ce résultat."
    }
  ]
},
  "debout": {
  "summary": "Cas favorable : la hausse des revenus et les investissements climatiques créent suffisamment d’activité et d’emplois pour compenser une partie de leur coût, tandis que la fiscalité progressive apporte des recettes supplémentaires.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,7 M",
      "note": "La trajectoire reste proche de la centrale ; le manifeste ne repose pas sur une réduction du solde migratoire."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 3,9 %",
      "note": "Le travaillisme climatique, les services publics et la relocalisation ciblée absorbent fortement le chômage dans ce cas favorable."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 109 %",
      "note": "Les investissements maintiennent la dette élevée, mais emploi, croissance nominale et recettes permettent une décrue modeste."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,7 %",
      "note": "La fiscalité et la hausse d’activité compensent progressivement retraites, services publics et investissements."
    }
  ]
},
  "lapres": {
  "summary": "Cas favorable appliqué au programme du mouvement malgré l’absence de candidate propre : redistribution et planification soutiennent emploi et services, mais les nouveaux droits universels maintiennent un besoin de financement important.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,8 M",
      "note": "Le corpus social et migratoire n’implique pas de baisse du solde démographique."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,1 %",
      "note": "Services publics, rénovation, relocalisation et réduction de la précarité soutiennent fortement l’emploi."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 112 %",
      "note": "La dette recule peu car la création de nouveaux droits et les investissements écologiques restent coûteux malgré de nouvelles recettes."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,9 %",
      "note": "Hypothèse favorable de montée progressive des recettes fiscales et de gains d’activité, sans effacer le coût de la bifurcation."
    }
  ]
},
  "udb": {
  "summary": "Projection non nationale : l’UDB fournit un programme fédéraliste et territorial, pas un budget présidentiel pour toute la France. On peut analyser ses effets locaux, mais pas lui attribuer honnêtement une trajectoire macroéconomique nationale complète.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,6 M",
      "note": "La réforme fédérale n’implique pas à elle seule une trajectoire démographique nationale différente."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "Non comparable",
      "note": "Les propositions d’emploi et d’économie sont territoriales ; il manque une politique macroéconomique nationale consolidée."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "Non comparable",
      "note": "Le transfert de fiscalité entre État et régions modifierait les comptes sans chiffrage national consolidé."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "Non comparable",
      "note": "Aucune trajectoire nationale de recettes et dépenses n’est publiée dans le corpus utilisé."
    }
  ]
},
  "reconquete": {
  "summary": "Cas favorable fondé sur le programme 2022, en attendant celui de 2027 : restriction migratoire, baisses d’impôts et relance nucléaire produisent les économies et la croissance anticipées sans crise juridique ou européenne majeure.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 68,5 M",
      "note": "La forte baisse de l’immigration nette est l’une des hypothèses structurantes du scénario."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,4 %",
      "note": "Compétitivité, industrie et activité bénéficient ici pleinement des baisses de prélèvements et de la politique énergétique."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 100 %",
      "note": "La baisse suppose que les économies du programme 2022 sont proches des montants annoncés et que la croissance ne souffre pas des ruptures juridiques."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,0 %",
      "note": "Chiffre indicatif fondé sur le dernier chiffrage complet ; il devra être recalculé avec le programme 2027."
    }
  ]
},
  "place-publique": {
  "summary": "Cas favorable : la réindustrialisation verte, la coordination européenne et les nouvelles recettes permettent de financer simultanément services publics et investissements sans laisser le déficit durablement au-dessus des règles européennes.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,6 M",
      "note": "Aucune rupture démographique majeure n’est intégrée au scénario."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,6 %",
      "note": "Industrie verte, recherche et services publics créent des emplois tandis que la formation accompagne les reconversions."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 105 %",
      "note": "Investissements élevés mais mutualisation européenne, croissance et fiscalité permettent une décrue graduelle."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,3 %",
      "note": "La projection suppose un cadre budgétaire compatible avec l’UE et des recettes supplémentaires pour financer l’Acte I."
    }
  ]
},
  "la-convention": {
  "summary": "Cas favorable : le redressement pluriannuel est appliqué sans austérité récessive, la contribution des hauts revenus et les économies ciblées financent une partie de la reconstruction des services et de l’industrie.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,5 M",
      "note": "La lettre-programme ne repose pas sur une inflexion démographique spectaculaire."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,7 %",
      "note": "Réindustrialisation et services publics améliorent l’emploi, avec une hypothèse plus prudente que les programmes de rupture."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 101 %",
      "note": "Le scénario suppose une baisse régulière des déficits et une crédibilité financière retrouvée sans casser l’investissement."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 1,9 %",
      "note": "Le redressement quinquennal aboutit sous 2 % dans ce cas favorable, après financement des priorités sociales et productives."
    }
  ]
},
  "france-humaniste": {
  "summary": "Cas favorable et provisoire : la règle budgétaire pluriannuelle fonctionne, le fonds de souveraineté soutient la croissance productive et les nouvelles protections sont financées sans dérive de la dette sociale.",
  "metrics": [
    {
      "label": "Habitants",
      "start": "69,08 M",
      "end": "≈ 69,5 M",
      "note": "Le corpus ne contient pas de cible démographique justifiant un écart significatif à la tendance."
    },
    {
      "label": "Chômage",
      "start": "8,3 %",
      "end": "≈ 4,5 %",
      "note": "Industrie, fonds souverain, formation et pacte avec les entreprises soutiennent fortement l’emploi dans le scénario favorable."
    },
    {
      "label": "Dette / PIB",
      "start": "115,6 %",
      "end": "≈ 100 %",
      "note": "La baisse exige plusieurs années de déficits contenus, une bonne performance des investissements et aucune nouvelle crise majeure."
    },
    {
      "label": "Déficit / PIB",
      "start": "5,1 %",
      "end": "≈ 2,6 %",
      "note": "Dominique de Villepin insiste sur le retour sous 3 % ; on retient une marge prudente plutôt qu’un chiffre plus optimiste."
    }
  ]
},

};

export function getPartyProjection(slug: string) {
  return partyProjections[slug];
}
