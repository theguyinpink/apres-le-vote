"use client";

import { useMemo, useRef, useState } from "react";
import type { PartyProgram } from "../lib/party-programs";
import { ProgramIllustration } from "./program-illustration";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");
}

export function ProgramExplorer({ program }: { program: PartyProgram }) {
  const [query, setQuery] = useState("");
  const explorerRef = useRef<HTMLDivElement>(null);

  const filteredGroups = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return program.groups;

    return program.groups
      .map((group) => ({
        ...group,
        chapters: group.chapters.filter((chapter) =>
          normalize([chapter.title, chapter.summary, ...chapter.themes].join(" ")).includes(needle),
        ),
      }))
      .filter((group) => group.chapters.length > 0);
  }, [program.groups, query]);

  const total = program.groups.reduce((sum, group) => sum + group.chapters.length, 0);
  const visible = filteredGroups.reduce((sum, group) => sum + group.chapters.length, 0);

  function setAll(open: boolean) {
    explorerRef.current?.querySelectorAll("details").forEach((detail) => {
      detail.open = open;
    });
  }

  return (
    <div className="program-explorer" ref={explorerRef}>
      <div className="program-coverage">
        <div>
          <span>Couverture du corpus</span>
          <strong>{program.coverageLabel}</strong>
        </div>
        <p>{program.corpusNote}</p>
        <small>{program.updated}</small>
      </div>

      <div className="program-tools">
        <label>
          <span>Rechercher dans le programme</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex. logement, école, nucléaire…"
            type="search"
            value={query}
          />
        </label>
        <div className="program-tool-actions">
          <span>{visible} sur {total} rubriques</span>
          <button onClick={() => setAll(true)} type="button">Tout déplier</button>
          <button onClick={() => setAll(false)} type="button">Tout replier</button>
        </div>
      </div>

      {filteredGroups.length === 0 ? (
        <div className="program-empty">
          <strong>Aucune rubrique ne correspond.</strong>
          <button onClick={() => setQuery("")} type="button">Effacer la recherche</button>
        </div>
      ) : (
        <div className="program-groups">
          {filteredGroups.map((group, groupIndex) => (
            <section className="program-group" key={group.title}>
              <div className="program-group-title">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <small>{group.chapters.length} rubrique{group.chapters.length > 1 ? "s" : ""}</small>
              </div>

              <div className="program-chapters">
                {group.chapters.map((chapter, chapterIndex) => (
                  <details open={groupIndex === 0 && chapterIndex === 0 && !query} key={`${group.title}-${chapter.title}`}>
                    <summary>
                      <ProgramIllustration kind={chapter.illustration} src={chapter.icon} />
                      <span className="chapter-number">{chapter.number ?? String(chapterIndex + 1).padStart(2, "0")}</span>
                      <span className="chapter-title">
                        <small>{chapter.themes.length} thèmes couverts</small>
                        <strong>{chapter.title}</strong>
                      </span>
                      <span className="chapter-toggle" aria-hidden="true">+</span>
                    </summary>
                    <div className="chapter-content">
                      <p>{chapter.summary}</p>
                      <div>
                        <span>Ce que cette rubrique contient</span>
                        <ul>
                          {chapter.themes.map((theme) => <li key={theme}>{theme}</li>)}
                        </ul>
                      </div>
                      <a href={chapter.sourceUrl} target="_blank" rel="noreferrer">Lire la source officielle ↗</a>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
