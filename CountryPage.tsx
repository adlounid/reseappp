import { Link, useLocation, useParams } from "react-router-dom";
import { getCountry } from "../api/countries";
import { getCapitalCoordinates, getWeather, getWikipedia } from "../api/details";
import { ApiSection } from "../components/ApiSection";
import { CountryFacts } from "../components/CountryFacts";
import { Loading } from "../components/Status";
import { WeatherCard } from "../components/WeatherCard";
import { WikipediaCard } from "../components/WikipediaCard";
import { useApi } from "../hooks/useApi";
import type { Coordinates, Country } from "../types";

type CountryContentProps = { country: Country; search: string };

function CountryContent({ country, search }: CountryContentProps) {
  const coordinates = useApi(
    `coordinates-${country.alpha3Code}`,
    async (): Promise<Coordinates> => {
      const capitalCoordinates = country.capital
        ? await getCapitalCoordinates(country.capital, country.alpha2Code)
        : null;

      return capitalCoordinates ?? { latitude: country.latlng[0], longitude: country.latlng[1] };
    },
    true,
  );

  const weather = useApi(
    `weather-${country.alpha3Code}-${coordinates.data?.latitude ?? ""}`,
    () => getWeather(coordinates.data as Coordinates),
    Boolean(coordinates.data),
  );

  const wikipedia = useApi(`wiki-${country.name}`, () => getWikipedia(country.name), true);

  return (
    <article className="detail">
      <Link className="back" to={`/${search}`}>← Tillbaka till listan</Link>

      <div className="detail-header">
        <img src={country.flags.svg || country.flags.png} alt={`${country.name}s flagga`} />
        <div>
          <p className="eyebrow">{country.region}</p>
          <h1>{country.name}</h1>
          <p className="native-name">{country.nativeName}</p>
        </div>
      </div>

      <CountryFacts country={country} />

      <ApiSection title="Väder" isPending={coordinates.isPending || weather.isPending} hasError={Boolean(coordinates.error || weather.error || !weather.data)} onRetry={() => void weather.refetch()}>
        {weather.data ? <WeatherCard weather={weather.data} /> : null}
      </ApiSection>

      <ApiSection title="Wikipedia" isPending={wikipedia.isPending} hasError={Boolean(wikipedia.error || !wikipedia.data)} onRetry={() => void wikipedia.refetch()}>
        {wikipedia.data ? <WikipediaCard summary={wikipedia.data} /> : null}
      </ApiSection>
    </article>
  );
}

export function CountryPage() {
  const { code = "" } = useParams();
  const location = useLocation();
  const country = useApi(`country-${code}`, () => getCountry(code.toUpperCase()), true);

  if (country.isPending) return <Loading label="Hämtar land…" />;

  if (country.error || !country.data) {
    return <section className="not-found"><h1>Landet hittades inte</h1><Link to={`/${location.search}`}>Tillbaka till listan</Link></section>;
  }

  return <CountryContent country={country.data} search={location.search} />;
}
