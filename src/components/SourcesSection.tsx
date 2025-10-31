import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import SourceCard from "./SourceCard";

interface Source {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
  type: string;
  reliability: string;
}

const SourcesSection = () => {
  const [sources, setSources] = useState<Source[]>([]);

  useEffect(() => {
    fetch("/data/sources.json")
      .then((res) => res.json())
      .then((data) => setSources(data))
      .catch((err) => console.error("Error loading sources:", err));
  }, []);

  return (
    <section id="sources" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Quellen
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Alle Daten basieren auf offiziellen Berichten, Studien und journalistischer Recherche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {sources.map((source) => (
            <SourceCard
              key={source.id}
              title={source.title}
              date={source.date}
              summary={source.summary}
              url={source.url}
              type={source.type}
            />
          ))}
        </div>

        {/* CTA to Sources page */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            to="/sources"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground/30 text-foreground font-semibold hover:border-foreground hover:bg-foreground/5 transition-all hover:scale-105 group"
          >
            <FileText className="h-5 w-5" />
            <span>Alle Quellen durchsuchen</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SourcesSection;
