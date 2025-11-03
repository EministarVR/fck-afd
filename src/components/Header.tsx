import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
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
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="https://star-dev.xyz/fck.jpg"
            alt="FCK Logo"
            className="h-7 w-7 rounded-sm object-cover"
            loading="lazy"
          />
          <div className="text-sm font-bold tracking-tight">FUCK-AFD</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm transition-colors ${
              isActive("/") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/facts"
            className={`text-sm transition-colors ${
              isActive("/facts") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Fakten
          </Link>
          <Link
            to="/statistics"
            className={`text-sm transition-colors ${
              isActive("/statistics") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Statistiken
          </Link>
          <Link
            to="/sources"
            className={`text-sm transition-colors ${
              isActive("/sources") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Quellen
          </Link>
          <Link
            to="/about"
            className={`text-sm transition-colors ${
              isActive("/about") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Über
          </Link>
          <Link
            to="/quiz"
            className={`text-sm transition-colors ${
              isActive("/quiz") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Quiz
          </Link>
          <Link
            to="/arguments"
            className={`text-sm transition-colors ${
              isActive("/arguments") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Argumente
          </Link>
          <Link
            to="/actions"
            className={`text-sm transition-colors ${
              isActive("/actions") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Aktionen
          </Link>
          <Link
            to="/glossary"
            className={`text-sm transition-colors ${
              isActive("/glossary") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Glossar
          </Link>
          <Link
            to="/comparison"
            className={`text-sm transition-colors ${
              isActive("/comparison") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Vergleich
          </Link>
          <Link
            to="/myths"
            className={`text-sm transition-colors ${
              isActive("/myths") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mythen
          </Link>
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
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/facts"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/facts") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Fakten
            </Link>
            <Link
              to="/statistics"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/statistics") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Statistiken
            </Link>
            <Link
              to="/sources"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/sources") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Quellen
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/about") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Über
            </Link>
            <Link
              to="/quiz"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/quiz") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Quiz
            </Link>
            <Link
              to="/arguments"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/arguments") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Argumente
            </Link>
            <Link
              to="/actions"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/actions") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Aktionen
            </Link>
            <Link
              to="/glossary"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/glossary") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Glossar
            </Link>
            <Link
              to="/comparison"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/comparison") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Vergleich
            </Link>
            <Link
              to="/myths"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left text-sm transition-colors py-2 ${
                isActive("/myths") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mythen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
