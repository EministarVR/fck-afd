import { ArrowUp, Github, Twitter, Globe } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative mt-24 border-t border-border/30 bg-background/10 backdrop-blur-md"
      aria-labelledby="site-footer-title"
    >
      {/* Accent line */}
      <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 py-16">
        {/* Top area */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://star-dev.xyz/fck.jpg"
                alt="FCK Logo"
                className="h-6 w-6 rounded-sm object-cover"
                loading="lazy"
              />
              <h3 id="site-footer-title" className="text-sm font-bold tracking-tight">
                FUCK-AFD
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Eine Initiative für Aufklärung und gegen rechte Hetze. Alle Inhalte
              basieren auf öffentlich zugänglichen Quellen.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("arguments")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                >
                  Fakten
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("statistics")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                >
                  Statistiken
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sources")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                >
                  Quellen
                </button>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Links</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://star-dev.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </a>
              <a
                href="https://twitter.com/search?q=AfD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/EministarVR/fck-afd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Rechtliches</h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Diese Seite dient der politischen Meinungsäußerung und basiert auf
              öffentlich zugänglichen Informationen. Für rechtliche Fragen bitte
              den Betreiber kontaktieren.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/30 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Für Demokratie und Menschenrechte</p>

          <div className="flex items-center gap-4">
            <button
              onClick={backToTop}
              className="inline-flex items-center gap-2 rounded border border-border/40 bg-background/20 px-3 py-1.5 text-foreground/80 shadow-sm transition-all hover:bg-background/30 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 backdrop-blur-sm"
              aria-label="Zurück nach oben"
            >
              <ArrowUp className="h-4 w-4" />
              Nach oben
            </button>

            <a
              href="https://star-dev.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              by ⭐
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
