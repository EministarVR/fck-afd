import { Link } from "react-router-dom";
import { Gamepad2, MessageSquare, Megaphone, ArrowRight } from "lucide-react";

const InteractivePreview = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Mythos oder Fakt?",
      description: "Teste dein Wissen in unserem interaktiven Quiz",
      link: "/quiz",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: MessageSquare,
      title: "Argumentations-Hilfe",
      description: "Finde fundierte Gegenargumente zu rechten Narrativen",
      link: "/arguments",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Megaphone,
      title: "Aktions-Center",
      description: "Werde aktiv und setze ein Zeichen",
      link: "/actions",
      color: "from-red-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Interaktiv <span className="text-accent">mitmachen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wissen ist wichtig, aber Handeln ist entscheidend. Nutze unsere interaktiven Tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.link}
                to={feature.link}
                className="group relative border border-border hover:border-accent/50 p-8 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 border border-accent/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-semibold pt-2">
                    <span>Jetzt starten</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
