import { useEffect, useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface StatBarProps {
  title: string;
  value: number;
  unit: string;
  description: string;
  source: string;
  sourceUrl: string;
  maxValue?: number;
  index: number;
}

const StatBar = ({
  title,
  value,
  unit,
  description,
  source,
  sourceUrl,
  maxValue = 3000,
  index,
}: StatBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const percentage = Math.min((value / maxValue) * 100, 100);

  const getGlowColor = () => {
    const colors = ['primary', 'secondary', 'accent'];
    return colors[index % 3];
  };

  const getGlowClass = () => {
    if (!isHovered) return '';
    const color = getGlowColor();
    return color === 'primary' ? 'glow-red' : color === 'secondary' ? 'glow-blue' : 'glow-amber';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const borderColor = getGlowColor() === 'primary' ? 'border-primary/50' : 
                     getGlowColor() === 'secondary' ? 'border-secondary/50' : 'border-accent/50';
  const barColor = getGlowColor() === 'primary' ? 'bg-primary' : 
                   getGlowColor() === 'secondary' ? 'bg-secondary' : 'bg-accent';

  return (
    <div 
      ref={elementRef} 
      className={`border border-border p-8 md:p-10 hover:${borderColor} transition-all duration-500 ${getGlowClass()} animate-fade-in-scale`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-base md:text-lg font-semibold text-foreground">{title}</h3>
          
          <div className="flex items-baseline space-x-3">
            <span className="text-6xl md:text-7xl font-bold tracking-tighter gradient-text">
              {currentValue.toLocaleString("de-DE")}
            </span>
            {unit && <span className="text-2xl text-muted-foreground font-medium">{unit}</span>}
          </div>

          <div className="relative h-1 bg-border/50 overflow-hidden rounded-full">
            <div
              className={`absolute inset-y-0 left-0 ${barColor} transition-all duration-1500 ease-out rounded-full ${
                isHovered ? 'shadow-[0_0_20px_currentColor]' : ''
              }`}
              style={{ width: isVisible ? `${percentage}%` : "0%" }}
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center space-x-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span>Quelle anzeigen</span>
          {isExpanded ? (
            <ChevronUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="h-3 w-3 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>

        {isExpanded && (
          <div className="pt-6 border-t border-border space-y-3 animate-fade-in-up">
            <p className="text-sm text-foreground/80">{source}</p>
            {sourceUrl !== "#" && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-primary hover:underline group"
              >
                <span>Zur Quelle</span>
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatBar;
