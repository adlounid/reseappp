import type { ReactNode } from "react";
import { Loading } from "./Status";

export function ApiSection({ title, isPending, hasError, onRetry, children }: { title: string; isPending: boolean; hasError: boolean; onRetry: () => void; children: ReactNode }) {
  if (isPending) return <Loading label={`Hämtar ${title.toLocaleLowerCase("sv")}…`} />;
  if (hasError) return <section className="detail-section muted"><h2>{title}</h2><p>{title} kunde inte hämtas just nu.</p><button onClick={onRetry}>Försök igen</button></section>;
  return children;
}
