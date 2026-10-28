import { Link } from "react-router-dom";
import type { Country } from "../types";

export function CountryCard({ country, search }: { country: Country; search: string }) {
  const capital = country.capital || "Ingen uppgift";
  const detailUrl = `/country/${country.alpha3Code}${search ? `?${search}` : ""}`;
  return <li><Link className="card" to={detailUrl}><img src={country.flags.svg || country.flags.png} alt={`${country.name}s flagga`} /><div><h2>{country.name}</h2><p>{country.region}</p><p><strong>Huvudstad:</strong> {capital}</p></div></Link></li>;
}
