import { useEffect, useState } from "react";
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
      </div>
    </section>
  );
};

export default SourcesSection;
