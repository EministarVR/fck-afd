import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const QuotesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    {
      text: "Die AfD ist eine Gefahr für unsere Demokratie und den gesellschaftlichen Zusammenhalt.",
      author: "Verfassungsschutz",
      role: "Offizielle Einschätzung",
      color: "primary"
    },
    {
      text: "Teile der AfD sind gesichert rechtsextremistisch. Das ist keine Meinung, sondern Fakt.",
      author: "Bundesamt für Verfassungsschutz",
      role: "Behördliche Feststellung 2021",
      color: "secondary"
    },
    {
      text: "Die Rhetorik der AfD normalisiert menschenverachtende Positionen in unserer Gesellschaft.",
      author: "Wissenschaftlicher Konsens",
      role: "Politikwissenschaft",
      color: "accent"
    },
    {
      text: "Rechte Hetze führt zu realer Gewalt. Das zeigen die Attentate von Halle, Hanau und die NSU-Morde.",
      author: "Kriminalstatistik",
      role: "Polizeiliche Analyse",
      color: "primary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Was <span className="gradient-text">Experten</span> sagen
          </h2>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {quotes.map((quote, index) => {
            const isActive = index === activeIndex;
            const colorClass = quote.color === 'primary' ? 'text-primary' : 
                              quote.color === 'secondary' ? 'text-secondary' : 'text-accent';

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="border border-border p-12 md:p-16 lg:p-20 space-y-8 h-full flex flex-col justify-center">
                  <Quote className={`w-16 h-16 ${colorClass} mx-auto`} />
                  
                  <blockquote className="text-2xl md:text-3xl font-medium text-center leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="text-center space-y-2">
                    <div className={`text-lg font-bold ${colorClass}`}>
                      {quote.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {quote.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary w-12' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
