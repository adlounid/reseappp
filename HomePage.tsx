import { getCountries } from "../api/countries";
import { CountryCard } from "../components/CountryCard";
import { Pagination } from "../components/Pagination";
import { ErrorMessage, Loading } from "../components/Status";
import { regions, useCountryFilters } from "../hooks/useCountryFilters";
import { useApi } from "../hooks/useApi";
import type { Country } from "../types";

type CountryListProps = { countries: Country[] };

function CountryList({ countries }: CountryListProps) {
  const filters = useCountryFilters(countries);

  return (
    <section>
      <div className="hero">
        <p className="eyebrow">Upptäck världen</p>
        <h1>Hitta ditt nästa resmål</h1>
        <p>Sök bland världens länder och se fakta, väder och en snabb introduktion.</p>
      </div>

      <label className="search-label" htmlFor="country-search">Sök land</label>
      <input id="country-search" value={filters.query} onChange={(event) => filters.setQuery(event.target.value)} placeholder="Till exempel Finland" />

      <div className="filters" aria-label="Filtrera efter region">
        {regions.map((region) => (
          <button key={region} className={filters.region === region ? "selected" : ""} aria-pressed={filters.region === region} onClick={() => filters.setRegion(region)}>{region}</button>
        ))}
      </div>

      {filters.hasResults ? (
        <>
          <p className="results">Visar sida {filters.page} av {filters.totalPages}</p>
          <ul className="country-grid">
            {filters.shownCountries.map((country) => <CountryCard key={country.alpha3Code} country={country} search={filters.search} />)}
          </ul>
          <Pagination page={filters.page} totalPages={filters.totalPages} onPageChange={filters.setPage} />
        </>
      ) : <p className="empty">Inga länder matchar dina kriterier</p>}
    </section>
  );
}

export function HomePage() {
  const countries = useApi("countries", getCountries, true);

  if (countries.isPending) return <Loading label="Hämtar länder…" />;
  if (countries.error) return <ErrorMessage error={countries.error} retry={() => void countries.refetch()} />;

  return <CountryList countries={countries.data ?? []} />;
}
