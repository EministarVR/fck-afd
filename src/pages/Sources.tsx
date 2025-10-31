import { useEffect, useState } from "react";
import { ExternalLink, FileText, Building2, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Source {
  title: string;
  organization: string;
  date: string;
  url: string;
  type: string;
  summary: string;
  reliability: string;
}

const Sources = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetch('/data/sources.json')
      .then(res => res.json())
      .then(data => setSources(data))
      .catch(err => console.error('Error loading sources:', err));
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "report":
        return FileText;
      case "study":
        return BookOpen;
      case "news":
        return Building2;
      default:
        return FileText;
    }
  };

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case "high":
        return "text-primary";
      case "medium":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  const filteredSources = filter === "all" 
    ? sources 
    : sources.filter(s => s.type === filter);

  const types = ["all", ...Array.from(new Set(sources.map(s => s.type)))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Page Header */}
          <div className="mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Quellen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Transparenz ist uns wichtig. Hier findest du alle Quellen, auf denen diese Seite basiert. 
              Offizielle Berichte, wissenschaftliche Studien und seriöse Medienberichte.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-scale">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 border transition-all duration-300 ${
                  filter === type
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/30"
                }`}
              >
                {type === "all" ? "Alle" : type === "report" ? "Berichte" : type === "study" ? "Studien" : "News"}
              </button>
            ))}
          </div>

          {/* Sources Grid */}
          <div className="grid grid-cols-1 gap-6">
            {filteredSources.map((source, index) => {
              const Icon = getTypeIcon(source.type);
              return (
                <div
                  key={index}
                  className="border border-border p-8 transition-all duration-300 hover:border-foreground/30 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold leading-tight">
                          {source.title}
                        </h3>
                        <span className={`text-xs font-mono ${getReliabilityColor(source.reliability)} flex-shrink-0`}>
                          {source.reliability === "high" ? "HIGH" : "MEDIUM"}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="font-medium">{source.organization}</span>
                        <span>•</span>
                        <span>{source.date}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {source.summary}
                      </p>

                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors group"
                      >
                        <span>Quelle öffnen</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submission Notice */}
          <div className="mt-24 border border-border p-12">
            <h2 className="text-2xl font-bold mb-4">Weitere Quellen einreichen</h2>
            <p className="text-muted-foreground mb-6">
              Kennst du weitere seriöse Quellen, die hier fehlen? Wir prüfen Einreichungen 
              und nehmen qualitativ hochwertige Quellen in unsere Sammlung auf.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontakt: Über das Impressum oder per Pull Request auf GitHub (falls verfügbar)
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sources;
