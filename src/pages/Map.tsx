import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, AlertTriangle, Flame, Users } from "lucide-react";
import { useState } from "react";

interface Incident {
  id: number;
  title: string;
  location: string;
  date: string;
  type: 'violence' | 'hate-speech' | 'demonstration';
  description: string;
  severity: 'low' | 'medium' | 'high';
}

const incidents: Incident[] = [
  {
    id: 1,
    title: "Rechtsextreme Demonstration",
    location: "Chemnitz, Sachsen",
    date: "August 2018",
    type: "demonstration",
    description: "Tausende marschierten durch die Stadt, begleitet von rechtsextremen Parolen und Gewalt.",
    severity: "high"
  },
  {
    id: 2,
    title: "Angriff auf Asylbewerberheim",
    location: "Heidenau, Sachsen",
    date: "August 2015",
    type: "violence",
    description: "Gewalttätige Ausschreitungen vor einer Flüchtlingsunterkunft.",
    severity: "high"
  },
  {
    id: 3,
    title: "Hetze gegen Lokalpolitiker",
    location: "Altena, NRW",
    date: "November 2017",
    type: "hate-speech",
    description: "Bürgermeister nach rechtsextremer Hetze mit Messer angegriffen.",
    severity: "high"
  },
  {
    id: 4,
    title: "AfD-Kundgebung mit rechten Symbolen",
    location: "Dresden, Sachsen",
    date: "März 2020",
    type: "demonstration",
    description: "Teilnehmer zeigten verfassungsfeindliche Symbole und skandierten rechtsextreme Parolen.",
    severity: "medium"
  },
  {
    id: 5,
    title: "Bedrohung von Journalisten",
    location: "Erfurt, Thüringen",
    date: "Januar 2021",
    type: "hate-speech",
    description: "Systematische Einschüchterung und Bedrohung kritischer Journalisten.",
    severity: "medium"
  },
  {
    id: 6,
    title: "Angriff auf politischen Gegner",
    location: "Bremen",
    date: "Mai 2019",
    type: "violence",
    description: "Mitglied einer demokratischen Partei wurde nach Wahlkampfveranstaltung angegriffen.",
    severity: "high"
  }
];

const Map = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const filteredIncidents = incidents.filter(incident => {
    const typeMatch = selectedType === 'all' || incident.type === selectedType;
    const severityMatch = selectedSeverity === 'all' || incident.severity === selectedSeverity;
    return typeMatch && severityMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'violence':
        return <Flame className="h-5 w-5 text-primary" />;
      case 'hate-speech':
        return <AlertTriangle className="h-5 w-5 text-accent" />;
      case 'demonstration':
        return <Users className="h-5 w-5 text-secondary" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-primary bg-primary/5';
      case 'medium':
        return 'border-accent bg-accent/5';
      case 'low':
        return 'border-secondary bg-secondary/5';
      default:
        return 'border-border bg-card';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Karte der Vorfälle
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
            Eine Dokumentation rechtsextremer Vorfälle im Zusammenhang mit der AfD. 
            Diese Karte zeigt nur einen Bruchteil der tatsächlichen Ereignisse.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Art des Vorfalls</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-card border border-border px-4 py-2 rounded-lg text-sm"
            >
              <option value="all">Alle</option>
              <option value="violence">Gewalt</option>
              <option value="hate-speech">Hetze</option>
              <option value="demonstration">Demonstration</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Schweregrad</label>
            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="bg-card border border-border px-4 py-2 rounded-lg text-sm"
            >
              <option value="all">Alle</option>
              <option value="high">Hoch</option>
              <option value="medium">Mittel</option>
              <option value="low">Niedrig</option>
            </select>
          </div>
        </div>

        {/* Incidents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIncidents.map((incident) => (
            <div
              key={incident.id}
              className={`p-6 border-2 ${getSeverityColor(incident.severity)} transition-all hover:shadow-xl hover:scale-105 duration-300`}
            >
              <div className="flex items-start gap-3 mb-4">
                {getTypeIcon(incident.type)}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{incident.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{incident.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{incident.description}</p>
              
              <div className="text-xs text-muted-foreground border-t border-border pt-3">
                {incident.date}
              </div>
            </div>
          ))}
        </div>

        {filteredIncidents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Keine Vorfälle mit den gewählten Filtern gefunden.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-muted/30 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Hinweis:</strong> Diese Übersicht ist nicht vollständig 
            und repräsentiert nur einen kleinen Ausschnitt dokumentierter Vorfälle. 
            Die tatsächliche Anzahl rechtsextremer Vorfälle ist deutlich höher.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Map;
