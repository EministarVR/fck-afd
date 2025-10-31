import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import StatBar from "./StatBar";

interface Stat {
  id: string;
  title: string;
  value: number;
  unit: string;
  description: string;
  source: string;
  sourceUrl: string;
}

const StatisticsSection = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch("/data/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error loading stats:", err));
  }, []);

  return (
    <section id="statistics" className="relative py-32 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text-blue">
            Die Zahlen sprechen für sich
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Dokumentierte Vorfälle, Verstöße und Gewalttaten — basierend auf offiziellen Quellen 
            und unabhängigen Recherchen. Jede Zahl steht für reales Leid.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border">
          {stats.map((stat, index) => (
            <StatBar
              key={stat.id}
              title={stat.title}
              value={stat.value}
              unit={stat.unit}
              description={stat.description}
              source={stat.source}
              sourceUrl={stat.sourceUrl}
              index={index}
            />
          ))}
        </div>

        {/* CTA to Statistics page */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            to="/statistics"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:scale-105 group"
          >
            <BarChart3 className="h-5 w-5" />
            <span>Vollständige Statistiken ansehen</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
