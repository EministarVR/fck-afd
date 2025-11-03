import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, X, Scale } from "lucide-react";

interface ComparisonItem {
  category: string;
  afd: { text: string; negative: boolean };
  democrats: { text: string; positive: boolean };
}

const comparisonData: ComparisonItem[] = [
  {
    category: "Verfassungstreue",
    afd: { text: "Vom Verfassungsschutz als rechtsextrem eingestuft", negative: true },
    democrats: { text: "Bekenntnis zu Grundgesetz und Demokratie", positive: true }
  },
  {
    category: "Menschenrechte",
    afd: { text: "Infragestellen der Menschenwürde bestimmter Gruppen", negative: true },
    democrats: { text: "Alle Menschen sind gleich wertvoll (Art. 1 GG)", positive: true }
  },
  {
    category: "Minderheitenschutz",
    afd: { text: "Hetze gegen Minderheiten und Marginalisierte", negative: true },
    democrats: { text: "Schutz und Förderung von Minderheiten", positive: true }
  },
  {
    category: "Rechtsstaatlichkeit",
    afd: { text: "Angriffe auf Justiz und unabhängige Medien", negative: true },
    democrats: { text: "Respekt vor Gewaltenteilung", positive: true }
  },
  {
    category: "Europapolitik",
    afd: { text: "Zerstörung der EU, Isolation Deutschlands", negative: true },
    democrats: { text: "Europäische Integration und Zusammenarbeit", positive: true }
  },
  {
    category: "Klimapolitik",
    afd: { text: "Leugnung des menschengemachten Klimawandels", negative: true },
    democrats: { text: "Wissenschaftsbasierter Klimaschutz", positive: true }
  },
  {
    category: "Sozialpolitik",
    afd: { text: "Sozialkürzungen für Schwächste, Steuersenkungen für Reiche", negative: true },
    democrats: { text: "Sozialer Ausgleich und Zusammenhalt", positive: true }
  },
  {
    category: "Bildungspolitik",
    afd: { text: "Geschichtsrevisionismus, Ablehnung von Vielfalt", negative: true },
    democrats: { text: "Aufklärung über Geschichte, Förderung von Bildung", positive: true }
  },
  {
    category: "Medienkompetenz",
    afd: { text: "Verbreitung von Fake News und Verschwörungstheorien", negative: true },
    democrats: { text: "Faktenbasierte Politik und Transparenz", positive: true }
  },
  {
    category: "Gleichberechtigung",
    afd: { text: "Rückwärtsgewandte Geschlechterbilder", negative: true },
    democrats: { text: "Gleichstellung aller Geschlechter", positive: true }
  }
];

const Comparison = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 border border-accent/30 mb-4">
              <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              AfD vs. <span className="text-accent">Demokratische Parteien</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Ein direkter Vergleich zeigt die fundamentalen Unterschiede
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-accent/5 border border-accent/30 font-semibold">
              <div className="text-sm sm:text-base">Thema</div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span>AfD Position</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>Demokratische Parteien</span>
              </div>
            </div>

            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 border border-border hover:border-accent/50 transition-all"
              >
                <div className="font-semibold text-accent text-sm sm:text-base">
                  {item.category}
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item.afd.text}</span>
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item.democrats.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-accent/10 border-2 border-accent">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Fazit</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Die AfD unterscheidet sich fundamental von demokratischen Parteien. Während demokratische 
              Parteien auf dem Boden des Grundgesetzes stehen und die Würde aller Menschen achten, 
              verfolgt die AfD eine Agenda der Ausgrenzung, Hetze und Demokratiefeindlichkeit. 
              Der Verfassungsschutz stuft sie als rechtsextremistischen Verdachtsfall ein - ein 
              deutliches Warnsignal für alle Demokrat*innen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comparison;