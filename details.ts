import { getJson } from "./http";
import type { Coordinates, Weather, WikiSummary } from "../types";

type GeocodingResponse = { results?: Coordinates[] };
type WeatherResponse = { current: { temperature_2m: number; wind_speed_10m: number; weather_code: number } };

export async function getCapitalCoordinates(name: string, countryCode: string): Promise<Coordinates | null> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&countryCode=${encodeURIComponent(countryCode)}&count=1&language=sv`;
  const data = await getJson<GeocodingResponse>(url);
  return data.results?.[0] ?? null;
}

export async function getWeather(coordinates: Coordinates): Promise<Weather> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`;
  const data = await getJson<WeatherResponse>(url);
  return { temperature: data.current.temperature_2m, windSpeed: data.current.wind_speed_10m, code: data.current.weather_code };
}

export function getWikipedia(name: string): Promise<WikiSummary> {
  return getJson<WikiSummary>(`https://sv.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);
}
