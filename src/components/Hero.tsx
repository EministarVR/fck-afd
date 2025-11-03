import { ArrowDown, BookOpen, BarChart3, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToStats = () => {
    const element = document.getElementById("statistics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float"
          style={{
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '4s'
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-16 text-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-none gradient-text px-4">
              FUCK-AFD
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium px-4">
              Für ein Verbot — weil rechte Politik Menschen schadet
            </p>
          </div>
          
          <div className="pt-12 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="glass p-8 glow-subtle-red">
                <p className="text-base text-foreground/90 leading-relaxed">
                  Die AfD ist vom Verfassungsschutz als gesichert rechtsextrem eingestuft. 
                  <span className="text-primary font-semibold"> Ihre Hetze hat realen Schaden verursacht.</span>
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span>Dokumentiert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
                  <span>Belegt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: '2s' }} />
                  <span>Unbestreitbar</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
              <button
                onClick={scrollToStats}
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
                <span>Mehr erfahren</span>
              </button>

              <Link
                to="/facts"
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground hover:bg-foreground/5 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Alle Fakten</span>
              </Link>

              <Link
                to="/statistics"
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground hover:bg-foreground/5 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Statistiken</span>
              </Link>
            </div>

            <div className="pt-6">
              <Link
                to="/sources"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <FileText className="h-4 w-4" />
                <span>Alle Quellen ansehen</span>
                <ArrowDown className="h-3 w-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
