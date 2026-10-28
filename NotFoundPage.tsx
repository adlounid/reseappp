import { Link } from "react-router-dom";

export function NotFoundPage() {
  return <section className="not-found"><h1>Sidan hittades inte</h1><p>Adressen du sökte finns inte.</p><Link to="/">Till startsidan</Link></section>;
}
