import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/30 backdrop-blur-2xl border-border/60 shadow-lg"
          : "bg-background/10 backdrop-blur-md border-border/30"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img
            src="https://star-dev.xyz/fck.jpg"
            alt="FCK Logo"
            className="h-6 w-6 rounded-sm object-cover"
            loading="lazy"
          />
          <div className="text-sm font-bold tracking-tight">FUCK-AFD</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("arguments")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Fakten
          </button>
          <button
            onClick={() => scrollToSection("statistics")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Statistiken
          </button>
          <button
            onClick={() => scrollToSection("sources")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Quellen
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-6 py-4 space-y-1">
            <button
              onClick={() => scrollToSection("arguments")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Fakten
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Statistiken
            </button>
            <button
              onClick={() => scrollToSection("sources")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Quellen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
