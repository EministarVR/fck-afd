import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatBar from "@/components/StatBar";

interface Statistic {
  id: string;
  title: string;
  value: number;
  unit: string;
  description: string;
  source: string;
  category: string;
}

const Statistics = () => {
  const [stats, setStats] = useState<Statistic[]>([]);

  useEffect(() => {
    fetch('/data/stats.json')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Error loading stats:', err));
  }, []);

  const categories = Array.from(new Set(stats.map(s => s.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Page Header */}
          <div className="mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Statistiken & Daten
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Zahlen lügen nicht. Hier findest du dokumentierte Statistiken zu rechter Gewalt, 
              Hassverbrechen und den realen Auswirkungen rechtsextremer Politik in Deutschland.
            </p>
          </div>

          {/* Statistics by Category */}
          {categories.map((category, categoryIndex) => (
            <section 
              key={category} 
              className="mb-24 animate-fade-in-scale"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h2 className="text-3xl font-bold mb-12 tracking-tight border-b border-border pb-4">
                {category}
              </h2>
              <div className="space-y-8">
                {stats
                  .filter(stat => stat.category === category)
                  .map((stat, index) => (
                    <StatBar 
                      key={stat.id}
                      title={stat.title}
                      value={stat.value}
                      unit={stat.unit}
                      description={stat.description}
                      source={stat.source}
                      sourceUrl={stat.source}
                      index={index}
                    />
                  ))}
              </div>
            </section>
          ))}

          {/* Methodology */}
          <div className="mt-24 border border-border p-12">
            <h2 className="text-2xl font-bold mb-6">Über diese Statistiken</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Alle hier präsentierten Statistiken stammen aus offiziellen Quellen wie dem 
                Bundesamt für Verfassungsschutz, der Polizeilichen Kriminalstatistik, 
                wissenschaftlichen Studien und Berichten zivilgesellschaftlicher Organisationen.
              </p>
              <p>
                Jede Statistik ist mit ihrer Originalquelle verlinkt. Wir ermutigen dich, 
                die Quellen selbst zu prüfen und dir ein eigenes Bild zu machen.
              </p>
              <p className="text-sm pt-4 border-t border-border">
                <strong>Hinweis:</strong> Diese Seite wird regelmäßig aktualisiert, sobald 
                neue offizielle Daten verfügbar sind.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Statistics;
