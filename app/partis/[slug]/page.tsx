import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgramExplorer } from "../../../components/program-explorer";
import { ScenarioSwitcher } from "../../../components/scenario-switcher";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";
import { getPublishedParty, publishedParties } from "../../../lib/parties";
import { getPartyProgram } from "../../../lib/party-programs";
import { getPartyProjection } from "../../../lib/projections";
import { dominantChoice, landmarkVotes, partyVoteContexts } from "../../../lib/votes";

export function generateStaticParams() {
  return publishedParties.map((party) => ({ slug: party.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const party = getPublishedParty(slug);
  return party
    ? { title: `${party.name} — Après le vote`, description: party.thesis }
    : { title: "Scénario introuvable — Après le vote" };
}

export default async function PartyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const party = getPublishedParty(slug);
  if (!party) notFound();
  const program = getPartyProgram(slug);
  if (!program) notFound();
  const projection = getPartyProjection(slug);
  if (!projection) notFound();
  const voteContext = partyVoteContexts[party.slug];

  const style = {
    "--party": party.color,
    "--party-soft": party.soft,
    "--party-ink": party.ink,
  } as React.CSSProperties;

  return (
    <main className="party-page" style={style}>
      <SiteHeader />

      <section className="party-hero">
        <div className="party-hero-topline">
          <Link href="/#scenarios">← Tous les scénarios</Link>
          <span>Programme augmenté · 2027—2032</span>
        </div>
        <div className="party-hero-grid">
          <div className="party-big-mark" aria-hidden="true">
            <Image
              alt=""
              height={512}
              src={party.logo}
              unoptimized
              width={512}
            />
          </div>
          <div className={`party-title-block ${party.slug === "rn" ? "party-title-block--rn" : ""}`}>
            <p>{party.family}</p>
            <h1>{party.name}</h1>
            <h2>{party.thesis}</h2>
          </div>
          <div className="program-card">
            <span>Texte de référence</span>
            <strong>{party.programLabel}</strong>
            <small>{party.programDate}</small>
            <em>{party.documentStatus}</em>
            <a href={party.sourceUrl} target="_blank" rel="noreferrer">
              Lire le document officiel ↗
            </a>
          </div>
        </div>
        <p className="party-overview">{party.overview}</p>
      </section>

      <nav className="reading-nav" aria-label="Sommaire de la fiche">
        <a href="#programme">Le programme</a>
        <a href="#projection">Projection 2032</a>
        <a href="#votes">Les votes</a>
        <a href="#majorite">La majorité</a>
        <a href="#quotidien">Dans votre vie</a>
        <a href="#cinq-ans">Sur cinq ans</a>
      </nav>

      <div className="party-content section-shell">
        <section className="program-section" id="programme">
          <div className="section-heading compact-heading program-heading">
            <div>
              <p className="section-index">01 — Le programme complet, en clair</p>
              <h2>Pas quatre promesses.<br />Tout le sommaire.</h2>
            </div>
            <p>
              Chaque chapitre ou dossier officiel est représenté. Ouvre une rubrique
              pour lire son idée centrale, tous ses sous-thèmes et retrouver le texte
              source — sans devoir traverser des centaines de pages.
            </p>
          </div>
          <ProgramExplorer program={program} />
        </section>

        <section className="projection-section" id="projection">
          <div className="section-heading compact-heading projection-heading">
            <div>
              <p className="section-index">02 — Hypothèse favorable 2032</p>
              <h2>Si le projet atteint ses objectifs.</h2>
            </div>
            <p>
              Un ordre de grandeur de fin de mandat — pas une promesse du parti,
              ni une prévision certaine. Ici, on retient volontairement le cas
              favorable compatible avec le projet.
            </p>
          </div>

          <div className="projection-method">
            <span>Hypothèses communes</span>
            <p>
              Majorité absolue stable, programme appliqué, pas de crise extérieure
              majeure, croissance et taux d’intérêt favorables. Population estimée
              à partir de la trajectoire centrale de l’Insee, ajustée seulement quand
              la politique migratoire du projet l’impose clairement.
            </p>
          </div>

          <p className="projection-summary">{projection.summary}</p>

          <div className="projection-grid">
            {projection.metrics.map((metric) => (
              <article className="projection-card" key={metric.label}>
                <span className="projection-label">{metric.label}</span>
                <div className="projection-values">
                  <div>
                    <small>Point de départ</small>
                    <strong>{metric.start}</strong>
                  </div>
                  <span aria-hidden="true">→</span>
                  <div>
                    <small>Fin 2032</small>
                    <strong>{metric.end}</strong>
                  </div>
                </div>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>

          <p className="projection-sources">
            Repères : <a href="https://www.insee.fr/fr/statistiques/2107840" target="_blank" rel="noreferrer">Insee — conjoncture 2026 ↗</a>
            <span> · </span>
            <a href="https://www.insee.fr/fr/statistiques/8997691" target="_blank" rel="noreferrer">comptes publics 2025 ↗</a>
            <span> · </span>
            <a href="https://www.insee.fr/fr/statistiques/2381470" target="_blank" rel="noreferrer">projection de population ↗</a>
          </p>
        </section>

        <section className="votes-section" id="votes">
          <div className="section-heading compact-heading votes-heading">
            <div>
              <p className="section-index">03 — Promesses et actes</p>
              <h2>Ce que leurs députés ont réellement voté.</h2>
            </div>
            <p>
              {voteContext ? (
                <>
                  Référence parlementaire retenue : <strong>{voteContext.representation}</strong>. {voteContext.note}
                </>
              ) : (
                <>
                  Le groupe parlementaire lié à ce parti est aujourd’hui « {party.assemblyGroup} ».
                  Un groupe n’est pas exactement un parti : le nom et sa composition sont
                  donc précisés pour chaque scrutin.
                </>
              )}
            </p>
          </div>

          <div className="vote-method-note">
            <strong>Comment lire ces graphiques ?</strong>
            <p>
              « Position dominante » signifie le choix le plus fréquent parmi les votes enregistrés.
              Quand un mouvement n’a pas de groupe propre, nous affichons uniquement les votes
              des députés dont l’appartenance au mouvement est documentée. Les absents ne sont pas comptés.
            </p>
            <div className="vote-key" aria-label="Légende des votes">
              <span><i className="key-for" /> Pour</span>
              <span><i className="key-against" /> Contre</span>
              <span><i className="key-abstain" /> Abstention</span>
            </div>
          </div>

          <div className="vote-list">
            {landmarkVotes.some((vote) => vote.positions[party.slug]) ? landmarkVotes.map((vote) => {
              const position = vote.positions[party.slug];
              if (!position) return null;
              const dominant = dominantChoice(position);
              const total = position.for + position.against + position.abstain;

              return (
                <article className="vote-card" key={vote.id}>
                  <div className="vote-card-head">
                    <div>
                      <span>{vote.topic}</span>
                      <h3>{vote.title}</h3>
                    </div>
                    <p>{vote.date}<br /><small>{vote.legislature}</small></p>
                  </div>

                  <p className="vote-plain"><strong>En clair :</strong> {vote.plain}</p>

                  <div className="party-vote-result">
                    <div>
                      <span>{position.label ?? "Position dominante du groupe"}</span>
                      <strong className={`dominant dominant-${dominant.toLowerCase()}`}>{dominant}</strong>
                      <small>{position.group}</small>
                    </div>
                    <div className="vote-chart-wrap">
                      <div
                        className="vote-chart"
                        role="img"
                        aria-label={`${position.for} pour, ${position.against} contre et ${position.abstain} abstentions`}
                      >
                        {position.for > 0 && <span className="vote-segment vote-for" style={{ flexGrow: position.for }} />}
                        {position.against > 0 && <span className="vote-segment vote-against" style={{ flexGrow: position.against }} />}
                        {position.abstain > 0 && <span className="vote-segment vote-abstain" style={{ flexGrow: position.abstain }} />}
                      </div>
                      <div className="vote-counts">
                        <span><b>{position.for}</b> pour</span>
                        <span><b>{position.against}</b> contre</span>
                        <span><b>{position.abstain}</b> abst.</span>
                        <span><b>{total}</b> votes affichés</span>
                      </div>
                    </div>
                  </div>

                  <div className="vote-card-foot">
                    <span>{vote.result}</span>
                    <a href={vote.sourceUrl} target="_blank" rel="noreferrer">Voir le scrutin officiel ↗</a>
                  </div>
                </article>
              );
            }) : (
              <div className="vote-method-note">
                <strong>Aucun vote de député directement attribuable.</strong>
                <p>
                  {voteContext?.note ??
                    "Nous n’affichons pas le vote d’un autre parti ou d’un groupe composite par simple approximation."}
                </p>
              </div>
            )}
          </div>
        </section>

        <div id="majorite">
          <ScenarioSwitcher partyName={party.name} />
        </div>

        <section className="daily-section" id="quotidien">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-index">05 — Dans votre vie</p>
              <h2>À quoi cela pourrait ressembler, concrètement.</h2>
            </div>
            <p>
              Des situations simples pour relier le texte à la vie quotidienne.
              Ce sont des conséquences plausibles, pas des certitudes.
            </p>
          </div>
          <div className="daily-grid">
            {party.daily.map((item) => (
              <article key={item.title}>
                <div className="daily-graphic" aria-hidden="true">
                  {item.image && (
                    <Image
                      alt=""
                      height={400}
                      src={item.image}
                      unoptimized
                      width={640}
                    />
                  )}
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline-section" id="cinq-ans">
          <div className="timeline-title">
            <p className="section-index">06 — Le quinquennat</p>
            <h2>Cinq ans,<br />pas un claquement de doigts.</h2>
          </div>
          <div className="timeline">
            {party.timeline.map((item) => (
              <article key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="brakes-section">
        <div className="section-shell brakes-grid">
          <div>
            <p className="section-index section-index-light">07 — Ce qui résiste</p>
            <h2>Ce qui pourrait ralentir ou empêcher le programme.</h2>
          </div>
          <div className="brakes-list">
            {party.brakes.map((brake, index) => (
              <article key={brake.title}>
                <span>0{index + 1}</span>
                <div><h3>{brake.title}</h3><p>{brake.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sources-section section-shell">
        <p className="section-index">08 — Sources et limites</p>
        <div className="sources-grid">
          <h2>Tout doit pouvoir être vérifié.</h2>
          <div>
            <a href={party.sourceUrl} target="_blank" rel="noreferrer">{party.sourceName} ↗</a>
            {party.extraSources?.map((source) => (
              <a href={source.url} key={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
            ))}
            <a href="https://www.assemblee-nationale.fr/dyn/les-donnees-ouvertes" target="_blank" rel="noreferrer">Assemblée nationale — données ouvertes ↗</a>
            <a href="https://www.insee.fr/fr/statistiques/8997691" target="_blank" rel="noreferrer">Insee — comptes publics 2025 ↗</a>
            <a href="https://www.vie-publique.fr/questions-reponses/294788-quoi-sert-une-majorite-lassemblee-nationale" target="_blank" rel="noreferrer">Vie publique — rôle de la majorité ↗</a>
          </div>
          <p>
            Cette fiche croise les documents disponibles au 17 août 2026 et, lorsque la
            correspondance parlementaire est suffisamment fiable, des scrutins publics de
            2023 à 2025. Un vote renseigne sur une décision précise, pas sur toute
            l’idéologie d’un parti. Le scénario sera révisé lorsque le programme
            présidentiel 2027 définitif sera publié.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
