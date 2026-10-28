# Världskollen

En reseapp för JS3 som visar länder, fakta, aktuellt väder och en kort Wikipedia-introduktion.

## Starta lokalt

```bash
npm install
npm run dev
```

Bygg för produktion med `npm run build`.

## Teknikval

Appen använder React med Vite och React Router för routes och URL-state. API-anrop ligger i egna filer, medan custom hooks hanterar laddning, fel och nya försök. `countries.dev` hämtas till landlistan, medan detaljdata hämtas oberoende från countries.dev, Open-Meteo och Wikipedia.

## Grundkrav som täcks

- Lista med flagga, namn, region och huvudstad; sökning, regionfilter och paginering körs lokalt efter ett enda listanrop.
- `page`, `query` och `region` ligger i URL:en och bevaras mellan listan och detaljsidan.
- Detaljsida på `/country/:code` med fakta, väder och Wikipedia samt separata laddnings- och felsteg.
- Tillgänglig semantik, labels, alt-texter, tangentbordsfokus, responsiv layout och egen 404-sida.

## Deployment

Deploya mappen på Vercel eller Netlify med byggkommando `npm run build` och publiceringsmapp `dist`.

Publik URL: lägg in din deployade adress här före inlämning.

## AI-redovisning

Codex användes för att tolka uppgiftskraven, föreslå struktur och skriva kod. Koden ska gås igenom och förstås före redovisningen.

## Reflektion

Det gick bra att hålla listans filter och sidnummer i URL:en, vilket gör vyn möjlig att dela och ladda om. Den svåraste delen var att hantera flera externa API:er som svarar olika snabbt eller kan misslyckas var för sig. Nästa gång skulle jag sätta upp deployment och GitHub-flödet redan när den första landlistan fungerar.
