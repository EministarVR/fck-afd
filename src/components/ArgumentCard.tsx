import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ArgumentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  color: 'red' | 'blue' | 'amber';
}

const ArgumentCard = ({ icon: Icon, title, description, delay = 0, color }: ArgumentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClasses = () => {
    switch (color) {
      case 'red':
        return 'hover:border-primary hover:glow-red';
      case 'blue':
        return 'hover:border-secondary hover:glow-blue';
      case 'amber':
        return 'hover:border-accent hover:glow-amber';
    }
  };

  const getIconColor = () => {
    switch (color) {
      case 'red':
        return 'text-primary';
      case 'blue':
        return 'text-secondary';
      case 'amber':
        return 'text-accent';
    }
  };

  return (
    <div
      className={`group relative p-6 md:p-8 lg:p-10 bg-card/40 backdrop-blur-sm border border-border/50 transition-all duration-500 ${getColorClasses()} animate-fade-in-scale hover:bg-card/60 hover:shadow-xl`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4 md:space-y-6">
        <div className={`transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}`}>
          <div className={`inline-flex p-3 rounded-lg ${color === 'red' ? 'bg-primary/10' : color === 'blue' ? 'bg-secondary/10' : 'bg-accent/10'}`}>
            <Icon className={`h-6 w-6 md:h-8 md:w-8 ${getIconColor()} transition-colors`} />
          </div>
        </div>
        
        <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">
          {title}
        </h3>
        
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div 
        className={`absolute inset-0 border-2 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } ${color === 'red' ? 'border-primary/30' : color === 'blue' ? 'border-secondary/30' : 'border-accent/30'}`}
      />
      
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        color === 'red' ? 'from-primary/5 to-transparent' : 
        color === 'blue' ? 'from-secondary/5 to-transparent' : 
        'from-accent/5 to-transparent'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

export default ArgumentCard;
