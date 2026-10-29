import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { Country, Region } from "../types";

export const regions: Region[] = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
const pageSize = 12;
function validRegion(value: string | null): Region { return regions.includes(value as Region) ? value as Region : "All"; }
export type CountryFilters = ReturnType<typeof useCountryFilters>;

export function useCountryFilters(countries: Country[]) {
  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";
  const region = validRegion(params.get("region"));
  const requestedPage = Math.max(1, Number(params.get("page")) || 1);
  const filtered = useMemo(() => countries.filter((country) => country.name.toLocaleLowerCase("sv").includes(query.toLocaleLowerCase("sv")) && (region === "All" || country.region === region)), [countries, query, region]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(requestedPage, totalPages);
  const shownCountries = filtered.slice((page - 1) * pageSize, page * pageSize);
  const update = (changes: Record<string, string>): void => { const next = new URLSearchParams(params); Object.entries(changes).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key)); setParams(next); };
  return { query, region, page, totalPages, shownCountries, hasResults: filtered.length > 0, setQuery: (value: string) => update({ query: value, page: "1" }), setRegion: (value: Region) => update({ region: value === "All" ? "" : value, page: "1" }), setPage: (value: number) => update({ page: value === 1 ? "" : String(value) }), search: params.toString() };
}
