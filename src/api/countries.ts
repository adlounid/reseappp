import { getJson } from "./http";
import type { Country } from "../types";

const listFields = "name,alpha3Code,region,capital,flags,population,area";

export function getCountries(): Promise<Country[]> {
  return getJson<Country[]>(`https://countries.dev/countries?fields=${listFields}`);
}

export function getCountry(code: string): Promise<Country> {
  return getJson<Country>(`https://countries.dev/alpha/${encodeURIComponent(code)}`);
}
