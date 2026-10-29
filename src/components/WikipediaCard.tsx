import type { WikiSummary } from "../types";

export function WikipediaCard({ summary }: { summary: WikiSummary }) {
  return <section className="detail-section wiki">
    {summary.thumbnail ? <img src={summary.thumbnail.source} alt={`Bild som visar ${summary.title}`} /> : null}
    <div><h2>Om {summary.title}</h2><p>{summary.extract}</p><a href={summary.content_urls.desktop.page} target="_blank" rel="noreferrer">Läs hela artikeln på Wikipedia</a><p className="source">Källa: Wikipedia</p></div>
  </section>;
}
