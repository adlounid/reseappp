import type { Country } from "../types";

function formatCurrencies(country: Country): string {
  return country.currencies.map((currency) => `${currency.name} (${currency.symbol || currency.code})`).join(", ") || "Ingen uppgift";
}

export function CountryFacts({ country }: { country: Country }) {
  const languages = country.languages.map((language) => language.name).join(", ") || "Ingen uppgift";
  return <section className="detail-section"><h2>Fakta</h2><dl>
    <div><dt>Region</dt><dd>{country.region} {country.subregion ? `- ${country.subregion}` : ""}</dd></div>
    <div><dt>Huvudstad</dt><dd>{country.capital || "Ingen uppgift"}</dd></div>
    <div><dt>Befolkning</dt><dd>{country.population.toLocaleString("sv-SE")}</dd></div>
    <div><dt>Språk</dt><dd>{languages}</dd></div>
    <div><dt>Valuta</dt><dd>{formatCurrencies(country)}</dd></div>
  </dl></section>;
}
