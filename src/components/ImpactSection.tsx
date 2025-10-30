import { Heart, Users, AlertCircle, TrendingUp } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Heart,
      number: "Tausende",
      label: "Betroffene Menschen",
      description: "Opfer rechter Gewalt und Hetze",
      color: "primary",
    },
    {
      icon: Users,
      number: "Millionen",
      label: "Gefährdete Demokraten",
      description: "Menschen in Sorge um unsere Demokratie",
      color: "secondary",
    },
    {
      icon: AlertCircle,
      number: "Täglich",
      label: "Neue Vorfälle",
      description: "Rechtsextreme Äußerungen und Taten",
      color: "accent",
    },
    {
      icon: TrendingUp,
      number: "Steigend",
      label: "Tendenz",
      description: "Die Gefahr wächst kontinuierlich",
      color: "primary",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Der reale <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hinter jeder Statistik stehen echte Menschen, echtes Leid und echte Gefahr für unsere Gesellschaft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const colorClass = impact.color === 'primary' ? 'text-primary' : 
                              impact.color === 'secondary' ? 'text-secondary' : 'text-accent';
            const bgClass = impact.color === 'primary' ? 'bg-primary/10' : 
                           impact.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10';
            const glowClass = impact.color === 'primary' ? 'hover:glow-red' : 
                             impact.color === 'secondary' ? 'hover:glow-blue' : 'hover:glow-amber';

            return (
              <div
                key={index}
                className={`group relative p-8 border border-border ${glowClass} transition-all duration-500 animate-fade-in-scale`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className={`w-14 h-14 ${bgClass} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className={`h-7 w-7 ${colorClass}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-3xl font-bold ${colorClass}`}>
                      {impact.number}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {impact.label}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
