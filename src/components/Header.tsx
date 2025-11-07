import { useEffect, useState } from "react";
import { Menu, Home, FileText, BarChart3, BookOpen, Info, Brain, MessageSquare, Zap, BookMarked, GitCompare, Shield, Map, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/facts", label: "Fakten", icon: FileText },
  { path: "/statistics", label: "Statistiken", icon: BarChart3 },
  { path: "/sources", label: "Quellen", icon: BookOpen },
  { path: "/about", label: "Über", icon: Info },
  { path: "/quiz", label: "Quiz", icon: Brain },
  { path: "/arguments", label: "Argumente", icon: MessageSquare },
  { path: "/actions", label: "Aktionen", icon: Zap },
  { path: "/glossary", label: "Glossar", icon: BookMarked },
  { path: "/comparison", label: "Vergleich", icon: GitCompare },
  { path: "/myths", label: "Mythen", icon: Shield },
  { path: "/map", label: "Karte", icon: Map },
  { path: "/timeline", label: "Chronologie", icon: Clock },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-all duration-200 ${
                isActive(item.path)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50 p-0 flex flex-col"
          >
            <SheetHeader className="border-b border-border/50 pb-4 pt-6 px-6">
              <SheetTitle className="flex items-center gap-3">
                <img
                  src="https://star-dev.xyz/fck.jpg"
                  alt="FCK Logo"
                  className="h-8 w-8 rounded-sm object-cover"
                />
                <span className="text-lg font-bold">FUCK-AFD</span>
              </SheetTitle>
            </SheetHeader>
            
            <ScrollArea className="flex-1 px-6">
              <nav className="flex flex-col gap-1 py-6">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-base">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;