import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return <><header><nav aria-label="Huvudmeny" className="nav"><Link to="/" className="brand">Världskollen</Link><Link to="/">Alla länder</Link></nav></header><main><Outlet /></main><footer>Data från countries.dev, Open-Meteo och Wikipedia.</footer></>;
}
