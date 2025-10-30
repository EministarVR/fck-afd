import { Share2, Link as LinkIcon, Download } from "lucide-react";
import { toast } from "sonner";

const CTASection = () => {
  const shareOnTwitter = () => {
    const text = "FUCK-AFD: Für ein Verbot — weil rechte Politik Menschen schadet. Die Fakten sind eindeutig.";
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link kopiert!", {
      description: "Teile diese Seite und mach die Fakten sichtbar."
    });
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="border border-primary/30 p-12 md:p-16 lg:p-20 space-y-12 glow-subtle-red animate-fade-in-scale">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight gradient-text">
              Gemeinsam handeln
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Teile diese Fakten. Mach die Wahrheit sichtbar. Steh auf gegen rechte Hetze und für unsere Demokratie.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={shareOnTwitter}
              className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:glow-red"
            >
              <Share2 className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>Auf X / Twitter teilen</span>
            </button>
            
            <button
              onClick={copyLink}
              className="group inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-all hover:scale-105"
            >
              <LinkIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>Link kopieren</span>
            </button>
          </div>

          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Jeder Share zählt. Jede Stimme macht einen Unterschied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
