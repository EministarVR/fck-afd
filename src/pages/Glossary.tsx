import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useState } from "react";

interface GlossaryEntry {
  term: string;
  definition: string;
  context?: string;
}

const glossaryEntries: GlossaryEntry[] = [
  {
    term: "Rechtsextremismus",
    definition: "Politische Ideologie, die die Ungleichwertigkeit von Menschen propagiert, demokratische Grundwerte ablehnt und autoritäre Herrschaftsformen befürwortet.",
    context: "Die AfD wird vom Verfassungsschutz als rechtsextremistischer Verdachtsfall eingestuft."
  },
  {
    term: "Völkisches Denken",
    definition: "Ideologie, die Menschen nach ethnischer Zugehörigkeit bewertet und eine homogene 'Volksgemeinschaft' anstrebt.",
    context: "Zentral in der NS-Ideologie und heute wieder in Teilen der AfD präsent."
  },
  {
    term: "Ethnopluralismus",
    definition: "Moderne Form des Rassismus, die behauptet, Kulturen seien unvereinbar und sollten räumlich getrennt bleiben.",
    context: "Wird von der Neuen Rechten als vermeintlich weniger radikale Alternative zum offenen Rassismus präsentiert."
  },
  {
    term: "Neue Rechte",
    definition: "Intellektualisierte Form des Rechtsextremismus, die demokratiefeindliche Ziele mit scheinbar gemäßigter Rhetorik verfolgt.",
    context: "Vertreter wie Götz Kubitschek haben engen Kontakt zur AfD."
  },
  {
    term: "Remigration",
    definition: "Euphemismus für die Massendeportation von Menschen mit Migrationshintergrund, auch von Staatsbürgern.",
    context: "Begriff aus dem rechtsextremen Milieu, diskutiert beim Potsdamer Geheimtreffen 2023."
  },
  {
    term: "Verfassungsschutz",
    definition: "Inlandsnachrichtendienst zum Schutz der freiheitlich-demokratischen Grundordnung.",
    context: "Stuft die AfD und Teilorganisationen als rechtsextremistischen Verdachtsfall ein."
  },
  {
    term: "Völkischer Flügel",
    definition: "Offiziell aufgelöster, faktisch weiterbestehender rechtsextremer Zusammenschluss innerhalb der AfD um Björn Höcke.",
    context: "Wurde vom Verfassungsschutz als gesichert rechtsextrem eingestuft."
  },
  {
    term: "NS-Rhetorik",
    definition: "Verwendung von Sprache, Begriffen und Argumentationsmustern aus der Zeit des Nationalsozialismus.",
    context: "Höcke verwendet Begriffe wie 'tausendjähriges Deutschland' und relativiert NS-Verbrechen."
  },
  {
    term: "Antisemitismus",
    definition: "Feindschaft gegenüber Jüdinnen und Juden, von Vorurteilen bis zu systematischer Verfolgung.",
    context: "In der AfD weit verbreitet, oft als Kritik an Israel oder 'Finanzkapital' getarnt."
  },
  {
    term: "Antiziganismus",
    definition: "Rassismus gegenüber Sinti und Roma.",
    context: "Wird in der AfD offen artikuliert, etwa durch pauschale Kriminalisierung."
  },
  {
    term: "Islamfeindlichkeit",
    definition: "Pauschale Ablehnung und Diskriminierung von Muslim*innen.",
    context: "Kernthema der AfD-Agitation, getarnt als 'Islamkritik'."
  },
  {
    term: "Populismus",
    definition: "Politikstil, der komplexe Probleme vereinfacht und 'Volk' gegen 'Eliten' ausspielt.",
    context: "Die AfD nutzt populistische Rhetorik, um rechtsextreme Inhalte zu verbreiten."
  },
  {
    term: "Verschwörungsideologie",
    definition: "Weltbild, das komplexe Ereignisse durch geheime Machenschaften erklärt.",
    context: "AfD-Politiker verbreiten Verschwörungstheorien wie den 'Großen Austausch'."
  },
  {
    term: "Großer Austausch",
    definition: "Antisemitische Verschwörungstheorie über einen angeblich geplanten 'Bevölkerungsaustausch'.",
    context: "Von Attentätern als Rechtfertigung genutzt, von AfD-Politikern verbreitet."
  },
  {
    term: "Hate Speech",
    definition: "Hasserfüllte, abwertende oder gewaltverherrlichende Sprache gegen Gruppen oder Einzelpersonen.",
    context: "Wird systematisch von AfD-Accounts in sozialen Medien verbreitet."
  },
  {
    term: "Wehrsportgruppe",
    definition: "Paramilitärische Vereinigung, die militärisches Training durchführt.",
    context: "Verboten in Deutschland; AfD-Mitglieder hatten Kontakte zu solchen Gruppen."
  },
  {
    term: "Identitäre Bewegung",
    definition: "Rechtsextreme Gruppierung, die Ethnopluralismus und Anti-Migration propagiert.",
    context: "Vom Verfassungsschutz beobachtet; hat personelle Überschneidungen mit der AfD."
  },
  {
    term: "Delegitimierung des Staates",
    definition: "Systematische Untergrabung des Vertrauens in staatliche Institutionen und Demokratie.",
    context: "Strategie der AfD durch bewusste Falschdarstellungen und Verschwörungserzählungen."
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredEntries = glossaryEntries
    .filter(entry => 
      entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(entry => 
      !selectedLetter || entry.term[0].toUpperCase() === selectedLetter
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  const availableLetters = Array.from(new Set(glossaryEntries.map(e => e.term[0].toUpperCase()))).sort();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 border border-accent/30 mb-4">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Glossar: <span className="text-accent">Begriffe erklärt</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Wichtige Begriffe rund um Rechtsextremismus, die AfD und demokratische Verteidigung
            </p>
          </div>

          <div className="space-y-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Begriff suchen..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLetter(null)}
                className={`px-3 py-1.5 text-xs sm:text-sm border transition-colors ${
                  !selectedLetter 
                    ? 'bg-accent text-accent-foreground border-accent' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                Alle
              </button>
              {availableLetters.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1.5 text-xs sm:text-sm border transition-colors ${
                    selectedLetter === letter 
                      ? 'bg-accent text-accent-foreground border-accent' 
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {filteredEntries.map((entry, index) => (
              <div
                key={index}
                className="border border-border p-4 sm:p-6 hover:border-accent/50 transition-all space-y-3 sm:space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-accent">
                  {entry.term}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  {entry.definition}
                </p>
                {entry.context && (
                  <div className="pt-2 sm:pt-3 border-t border-border/50">
                    <p className="text-xs sm:text-sm text-muted-foreground italic">
                      <span className="font-semibold">Kontext:</span> {entry.context}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredEntries.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">Kein Begriff gefunden für "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Glossary;