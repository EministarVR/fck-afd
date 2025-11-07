import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impact: 'critical' | 'high' | 'medium';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2013",
    title: "Gründung der AfD",
    description: "Die AfD wird als EU-kritische Partei gegründet. Anfangs noch als 'Professorenpartei' wahrgenommen.",
    impact: "medium"
  },
  {
    year: "2014",
    title: "Erste rechtsextreme Tendenzen",
    description: "Lucke verliert an Einfluss, Petry übernimmt. Die Partei driftet nach rechts.",
    impact: "high"
  },
  {
    year: "2015",
    title: "Flüchtlingskrise als Katalysator",
    description: "Die AfD nutzt die Flüchtlingskrise für massive Hetze und Angstmacherei. Mitgliederzahlen steigen rasant.",
    impact: "critical"
  },
  {
    year: "2016",
    title: "Einzug in Landesparlamente",
    description: "AfD zieht in mehrere Landtage ein. Radikalisierung wird deutlicher sichtbar.",
    impact: "high"
  },
  {
    year: "2017",
    title: "Einzug in den Bundestag",
    description: "Mit 12,6% zieht die AfD erstmals in den Bundestag ein. Parlamentarische Arbeit geprägt von Provokationen.",
    impact: "critical"
  },
  {
    year: "2018",
    title: "Chemnitz-Ausschreitungen",
    description: "Nach einem Tötungsdelikt mobilisiert die AfD zu Demonstrationen, bei denen es zu rechtsextremen Ausschreitungen kommt.",
    impact: "critical"
  },
  {
    year: "2019",
    title: "Mord an Walter Lübcke",
    description: "Ein Rechtsextremist ermordet den CDU-Politiker. Der Täter war durch AfD-Hetze radikalisiert.",
    impact: "critical"
  },
  {
    year: "2020",
    title: "Hanau-Attentat",
    description: "Ein Rechtsterrorist tötet 9 Menschen. Auch hier zeigen sich Verbindungen zur AfD-Ideologie.",
    impact: "critical"
  },
  {
    year: "2021",
    title: "Verfassungsschutz: Verdachtsfall",
    description: "Das Bundesamt für Verfassungsschutz stuft die AfD als Verdachtsfall ein. Der 'Flügel' wird als gesichert rechtsextrem eingestuft.",
    impact: "critical"
  },
  {
    year: "2022",
    title: "Thüringer AfD gesichert rechtsextrem",
    description: "Der Verfassungsschutz stuft den Thüringer Landesverband als gesichert rechtsextremistisch ein.",
    impact: "critical"
  },
  {
    year: "2023",
    title: "Correctiv-Enthüllungen",
    description: "Investigative Journalisten enthüllen ein Geheimtreffen von AfD-Politikern mit Identitären, bei dem 'Remigration' geplant wurde.",
    impact: "critical"
  },
  {
    year: "2024",
    title: "Massenproteste gegen rechts",
    description: "Millionen Menschen gehen gegen die AfD und Rechtsextremismus auf die Straße. Verbotsverfahren wird diskutiert.",
    impact: "critical"
  }
];

const Timeline = () => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical':
        return 'border-primary bg-primary/10';
      case 'high':
        return 'border-accent bg-accent/10';
      case 'medium':
        return 'border-secondary bg-secondary/10';
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
            Chronologie der Radikalisierung
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
            Von der Gründung bis heute: Wie die AfD sich von einer EU-kritischen Partei 
            zu einer rechtsextremen Bedrohung entwickelt hat.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 ${
                  event.impact === 'critical' ? 'bg-primary border-primary' :
                  event.impact === 'high' ? 'bg-accent border-accent' :
                  'bg-secondary border-secondary'
                } transform -translate-x-1/2`} />

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div 
                    className={`p-6 border-2 ${getImpactColor(event.impact)} transition-all hover:shadow-xl duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">{event.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Fazit</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Die Chronologie zeigt eine klare Entwicklung: Von einer ursprünglich EU-kritischen Partei 
            hat sich die AfD zu einer rechtsextremen Organisation entwickelt, die aktiv gegen unsere 
            demokratische Grundordnung arbeitet.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Die Radikalisierung ist kein Zufall, sondern Teil einer strategischen Entwicklung. 
            Heute ist die AfD die größte Bedrohung für unsere Demokratie seit der Gründung der Bundesrepublik.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
