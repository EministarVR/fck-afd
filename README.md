<div align="center">

# 🎯 Fuck AfD

### Eine aufklärende Web-Plattform gegen Rechtsextremismus

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Live Demo](#) • [Dokumentation](#features) • [Mitmachen](#contributing)

</div>

---

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#-über-das-projekt)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Entwicklung](#-entwicklung)
- [Projektstruktur](#-projektstruktur)
- [Seiten & Komponenten](#-seiten--komponenten)
- [Contributing](#-contributing)
- [Lizenz](#-lizenz)

---

## 🎯 Über das Projekt

**Fuck AfD** ist eine moderne, interaktive Web-Anwendung, die darauf abzielt, Menschen über die Gefahren des Rechtsextremismus aufzuklären und mit fundierten Fakten, Statistiken und Argumentationshilfen auszustatten.

### 🌟 Mission

> Demokratie schützen durch Aufklärung, Fakten und Dialog.

Die Plattform bietet:
- 📊 **Datenbasierte Fakten** mit verifizierten Quellen
- 💬 **Argumentationshilfen** für Diskussionen
- 📈 **Interaktive Statistiken** zur Visualisierung
- 🎮 **Quiz & Spiele** für spielerisches Lernen
- 📚 **Umfangreiche Quellensammlung**

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Modernes UI/UX
- Responsive Design für alle Geräte
- Dark Mode Support
- Smooth Scrolling & Animationen
- Interaktive Komponenten

</td>
<td width="50%">

### 📊 Datenvisualisierung
- Interaktive Statistiken
- Timeline-Darstellung
- Dynamische Charts
- Fact Cards

</td>
</tr>
<tr>
<td width="50%">

### 💡 Bildungsinhalte
- FAQ-Bereich
- Argumentationshilfe
- Mythbuster-Quiz
- Zitate-Sammlung

</td>
<td width="50%">

### 🔗 Community
- Newsletter-Integration
- Discord-Anbindung
- Call-to-Action Bereiche
- Social Sharing

</td>
</tr>
</table>

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server

### Styling & UI
- **Tailwind CSS** - Utility-First CSS
- **shadcn/ui** - Component Library
- **Radix UI** - Accessible Components
- **Lucide React** - Icon Library

### Routing & State
- **React Router DOM** - Client-side Routing
- **TanStack Query** - Data Fetching & Caching
- **React Hook Form** - Form Management

### Utilities
- **clsx** & **class-variance-authority** - Conditional Classes
- **date-fns** - Date Manipulation
- **Embla Carousel** - Carousel Component

---

## 🚀 Installation

### Voraussetzungen

- **Node.js** >= 18.x
- **Bun** (empfohlen) oder npm

### Setup

```bash
# Repository klonen
git clone https://github.com/yourusername/fuck-afd.git

# In Projektverzeichnis wechseln
cd fuck-afd

# Dependencies installieren (mit Bun)
bun install

# oder mit npm
npm install
```

---

## 💻 Entwicklung

### Development Server starten

```bash
# Mit Bun
bun run dev

# Mit npm
npm run dev
```

Die Anwendung läuft dann auf `http://localhost:5173`

### Weitere Commands

```bash
# Production Build erstellen
bun run build

# Development Build erstellen
bun run build:dev

# Linting ausführen
bun run lint

# Preview der Production Build
bun run preview
```

---

## 📁 Projektstruktur

```
fuck-afd/
├── 📂 public/              # Statische Assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── robots.txt
│   └── 📂 data/           # JSON Datenquellen
│       ├── sources.json   # Quellenverzeichnis
│       └── stats.json     # Statistiken
│
├── 📂 src/
│   ├── 📂 components/      # React Komponenten
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ArgumentsSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── MythBusterGame.tsx
│   │   └── 📂 ui/         # shadcn/ui Komponenten
│   │
│   ├── 📂 pages/          # Route-basierte Seiten
│   │   ├── Index.tsx      # Startseite
│   │   ├── Facts.tsx      # Fakten-Seite
│   │   ├── Statistics.tsx # Statistiken
│   │   ├── Arguments.tsx  # Argumentationshilfe
│   │   ├── Quiz.tsx       # Quiz-Seite
│   │   ├── Sources.tsx    # Quellenverzeichnis
│   │   ├── Actions.tsx    # Aktionen
│   │   └── About.tsx      # Über uns
│   │
│   ├── 📂 hooks/          # Custom React Hooks
│   ├── 📂 lib/            # Utility Funktionen
│   ├── App.tsx            # Root Component
│   └── main.tsx           # Entry Point
│
├── 📄 vite.config.ts      # Vite Konfiguration
├── 📄 tailwind.config.ts  # Tailwind Konfiguration
├── 📄 tsconfig.json       # TypeScript Config
└── 📄 package.json        # Dependencies
```

---

## 🗺 Seiten & Komponenten

### Hauptseiten

| Route | Komponente | Beschreibung |
|-------|-----------|--------------|
| `/` | `Index` | Landing Page mit allen Hauptsektionen |
| `/facts` | `Facts` | Faktensammlung |
| `/statistics` | `Statistics` | Statistische Auswertungen |
| `/arguments` | `Arguments` | Argumentationshilfen |
| `/quiz` | `Quiz` | Interaktives Wissensquiz |
| `/sources` | `Sources` | Quellenverzeichnis |
| `/actions` | `Actions` | Handlungsoptionen |
| `/about` | `About` | Über das Projekt |

### Kern-Komponenten

<details>
<summary><b>🎨 Layout Komponenten</b></summary>

- `Header` - Navigation & Branding
- `Hero` - Hero Section mit CTA
- `Footer` - Footer mit Links
- `ScrollProgress` - Scroll-Fortschrittsanzeige
- `BackToTop` - Back-to-Top Button

</details>

<details>
<summary><b>📊 Content Komponenten</b></summary>

- `ArgumentsSection` - Argumentationskarten
- `StatisticsSection` - Statistik-Dashboard
- `TimelineSection` - Zeitstrahl
- `QuotesSection` - Zitate-Sammlung
- `FAQSection` - Häufige Fragen
- `SourcesSection` - Quellenangaben

</details>

<details>
<summary><b>🎮 Interaktive Komponenten</b></summary>

- `MythBusterGame` - Quiz-Spiel
- `InteractivePreview` - Interaktive Vorschau
- `ArgumentHelper` - Argument-Assistent
- `ActionCenter` - Aktionszentrum

</details>

<details>
<summary><b>🔗 Engagement Komponenten</b></summary>

- `DiscordSection` - Discord Community
- `NewsletterSection` - Newsletter-Anmeldung
- `CTASection` - Call-to-Action Bereiche

</details>

---

## 🤝 Contributing

Beiträge sind herzlich willkommen! Hier sind einige Wege, wie du helfen kannst:

### 🐛 Bugs melden
Erstelle ein [Issue](../../issues) mit einer detaillierten Beschreibung.

### 💡 Features vorschlagen
Teile deine Ideen in den [Discussions](../../discussions).

### 🔧 Code beitragen

1. **Forke** das Repository
2. **Erstelle** einen Feature Branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Committe** deine Änderungen
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Pushe** zum Branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Öffne** einen Pull Request

### 📝 Code Style

- Verwende TypeScript für Type Safety
- Folge den ESLint-Regeln
- Nutze Prettier für Formatierung
- Schreibe aussagekräftige Commit-Messages

---

## 📊 Datenquellen

Die Plattform nutzt verifizierte Datenquellen:

- `public/data/sources.json` - Quellenverzeichnis
- `public/data/stats.json` - Statistische Daten

Alle Quellen sind dokumentiert und nachprüfbar.

---

## 🔒 Lizenz

Dieses Projekt steht unter der [MIT Lizenz](LICENSE).

---

## 📞 Kontakt & Support

- 🌐 Website: [Projekt-Website](#)
- 💬 Discord: [Community beitreten](#)
- 📧 Email: [kontakt@example.com](mailto:kontakt@example.com)
- 🐦 Twitter: [@projekt](#)

---

<div align="center">

### ⭐️ Wenn dir das Projekt gefällt, gib ihm einen Star!

**Gemeinsam für Demokratie und gegen Extremismus.**

[Nach oben ⬆️](#-fuck-afd)

</div>

