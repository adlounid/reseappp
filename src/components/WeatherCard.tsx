import type { Weather } from "../types";

function weatherDescription(code: number): string {
  if (code === 0) return "Klart";
  if (code <= 3) return "Delvis molnigt";
  if (code <= 48) return "Dimma";
  if (code <= 67) return "Regn";
  if (code <= 77) return "Snö";
  if (code <= 82) return "Regnskurar";
  if (code <= 86) return "Snöbyar";
  return "Åska";
}

export function WeatherCard({ weather }: { weather: Weather }) {
  return <section className="detail-section"><h2>Väder just nu</h2><p className="weather"><span aria-hidden="true">☀</span> {weatherDescription(weather.code)}</p><dl><div><dt>Temperatur</dt><dd>{weather.temperature} °C</dd></div><div><dt>Vind</dt><dd>{weather.windSpeed} km/h</dd></div></dl></section>;
}
