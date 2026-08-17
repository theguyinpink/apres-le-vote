"use client";

import { useState } from "react";

const variants = {
  absolute: {
    label: "Majorité absolue",
    ability: "Capacité d’application élevée",
    pace: "Le premier budget et les lois prioritaires peuvent reprendre la logique du programme.",
    reality: "Le Sénat peut ralentir les textes ordinaires, mais l’Assemblée peut souvent avoir le dernier mot. Constitution et droit européen restent des limites.",
  },
  relative: {
    label: "Majorité relative",
    ability: "Application fragmentée",
    pace: "Les mesures populaires ou compatibles avec un partenaire avancent ; le reste se négocie texte par texte.",
    reality: "Le gouvernement peut être renversé. Les budgets deviennent des moments de crise et les réformes les plus identitaires sont diluées ou bloquées.",
  },
  cohabitation: {
    label: "Cohabitation",
    ability: "Programme intérieur très limité",
    pace: "Le président conserve des pouvoirs propres, mais le gouvernement conduit l’essentiel de la politique nationale.",
    reality: "La diplomatie et la défense restent partagées. Sur l’économie, l’école, la santé ou la sécurité, la majorité parlementaire impose sa feuille de route.",
  },
};

type Variant = keyof typeof variants;

export function ScenarioSwitcher({ partyName }: { partyName: string }) {
  const [selected, setSelected] = useState<Variant>("absolute");
  const current = variants[selected];

  return (
    <section className="scenario-switcher" aria-labelledby="scenario-title">
      <div className="switcher-heading">
        <div>
          <p className="section-index">04 — L’Assemblée</p>
          <h2 id="scenario-title">Présidence {partyName} : avec quelle Assemblée ?</h2>
        </div>
        <p>Choisis une situation pour voir quelle part du programme peut réellement avancer.</p>
      </div>

      <div className="switcher-tabs" role="tablist" aria-label="Choisir une hypothèse de majorité">
        {(Object.keys(variants) as Variant[]).map((key) => (
          <button
            aria-selected={selected === key}
            className={selected === key ? "active" : ""}
            key={key}
            onClick={() => setSelected(key)}
            role="tab"
            type="button"
          >
            {variants[key].label}
          </button>
        ))}
      </div>

      <div className="switcher-result" role="tabpanel">
        <div className="result-signal">
          <span>Ampleur possible</span>
          <strong>{current.ability}</strong>
        </div>
        <div className="result-copy">
          <p>{current.pace}</p>
          <p>{current.reality}</p>
        </div>
      </div>
    </section>
  );
}
