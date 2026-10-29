import type { Weather } from "../types";

function weatherDescription(code: number): { icon: string; text: string } {
  if (code === 0) return { icon: "☀", text: "Klart" };
  if (code <= 3) return { icon: "⛅", text: "Delvis molnigt" };
  if (code <= 48) return { icon: "🌫", text: "Dimma" };
  if (code <= 67) return { icon: "🌧", text: "Regn" };
  if (code <= 77) return { icon: "❄", text: "Snö" };
  if (code <= 82) return { icon: "🌦", text: "Regnskurar" };
  if (code <= 86) return { icon: "🌨", text: "Snöbyar" };
  return { icon: "⛈", text: "Åska" };
}

export function WeatherCard({ weather }: { weather: Weather }) {
  const { icon, text } = weatherDescription(weather.code);
  return <section className="detail-section"><h2>Väder just nu</h2><p className="weather"><span aria-hidden="true">{icon}</span> {text}</p><dl><div><dt>Temperatur</dt><dd>{weather.temperature} °C</dd></div><div><dt>Vind</dt><dd>{weather.windSpeed} km/h</dd></div></dl></section>;
}
