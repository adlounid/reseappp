export async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  // Ger användaren ett tydligt fel om API:t inte svarar korrekt.
  if (!response.ok) throw new Error(`Anropet misslyckades (${response.status}).`);
  return response.json() as Promise<T>;
}
