import { Shield, AlertTriangle, Scale, Users, TrendingDown, Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section id="arguments" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Warum ein Verbot?
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Die AfD ist eine konkrete Gefahr für unsere Demokratie. Die Beweise sind erdrückend. 
            Hier sind die dokumentierten Fakten.
          </p>
        </div>

        {/* Improved grid with better spacing and borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

        {/* Enhanced CTA */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Link
            to="/facts"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 group shadow-lg hover:shadow-xl"
          >
            <span className="text-sm md:text-base">Alle Fakten im Detail</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArgumentsSection;
