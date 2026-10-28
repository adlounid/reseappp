export type Region = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

export type Flag = { svg: string; png: string };
export type Language = { name: string };
export type Currency = { code: string; name: string; symbol: string };
export type Coordinates = { latitude: number; longitude: number };
export type Country = { name: string; nativeName: string; alpha2Code: string; alpha3Code: string; capital: string; region: string; subregion: string; population: number; area: number; latlng: [number, number]; flags: Flag; languages: Language[]; currencies: Currency[] };
export type Weather = { temperature: number; windSpeed: number; code: number };
export type WikiSummary = { title: string; extract: string; thumbnail?: { source: string }; content_urls: { desktop: { page: string } } };
