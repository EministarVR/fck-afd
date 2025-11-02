import { useState } from "react";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounterArgument {
  keyword: string;
  argument: string;
  counterArguments: string[];
  sources: { title: string; url: string }[];
}

const counterArguments: CounterArgument[] = [
  {
    keyword: "überfremdung",
    argument: "Deutschland wird überfremdet",
    counterArguments: [
      "Der Ausländeranteil in Deutschland liegt bei etwa 13% - weit entfernt von 'Überfremdung'",
      "Migration ist historisch normal und Deutschland war schon immer ein Einwanderungsland",
      "Kulturelle Vielfalt bereichert die Gesellschaft wirtschaftlich und sozial",
      "Der Begriff 'Überfremdung' selbst entstammt der NS-Propaganda"
    ],
    sources: [
      { title: "Statistisches Bundesamt - Bevölkerung", url: "https://www.destatis.de" },
      { title: "Bundeszentrale für politische Bildung", url: "https://www.bpb.de" }
    ]
  },
  {
    keyword: "kriminalität",
    argument: "Ausländer sind krimineller",
    counterArguments: [
      "Sozioökonomische Faktoren, nicht Herkunft, korrelieren mit Kriminalität",
      "Auch deutsche Staatsbürger begehen Straftaten - die Herkunft ist nicht ausschlaggebend",
      "Geflüchtete haben oft keinen Zugang zu legaler Arbeit, was Kriminalität begünstigt",
      "Polizeiliche Kriminalstatistik erfasst nur angezeigte Delikte und ist verzerrt"
    ],
    sources: [
      { title: "Kriminologisches Forschungsinstitut Niedersachsen", url: "https://kfn.de" },
      { title: "Bundeskriminalamt Statistiken", url: "https://www.bka.de" }
    ]
  },
  {
    keyword: "islamisierung",
    argument: "Deutschland wird islamisiert",
    counterArguments: [
      "Nur etwa 5-6% der Bevölkerung sind muslimisch - keine 'Islamisierung'",
      "Religionsfreiheit ist ein Grundrecht in Deutschland",
      "Die meisten Muslime in Deutschland sind gut integriert",
      "Angst vor 'Islamisierung' ist eine unbegründete Verschwörungstheorie"
    ],
    sources: [
      { title: "Religionswissenschaftlicher Medien- und Informationsdienst", url: "https://www.remid.de" },
      { title: "Deutsche Islam Konferenz", url: "https://www.deutsche-islam-konferenz.de" }
    ]
  },
  {
    keyword: "wirtschaft",
    argument: "Migranten belasten unser Sozialsystem",
    counterArguments: [
      "Migranten zahlen mehr in Sozialsysteme ein als sie herausbekommen",
      "Viele Branchen (Pflege, Gastronomie, Bau) sind auf Arbeitsmigration angewiesen",
      "Demografischer Wandel macht Migration wirtschaftlich notwendig",
      "Studien zeigen positiven Nettoeffekt von Migration auf Staatshaushalt"
    ],
    sources: [
      { title: "Bertelsmann Stiftung - Migrationsstudie", url: "https://www.bertelsmann-stiftung.de" },
      { title: "IAB - Institut für Arbeitsmarkt", url: "https://www.iab.de" }
    ]
  },
  {
    keyword: "konservativ",
    argument: "Die AfD ist einfach nur konservativ",
    counterArguments: [
      "Die AfD wird vom Verfassungsschutz als rechtsextremistischer Verdachtsfall eingestuft",
      "Viele AfD-Funktionäre haben nachweisbare Verbindungen zu Neonazi-Gruppen",
      "Die Partei verwendet NS-Vokabular und relativiert den Holocaust",
      "Konservative Parteien distanzieren sich eindeutig von der AfD"
    ],
    sources: [
      { title: "Verfassungsschutzbericht", url: "https://www.verfassungsschutz.de" },
      { title: "Amadeu Antonio Stiftung", url: "https://www.amadeu-antonio-stiftung.de" }
    ]
  }
];

const ArgumentHelper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArgument, setSelectedArgument] = useState<CounterArgument | null>(null);

  const handleSearch = () => {
    const found = counterArguments.find(ca => 
      ca.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ca.argument.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelectedArgument(found || null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/30 mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold">
            Argumentations<span className="text-accent">-Hilfe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finde fundierte Gegenargumente zu typischen rechten Narrativen
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="z.B. Überfremdung, Kriminalität, Islamisierung..."
              className="flex-1 px-6 py-4 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-lg"
            />
            <Button onClick={handleSearch} size="lg" className="px-8">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {counterArguments.map((ca) => (
              <button
                key={ca.keyword}
                onClick={() => {
                  setSearchTerm(ca.keyword);
                  setSelectedArgument(ca);
                }}
                className="px-4 py-2 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all text-sm"
              >
                {ca.keyword}
              </button>
            ))}
          </div>

          {selectedArgument && (
            <div className="border border-accent/30 p-8 space-y-6 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-semibold">
                  ARGUMENT
                </div>
                <p className="text-2xl font-medium">
                  "{selectedArgument.argument}"
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
                  GEGENARGUMENTE
                </div>
                <ul className="space-y-4">
                  {selectedArgument.counterArguments.map((counter, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-accent font-bold text-lg mt-1">→</span>
                      <span className="text-lg leading-relaxed">{counter}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Quellen & Weitere Informationen
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedArgument.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all text-sm group"
                    >
                      {source.title}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {searchTerm && !selectedArgument && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">Keine Argumente für "{searchTerm}" gefunden.</p>
              <p className="text-sm mt-2">Versuche es mit anderen Begriffen oder wähle aus den Vorschlägen.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArgumentHelper;
