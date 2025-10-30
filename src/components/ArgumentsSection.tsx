import { Shield, AlertTriangle, Scale, Users, TrendingDown, Flame } from "lucide-react";
import ArgumentCard from "./ArgumentCard";

const ArgumentsSection = () => {
  const argumentCards = [
    {
      icon: Shield,
      title: "Verfassungsschutz: Gesichert rechtsextrem",
      description: "Mehrere AfD-Landesverbände wurden vom Verfassungsschutz als gesichert rechtsextrem eingestuft. Die Partei arbeitet aktiv gegen unsere demokratische Grundordnung.",
      color: 'red' as const,
    },
    {
      icon: Flame,
      title: "Hetze führt zu realer Gewalt",
      description: "Die Rhetorik der AfD hat nachweislich zu einem Anstieg rechtsextremer Gewalttaten geführt. Menschen werden bedroht, angegriffen und getötet.",
      color: 'red' as const,
    },
    {
      icon: AlertTriangle,
      title: "Systematische Desinformation",
      description: "Tausende nachweislich falsche Aussagen wurden von AfD-Funktionären verbreitet. Diese Desinformation untergräbt das Vertrauen in Demokratie und Medien.",
      color: 'amber' as const,
    },
    {
      icon: Scale,
      title: "Parlamentarische Verstöße",
      description: "Wiederholte Verstöße gegen die parlamentarische Ordnung zeigen: Die AfD missbraucht demokratische Institutionen für ihre antidemokratische Agenda.",
      color: 'blue' as const,
    },
    {
      icon: Users,
      title: "Soziale Spaltung",
      description: "Die AfD befeuert gezielt gesellschaftliche Konflikte und spaltet unsere Gesellschaft. Integration wird sabotiert, Minderheiten werden stigmatisiert.",
      color: 'amber' as const,
    },
    {
      icon: TrendingDown,
      title: "Demokratie in Gefahr",
      description: "Die AfD untergräbt systematisch demokratische Prozesse, Institutionen und Werte. Ein Verbot ist notwendig zum Schutz unserer freiheitlichen Grundordnung.",
      color: 'blue' as const,
    },
  ];

  return (
    <section id="arguments" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
            Warum ein Verbot?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Die AfD ist eine konkrete Gefahr für unsere Demokratie. Die Beweise sind erdrückend. 
            Hier sind die dokumentierten Fakten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {argumentCards.map((arg, index) => (
            <ArgumentCard
              key={index}
              icon={arg.icon}
              title={arg.title}
              description={arg.description}
              color={arg.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArgumentsSection;
