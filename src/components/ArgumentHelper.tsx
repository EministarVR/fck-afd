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
  },
  {
    keyword: "meinungsfreiheit",
    argument: "Man darf ja nichts mehr sagen",
    counterArguments: [
      "Meinungsfreiheit bedeutet nicht Freiheit von Konsequenzen oder Kritik",
      "Volksverhetzung und Hassrede sind aus gutem Grund verboten",
      "Die AfD und ihre Anhänger können ihre Meinung frei äußern - werden aber zurecht kritisiert",
      "Das Grundgesetz schützt die Würde des Menschen, nicht die Beleidigung anderer"
    ],
    sources: [
      { title: "Bundeszentrale für politische Bildung - Meinungsfreiheit", url: "https://www.bpb.de" },
      { title: "Verfassungsschutz", url: "https://www.verfassungsschutz.de" }
    ]
  },
  {
    keyword: "gender",
    argument: "Gender-Ideologie zerstört unsere Gesellschaft",
    counterArguments: [
      "Geschlechterforschung ist eine etablierte Wissenschaft, keine 'Ideologie'",
      "Gleichberechtigung und Vielfalt stärken die Gesellschaft",
      "Der Begriff 'Gender-Ideologie' ist ein rechter Kampfbegriff",
      "Trans- und nicht-binäre Menschen gab es schon immer in allen Kulturen"
    ],
    sources: [
      { title: "Deutsche Gesellschaft für Transidentität", url: "https://www.dgti.org" },
      { title: "Bundesstiftung Magnus Hirschfeld", url: "https://www.mh-stiftung.de" }
    ]
  },
  {
    keyword: "klimawandel",
    argument: "Klimawandel ist eine Lüge",
    counterArguments: [
      "97% der Klimawissenschaftler weltweit bestätigen den menschengemachten Klimawandel",
      "Die Folgen sind bereits messbar: Temperaturanstieg, Extremwetter, schmelzende Gletscher",
      "Klimaleugnung wird von fossilen Energiekonzernen finanziert",
      "Die AfD leugnet wissenschaftliche Fakten aus ideologischen Gründen"
    ],
    sources: [
      { title: "Potsdam-Institut für Klimafolgenforschung", url: "https://www.pik-potsdam.de" },
      { title: "Umweltbundesamt", url: "https://www.umweltbundesamt.de" }
    ]
  },
  {
    keyword: "eu",
    argument: "Die EU ist ein bürokratisches Monster",
    counterArguments: [
      "Die EU sichert Frieden, Freiheit und Wohlstand seit über 70 Jahren",
      "Freier Handel und offene Grenzen bringen wirtschaftliche Vorteile",
      "EU-Standards schützen Verbraucher, Arbeitnehmer und Umwelt",
      "Ein Austritt würde Deutschland wirtschaftlich und politisch isolieren"
    ],
    sources: [
      { title: "Europäische Kommission", url: "https://ec.europa.eu" },
      { title: "ifo Institut", url: "https://www.ifo.de" }
    ]
  },
  {
    keyword: "asyl",
    argument: "Asylrecht wird missbraucht",
    counterArguments: [
      "Das Asylrecht ist ein Menschenrecht und im Grundgesetz verankert",
      "Die meisten Asylsuchenden fliehen vor Krieg, Verfolgung und Gewalt",
      "Deutschland profitiert langfristig von Zuwanderung",
      "Die Prüfung von Asylanträgen ist bereits sehr streng"
    ],
    sources: [
      { title: "BAMF - Bundesamt für Migration", url: "https://www.bamf.de" },
      { title: "Pro Asyl", url: "https://www.proasyl.de" }
    ]
  },
  {
    keyword: "lügenpresse",
    argument: "Die Medien lügen und sind alle gleichgeschaltet",
    counterArguments: [
      "Deutschland hat eine der freiesten Presselandschaften weltweit",
      "Der Begriff 'Lügenpresse' stammt aus der NS-Zeit",
      "Medien arbeiten unabhängig und unterliegen strengen journalistischen Standards",
      "Verschwörungstheorien über 'gleichgeschaltete Medien' sind unbegründet"
    ],
    sources: [
      { title: "Reporter ohne Grenzen", url: "https://www.reporter-ohne-grenzen.de" },
      { title: "Deutscher Presserat", url: "https://www.presserat.de" }
    ]
  },
  {
    keyword: "bevölkerungsaustausch",
    argument: "Es gibt einen geplanten Bevölkerungsaustausch",
    counterArguments: [
      "Die 'Umvolkungs'-Theorie ist eine antisemitische Verschwörungstheorie",
      "Migration ist keine Verschwörung, sondern globale Realität",
      "Die Geburtenrate sinkt aus sozioökonomischen Gründen, nicht durch 'Pläne'",
      "Diese Theorie wurde von rechtsextremen Attentätern als Rechtfertigung benutzt"
    ],
    sources: [
      { title: "Amadeu Antonio Stiftung", url: "https://www.amadeu-antonio-stiftung.de" },
      { title: "Bundeszentrale für politische Bildung", url: "https://www.bpb.de" }
    ]
  },
  {
    keyword: "integration",
    argument: "Integration funktioniert nicht",
    counterArguments: [
      "Viele Studien zeigen erfolgreiche Integration in Deutschland",
      "Zweite und dritte Generation sind meist gut integriert",
      "Integrationsprobleme entstehen oft durch Diskriminierung und fehlende Chancen",
      "Deutschland hat erfolgreiche Integrationsprogramme"
    ],
    sources: [
      { title: "SVR - Sachverständigenrat für Integration", url: "https://www.svr-migration.de" },
      { title: "Bertelsmann Stiftung", url: "https://www.bertelsmann-stiftung.de" }
    ]
  },
  {
    keyword: "coronavirus",
    argument: "Corona ist eine Erfindung/Plandemic",
    counterArguments: [
      "COVID-19 ist eine wissenschaftlich bewiesene, weltweite Pandemie",
      "Millionen Menschen sind an Corona gestorben",
      "Impfstoffe haben nachweislich Leben gerettet",
      "Verschwörungstheorien gefährden die öffentliche Gesundheit"
    ],
    sources: [
      { title: "Robert Koch Institut", url: "https://www.rki.de" },
      { title: "WHO", url: "https://www.who.int" }
    ]
  },
  {
    keyword: "holocaust",
    argument: "Der Holocaust wird übertrieben dargestellt",
    counterArguments: [
      "Der Holocaust ist historisch eindeutig dokumentiert - 6 Millionen ermordete Juden",
      "Holocaust-Relativierung ist in Deutschland strafbar",
      "Zeitzeugen, Dokumente und Beweise sind überwältigend",
      "Diese Verharmlosung ist Teil rechtsextremer Ideologie"
    ],
    sources: [
      { title: "Gedenkstätte Yad Vashem", url: "https://www.yadvashem.org" },
      { title: "Bundeszentrale für politische Bildung", url: "https://www.bpb.de" }
    ]
  },
  {
    keyword: "demokratie",
    argument: "Die Demokratie ist gescheitert",
    counterArguments: [
      "Deutschland ist eine der stabilsten Demokratien weltweit",
      "Demokratie bedeutet nicht, dass alle einer Meinung sein müssen",
      "Rechtsextreme nutzen Demokratie, um sie zu zerstören",
      "Die AfD profitiert selbst von demokratischen Rechten"
    ],
    sources: [
      { title: "Democracy Index", url: "https://www.eiu.com" },
      { title: "Bundeszentrale für politische Bildung", url: "https://www.bpb.de" }
    ]
  },
  {
    keyword: "woke",
    argument: "Woke-Kultur zerstört unsere Werte",
    counterArguments: [
      "'Woke' ist ein diffamierender Kampfbegriff der Rechten",
      "Sensibilität für Diskriminierung ist ein Zeichen von Zivilisation",
      "Gesellschaftlicher Wandel ist normal und war schon immer Teil der Geschichte",
      "Gleichberechtigung und Respekt bedrohen niemanden"
    ],
    sources: [
      { title: "Deutsches Institut für Menschenrechte", url: "https://www.institut-fuer-menschenrechte.de" },
      { title: "Antidiskriminierungsstelle", url: "https://www.antidiskriminierungsstelle.de" }
    ]
  },
  {
    keyword: "tradition",
    argument: "Unsere Traditionen gehen verloren",
    counterArguments: [
      "Traditionen wandeln sich seit jeher - das ist normal",
      "Neue kulturelle Einflüsse bereichern lokale Traditionen",
      "Niemand verbietet deutsche Kultur oder Bräuche",
      "Die AfD instrumentalisiert 'Tradition' für ihre ausgrenzende Politik"
    ],
    sources: [
      { title: "Deutsche Gesellschaft für Volkskunde", url: "https://www.d-g-v.de" },
      { title: "Bundeszentrale für politische Bildung", url: "https://www.bpb.de" }
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {counterArguments.map((ca) => (
              <button
                key={ca.keyword}
                onClick={() => {
                  setSearchTerm(ca.keyword);
                  setSelectedArgument(ca);
                }}
                className="px-3 sm:px-4 py-2 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all text-xs sm:text-sm capitalize"
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
