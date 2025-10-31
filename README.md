# FUCK-AFD — Für ein Verbot

Eine moderne, schnelle und zugängliche Website, die dokumentierte Fakten, Statistiken und Quellen gegen rechte Hetze bündelt. Ziel ist es, verständlich und belegt aufzuzeigen, warum die AfD unserer Demokratie und vielen Menschen konkret schadet.


## Inhalte
- Startseite mit Hero, animierten Hintergründen und klarer Botschaft
- Fakten-Sektion mit belegten Argumenten und Quellen
- Statistiken mit Zahlen, Diagrammen und Entwicklungen
- Quellenübersicht für maximale Transparenz
- Saubere Navigation (Header, Footer), mobilfreundliches Menü
- Fokus auf Performance, Lesbarkeit und einfache Erweiterbarkeit


## Tech-Stack
- React 18 + TypeScript (Vite)
- React Router
- Tailwind CSS (+ tailwind-merge, tailwindcss-animate)
- shadcn/ui (Radix UI Primitives, lucide-react Icons)
- Sonstiges: @tanstack/react-query (optional), zod, date-fns, recharts


## Voraussetzungen
- Node.js ≥ 18 (empfohlen)
- Paketmanager: npm oder bun


## Schnellstart
1. Repository klonen
   git clone <REPO_URL>
   cd fuck-afd

2. Abhängigkeiten installieren
   - mit npm:    npm install
   - oder mit bun: bun install

3. Entwicklung starten
   npm run dev
   # öffnet standardmäßig http://localhost:5173

4. Produktion bauen
   npm run build

5. Build lokal anschauen
   npm run preview


## Verfügbare Scripts
- dev — Lokaler Entwicklungsserver (Vite)
- build — Produktionsbuild erzeugen
- build:dev — Entwicklungsbuild (schneller, mit Sourcemaps)
- lint — ESLint prüfen lassen
- preview — Gebauten Output lokal serven


## Projektstruktur (Auszug)
- index.html — SEO-Meta-Tags, OpenGraph/Twitter, Favicon
- src/
  - pages/Index.tsx — Einstieg mit den Hauptsektionen
  - components/ — UI‑Bausteine (Header, Hero, Footer, …)
  - components/ui/ — shadcn/ui Komponenten
  - App.tsx — App-Routing/Wrapper
  - index.css / App.css — globale Styles
- public/ — statische Assets (falls verwendet)
- vite.config.ts — Vite‑Konfiguration
- tailwind.config.ts — Tailwind‑Konfiguration


## Entwicklungshinweise
- Styling: Tailwind Utility‑Klassen, mit Animationsklassen für subtile Effekte
- Komponenten: Möglichst klein & wiederverwendbar halten, Props klar typisieren
- Zugänglichkeit: Semantische HTML‑Elemente und ARIA beachten
- Performance: Bilder lazy‑laden, nur notwendige Abhängigkeiten einbinden
- SEO: Sinnvolle Titel/Description (siehe index.html), sprechende Copy


## Deployment
- Der Build‑Ordner dist/ kann auf jeder statischen Hosting‑Plattform bereitgestellt werden (z. B. Vercel, Netlify, GitHub Pages, Cloudflare Pages).
- Beispiel (Vercel): Projekt importieren → Build Command: "npm run build" → Output: "dist".


## Beiträge / Contributing
- Issues willkommen (Fehler, Verbesserungen, neue Quellen/Fakten)
- Pull Requests mit fokussiertem Scope und klarer Beschreibung
- Bitte Code‑Style (ESLint) und Typisierung beachten


## Roadmap (Ideen)
- Suchfunktion über alle Fakten/Quellen
- Mehr interaktive Diagramme und Vergleiche
- i18n (Mehrsprachigkeit)
- Druck/PDF‑Export der Faktenlisten


## Rechtliches & Lizenz
- Lizenz: noch nicht festgelegt. Ohne ausdrückliche Lizenz gilt: alle Rechte vorbehalten.
- Bitte Quellen respektieren und korrekt zitieren.


## Dank & Credits
- UI‑Primitives: Radix UI
- Icon Set: lucide-react
- Komponentenbasis: shadcn/ui
- Build Tooling: Vite + TypeScript

—
Fragen, Feedback oder Vorschläge? Eröffne ein Issue oder starte eine Diskussion.