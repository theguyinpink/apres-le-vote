import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { parties } from "../lib/parties";

const baseline = [
  { value: "69,08 M", label: "habitants", source: "Insee · jan. 2026" },
  { value: "8,3 %", label: "de chômage", source: "Insee · T2 2026" },
  { value: "115,6 %", label: "dette / PIB", source: "Insee · fin 2025" },
  { value: "5,1 %", label: "déficit / PIB", source: "Insee · 2025" },
];

export default function Home() {
  const projectCount = parties.length;

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="haut">
        <div className="hero-kicker">
          <span>Scénarios 2027—2032</span>
          <span>Derniers programmes officiels disponibles</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Après le vote</p>
            <h1>
              Un programme n’est pas
              <br />
              <em>encore</em> un futur.
            </h1>
            <p className="hero-lead">
              On traduit les programmes en langage simple, puis on les compare aux
              votes réels de leurs députés. Enfin, on regarde ce qu’une majorité,
              le budget et le droit permettraient vraiment d’appliquer.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#scenarios">
                Explorer les scénarios <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#methode">
                Lire notre méthode
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Aperçu des forces qui façonnent un quinquennat">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-center">
              <span>Le programme</span>
              <strong>×</strong>
              <span>le réel</span>
            </div>
            <span className="satellite satellite-one">Assemblée</span>
            <span className="satellite satellite-two">Budget</span>
            <span className="satellite satellite-three">Constitution</span>
            <span className="satellite satellite-four">Europe</span>
          </div>
        </div>

        <div className="baseline" aria-label="Point de départ de la simulation">
          <div className="baseline-title">
            <span className="live-dot" />
            <span>France, point de départ</span>
          </div>
          {baseline.map((item) => (
            <div className="baseline-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.source}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="scenarios section-shell" id="scenarios">
        <div className="section-heading">
          <div>
            <p className="section-index">01 — Les scénarios</p>
            <h2>{projectCount} projets. La même grille d’analyse.</h2>
          </div>
        </div>

        <div className="project-legend" aria-label="Statut des dossiers">
          <p>
            Tous les projets sont réunis dans la même liste. Le symbole à droite indique simplement où en est le dossier.
          </p>
          <div>
            <span>
              <i className="candidate-icon candidate-icon-declared" aria-hidden="true">✓</i>
              Dossier validé
            </span>
            <span>
              <i className="candidate-icon candidate-icon-watch" aria-hidden="true">◷</i>
              En attente
            </span>
          </div>
        </div>

        <div className="party-list">
          {parties.map((party, index) => {
            const isPublished = party.dossierStatus === "published";
            const content = (
              <>
                <span className="party-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="party-mark" aria-hidden="true">
                  {party.logo ? (
                    <Image
                      alt=""
                      height={512}
                      src={party.logo}
                      unoptimized
                      width={512}
                    />
                  ) : (
                    party.short
                  )}
                </span>
                <span className="party-identity">
                  <strong>{party.name}</strong>
                  <small>{party.family}</small>
                  <span className="party-candidate">
                    <b>{isPublished ? `Candidat${party.candidate.includes(" · ") ? "s" : ""}` : "Candidat / situation"}</b>
                    <span>{party.candidate}</span>
                    <small>{party.candidateStatus}</small>
                  </span>
                </span>
                <span className="party-summary">{party.thesis}</span>
                <span
                  className="candidate-marker"
                  aria-label={isPublished ? "Dossier validé" : "Dossier en attente"}
                  title={isPublished ? "Dossier validé" : "Dossier en attente"}
                >
                  <i
                    className={`candidate-icon ${isPublished ? "candidate-icon-declared" : "candidate-icon-watch"}`}
                    aria-hidden="true"
                  >
                    {isPublished ? "✓" : "◷"}
                  </i>
                </span>
                <span className={isPublished ? "party-arrow" : "party-arrow party-arrow-future"} aria-hidden="true">
                  {isPublished ? "↗" : "—"}
                </span>
              </>
            );

            if (isPublished) {
              return (
                <Link
                  className="party-row"
                  href={`/partis/${party.slug}`}
                  key={party.slug}
                  style={{ "--party": party.color, "--party-soft": party.soft } as React.CSSProperties}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                className="party-row party-row-static"
                key={party.slug}
                style={{ "--party": party.color, "--party-soft": party.soft } as React.CSSProperties}
              >
                {content}
              </article>
            );
          })}
        </div>

        <p className="validation-note validation-note-standalone">
          <strong>« Validé »</strong> signifie que le dossier a été relu et rendu consultable sur ce site. Cela ne
          signifie pas que la candidature a déjà été validée par le Conseil constitutionnel ou qu’elle dispose déjà
          des 500 présentations nécessaires.
        </p>
      </section>

      <section className="reality-section" id="methode">
        <div className="section-shell reality-grid">
          <div className="reality-intro">
            <p className="section-index section-index-light">02 — Ce qui résiste</p>
            <h2>Gagner l’Élysée ne donne pas tous les pouvoirs.</h2>
            <p>
              Chaque scénario existe en trois versions. C’est souvent la majorité
              parlementaire — davantage que le nom du président — qui décide de
              la vitesse et de l’ampleur des changements intérieurs.
            </p>
          </div>

          <div className="majority-steps">
            <article>
              <span>01</span>
              <div>
                <h3>Majorité absolue</h3>
                <p>Le programme devient une feuille de route, sous contrôle constitutionnel et européen.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Majorité relative</h3>
                <p>Chaque texte se négocie. Les réformes sont retardées, amendées ou abandonnées.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Cohabitation</h3>
                <p>Le gouvernement et sa majorité conduisent l’essentiel de la politique nationale.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="method-section section-shell">
        <div className="method-quote">
          <p>Ni oracle. Ni éditorial déguisé.</p>
          <h2>Une projection sourcée, lisible et contredisable.</h2>
        </div>
        <div className="method-columns">
          <article>
            <span>Programmes + votes</span>
            <p>Documents des partis et scrutins publics de l’Assemblée, tous reliés à leur source.</p>
          </article>
          <article>
            <span>Hypothèses visibles</span>
            <p>Majorité, calendrier, financement et obstacles sont affichés avant les conclusions.</p>
          </article>
          <article>
            <span>Incertitude assumée</span>
            <p>Une conséquence plausible n’est jamais présentée comme un résultat garanti.</p>
          </article>
        </div>
        <div className="source-note">
          <strong>Important</strong>
          <p>
            Les programmes présidentiels 2027 sont encore en construction. Cette
            version utilise les textes nationaux les plus récents disponibles et
            affiche leur date sur chaque fiche.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
