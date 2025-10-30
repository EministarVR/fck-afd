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
      className={`group relative p-8 md:p-10 border border-border transition-all duration-500 ${getColorClasses()} animate-fade-in-scale`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-6">
        <div className={`transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <Icon className={`h-8 w-8 ${getIconColor()} transition-colors`} />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div 
        className={`absolute inset-0 border-2 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } ${color === 'red' ? 'border-primary/30' : color === 'blue' ? 'border-secondary/30' : 'border-accent/30'}`}
      />
    </div>
  );
};

export default ArgumentCard;
