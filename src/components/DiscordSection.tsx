import { MessageCircle, Users, Shield, Zap } from "lucide-react";

const DiscordSection = () => {
  const features = [
    {
      icon: Users,
      text: "Community von Aktivist:innen"
    },
    {
      icon: Shield,
      text: "Safe Space für Demokrat:innen"
    },
    {
      icon: Zap,
      text: "Schnelle Updates & Aktionen"
    }
  ];

  const joinDiscord = () => {
    // Platzhalter - hier sollte ein echter Discord-Link hin
    window.open("https://discord.gg/your-discord-invite", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="border border-border p-12 md:p-16 space-y-12 transition-all duration-300 hover:border-foreground/30 animate-fade-in-scale">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 border border-secondary/30 mb-4">
              <MessageCircle className="w-8 h-8 text-secondary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Join the <span className="text-secondary">Community</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Werde Teil unserer Discord-Community. Vernetze dich mit Menschen, die für Demokratie 
              und gegen Rechtsextremismus einstehen. Gemeinsam sind wir stärker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-6 border border-border transition-all duration-300 hover:border-secondary/30"
                >
                  <div className="w-12 h-12 bg-muted flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.text}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={joinDiscord}
              className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105"
            >
              <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>Discord beitreten</span>
            </button>
          </div>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Respektvoller Umgang ist Pflicht. Wir dulden keine Hetze, Beleidigungen oder 
              diskriminierende Äußerungen. Gemeinsam für Demokratie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
