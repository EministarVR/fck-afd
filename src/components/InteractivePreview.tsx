import { Link } from "react-router-dom";
import { Gamepad2, MessageSquare, Megaphone, BookOpen, Scale, AlertCircle, ArrowRight, Map, Clock } from "lucide-react";

const InteractivePreview = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Mythos oder Fakt?",
      description: "Teste dein Wissen in unserem interaktiven Quiz",
      link: "/quiz",
      color: "from-primary/10 to-secondary/10"
    },
    {
      icon: MessageSquare,
      title: "Argumentations-Hilfe",
      description: "Finde fundierte Gegenargumente zu rechten Narrativen",
      link: "/arguments",
      color: "from-secondary/10 to-accent/10"
    },
    {
      icon: Megaphone,
      title: "Aktions-Center",
      description: "Werde aktiv und setze ein Zeichen",
      link: "/actions",
      color: "from-accent/10 to-primary/10"
    },
    {
      icon: BookOpen,
      title: "Glossar",
      description: "Wichtige Begriffe verständlich erklärt",
      link: "/glossary",
      color: "from-primary/10 to-accent/10"
    },
    {
      icon: Scale,
      title: "Vergleich",
      description: "AfD vs. Demokratische Parteien im direkten Vergleich",
      link: "/comparison",
      color: "from-secondary/10 to-primary/10"
    },
    {
      icon: AlertCircle,
      title: "Mythen aufgeklärt",
      description: "Verbreitete Irrtümer über die AfD richtiggestellt",
      link: "/myths",
      color: "from-accent/10 to-secondary/10"
    },
    {
      icon: Map,
      title: "Vorfälle-Karte",
      description: "Interaktive Karte mit dokumentierten rechtsextremen Vorfällen",
      link: "/map",
      color: "from-primary/10 to-secondary/10"
    },
    {
      icon: Clock,
      title: "Chronologie",
      description: "Zeitstrahl der AfD-Radikalisierung von Gründung bis heute",
      link: "/timeline",
      color: "from-secondary/10 to-accent/10"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interaktiv <span className="text-accent">mitmachen</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Wissen ist wichtig, aber Handeln ist entscheidend. Nutze unsere interaktiven Tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.link}
                to={feature.link}
                className="group relative border border-border/50 hover:border-accent/50 p-6 md:p-8 transition-all duration-300 hover:scale-105 bg-card/40 backdrop-blur-sm hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative space-y-3 md:space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent/10 border border-accent/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-semibold pt-2 text-sm">
                    <span>Jetzt starten</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
