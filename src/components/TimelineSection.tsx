import { Calendar, AlertTriangle, Scale, Users } from "lucide-react";
import { useState } from "react";

const TimelineSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const events = [
    {
      year: "2013",
      icon: Users,
      title: "Gründung der AfD",
      description: "Als Anti-Euro-Partei gegründet, radikalisiert sich die Partei zunehmend.",
      color: "accent"
    },
    {
      year: "2015-2016",
      icon: AlertTriangle,
      title: "Flüchtlingsdebatte",
      description: "Massive Hetze gegen Geflüchtete. Rassistische Rhetorik wird zum Markenkern.",
      color: "primary"
    },
    {
      year: "2017",
      icon: Scale,
      title: "Einzug in den Bundestag",
      description: "12,6% bei der Bundestagswahl. Erste parlamentarische Plattform für Extremismus.",
      color: "secondary"
    },
    {
      year: "2019",
      icon: AlertTriangle,
      title: "Halle-Attentat",
      description: "Rechtsterroristischer Anschlag mit zwei Toten. Täter von rechter Hetze beeinflusst.",
      color: "primary"
    },
    {
      year: "2020",
      icon: AlertTriangle,
      title: "Hanau-Attentat",
      description: "9 Menschen werden von einem Rechtsterroristen ermordet. Klare Verbindung zu rechter Ideologie.",
      color: "primary"
    },
    {
      year: "2021",
      icon: Scale,
      title: "Verfassungsschutz",
      description: "Teile der AfD werden als gesichert rechtsextrem eingestuft.",
      color: "secondary"
    },
    {
      year: "2023-2024",
      icon: AlertTriangle,
      title: "Deportationspläne",
      description: "Geheimtreffen mit Identitären. Pläne zur Massendeportation von Millionen Menschen.",
      color: "primary"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Timeline</span> der Radikalisierung
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der Euro-Kritik zur rechtsextremen Gefahr — die Entwicklung der AfD
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              const colorClass = event.color === 'primary' ? 'text-primary' : 
                                event.color === 'secondary' ? 'text-secondary' : 'text-accent';
              const borderColor = event.color === 'primary' ? 'border-primary/30' : 
                                 event.color === 'secondary' ? 'border-secondary/30' : 'border-accent/30';
              const bgColor = event.color === 'primary' ? 'bg-primary/10' : 
                             event.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10';

              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                    {/* Content card */}
                    <div className="flex-1">
                      <div className={`p-8 border ${borderColor} transition-all duration-500 ${
                        hoveredIndex === index ? 'scale-105 border-foreground/50' : ''
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${bgColor} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-6 h-6 ${colorClass}`} />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-bold text-muted-foreground">{event.year}</span>
                            </div>
                            <h3 className={`text-xl font-bold ${colorClass}`}>
                              {event.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className={`relative w-6 h-6 ${bgColor} border-4 border-background rounded-full z-10 shrink-0 transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-150' : ''
                    }`}>
                      <div className={`absolute inset-0 ${bgColor} rounded-full animate-ping`} />
                    </div>

                    {/* Spacer for other side */}
                    <div className="flex-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
